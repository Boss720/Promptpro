import { useRef, useState } from 'react';
import type { Prompt } from '../data/types';
import { deriveVariables } from '../lib/variables';
import { useStore } from '../store';

const BLANK = { title: '', description: '', tags: '', body: '' };

export default function MyPrompts() {
  const custom = useStore((s) => s.custom);
  const saveCustom = useStore((s) => s.saveCustom);
  const deleteCustom = useStore((s) => s.deleteCustom);
  const replaceCustom = useStore((s) => s.replaceCustom);

  const [draft, setDraft] = useState(BLANK);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [importError, setImportError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function submit() {
    if (!draft.title.trim() || !draft.body.trim()) return;
    const id = editingId ?? `custom-${Math.random().toString(36).slice(2, 8)}`;
    saveCustom({
      id,
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

  function exportJson() {
    const blob = new Blob([JSON.stringify(custom, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-prompts.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  async function importJson(file: File) {
    setImportError(null);
    try {
      const parsed = JSON.parse(await file.text());
      if (!Array.isArray(parsed)) throw new Error('Expected a JSON array of prompts.');
      const cleaned: Prompt[] = parsed.map((p: any, i: number) => {
        if (!p?.title || !p?.body) throw new Error(`Entry ${i + 1} is missing title or body.`);
        return {
          id: p.id ?? `custom-${Math.random().toString(36).slice(2, 8)}`,
          title: String(p.title),
          category: 'custom',
          tags: Array.isArray(p.tags) ? p.tags.map(String) : [],
          description: String(p.description ?? 'Imported prompt.'),
          body: String(p.body),
          variables: deriveVariables(String(p.body)),
        };
      });
      replaceCustom(cleaned);
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
            className="rounded-md border border-[var(--color-edge)] bg-[var(--color-panel)] px-2.5 py-1.5 text-sm outline-none focus:border-[var(--color-accent)]"
          />
          <input
            value={draft.description}
            onChange={(e) => setDraft({ ...draft, description: e.target.value })}
            placeholder="One-line description"
            className="rounded-md border border-[var(--color-edge)] bg-[var(--color-panel)] px-2.5 py-1.5 text-sm outline-none focus:border-[var(--color-accent)]"
          />
          <input
            value={draft.tags}
            onChange={(e) => setDraft({ ...draft, tags: e.target.value })}
            placeholder="Tags, comma separated"
            className="rounded-md border border-[var(--color-edge)] bg-[var(--color-panel)] px-2.5 py-1.5 text-sm outline-none focus:border-[var(--color-accent)]"
          />
          <textarea
            value={draft.body}
            onChange={(e) => setDraft({ ...draft, body: e.target.value })}
            rows={8}
            placeholder="Prompt body. Use {{variables}} for anything the user should fill in."
            className="resize-y rounded-md border border-[var(--color-edge)] bg-[var(--color-panel)] px-2.5 py-1.5 text-sm leading-relaxed outline-none focus:border-[var(--color-accent)]"
          />
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
              className="rounded-md border border-[var(--color-edge)] px-3 py-1.5 text-sm"
            >
              Import JSON
            </button>
          </span>
          <input
            ref={fileRef}
            type="file"
            accept="application/json"
            hidden
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) importJson(f);
              e.target.value = '';
            }}
          />
        </div>
        {importError && <p className="mt-2 text-xs text-[var(--color-heat)]">{importError}</p>}
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
                <button onClick={() => edit(p)} className="rounded-md border border-[var(--color-edge)] px-2.5 py-1 text-xs">
                  Edit
                </button>
                <button
                  onClick={() => deleteCustom(p.id)}
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
