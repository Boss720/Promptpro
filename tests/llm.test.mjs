import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PRESETS, streamComplete, testConnection, LlmError } from '../src/lib/llm.ts';

const google = { ...PRESETS.find((p) => p.id === 'google'), apiKey: 'test-key' };
function streamResponse(events) {
  const text = events.map((event) => `data: ${JSON.stringify(event)}\n\n`).join('') + 'data: [DONE]\n\n';
  const bytes = new TextEncoder().encode(text);
  return new Response(new ReadableStream({ start(controller) {
    controller.enqueue(bytes.slice(0, 23));
    controller.enqueue(bytes.slice(23));
    controller.close();
  } }));
}

test('Google uses the compatibility endpoint, bearer key, editable model and streaming text', async (t) => {
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    assert.equal(url, 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions');
    assert.equal(options.headers.authorization, 'Bearer test-key');
    const body = JSON.parse(options.body);
    assert.equal(body.model, 'custom-gemini-model');
    assert.equal(body.stream, true);
    assert.deepEqual(body.messages, [{ role: 'system', content: 'system' }, { role: 'user', content: 'user' }]);
    return streamResponse([{ choices: [{ delta: { content: 'Hello ' } }] }, { choices: [{ delta: { content: 'world' } }] }]);
  });
  const chunks = [];
  assert.equal(await streamComplete({ system: 'system', user: 'user', config: { ...google, model: 'custom-gemini-model', baseUrl: google.baseUrl + '/' }, onToken: (chunk) => chunks.push(chunk) }), 'Hello world');
  assert.deepEqual(chunks, ['Hello ', 'world']);
});

test('Google connection test returns the reply and reports provider errors', async (t) => {
  const fetchMock = t.mock.method(globalThis, 'fetch', async () => streamResponse([{ choices: [{ delta: { content: 'OK' } }] }]));
  assert.equal(await testConnection(google), 'OK');
  fetchMock.mock.mockImplementation(async () => new Response('Invalid API key', { status: 401 }));
  await assert.rejects(testConnection(google), /401.*Invalid API key/);
  fetchMock.mock.mockImplementation(async () => streamResponse([{ error: { message: 'Quota exhausted' } }]));
  await assert.rejects(testConnection(google), /Quota exhausted/);
});

test('Existing providers keep their endpoints and authentication', async (t) => {
  for (const id of ['anthropic', 'openai', 'openrouter', 'nanogpt', 'ollama']) {
    const config = { ...PRESETS.find((p) => p.id === id), apiKey: 'existing-key' };
    const mock = t.mock.method(globalThis, 'fetch', async (url, options) => {
      const anthropic = id === 'anthropic';
      assert.equal(url, config.baseUrl + (anthropic ? '/v1/messages' : '/v1/chat/completions'));
      assert.equal(options.headers[anthropic ? 'x-api-key' : 'authorization'], anthropic ? 'existing-key' : 'Bearer existing-key');
      return streamResponse(anthropic ? [{ type: 'content_block_delta', delta: { text: 'OK' } }] : [{ choices: [{ delta: { content: 'OK' } }] }]);
    });
    assert.equal(await testConnection(config), 'OK');
    mock.mock.restore();
  }
});

test('Missing key fails before a network request', async () => {
  await assert.rejects(testConnection({ ...google, apiKey: '' }), LlmError);
});
