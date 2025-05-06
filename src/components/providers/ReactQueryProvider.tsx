'use client';

import customQueryClient from '@/lib/query/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

export default function ReactQueryProvider({ children }: { children: ReactNode }) {
  return <QueryClientProvider client={customQueryClient}>{children}</QueryClientProvider>;
}
