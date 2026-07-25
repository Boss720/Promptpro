import { useEffect } from 'react';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { useStore } from './store';
import Library from './pages/Library';
import Enhancer from './pages/Enhancer';
import MyPrompts from './pages/MyPrompts';
import Settings from './pages/Settings';

const TABS = [
  { to: '/library', label: 'Library' },
  { to: '/enhancer', label: 'Enhancer' },
  { to: '/mine', label: 'My Prompts' },
  { to: '/settings', label: 'Settings' },
];

export default function App() {
  const theme = useStore((s) => s.theme);
  const toggleTheme = useStore((s) => s.toggleTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  return (
    <div className="flex h-full flex-col">
      <header className="flex shrink-0 items-center gap-6 border-b border-[var(--color-edge)] px-5 py-3">
        <span className="text-sm font-semibold tracking-tight">Prompt Library</span>
        <nav className="flex gap-1">
          {TABS.map((t) => (
            <NavLink
              key={t.to}
              to={t.to}
              className={({ isActive }) =>
                `rounded-md px-3 py-1.5 text-sm transition ${
                  isActive
                    ? 'bg-[var(--color-panel)] text-[var(--color-accent)]'
                    : 'text-[var(--color-dim)] hover:text-[var(--color-ink)]'
                }`
              }
            >
              {t.label}
            </NavLink>
          ))}
        </nav>
        <button
          onClick={toggleTheme}
          className="ml-auto rounded-md border border-[var(--color-edge)] px-2.5 py-1 text-xs text-[var(--color-dim)] hover:text-[var(--color-ink)]"
          title="Toggle theme"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </header>

      <main className="min-h-0 flex-1">
        <Routes>
          <Route path="/" element={<Navigate to="/library" replace />} />
          <Route path="/library" element={<Library />} />
          <Route path="/enhancer" element={<Enhancer />} />
          <Route path="/mine" element={<MyPrompts />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/library" replace />} />
        </Routes>
      </main>
    </div>
  );
}
