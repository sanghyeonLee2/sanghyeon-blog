import { ExtendedRecordMap } from 'notion-types';
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}
export interface PostRecordMap {
  id: string;
  recordMap: ExtendedRecordMap;
}
