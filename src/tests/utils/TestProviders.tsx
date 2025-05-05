// tests/utils/TestProviders.tsx
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function TestProviders({ children }: { children: ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
//리액트 쿼리, Recoil 등 context가 필요한 컴포넌트를 테스트할 때 래핑용으로 사용합니다.
