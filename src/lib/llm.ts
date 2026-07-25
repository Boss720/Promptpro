export type ProviderShape = 'anthropic' | 'openai';

export type ProviderConfig = {
  shape: ProviderShape;
  baseUrl: string;
  apiKey: string;
  model: string;
};

export type Preset = { id: string; label: string } & Omit<ProviderConfig, 'apiKey'>;

export const PRESETS: Preset[] = [
  { id: 'anthropic', label: 'Anthropic', shape: 'anthropic', baseUrl: 'https://api.anthropic.com', model: 'claude-sonnet-5' },
  { id: 'openai', label: 'OpenAI', shape: 'openai', baseUrl: 'https://api.openai.com', model: 'gpt-4o' },
  { id: 'openrouter', label: 'OpenRouter', shape: 'openai', baseUrl: 'https://openrouter.ai/api', model: 'anthropic/claude-sonnet-4.5' },
  { id: 'nanogpt', label: 'nano-gpt.com', shape: 'openai', baseUrl: 'https://nano-gpt.com/api', model: 'chatgpt-4o-latest' },
  { id: 'ollama', label: 'Ollama (local)', shape: 'openai', baseUrl: 'http://localhost:11434', model: 'llama3.1' },
];

export class LlmError extends Error {}

type StreamOpts = {
  system: string;
  user: string;
  config: ProviderConfig;
  signal?: AbortSignal;
  onToken: (chunk: string) => void;
};

/** Streams a completion, calling onToken for each text delta. Resolves with the full text. */
export async function streamComplete({ system, user, config, signal, onToken }: StreamOpts): Promise<string> {
  if (!config.apiKey) throw new LlmError('No API key set. Open Settings and add one.');
  if (!config.model) throw new LlmError('No model set. Open Settings and pick one.');

  const base = config.baseUrl.replace(/\/+$/, '');
  const isAnthropic = config.shape === 'anthropic';

  const url = isAnthropic ? `${base}/v1/messages` : `${base}/v1/chat/completions`;

  const headers: Record<string, string> = { 'content-type': 'application/json' };
  if (isAnthropic) {
    headers['x-api-key'] = config.apiKey;
    headers['anthropic-version'] = '2023-06-01';
    headers['anthropic-dangerous-direct-browser-access'] = 'true';
  } else {
    headers['authorization'] = `Bearer ${config.apiKey}`;
  }

  const body = isAnthropic
    ? { model: config.model, max_tokens: 4096, stream: true, system, messages: [{ role: 'user', content: user }] }
    : {
        model: config.model,
        stream: true,
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: user },
        ],
      };

  const res = await fetch(url, { method: 'POST', headers, body: JSON.stringify(body), signal });

  if (!res.ok || !res.body) {
    const detail = await res.text().catch(() => '');
    throw new LlmError(`${res.status} ${res.statusText}${detail ? ` — ${detail.slice(0, 300)}` : ''}`);
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  let full = '';

  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    const lines = buffer.split('\n');
    buffer = lines.pop() ?? '';

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed.startsWith('data:')) continue;
      const payload = trimmed.slice(5).trim();
      if (!payload || payload === '[DONE]') continue;

      let json: any;
      try {
        json = JSON.parse(payload);
      } catch {
        continue;
      }

      const delta = isAnthropic
        ? json.type === 'content_block_delta'
          ? json.delta?.text
          : undefined
        : json.choices?.[0]?.delta?.content;

      if (typeof delta === 'string' && delta) {
        full += delta;
        onToken(delta);
      }
    }
  }

  return full;
}

/** Cheap round-trip used by the Settings "Test connection" button. */
export async function testConnection(config: ProviderConfig): Promise<string> {
  let out = '';
  await streamComplete({
    system: 'Reply with exactly: OK',
    user: 'ping',
    config,
    onToken: (t) => {
      out += t;
    },
  });
  return out.trim() || '(empty response)';
}
