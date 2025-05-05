'use client';

import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import type { ReactNode } from 'react';
import FallbackUI from '../organisms/FallbackUI';

export default function LocalErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <ReactErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <FallbackUI error={error} onRetry={resetErrorBoundary} />
      )}
    >
      {children}
    </ReactErrorBoundary>
  );
}
