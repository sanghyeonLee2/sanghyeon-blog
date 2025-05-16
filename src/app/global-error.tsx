'use client';

import GlobalErrorFallback from '@/components/templates/GlobalErrorFallback';

export default function GlobalError({ error }: { error: Error }) {
  return <GlobalErrorFallback error={error} />;
}
