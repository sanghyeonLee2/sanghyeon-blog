export type HttpMethod = 'GET' | 'POST';

export interface MethodParams {
  endpoint: string;
  revalidate?: number | false;
}
export interface HttpClient {
  get: <T = unknown>({ endpoint, revalidate }: MethodParams) => Promise<T>;
  post: <T = unknown>({ endpoint, revalidate }: MethodParams) => Promise<T>;
}
