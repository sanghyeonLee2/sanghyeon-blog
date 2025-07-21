const NOTION_TOKEN = process.env.NEXT_PUBLIC_NOTION_TOKEN;

export const buildHeaders = (): HeadersInit => ({
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: `Bearer ${NOTION_TOKEN}`,
  'Notion-Version': '2022-06-28',
});

export const getUnknownErrorMessage = (err: unknown) => (err as Error)?.message ?? '알 수 없음';
