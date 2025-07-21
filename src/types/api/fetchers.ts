export type HttpMethod = 'GET' | 'POST';

// export interface FetcherOptions extends Omit<RequestInit, 'method' | 'body'> {
//   timeout?: number;
//   headers?: HeadersInit;
// }

export interface HttpClient {
  get: <T = unknown>(endpoint: string) => Promise<T>;
  post: <T = unknown>(endpoint: string, data?: unknown) => Promise<T>;
}
