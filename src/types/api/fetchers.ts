export type HttpMethod = 'GET' | 'POST';

export interface HttpClient {
  get: <T = unknown>(endpoint: string, revalidate?: number | false) => Promise<T>;
  post: <T = unknown>(endpoint: string, revalidate?: number | false) => Promise<T>;
}
