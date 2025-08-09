const NOTION_DATABASE_ID = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

export const API_URLS = {
  POST: {
    ALL: `/databases/${NOTION_DATABASE_ID}/query`,
  },
  GET: {
    IMAGE_PROXY: (url: string, bustCache = false) =>
      `/api/image-proxy?url=${encodeURIComponent(url)}${bustCache ? `&ts=${Date.now()}` : ''}`,
  },
};
