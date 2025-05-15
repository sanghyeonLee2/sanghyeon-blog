'use client';

import { SITE_METADATA } from '@/constants/metaData';
import { ScrollText } from 'lucide-react';

export default function Banner() {
  return (
    <section className="rounded-2xl w-full">
      <div className="mx-auto py-8 flex items-center gap-4">
        <ScrollText className="w-12 h-12 sm:w-16 sm:h-16 shrink-0" />
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-[0.05em]">
            {SITE_METADATA.BLOG_INTRO}
          </h1>
          <p className="mt-1 text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            {SITE_METADATA.BLOG_DESCRIPTION}
          </p>
        </div>
      </div>
    </section>
  );
}
