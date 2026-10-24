import { useMemo, useRef, useState } from 'react';
import type { Prompt, Variable } from '../data/types';
import { deriveVariables, extractNames } from '../lib/variables';
import { newCustomId } from '../lib/id';
import { useStore } from '../store';

const BLANK = { title: '', description: '', tags: '', body: '' };

/** Accepts a bare array, a single prompt object, or `{ prompts: [...] }`. */
function unwrap(parsed: unknown): unknown[] {
  if (Array.isArray(parsed)) return parsed;
  if (parsed && typeof parsed === 'object') {
    const bag = (parsed as { prompts?: unknown }).prompts;
    if (Array.isArray(bag)) return bag;
    return [parsed];
  }
  throw new Error('Expected a JSON array of prompts, or an object with a "prompts" array.');
}

function toPrompt(raw: unknown, index: number): Prompt {
  const p = raw as Record<string, unknown>;
  if (!p || typeof p !== 'object' || typeof p.title !== 'string' || typeof p.body !== 'string') {
    throw new Error(`Entry ${index + 1} needs a string "title" and "body".`);
  }
  const body = p.body;
  const declared = Array.isArray(p.variables)
    ? (p.variables as Variable[]).filter((v) => v && typeof v.name === 'string')
    : [];
  return {
    id: typeof p.id === 'string' && p.id.trim() ? p.id.trim() : newCustomId(),
    title: p.title,
    category: 'custom',
    tags: Array.isArray(p.tags) ? p.tags.map(String) : [],
    description: typeof p.description === 'string' && p.description.trim() ? p.description : 'Imported prompt.',
    body,
    variables: declared.length ? declared : deriveVariables(body),
  };
}

export default function MyPrompts() {
  const custom = useStore((s) => s.custom);
  const saveCustom = useStore((s) => s.saveCustom);
  const deleteCustom = useStore((s) => s.deleteCustom);
  const replaceCustom = useStore((s) => s.replaceCustom);

  const [draft, setDraft] = useState(BLANK);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [importError, setImportError] = useState<string | null>(null);
  const [importNote, setImportNote] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const draftVars = useMemo(() => extractNames(draft.body), [draft.body]);

  function submit() {
    if (!draft.title.trim() || !draft.body.trim()) return;
    saveCustom({
      id: editingId ?? newCustomId(),
      title: draft.title.trim(),
      category: 'custom',
      tags: draft.tags
        .split(',')
        .map((t) => t.trim().toLowerCase())
        .filter(Boolean),
      description: draft.description.trim() || 'Custom prompt.',
      body: draft.body,
      variables: deriveVariables(draft.body),
    });
    setDraft(BLANK);
    setEditingId(null);
  }

  function edit(p: Prompt) {
    setEditingId(p.id);
    setDraft({ title: p.title, description: p.description, tags: p.tags.join(', '), body: p.body });
  }

  function remove(p: Prompt) {
    if (!window.confirm(`Delete "${p.title}"? This cannot be undone.`)) return;
    if (editingId === p.id) {
      setEditingId(null);
      setDraft(BLANK);
    }
    deleteCustom(p.id);
  }

  function exportJson() {
    const blob = new Blob([JSON.stringify(custom, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `my-prompts-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  /** Merges into the saved set. An import never silently wipes existing prompts. */
  async function importJson(file: File) {
    setImportError(null);
    setImportNote(null);
    try {
      const incoming = unwrap(JSON.parse(await file.text())).map(toPrompt);
      if (!incoming.length) throw new Error('That file contained no prompts.');

      const byId = new Map(custom.map((p) => [p.id, p]));
      let updated = 0;
      for (const p of incoming) {
        if (byId.has(p.id)) updated += 1;
        byId.set(p.id, p);
      }
      replaceCustom([...byId.values()]);
      setImportNote(
        `Imported ${incoming.length} prompt${incoming.length === 1 ? '' : 's'}` +
          (updated ? ` (${updated} replaced an existing id).` : '.'),
      );
    } catch (e) {
      setImportError((e as Error).message);
    }
  }

  return (
    <div className="mx-auto grid h-full max-w-5xl grid-rows-[auto_1fr] gap-6 overflow-y-auto px-6 py-8">
      <section className="rounded-lg border border-[var(--color-edge)] p-5">
        <h2 className="mb-3 text-base font-semibold">{editingId ? 'Edit prompt' : 'New prompt'}</h2>
        <div className="grid gap-3">
          <input
            value={draft.title}
            onChange={(e) => setDraft({ ...draft, title: e.target.value })}
            placeholder="Title"
            aria-label="Title"
            className="rounded-md border border-[var(--color-edge)] bg-[var(--color-panel)] px-2.5 py-1.5 text-sm outline-none focus:border-[var(--color-accent)]"
          />
          <input
            value={draft.description}
            onChange={(e) => setDraft({ ...draft, description: e.target.value })}
            placeholder="One-line description"
            aria-label="Description"
            className="rounded-md border border-[var(--color-edge)] bg-[var(--color-panel)] px-2.5 py-1.5 text-sm outline-none focus:border-[var(--color-accent)]"
          />
          <input
            value={draft.tags}
            onChange={(e) => setDraft({ ...draft, tags: e.target.value })}
            placeholder="Tags, comma separated"
            aria-label="Tags"
            className="rounded-md border border-[var(--color-edge)] bg-[var(--color-panel)] px-2.5 py-1.5 text-sm outline-none focus:border-[var(--color-accent)]"
          />
          <textarea
            value={draft.body}
            onChange={(e) => setDraft({ ...draft, body: e.target.value })}
            rows={8}
            aria-label="Prompt body"
            placeholder="Prompt body. Use {{variables}} for anything the user should fill in."
            className="resize-y rounded-md border border-[var(--color-edge)] bg-[var(--color-panel)] px-2.5 py-1.5 text-sm leading-relaxed outline-none focus:border-[var(--color-accent)]"
          />
          <p className="text-xs text-[var(--color-dim)]">
            {draftVars.length
              ? `${draftVars.length} variable${draftVars.length === 1 ? '' : 's'}: ${draftVars.join(', ')}`
              : 'No {{variables}} detected yet.'}
          </p>
        </div>
        <div className="mt-3 flex items-center gap-3">
          <button
            onClick={submit}
            disabled={!draft.title.trim() || !draft.body.trim()}
            className="rounded-md bg-[var(--color-accent)] px-4 py-1.5 text-sm font-medium text-black disabled:opacity-40"
          >
            {editingId ? 'Update' : 'Save'}
          </button>
          {editingId && (
            <button
              onClick={() => {
                setEditingId(null);
                setDraft(BLANK);
              }}
              className="rounded-md border border-[var(--color-edge)] px-3 py-1.5 text-sm"
            >
              Cancel
            </button>
          )}
          <span className="ml-auto flex gap-2">
            <button
              onClick={exportJson}
              disabled={!custom.length}
              className="rounded-md border border-[var(--color-edge)] px-3 py-1.5 text-sm disabled:opacity-40"
            >
              Export JSON
            </button>
            <button
              onClick={() => fileRef.current?.click()}
              title="Merges into your saved prompts; matching ids are replaced."
              className="rounded-md border border-[var(--color-edge)] px-3 py-1.5 text-sm"
            >
              Import JSON
            </button>
          </span>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            hidden
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) importJson(f);
              e.target.value = '';
            }}
          />
        </div>
        {importError && <p className="mt-2 text-xs text-[var(--color-heat)]">{importError}</p>}
        {importNote && <p className="mt-2 text-xs text-[var(--color-dim)]">{importNote}</p>}
      </section>

      <section>
        <h2 className="mb-3 text-base font-semibold">Saved ({custom.length})</h2>
        {custom.length === 0 ? (
          <p className="text-sm text-[var(--color-dim)]">
            Nothing saved yet. Prompts you create here also appear in the Library.
          </p>
        ) : (
          <div className="grid gap-2">
            {custom.map((p) => (
              <div
                key={p.id}
                className="flex items-start gap-3 rounded-lg border border-[var(--color-edge)] bg-[var(--color-panel)] p-3.5"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-medium">{p.title}</h3>
                  <p className="mt-1 text-xs text-[var(--color-dim)]">{p.description}</p>
                </div>
                <button
                  onClick={() => edit(p)}
                  className="rounded-md border border-[var(--color-edge)] px-2.5 py-1 text-xs"
                >
                  Edit
                </button>
                <button
                  onClick={() => remove(p)}
                  className="rounded-md border border-[var(--color-edge)] px-2.5 py-1 text-xs text-[var(--color-heat)]"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
