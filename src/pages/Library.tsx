import { useEffect, useMemo, useRef, useState } from 'react';
import Fuse from 'fuse.js';
import { CATEGORIES } from '../data/categories';
import { getPrompts } from '../data';
import type { Prompt } from '../data/types';
import { useStore } from '../store';
import PromptDetail from '../components/PromptDetail';

export default function Library() {
  const adultUnlocked = useStore((s) => s.adultUnlocked);
  const custom = useStore((s) => s.custom);
  const favorites = useStore((s) => s.favorites);

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string | null>(null);
  const [subcategory, setSubcategory] = useState<string | null>(null);
  const [favOnly, setFavOnly] = useState(false);
  const [selected, setSelected] = useState<Prompt | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const all = useMemo(() => [...getPrompts(adultUnlocked), ...custom], [adultUnlocked, custom]);

  const categories = useMemo(() => CATEGORIES.filter((c) => adultUnlocked || !c.adult), [adultUnlocked]);

  const fuse = useMemo(
    () =>
      new Fuse(all, {
        keys: [
          { name: 'title', weight: 3 },
          { name: 'tags', weight: 2 },
          { name: 'description', weight: 2 },
          { name: 'body', weight: 1 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
      }),
    [all],
  );

  const results = useMemo(() => {
    let list = query.trim() ? fuse.search(query).map((r) => r.item) : all;
    if (category) list = list.filter((p) => p.category === category);
    if (subcategory) list = list.filter((p) => p.subcategory === subcategory);
    if (favOnly) list = list.filter((p) => favorites.includes(p.id));
    return list;
  }, [query, fuse, all, category, subcategory, favOnly, favorites]);

  const activeCategory = categories.find((c) => c.id === category);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        searchRef.current?.focus();
      }
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="flex h-full">
      <nav className="w-60 shrink-0 overflow-y-auto border-r border-[var(--color-edge)] px-3 py-4">
        <button
          onClick={() => {
            setCategory(null);
            setSubcategory(null);
          }}
          className={`w-full rounded-md px-2.5 py-1.5 text-left text-sm ${
            category === null ? 'bg-[var(--color-panel)] text-[var(--color-accent)]' : 'text-[var(--color-dim)]'
          }`}
        >
          All ({all.length})
        </button>
        <button
          onClick={() => setFavOnly((v) => !v)}
          className={`mt-0.5 w-full rounded-md px-2.5 py-1.5 text-left text-sm ${
            favOnly ? 'bg-[var(--color-panel)] text-[var(--color-accent)]' : 'text-[var(--color-dim)]'
          }`}
        >
          ★ Favorites ({favorites.length})
        </button>

        <div className="mt-3 space-y-0.5">
          {categories.map((c) => (
            <div key={c.id}>
              <button
                onClick={() => {
                  setCategory(c.id === category ? null : c.id);
                  setSubcategory(null);
                }}
                className={`w-full rounded-md px-2.5 py-1.5 text-left text-sm ${
                  category === c.id
                    ? 'bg-[var(--color-panel)] text-[var(--color-accent)]'
                    : 'text-[var(--color-dim)] hover:text-[var(--color-ink)]'
                }`}
              >
                {c.adult && <span className="mr-1 text-[var(--color-heat)]">●</span>}
                {c.label}
              </button>
              {category === c.id && c.subcategories && (
                <div className="mt-0.5 ml-2 border-l border-[var(--color-edge)] pl-2">
                  {c.subcategories.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSubcategory(s.id === subcategory ? null : s.id)}
                      className={`w-full rounded px-2 py-1 text-left text-xs ${
                        subcategory === s.id ? 'text-[var(--color-accent)]' : 'text-[var(--color-dim)]'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      <section className="flex min-w-0 flex-1 flex-col">
        <div className="border-b border-[var(--color-edge)] px-5 py-3">
          <input
            ref={searchRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search prompts…  (press / to focus)"
            className="w-full rounded-md border border-[var(--color-edge)] bg-[var(--color-panel)] px-3 py-2 text-sm outline-none focus:border-[var(--color-accent)]"
          />
          <p className="mt-2 text-xs text-[var(--color-dim)]">
            {results.length} result{results.length === 1 ? '' : 's'}
            {activeCategory ? ` in ${activeCategory.label}` : ''}
            {subcategory ? ` / ${activeCategory?.subcategories?.find((s) => s.id === subcategory)?.label}` : ''}
          </p>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-5">
          {results.length === 0 ? (
            <p className="text-sm text-[var(--color-dim)]">
              Nothing matches. Adult categories are hidden until you enable them in Settings.
            </p>
          ) : (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(19rem,1fr))] gap-3">
              {results.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelected(p)}
                  className={`rounded-lg border p-3.5 text-left transition hover:border-[var(--color-accent)] ${
                    selected?.id === p.id
                      ? 'border-[var(--color-accent)] bg-[var(--color-panel)]'
                      : 'border-[var(--color-edge)] bg-[var(--color-panel)]'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <h3 className="min-w-0 flex-1 text-sm font-medium">{p.title}</h3>
                    {favorites.includes(p.id) && <span className="text-xs text-[var(--color-accent)]">★</span>}
                  </div>
                  <p className="mt-1.5 line-clamp-2 text-xs text-[var(--color-dim)]">{p.description}</p>
                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {p.variables && p.variables.length > 0 && (
                      <span className="rounded bg-[var(--color-surface)] px-1.5 py-0.5 text-[10px] text-[var(--color-accent)]">
                        template · {p.variables.length}
                      </span>
                    )}
                    {p.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded bg-[var(--color-surface)] px-1.5 py-0.5 text-[10px] text-[var(--color-dim)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {selected && <PromptDetail prompt={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
