import { useEffect, useMemo, useRef, useState } from 'react';
import Fuse from 'fuse.js';
import { CATEGORIES } from '../data/categories';
import { getPrompts } from '../data';
import type { Category, Prompt } from '../data/types';
import { useStore } from '../store';
import PromptDetail from '../components/PromptDetail';

/** Custom prompts live under a category that is not part of the shipped data. */
const CUSTOM_CATEGORY: Category = {
  id: 'custom',
  label: 'My Prompts',
  description: 'Prompts you created or imported.',
  icon: 'Star',
};

export default function Library() {
  const adultUnlocked = useStore((s) => s.adultUnlocked);
  const custom = useStore((s) => s.custom);
  const favorites = useStore((s) => s.favorites);

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string | null>(null);
  const [subcategory, setSubcategory] = useState<string | null>(null);
  const [favOnly, setFavOnly] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [cursor, setCursor] = useState(0);
  const searchRef = useRef<HTMLInputElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const all = useMemo(() => [...getPrompts(adultUnlocked), ...custom], [adultUnlocked, custom]);

  const categories = useMemo(() => {
    const base = CATEGORIES.filter((c) => adultUnlocked || !c.adult);
    return custom.length ? [...base, CUSTOM_CATEGORY] : base;
  }, [adultUnlocked, custom.length]);

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

  // Hold the id, not the object: an edited or deleted custom prompt must not
  // leave a stale copy pinned open in the detail panel.
  const selected: Prompt | null = useMemo(
    () => (selectedId ? (all.find((p) => p.id === selectedId) ?? null) : null),
    [all, selectedId],
  );

  const activeCategory = categories.find((c) => c.id === category);

  // A changed result set invalidates the cursor.
  useEffect(() => setCursor(0), [query, category, subcategory, favOnly]);

  useEffect(() => {
    gridRef.current?.querySelector(`[data-idx="${cursor}"]`)?.scrollIntoView({ block: 'nearest' });
  }, [cursor]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = document.activeElement?.tagName;
      const typing = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';

      if (e.key === 'Escape') {
        if (selectedId) setSelectedId(null);
        else if (query) setQuery('');
        return;
      }

      if (e.key === '/' && !typing) {
        e.preventDefault();
        searchRef.current?.focus();
        return;
      }

      // Arrow keys walk the result grid. Inside the search box only the
      // vertical keys are taken, so left/right still edit the text.
      const inSearch = document.activeElement === searchRef.current;
      if (typing && !inSearch) return;

      if (e.key === 'ArrowDown' || (e.key === 'ArrowRight' && !inSearch)) {
        if (!results.length) return;
        e.preventDefault();
        setCursor((c) => Math.min(c + 1, results.length - 1));
      } else if (e.key === 'ArrowUp' || (e.key === 'ArrowLeft' && !inSearch)) {
        if (!results.length) return;
        e.preventDefault();
        setCursor((c) => Math.max(c - 1, 0));
      } else if (e.key === 'Enter' && results[cursor]) {
        e.preventDefault();
        setSelectedId(results[cursor].id);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [results, cursor, selectedId, query]);

  return (
    <div className="flex h-full">
      <nav
        aria-label="Categories"
        className="w-60 shrink-0 overflow-y-auto border-r border-[var(--color-edge)] px-3 py-4"
      >
        <button
          onClick={() => {
            setCategory(null);
            setSubcategory(null);
          }}
          aria-pressed={category === null}
          className={`w-full rounded-md px-2.5 py-1.5 text-left text-sm ${
            category === null ? 'bg-[var(--color-panel)] text-[var(--color-accent)]' : 'text-[var(--color-dim)]'
          }`}
        >
          All ({all.length})
        </button>
        <button
          onClick={() => setFavOnly((v) => !v)}
          aria-pressed={favOnly}
          className={`mt-0.5 w-full rounded-md px-2.5 py-1.5 text-left text-sm ${
            favOnly ? 'bg-[var(--color-panel)] text-[var(--color-accent)]' : 'text-[var(--color-dim)]'
          }`}
        >
          {'★'} Favorites ({favorites.length})
        </button>

        <div className="mt-3 space-y-0.5">
          {categories.map((c) => (
            <div key={c.id}>
              <button
                onClick={() => {
                  setCategory(c.id === category ? null : c.id);
                  setSubcategory(null);
                }}
                aria-pressed={category === c.id}
                title={c.description}
                className={`w-full rounded-md px-2.5 py-1.5 text-left text-sm ${
                  category === c.id
                    ? 'bg-[var(--color-panel)] text-[var(--color-accent)]'
                    : 'text-[var(--color-dim)] hover:text-[var(--color-ink)]'
                }`}
              >
                {c.adult && <span className="mr-1 text-[var(--color-heat)]">{'●'}</span>}
                {c.label}
              </button>
              {category === c.id && c.subcategories && (
                <div className="mt-0.5 ml-2 border-l border-[var(--color-edge)] pl-2">
                  {c.subcategories.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSubcategory(s.id === subcategory ? null : s.id)}
                      aria-pressed={subcategory === s.id}
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
            type="search"
            aria-label="Search prompts"
            placeholder={'Search prompts…  (/ to focus, ↑↓ to move, Enter to open)'}
            className="w-full rounded-md border border-[var(--color-edge)] bg-[var(--color-panel)] px-3 py-2 text-sm outline-none focus:border-[var(--color-accent)]"
          />
          <p aria-live="polite" className="mt-2 text-xs text-[var(--color-dim)]">
            {results.length} result{results.length === 1 ? '' : 's'}
            {activeCategory ? ` in ${activeCategory.label}` : ''}
            {subcategory ? ` / ${activeCategory?.subcategories?.find((s) => s.id === subcategory)?.label}` : ''}
            {favOnly ? ' · favorites only' : ''}
          </p>
        </div>

        <div ref={gridRef} className="min-h-0 flex-1 overflow-y-auto p-5">
          {results.length === 0 ? (
            <div className="text-sm text-[var(--color-dim)]">
              <p>Nothing matches.</p>
              {(query || category || subcategory || favOnly) && (
                <button
                  onClick={() => {
                    setQuery('');
                    setCategory(null);
                    setSubcategory(null);
                    setFavOnly(false);
                  }}
                  className="mt-2 rounded-md border border-[var(--color-edge)] px-3 py-1.5 text-sm text-[var(--color-ink)]"
                >
                  Clear filters
                </button>
              )}
              {!adultUnlocked && (
                <p className="mt-3 text-xs">Adult categories stay hidden until you enable them in Settings.</p>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(19rem,1fr))] gap-3">
              {results.map((p, i) => (
                <button
                  key={p.id}
                  data-idx={i}
                  onClick={() => {
                    setSelectedId(p.id);
                    setCursor(i);
                  }}
                  className={`rounded-lg border bg-[var(--color-panel)] p-3.5 text-left transition hover:border-[var(--color-accent)] ${
                    selectedId === p.id
                      ? 'border-[var(--color-accent)]'
                      : i === cursor
                        ? 'border-[var(--color-dim)]'
                        : 'border-[var(--color-edge)]'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <h3 className="min-w-0 flex-1 text-sm font-medium">{p.title}</h3>
                    {favorites.includes(p.id) && (
                      <span className="text-xs text-[var(--color-accent)]">{'★'}</span>
                    )}
                  </div>
                  <p className="mt-1.5 line-clamp-2 text-xs text-[var(--color-dim)]">{p.description}</p>
                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {p.variables && p.variables.length > 0 && (
                      <span className="rounded bg-[var(--color-surface)] px-1.5 py-0.5 text-[10px] text-[var(--color-accent)]">
                        template {'·'} {p.variables.length}
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

      {selected && <PromptDetail prompt={selected} onClose={() => setSelectedId(null)} />}
    </div>
  );
}
