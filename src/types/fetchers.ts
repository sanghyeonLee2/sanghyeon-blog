// src/types/fetcher.ts
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface FetcherOptions extends Omit<RequestInit, 'method' | 'body'> {
  timeout?: number;
}
