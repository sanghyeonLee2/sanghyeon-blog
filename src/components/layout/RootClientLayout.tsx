'use client';
import { useErrorStore } from '@/stores/useErrorStore';
import GlobalErrorBoundary from '@/components/providers/GlobalErrorBoundary';
import ReactQueryProvider from '@/components/providers/ReactQueryProvider';
import Header from '@/components/organisms/Header';
export default function RootClientLayout({ children }: { children: React.ReactNode }) {
  const error = useErrorStore((state) => state.error);

  if (error) throw error;

  return (
    <div className="layout-wrapper">
      <Header />
      <GlobalErrorBoundary>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </GlobalErrorBoundary>
    </div>
  );
}
