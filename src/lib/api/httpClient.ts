import type { HttpClient } from '@/types/api/fetchers';
import request from './request';

export const httpClient: HttpClient = {
  get: ({ endpoint, revalidate }) => request({ method: 'GET', endpoint, revalidate }),
  post: ({ endpoint, revalidate }) => request({ method: 'POST', endpoint, revalidate }),
};
