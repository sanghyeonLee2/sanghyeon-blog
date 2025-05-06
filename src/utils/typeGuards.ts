import type { CustomError } from '@/types/api/error';

export function isCustomError(error: unknown): error is CustomError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'status' in error &&
    typeof (error as { status?: unknown }).status === 'number'
  );
}

export function isCritical(error: unknown): boolean {
  if (!isCustomError(error)) return true; // 구조를 모르면 critical

  const status = error.status;
  return status === 500 || status === 403;
}
