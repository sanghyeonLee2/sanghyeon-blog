const NOTION_DATABASE_ID = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

export const API_URLS = {
  AUTH: {
    SIGN_IN: '/auth/signin',
    SIGN_UP: '/auth/signup',
    LOG_OUT: '/auth/logout',
    ME: '/auth/me',
  },
  POST: {
    ALL: `/databases/${NOTION_DATABASE_ID}/query`,
  },
};
