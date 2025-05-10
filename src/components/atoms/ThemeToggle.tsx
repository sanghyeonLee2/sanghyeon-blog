'use client';

import { useTheme } from '@/hooks/useTheme';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
      h-full 
    "
    >
      <span className="transition-transform duration-300 text-yellow-500 hover-opacity">
        {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
      </span>
    </button>
  );
}
