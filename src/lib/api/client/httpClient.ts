import type { HttpClient } from '@/types/api/fetchers';
import request from '../server/request.server';

export const httpClient: HttpClient = {
  get: (url, options) => request('GET', url, undefined, options),
  post: (url, data, options) => request('POST', url, data, options),
  put: (url, data, options) => request('PUT', url, data, options),
  patch: (url, data, options) => request('PATCH', url, data, options),
  delete: (url, data, options) => request('DELETE', url, data, options),
};
