import type { HttpClient } from '@/types/api/fetchers';
import request from './request';

export const httpClient: HttpClient = {
  get: (endpoint) => request('GET', endpoint),
  post: (endpoint) => request('POST', endpoint),
};
