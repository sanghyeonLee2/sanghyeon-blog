'use client';

import Logo from '../../atoms/Logo/Logo';
import ThemeDropdown from '../../molecules/dropdown/ThemeDropdown/ThemeDropdown';

export default function Header() {
  return (
    <header className="flex-center-between w-full z-50 h-18 p-content">
      <Logo />
      <ThemeDropdown />
    </header>
  );
}
