'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@/stores/themeStore';
import { getCookie } from '@/utils/cookie';

export function useTheme() {
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  useEffect(() => {
    const cookie = getCookie('theme');
    if (cookie === 'dark' || cookie === 'light') {
      setTheme(cookie);
    }
  }, [setTheme]);

  return { theme, toggleTheme };
}
