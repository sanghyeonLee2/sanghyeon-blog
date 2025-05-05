import { CONFIG } from '@/constants/config';
import type { HttpMethod, FetcherOptions } from '@/types/fetchers';
import { getCookie } from '@/utils/cookie';

const DEFAULT_TIMEOUT = CONFIG.DEFAULT_TIMEOUT ?? 5000;
const baseURL = process.env.NEXT_PUBLIC_API_URL || '';

function buildURL(url: string) {
  return `${baseURL}${url}`;
}

async function request<T>(
  method: HttpMethod,
  url: string,
  data?: unknown,
  options: FetcherOptions = {},
): Promise<T> {
  const { timeout = DEFAULT_TIMEOUT, headers, ...rest } = options;
  const controller = new AbortController();

  const accessToken = getCookie('access-token');
  const finalHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...(headers || {}),
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  };

  const fetchOptions: RequestInit = {
    method,
    headers: finalHeaders,
    signal: controller.signal,
    ...rest,
    body: data ? JSON.stringify(data) : undefined,
  };

  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(buildURL(url), fetchOptions);
    if (!res.ok) {
      const error = await res.json().catch(() => ({}));
      throw new Error(error.message || `HTTP error ${res.status}`);
    }
    return await res.json();
  } finally {
    clearTimeout(timeoutId);
  }
}

export const fetcher: {
  get: <T = unknown>(url: string, options?: FetcherOptions) => Promise<T>;
  post: <T = unknown>(url: string, data?: unknown, options?: FetcherOptions) => Promise<T>;
  put: <T = unknown>(url: string, data?: unknown, options?: FetcherOptions) => Promise<T>;
  patch: <T = unknown>(url: string, data?: unknown, options?: FetcherOptions) => Promise<T>;
  delete: <T = unknown>(url: string, data?: unknown, options?: FetcherOptions) => Promise<T>;
} = {
  get: (url, options) => request('GET', url, undefined, options),
  post: (url, data, options) => request('POST', url, data, options),
  put: (url, data, options) => request('PUT', url, data, options),
  patch: (url, data, options) => request('PATCH', url, data, options),
  delete: (url, data, options) => request('DELETE', url, data, options),
};
