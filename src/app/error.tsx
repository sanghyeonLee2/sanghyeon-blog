// app/error.tsx
'use client';
import ErrorFallback from '@/components/templates/ErrorFallback';
import { ErrorPageProps } from '@/types/props/errorProps';

export default function Error({ error }: ErrorPageProps) {
  return <ErrorFallback error={error} />;
}
