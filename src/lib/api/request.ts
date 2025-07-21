import type { HttpMethod } from '@/types/api/fetchers';
import CustomError from '../error/CustomError';
import { buildHeaders, getUnknownErrorMessage } from '@/lib/utils';

const NOTION_API_URL = process.env.NEXT_PUBLIC_NOTION_API_URL;
const DEFAULT_TIMEOUT = Number(process.env.VITE_DEFAULT_TIMEOUT) || 5000;

async function request<T>(
  method: HttpMethod,
  endpoint: string,
  //data?: unknown,
): Promise<T> {
  const controller = new AbortController();

  const fetchOptions: RequestInit = {
    method,
    headers: buildHeaders(),
    signal: controller.signal,
    //body: data ? JSON.stringify(data) : undefined,
  };

  const timeoutId = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT);
  const buildURL = `${NOTION_API_URL}${endpoint}`;

  try {
    const res = await fetch(buildURL, fetchOptions);

    if (!res.ok) {
      const errorBody = await res.json().catch(() => ({}));
      const rawMessage = errorBody.message;

      throw new CustomError(res.status, rawMessage);
    }

    return await res.json();
  } catch (err: unknown) {
    if (err instanceof CustomError) throw err;

    const rawMessage = getUnknownErrorMessage(err);
    console.error('Fetch Error:', rawMessage);

    throw new CustomError(500, rawMessage);
  } finally {
    clearTimeout(timeoutId);
  }
}

export default request;
