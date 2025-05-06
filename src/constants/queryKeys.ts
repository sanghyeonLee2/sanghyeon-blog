export const QUERY_KEYS = {
  USER: {
    ALL: ['user'],
    DETAIL: (id: string) => ['user', id],
  },
  POSTS: {
    ALL: ['posts'],
  },
};
