import { createCustomError } from './createCustomError';

export function withTimeout<T>(promise: Promise<T>, timeoutMs = 5000): Promise<T> {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) => setTimeout(() => reject(createCustomError(408)), timeoutMs)),
  ]);
}
