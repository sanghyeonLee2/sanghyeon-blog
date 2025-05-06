import type { Fetcher } from '@/types/api/fetchers';
import request from './request';

export const fetcher: Fetcher = {
  get: (url, options) => request('GET', url, undefined, options),
  post: (url, data, options) => request('POST', url, data, options),
  put: (url, data, options) => request('PUT', url, data, options),
  patch: (url, data, options) => request('PATCH', url, data, options),
  delete: (url, data, options) => request('DELETE', url, data, options),
};
