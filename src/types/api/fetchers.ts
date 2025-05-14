export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface FetcherOptions extends Omit<RequestInit, 'method' | 'body'> {
  timeout?: number;
  headers?: HeadersInit;
}

export interface HttpClient {
  get: <T = unknown>(url: string, options?: FetcherOptions) => Promise<T>;
  post: <T = unknown>(url: string, data?: unknown, options?: FetcherOptions) => Promise<T>;
  put: <T = unknown>(url: string, data?: unknown, options?: FetcherOptions) => Promise<T>;
  patch: <T = unknown>(url: string, data?: unknown, options?: FetcherOptions) => Promise<T>;
  delete: <T = unknown>(url: string, data?: unknown, options?: FetcherOptions) => Promise<T>;
}
