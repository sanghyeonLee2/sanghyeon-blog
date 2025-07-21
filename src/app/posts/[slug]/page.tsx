import { getPostBySlug } from '@/services/blogPost';
import 'react-notion-x/src/styles.css'; // 기본 스타일
import 'prismjs/themes/prism-tomorrow.css'; // 코드 블록 스타일 (선택)
import NotionPost from '@/components/templates/NotionPost';
import { getPostList } from '@/services/blogPost';
import { getPublishedSlugParams } from '@/services/utils';
import type { PostSlugParam } from '@/types/domain/post';

export const revalidate = 1800;

export const dynamicParams = true;

export async function generateStaticParams(): Promise<PostSlugParam[]> {
  const posts = await getPostList();
  return getPublishedSlugParams(posts);
}

export default async function PostPage({ params }: { params: Promise<PostSlugParam> }) {
  const { slug } = await params;
  const { recordMap, additionalPostData } = await getPostBySlug(slug);
  return <NotionPost recordMap={recordMap} additionalPostData={additionalPostData} />;
}
