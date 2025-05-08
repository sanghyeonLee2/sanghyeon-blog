import { DEFAULTS } from '@/constants/defaults';
import { Post, NotionPostsResponse } from '@/types/domain/post';
import type { PostSlugParam } from '@/types/domain/post';

export const getPublishedSlugParams = (posts: Post[]): PostSlugParam[] =>
  posts.filter((post) => post.published).map((post) => ({ slug: post.slug }));

export const isNotionNotFoundError = (error: unknown): boolean =>
  error instanceof Error && error.message.includes('Notion page not found');

export const parsePost = (result: NotionPostsResponse['results'][number]): Post => ({
  id: result.id,
  slug: result.properties.slug.formula.string,
  date: result.properties.date.date?.start ?? DEFAULTS.EMPTY_STRING,
  cover: result.properties.cover?.files?.at(0)?.file?.url ?? DEFAULTS.PLACEHOLDER_STRING,
  summary: result.properties.summary?.rich_text.at(0)?.plain_text ?? DEFAULTS.EMPTY_STRING,
  tags: result.properties.tags.multi_select,
  published: result.properties.published.checkbox,
  title: result.properties.title?.title.at(0)?.plain_text ?? DEFAULTS.TITLE,
});

export const findPostBySlug = (posts: Post[], slug: string): Post | undefined =>
  posts.find((post) => post.slug === slug);
