import { useMemo, useState } from 'react';
import type { Prompt } from '../data/types';
import { interpolate, missingNames } from '../lib/variables';
import { useStore } from '../store';

function CopyButton({ text, label = 'Copy' }: { text: string; label?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setDone(true);
        setTimeout(() => setDone(false), 1200);
      }}
      className="rounded-md bg-[var(--color-accent)] px-3 py-1.5 text-sm font-medium text-black"
    >
      {done ? 'Copied' : label}
    </button>
  );
}

export default function PromptDetail({ prompt, onClose }: { prompt: Prompt; onClose: () => void }) {
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries((prompt.variables ?? []).map((v) => [v.name, v.default ?? ''])),
  );
  const favorites = useStore((s) => s.favorites);
  const toggleFavorite = useStore((s) => s.toggleFavorite);

  const filled = useMemo(() => interpolate(prompt.body, values), [prompt.body, values]);
  const missing = useMemo(() => missingNames(prompt.body, values), [prompt.body, values]);
  const vars = prompt.variables ?? [];

  return (
    <aside className="flex w-[46rem] max-w-[50vw] shrink-0 flex-col border-l border-[var(--color-edge)] bg-[var(--color-panel)]">
      <div className="flex items-start gap-3 border-b border-[var(--color-edge)] px-5 py-4">
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-base font-semibold">{prompt.title}</h2>
          <p className="mt-1 text-sm text-[var(--color-dim)]">{prompt.description}</p>
        </div>
        <button
          onClick={() => toggleFavorite(prompt.id)}
          className="rounded-md border border-[var(--color-edge)] px-2 py-1 text-xs"
          title="Favorite"
        >
          {favorites.includes(prompt.id) ? '★' : '☆'}
        </button>
        <button onClick={onClose} className="rounded-md border border-[var(--color-edge)] px-2 py-1 text-xs">
          ✕
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
        <div className="mb-4 flex flex-wrap gap-1.5">
          {prompt.tags.map((t) => (
            <span key={t} className="rounded bg-[var(--color-surface)] px-2 py-0.5 text-xs text-[var(--color-dim)]">
              {t}
            </span>
          ))}
        </div>

        {vars.length > 0 && (
          <section className="mb-5">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-dim)]">
              Variables
            </h3>
            <div className="grid gap-2">
              {vars.map((v) => (
                <label key={v.name} className="grid gap-1">
                  <span className="text-xs text-[var(--color-dim)]">{v.label}</span>
                  <textarea
                    rows={v.name === 'existing_text' ? 5 : 1}
                    value={values[v.name] ?? ''}
                    placeholder={v.placeholder ?? `{{${v.name}}}`}
                    onChange={(e) => setValues((s) => ({ ...s, [v.name]: e.target.value }))}
                    className="resize-y rounded-md border border-[var(--color-edge)] bg-[var(--color-surface)] px-2.5 py-1.5 text-sm outline-none focus:border-[var(--color-accent)]"
                  />
                </label>
              ))}
            </div>
          </section>
        )}

        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-dim)]">
          {vars.length ? 'Preview' : 'Prompt'}
        </h3>
        <pre className="whitespace-pre-wrap rounded-md border border-[var(--color-edge)] bg-[var(--color-surface)] p-3 text-sm leading-relaxed">
          {filled}
        </pre>
      </div>

      <div className="flex items-center gap-3 border-t border-[var(--color-edge)] px-5 py-3">
        <CopyButton text={filled} label={vars.length ? 'Copy filled' : 'Copy'} />
        {vars.length > 0 && (
          <button
            onClick={() => navigator.clipboard.writeText(prompt.body)}
            className="rounded-md border border-[var(--color-edge)] px-3 py-1.5 text-sm"
          >
            Copy raw template
          </button>
        )}
        {missing.length > 0 && (
          <span className="text-xs text-[var(--color-heat)]">
            {missing.length} unfilled: {missing.join(', ')}
          </span>
        )}
      </div>
    </aside>
  );
}
