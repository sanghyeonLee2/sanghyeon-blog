'use client';

import { useTheme } from '@/hooks/useTheme';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
      w-10 h-10 flex-center
      rounded-full transition-all duration-300 ease-in-out
      bg-gray-200 dark:bg-zinc-800
      shadow-md dark:shadow-lg
    "
    >
      <span className="text-lg transition-transform duration-300">
        {theme === 'dark' ? (
          <Moon className="w-5 h-5 text-yellow-300" />
        ) : (
          <Sun className="w-5 h-5 text-yellow-500" />
        )}
      </span>
    </button>
  );
}
