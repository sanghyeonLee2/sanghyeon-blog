// components/organisms/Header.tsx
'use client';

import ThemeToggle from '@/components/atoms/ThemeToggle';
import Logo from '../atoms/Logo';

export default function Header() {
  return (
    <header className="flex items-center justify-between max-w-4xl w-full z-50 h-18 section-padding">
      <Logo />
      <ThemeToggle />
    </header>
  );
}
