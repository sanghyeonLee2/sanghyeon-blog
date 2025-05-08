export interface FallbackUIProps {
  error: Error;
  onRetry?: () => void;
}

export interface ErrorPageProps {
  error: Error;
}
