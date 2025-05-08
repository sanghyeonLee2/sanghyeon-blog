'use client';

import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import FallbackUI from '../organisms/FallbackUI';

export default function LocalErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ReactErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <FallbackUI error={error} onRetry={resetErrorBoundary} />
      )}
      onError={(error, info) => {
        console.error('Local Error:', error);
        console.error('Stack Trace:', info?.componentStack);
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}
