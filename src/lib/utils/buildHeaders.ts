export const buildHeaders = (token: string, customHeaders?: HeadersInit): HeadersInit => ({
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: `Bearer ${token}`,
  'Notion-Version': '2022-06-28',
  ...(customHeaders || {}),
});
