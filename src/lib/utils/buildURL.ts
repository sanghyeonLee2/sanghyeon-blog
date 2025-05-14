const baseURL = process.env.NEXT_PUBLIC_NOTION_API_URL!;

export const buildURL = (url: string) => `${baseURL}${url}`;
