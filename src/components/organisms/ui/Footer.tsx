'use client';

import { SITE_METADATA } from '@/constants/metaData';

export default function Footer() {
  return (
    <footer className="flex items-center justify-between w-full h-18 p-content">
      <small className="text-[10px] sm:text-xs text-subtle">{SITE_METADATA.COPY_RIGHT}</small>
      <a href={SITE_METADATA.MY_GITHUB_URL} className="hover-opacity flex items-center">
        <small className="text-[10px] sm:text-xs text-subtle">{SITE_METADATA.LINK_TO_GITHUB}</small>
      </a>
    </footer>
  );
}
