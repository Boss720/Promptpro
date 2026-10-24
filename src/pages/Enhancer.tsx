import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ENHANCE_MODES } from '../data/meta-prompts';
import { LlmError, streamComplete } from '../lib/llm';
import { deriveVariables } from '../lib/variables';
import { newCustomId } from '../lib/id';
import { useStore } from '../store';
import CopyButton from '../components/CopyButton';

export default function Enhancer() {
  const provider = useStore((s) => s.provider);
  const saveCustom = useStore((s) => s.saveCustom);

  const [mode, setMode] = useState(ENHANCE_MODES[0].id);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const abort = useRef<AbortController | null>(null);
  const outRef = useRef<HTMLPreElement>(null);

  const active = ENHANCE_MODES.find((m) => m.id === mode) ?? ENHANCE_MODES[0];
  const ready = Boolean(provider.apiKey && provider.model);

  // Abort an in-flight stream if the page unmounts.
  useEffect(() => () => abort.current?.abort(), []);

  // Follow the stream unless the user has scrolled up to read.
  useEffect(() => {
    const el = outRef.current;
    if (!el || !busy) return;
    const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
    if (atBottom) el.scrollTop = el.scrollHeight;
  }, [output, busy]);

  async function run() {
    if (!input.trim() || busy) return;
    setBusy(true);
    setError(null);
    setOutput('');
    setSaved(false);
    abort.current = new AbortController();
    try {
      await streamComplete({
        system: active.system,
        user: input,
        config: provider,
        signal: abort.current.signal,
        onToken: (t) => setOutput((o) => o + t),
      });
    } catch (e) {
      if ((e as Error).name !== 'AbortError') {
        setError(e instanceof LlmError ? e.message : String(e));
      }
    } finally {
      setBusy(false);
    }
  }

  function saveToLibrary() {
    const body = output.trim();
    if (!body) return;
    saveCustom({
      id: newCustomId(),
      title: body.split('\n')[0].slice(0, 60) || 'Enhanced prompt',
      category: 'custom',
      tags: ['custom', 'enhanced', active.id],
      description: `Enhanced with "${active.label}" from a draft.`,
      body,
      variables: deriveVariables(body),
    });
    setSaved(true);
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-wrap items-center gap-2 border-b border-[var(--color-edge)] px-5 py-3">
        {ENHANCE_MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            title={m.blurb}
            aria-pressed={mode === m.id}
            className={`rounded-md px-3 py-1.5 text-sm transition ${
              mode === m.id
                ? 'bg-[var(--color-accent)] text-black'
                : 'border border-[var(--color-edge)] text-[var(--color-dim)] hover:text-[var(--color-ink)]'
            }`}
          >
            {m.label}
          </button>
        ))}
        <span className="ml-2 text-xs text-[var(--color-dim)]">{active.blurb}</span>
        <span className="ml-auto text-xs text-[var(--color-dim)]">{provider.model || 'no model set'}</span>
      </div>

      {!ready && (
        <p className="border-b border-[var(--color-edge)] px-5 py-2 text-xs text-[var(--color-heat)]">
          No API key or model set.{' '}
          <Link to="/settings" className="underline underline-offset-2">
            Open Settings
          </Link>{' '}
          to configure a provider.
        </p>
      )}

      <div className="grid min-h-0 flex-1 grid-cols-2 divide-x divide-[var(--color-edge)]">
        <div className="flex min-h-0 flex-col p-5">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-dim)]">Your prompt</h2>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) run();
            }}
            aria-label="Draft prompt"
            placeholder={'Paste a rough prompt…  Ctrl+Enter to run'}
            className="min-h-0 flex-1 resize-none rounded-md border border-[var(--color-edge)] bg-[var(--color-panel)] p-3 text-sm leading-relaxed outline-none focus:border-[var(--color-accent)]"
          />
          <div className="mt-3 flex items-center gap-3">
            <button
              onClick={busy ? () => abort.current?.abort() : run}
              disabled={!busy && (!input.trim() || !ready)}
              className="rounded-md bg-[var(--color-accent)] px-4 py-1.5 text-sm font-medium text-black disabled:opacity-40"
            >
              {busy ? 'Stop' : 'Enhance'}
            </button>
            <span className="text-xs text-[var(--color-dim)]">{input.length.toLocaleString()} chars</span>
            {error && <span className="text-xs text-[var(--color-heat)]">{error}</span>}
          </div>
        </div>

        <div className="flex min-h-0 flex-col p-5">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-dim)]">Enhanced</h2>
          <pre
            ref={outRef}
            aria-live="polite"
            className="min-h-0 flex-1 overflow-y-auto whitespace-pre-wrap rounded-md border border-[var(--color-edge)] bg-[var(--color-panel)] p-3 text-sm leading-relaxed"
          >
            {output || <span className="text-[var(--color-dim)]">Output appears here.</span>}
          </pre>
          <div className="mt-3 flex items-center gap-3">
            <CopyButton text={output} label="Copy" variant="ghost" disabled={!output} />
            <button
              onClick={saveToLibrary}
              disabled={!output || busy}
              className="rounded-md border border-[var(--color-edge)] px-3 py-1.5 text-sm disabled:opacity-40"
            >
              {saved ? 'Saved' : 'Save to My Prompts'}
            </button>
            <button
              onClick={() => {
                setInput(output);
                setOutput('');
                setSaved(false);
              }}
              disabled={!output || busy}
              title="Move the result back into the input for another pass"
              className="rounded-md border border-[var(--color-edge)] px-3 py-1.5 text-sm disabled:opacity-40"
            >
              Feed back in
            </button>
            <span className="ml-auto text-xs text-[var(--color-dim)]">
              {output ? `${output.length.toLocaleString()} chars` : ''}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
