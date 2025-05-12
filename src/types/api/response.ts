import { MultiSelectTags } from '../domain/post';
import { ExtendedRecordMap } from 'notion-types';

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}
export interface PostRecordMap {
  additionalPostData: AdditionalPostData;
  recordMap: ExtendedRecordMap;
}

export interface AdditionalPostData {
  id: string;
  postedDate: string;
  title: string;
  cover: string | null;
  tags: MultiSelectTags[];
}
