import { createCustomError } from './createCustomError';

export function checkApiEnv() {
  const baseURL = process.env.NEXT_PUBLIC_NOTION_API_URL;
  const token = process.env.NEXT_PUBLIC_NOTION_TOKEN;

  if (!baseURL || !token) {
    throw createCustomError(500);
  }

  return { baseURL, token };
}
