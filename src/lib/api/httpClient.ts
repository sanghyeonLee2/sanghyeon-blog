import type { HttpClient } from '@/types/api/fetchers';
import request from './request';

export const httpClient: HttpClient = {
  get: ({ endpoint, withNotionApi, revalidate }) =>
    request({ method: 'GET', endpoint, revalidate, withNotionApi }),
  post: ({ endpoint, withNotionApi, revalidate }) =>
    request({ method: 'POST', endpoint, revalidate, withNotionApi }),
};
