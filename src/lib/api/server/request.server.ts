import { CONFIG } from '@/constants/config';
import type { HttpMethod, FetcherOptions } from '@/types/api/fetchers';
import { createCustomError } from '../../utils/createCustomError';
import { buildHeaders } from '../../utils/buildHeaders';

const NOTION_TOKEN = process.env.NEXT_PUBLIC_NOTION_TOKEN;
const NOTION_API_URL = process.env.NEXT_PUBLIC_NOTION_API_URL;

async function request<T>(
  method: HttpMethod,
  url: string,
  data?: unknown,
  options: FetcherOptions = {},
): Promise<T> {
  const { timeout = CONFIG.DEFAULT_TIMEOUT, headers, ...rest } = options;
  const controller = new AbortController();

  const fetchOptions: RequestInit = {
    method,
    headers: buildHeaders(NOTION_TOKEN, headers),
    signal: controller.signal,
    ...rest,
    body: data ? JSON.stringify(data) : undefined,
  };

  const timeoutId = setTimeout(() => controller.abort(), timeout);
  const buildURL = `${NOTION_API_URL}${url}`;

  try {
    const res = await fetch(buildURL, fetchOptions);

    if (!res.ok) {
      const errorBody = await res.json().catch(() => ({}));
      const rawMessage = errorBody.message;

      throw createCustomError(res.status, rawMessage);
    }

    return await res.json();
  } finally {
    clearTimeout(timeoutId);
  }
}

export default request;
