'use client';

import Logo from '../../atoms/Logo/Logo';
import ThemeDropdown from '../../molecules/dropdown/ThemeDropdown/ThemeDropdown';

export default function Header() {
  return (
    <header
      className="bg-[var(--color-bg)] border-b border-neutral-200 dark:border-slate-700
 fixed top-0 left-0 right-0 w-full z-50 h-18 duration-100 ease-in"
    >
      <div className="flex-center-between max-w-4xl mx-auto p-content">
        <Logo />
        <ThemeDropdown />
      </div>
    </header>
  );
}
