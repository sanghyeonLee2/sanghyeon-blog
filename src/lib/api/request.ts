import type { HttpMethod, MethodParams } from '@/types/api/fetchers';
import CustomError from '../error/CustomError';
import { buildHeaders, getUnknownErrorMessage } from '@/lib/utils';
import { CONFIG } from '@/constants/config';

const NOTION_API_URL = process.env.NEXT_PUBLIC_NOTION_API_URL;
const DEFAULT_TIMEOUT = CONFIG.DEFAULT_TIMEOUT;
interface RequestOptions extends MethodParams {
  method: HttpMethod;
}

async function request<T>({ method, endpoint, revalidate }: RequestOptions): Promise<T> {
  const controller = new AbortController();

  const fetchOptions: RequestInit = {
    method,
    headers: buildHeaders(),
    signal: controller.signal,
    ...(revalidate !== undefined && { next: { revalidate } }),
    //body: data ? JSON.stringify(data) : undefined,
  };

  const timeoutId = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT);
  const buildURL = `${NOTION_API_URL}${endpoint}`;
  console.log('Request URL:', buildURL);

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
