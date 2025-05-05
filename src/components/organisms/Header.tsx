// components/organisms/Header.tsx
'use client';

import ThemeToggle from '@/components/atoms/ThemeToggle';
import Logo from '../atoms/Logo';

export default function Header() {
  return (
    <header className="w-full section-padding sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <Logo />
        <ThemeToggle />
      </div>
    </header>
  );
}
