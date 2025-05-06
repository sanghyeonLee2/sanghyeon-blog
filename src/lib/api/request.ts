import { CONFIG } from '@/constants/config';
import type { HttpMethod, FetcherOptions } from '@/types/api/fetchers';
const baseURL = process.env.NEXT_PUBLIC_NOTION_API_URL || '';
const NOTION_TOKEN = process.env.NEXT_PUBLIC_NOTION_TOKEN;

const buildURL = (url: string) => `${baseURL}${url}`;

async function request<T>(
  method: HttpMethod,
  url: string,
  data?: unknown,
  options: FetcherOptions = {},
): Promise<T> {
  const { timeout = CONFIG.DEFAULT_TIMEOUT, headers, ...rest } = options;
  const controller = new AbortController();

  const finalHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...(headers || {}),
    Authorization: `Bearer ${NOTION_TOKEN}`,
    'Notion-Version': '2022-06-28',
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
      throw {
        status: res.status,
        message: error.message || `HTTP error ${res.status}`,
      };
    }
    return await res.json();
  } finally {
    clearTimeout(timeoutId);
  }
}

export default request;
