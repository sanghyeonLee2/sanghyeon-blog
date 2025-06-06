import { API_URLS } from '@/constants/apiUrls';
import { httpClient } from '@/lib/api/client/httpClient';
import { NotionPostsResponse, Post } from '@/types/domain/post';
import { cache } from 'react';
import { notion } from '@/lib/notion/notionClient';
import { PostRecordMap } from '@/types/api/response';
import { notFound } from 'next/navigation';
import { createCustomError } from '@/lib/utils/createCustomError';
import { findPostBySlug, isNotionNotFoundError, parsePost } from './utils';
import { withTimeout } from '@/lib/utils/withTimeout';
import { CONFIG } from '@/constants/config';

export const getPostList = cache(async (): Promise<Post[]> => {
  const { results } = await httpClient.post<NotionPostsResponse>(API_URLS.POST.ALL);
  return results.map(parsePost).filter((post) => post.published);
});

export const getPostBySlug = cache(async (slug: string): Promise<PostRecordMap> => {
  const posts = await getPostList();
  const isMatchPostBySlug = findPostBySlug(posts, slug);
  if (!isMatchPostBySlug) notFound();
  const recordMap = await getNotionPostPage(isMatchPostBySlug.id);
  return {
    additionalPostData: {
      cover: isMatchPostBySlug.cover,
      title: isMatchPostBySlug.title,
      postedDate: isMatchPostBySlug.date,
      id: isMatchPostBySlug.id,
      tags: isMatchPostBySlug.tags,
    },
    recordMap,
  };
});

export const getNotionPostPage = async (id: string) => {
  try {
    return await withTimeout(notion.getPage(id), CONFIG.DEFAULT_TIMEOUT);
  } catch (err) {
    if (isNotionNotFoundError(err)) notFound();
    throw createCustomError(500, err instanceof Error ? err.message : undefined);
  }
};
