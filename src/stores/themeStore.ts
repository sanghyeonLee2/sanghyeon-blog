import { create } from 'zustand';

type Theme = 'light' | 'dark';

type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

// themeStore.ts
export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: 'dark',
  setTheme: (theme) => {
    set({ theme });
    const body = document.body;
    body.classList.remove('dark');
    if (theme === 'dark') body.classList.add('dark');
    document.cookie = `theme=${theme}; path=/`;
  },
  toggleTheme: () => {
    const newTheme = get().theme === 'dark' ? 'light' : 'dark';
    set({ theme: newTheme });
    document.body.classList.toggle('dark', newTheme === 'dark');
    document.cookie = `theme=${newTheme}; path=/`;
  },
}));
