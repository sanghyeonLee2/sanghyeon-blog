import { API_URLS } from '@/constants/apiUrls';
import { httpClient } from '@/lib/api/httpClient';
import { NotionPostsResponse, Post } from '@/types/domain/post';
import { PostRecordMap } from '@/types/api/response';
import { notFound } from 'next/navigation';
import CustomError from '@/lib/error/CustomError';
import { findPostBySlug, isNotionNotFoundError, parsePost } from './utils';
import { NotionAPI } from 'notion-client';

export const notion = new NotionAPI();

export const getPostList = async (): Promise<Post[]> => {
  const { results } = await httpClient.post<NotionPostsResponse>({ endpoint: API_URLS.POST.ALL });
  return results.map(parsePost).filter((post) => post.published);
};

export const getPostBySlug = async (slug: string): Promise<PostRecordMap> => {
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
};

export const getNotionPostPage = async (id: string) => {
  try {
    return await notion.getPage(id);
  } catch (err) {
    if (isNotionNotFoundError(err)) notFound();
    throw new CustomError(500, err instanceof Error ? err.message : undefined);
  }
};
