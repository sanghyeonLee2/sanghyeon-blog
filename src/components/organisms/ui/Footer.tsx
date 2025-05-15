'use client';

import { SITE_METADATA } from '@/constants/metaData';

export default function Footer() {
  return (
    <footer className="flex items-center justify-between w-full h-18 p-content">
      <small>{SITE_METADATA.COPY_RIGHT}</small>
      <a href={SITE_METADATA.MY_GITHUB_URL} className="hover-opacity">
        <small>{SITE_METADATA.LINK_TO_GITHUB}</small>
      </a>
    </footer>
  );
}
