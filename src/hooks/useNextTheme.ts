'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type UseNextThemeReturn = {
  setTheme: (theme: string) => void;
  mounted: boolean;
  currentTheme: string | undefined;
  isDark: boolean;
};

export function useNextTheme(): UseNextThemeReturn {
  const { resolvedTheme, setTheme, theme: currentTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    setTheme,
    mounted,
    currentTheme,
    isDark: resolvedTheme === 'dark',
  };
}
