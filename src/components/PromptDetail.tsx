import { useMemo, useState } from 'react';
import type { Prompt, Variable } from '../data/types';
import { interpolate, missingNames } from '../lib/variables';
import { useStore } from '../store';
import CopyButton from './CopyButton';

function initialValues(vars: Variable[]): Record<string, string> {
  return Object.fromEntries(vars.map((v) => [v.name, v.default ?? '']));
}

/** A one-line field is fine for most variables; long-form ones get room to breathe. */
function rowsFor(v: Variable): number {
  return /text|draft|content|body|transcript|code|notes|scene/.test(v.name) ? 5 : 1;
}

export default function PromptDetail({ prompt, onClose }: { prompt: Prompt; onClose: () => void }) {
  const vars = prompt.variables ?? [];

  const [values, setValues] = useState<Record<string, string>>(() => initialValues(vars));
  // Selecting a different prompt must not carry the previous prompt's answers over.
  const [shownId, setShownId] = useState(prompt.id);
  if (shownId !== prompt.id) {
    setShownId(prompt.id);
    setValues(initialValues(vars));
  }

  const favorites = useStore((s) => s.favorites);
  const toggleFavorite = useStore((s) => s.toggleFavorite);
  const isFavorite = favorites.includes(prompt.id);

  const filled = useMemo(() => interpolate(prompt.body, values), [prompt.body, values]);
  const missing = useMemo(() => missingNames(prompt.body, values), [prompt.body, values]);
  const anyFilled = vars.some((v) => (values[v.name] ?? '').trim());

  return (
    <aside
      aria-label={`Prompt: ${prompt.title}`}
      className="flex w-[46rem] max-w-[50vw] shrink-0 flex-col border-l border-[var(--color-edge)] bg-[var(--color-panel)]"
    >
      <div className="flex items-start gap-3 border-b border-[var(--color-edge)] px-5 py-4">
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-base font-semibold">{prompt.title}</h2>
          <p className="mt-1 text-sm text-[var(--color-dim)]">{prompt.description}</p>
        </div>
        <button
          onClick={() => toggleFavorite(prompt.id)}
          aria-pressed={isFavorite}
          className="rounded-md border border-[var(--color-edge)] px-2 py-1 text-xs"
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? '★' : '☆'}
        </button>
        <button
          onClick={onClose}
          title="Close (Esc)"
          aria-label="Close prompt"
          className="rounded-md border border-[var(--color-edge)] px-2 py-1 text-xs"
        >
          {'✕'}
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
            <div className="mb-2 flex items-center gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-dim)]">Variables</h3>
              {anyFilled && (
                <button
                  onClick={() => setValues(initialValues(vars))}
                  className="text-xs text-[var(--color-dim)] underline-offset-2 hover:underline"
                >
                  Clear all
                </button>
              )}
            </div>
            <div className="grid gap-2">
              {vars.map((v) => (
                <label key={v.name} className="grid gap-1">
                  <span className="text-xs text-[var(--color-dim)]">{v.label}</span>
                  <textarea
                    rows={rowsFor(v)}
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
        {vars.length > 0 && <CopyButton text={prompt.body} label="Copy raw template" variant="ghost" />}
        <span className="ml-auto text-xs text-[var(--color-dim)]">
          {filled.length.toLocaleString()} chars
        </span>
        {missing.length > 0 && (
          <span className="text-xs text-[var(--color-heat)]">
            {missing.length} unfilled: {missing.join(', ')}
          </span>
        )}
      </div>
    </aside>
  );
}
