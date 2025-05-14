'use client';

import ErrorFallback from '@/components/templates/ErrorFallback';

interface ErrorPageProps {
  error: Error;
}
export default function Error({ error }: ErrorPageProps) {
  return <ErrorFallback error={error} />;
}
