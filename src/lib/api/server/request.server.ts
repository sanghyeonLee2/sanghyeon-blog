import { CONFIG } from '@/constants/config';
import type { HttpMethod, FetcherOptions } from '@/types/api/fetchers';
import { parseErrorResponse } from '../../utils/parseErrorResponse';
import { isCritical } from '@/utils/typeGuards';
import showErrorToast from '../../ui/showErrorToast';
import { createCustomError } from '../../utils/createCustomError';
import { checkApiEnv } from '../../utils/checkApiEnv';
import { buildHeaders } from '../../utils/buildHeaders';
import { buildURL } from '../../utils/buildURL';

const { token: NOTION_TOKEN } = checkApiEnv();

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

  try {
    const res = await fetch(buildURL(url), fetchOptions);

    if (!res.ok) {
      const parsedError = await parseErrorResponse(res);

      if (isCritical(parsedError)) {
        throw createCustomError(parsedError.status, parsedError.message);
      }

      showErrorToast(parsedError.status);
    }

    return await res.json();
  } finally {
    clearTimeout(timeoutId);
  }
}

export default request;
