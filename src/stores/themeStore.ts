import { create } from 'zustand';

type Theme = 'light' | 'dark';

type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: 'light', // SSR-safe 기본값
  setTheme: (theme) => {
    set({ theme });
    const root = document.documentElement;
    root.classList.remove('dark');
    if (theme === 'dark') root.classList.add('dark');
    document.cookie = `theme=${theme}; path=/`;
  },
  toggleTheme: () => {
    const newTheme = get().theme === 'dark' ? 'light' : 'dark';
    set({ theme: newTheme });
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    document.cookie = `theme=${newTheme}; path=/`;
  },
}));
