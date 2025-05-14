// components/organisms/Header.tsx
'use client';

import { DEFAULTS } from '@/constants/defaults';

export default function Footer() {
  return (
    <footer className="flex items-center justify-between w-full h-18 p-content">
      <small>{DEFAULTS.COPY_RIGHT}</small>
      <a href={DEFAULTS.MY_GITHUB_URL} className="hover-opacity">
        <small>{DEFAULTS.LINK_TO_GITHUB}</small>
      </a>
    </footer>
  );
}
