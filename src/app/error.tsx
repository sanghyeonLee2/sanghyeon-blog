// app/error.tsx
'use client';
import FallbackUI from '@/components/organisms/FallbackUI';
import { ErrorPageProps } from '@/types/props/errorProps';

export default function Error({ error }: ErrorPageProps) {
  return <FallbackUI error={error} />;
}
