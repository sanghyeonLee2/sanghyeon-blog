import type { CustomError } from '@/types/api/errors';

export function isCustomError(error: unknown): error is CustomError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'status' in error &&
    typeof (error as { status?: unknown }).status === 'number'
  );
}

export function isCritical(error: unknown): boolean {
  if (!isCustomError(error)) return true;

  const status = error.status;
  return status === 500 || status === 403;
}
