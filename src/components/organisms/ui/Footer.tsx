'use client';

import { SITE_METADATA } from '@/constants/metaData';
import { Github as GithubIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="flex items-center justify-between w-full h-12 px-content py-3 mt-10">
      <small className="text-[0.625rem] sm:text-xs text-subtle">{SITE_METADATA.COPY_RIGHT}</small>
      <a
        href={SITE_METADATA.MY_GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hover-opacity"
      >
        <GithubIcon height={18} width={18} />
      </a>
    </footer>
  );
}
