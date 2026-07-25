import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Prompt } from './data/types';
import type { ProviderConfig } from './lib/llm';
import { PRESETS } from './lib/llm';

type State = {
  /** Adult gate. Off by default; adult prompts are not merged into the library until true. */
  adultUnlocked: boolean;
  setAdultUnlocked: (v: boolean) => void;

  favorites: string[];
  toggleFavorite: (id: string) => void;

  custom: Prompt[];
  saveCustom: (p: Prompt) => void;
  deleteCustom: (id: string) => void;
  replaceCustom: (all: Prompt[]) => void;

  provider: ProviderConfig;
  setProvider: (p: Partial<ProviderConfig>) => void;

  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

const defaultProvider: ProviderConfig = {
  shape: PRESETS[0].shape,
  baseUrl: PRESETS[0].baseUrl,
  model: PRESETS[0].model,
  apiKey: '',
};

export const useStore = create<State>()(
  persist(
    (set) => ({
      adultUnlocked: false,
      setAdultUnlocked: (v) => set({ adultUnlocked: v }),

      favorites: [],
      toggleFavorite: (id) =>
        set((s) => ({
          favorites: s.favorites.includes(id) ? s.favorites.filter((f) => f !== id) : [...s.favorites, id],
        })),

      custom: [],
      saveCustom: (p) =>
        set((s) => ({
          custom: s.custom.some((c) => c.id === p.id)
            ? s.custom.map((c) => (c.id === p.id ? p : c))
            : [...s.custom, p],
        })),
      deleteCustom: (id) => set((s) => ({ custom: s.custom.filter((c) => c.id !== id) })),
      replaceCustom: (all) => set({ custom: all }),

      provider: defaultProvider,
      setProvider: (p) => set((s) => ({ provider: { ...s.provider, ...p } })),

      theme: 'dark',
      toggleTheme: () => set((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),
    }),
    { name: 'prompt-library' },
  ),
);
