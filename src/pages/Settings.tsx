import { useState } from 'react';
import { PRESETS, testConnection } from '../lib/llm';
import type { ProviderShape } from '../lib/llm';
import { useStore } from '../store';

export default function Settings() {
  const provider = useStore((s) => s.provider);
  const setProvider = useStore((s) => s.setProvider);
  const adultUnlocked = useStore((s) => s.adultUnlocked);
  const setAdultUnlocked = useStore((s) => s.setAdultUnlocked);

  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);
  const [testing, setTesting] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const [confirmAdult, setConfirmAdult] = useState(false);

  const activePreset = PRESETS.find((p) => p.baseUrl === provider.baseUrl && p.model === provider.model);

  async function test() {
    setTesting(true);
    setStatus(null);
    try {
      const out = await testConnection(provider);
      setStatus({ ok: true, text: `OK — model replied: ${out}` });
    } catch (e) {
      setStatus({ ok: false, text: `Failed — ${(e as Error).message}` });
    } finally {
      setTesting(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl overflow-y-auto px-6 py-8">
      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold">Model provider</h2>
        <p className="mb-4 text-sm text-[var(--color-dim)]">
          Used by the Enhancer. Everything runs in this browser {'—'} your key is stored in this browser{"'"}s
          localStorage and is sent only to the base URL below. Nothing is written to disk in the project.
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.id}
              onClick={() => setProvider({ shape: p.shape, baseUrl: p.baseUrl, model: p.model })}
              aria-pressed={activePreset?.id === p.id}
              className={`rounded-md border px-3 py-1.5 text-sm ${
                activePreset?.id === p.id
                  ? 'border-[var(--color-accent)] text-[var(--color-accent)]'
                  : 'border-[var(--color-edge)] text-[var(--color-dim)] hover:text-[var(--color-ink)]'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="grid gap-3">
          <label className="grid gap-1">
            <span className="text-xs text-[var(--color-dim)]">API shape</span>
            <select
              value={provider.shape}
              onChange={(e) => setProvider({ shape: e.target.value as ProviderShape })}
              className="rounded-md border border-[var(--color-edge)] bg-[var(--color-panel)] px-2.5 py-1.5 text-sm"
            >
              <option value="anthropic">Anthropic (/v1/messages)</option>
              <option value="openai">OpenAI-compatible (/v1/chat/completions)</option>
            </select>
          </label>

          <label className="grid gap-1">
            <span className="text-xs text-[var(--color-dim)]">Base URL</span>
            <input
              value={provider.baseUrl}
              onChange={(e) => setProvider({ baseUrl: e.target.value })}
              spellCheck={false}
              className="rounded-md border border-[var(--color-edge)] bg-[var(--color-panel)] px-2.5 py-1.5 text-sm outline-none focus:border-[var(--color-accent)]"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-xs text-[var(--color-dim)]">Model</span>
            <input
              value={provider.model}
              onChange={(e) => setProvider({ model: e.target.value })}
              spellCheck={false}
              className="rounded-md border border-[var(--color-edge)] bg-[var(--color-panel)] px-2.5 py-1.5 text-sm outline-none focus:border-[var(--color-accent)]"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-xs text-[var(--color-dim)]">API key</span>
            <div className="flex gap-2">
              <input
                type={showKey ? 'text' : 'password'}
                value={provider.apiKey}
                onChange={(e) => setProvider({ apiKey: e.target.value })}
                placeholder={'sk-…'}
                autoComplete="off"
                spellCheck={false}
                className="min-w-0 flex-1 rounded-md border border-[var(--color-edge)] bg-[var(--color-panel)] px-2.5 py-1.5 text-sm outline-none focus:border-[var(--color-accent)]"
              />
              <button
                onClick={() => setShowKey((v) => !v)}
                className="rounded-md border border-[var(--color-edge)] px-3 py-1.5 text-sm text-[var(--color-dim)]"
              >
                {showKey ? 'Hide' : 'Show'}
              </button>
              <button
                onClick={() => {
                  setProvider({ apiKey: '' });
                  setStatus(null);
                }}
                disabled={!provider.apiKey}
                className="rounded-md border border-[var(--color-edge)] px-3 py-1.5 text-sm text-[var(--color-heat)] disabled:opacity-40"
              >
                Clear
              </button>
            </div>
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={test}
            disabled={testing || !provider.apiKey}
            className="rounded-md bg-[var(--color-accent)] px-4 py-1.5 text-sm font-medium text-black disabled:opacity-40"
          >
            {testing ? 'Testing…' : 'Test connection'}
          </button>
          {status && (
            <span
              role="status"
              className={`text-xs ${status.ok ? 'text-[var(--color-dim)]' : 'text-[var(--color-heat)]'}`}
            >
              {status.text}
            </span>
          )}
        </div>
      </section>

      <section className="rounded-lg border border-[var(--color-edge)] p-5">
        <h2 className="mb-1 text-base font-semibold">Adult content</h2>
        <p className="mb-4 text-sm text-[var(--color-dim)]">
          The Adult Fiction section holds explicit writing-craft prompts for fiction involving adult characters.
          While this is off, those prompts are excluded from the library, the search index, and the sidebar
          entirely.
        </p>

        {adultUnlocked ? (
          <button
            onClick={() => {
              setAdultUnlocked(false);
              setConfirmAdult(false);
            }}
            className="rounded-md border border-[var(--color-edge)] px-3 py-1.5 text-sm"
          >
            Disable adult content
          </button>
        ) : (
          <>
            <label className="mb-3 flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={confirmAdult}
                onChange={(e) => setConfirmAdult(e.target.checked)}
              />
              I am 18 or older and want to see adult content.
            </label>
            <button
              onClick={() => setAdultUnlocked(true)}
              disabled={!confirmAdult}
              className="rounded-md bg-[var(--color-heat)] px-3 py-1.5 text-sm font-medium text-black disabled:opacity-40"
            >
              Enable adult content
            </button>
          </>
        )}
      </section>
    </div>
  );
}
