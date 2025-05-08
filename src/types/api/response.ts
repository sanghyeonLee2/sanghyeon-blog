import { notion } from '@/lib/notion/notionClient';
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}
export type PostRecordMap = Awaited<ReturnType<typeof notion.getPage>>;
