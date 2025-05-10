'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@/stores/themeStore';
import { getCookie } from '@/utils/cookie';
export interface UseThemeResult {
  isDark: boolean;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  useEffect(() => {
    const cookie = getCookie('theme');
    if (cookie === 'dark' || cookie === 'light') {
      setTheme(cookie);
    }
  }, [setTheme]);

  return { isDark: theme === 'dark', toggleTheme };
}
