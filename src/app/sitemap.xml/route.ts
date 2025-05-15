import { SITE_METADATA } from '@/constants/metaData';
import { getPostList } from '@/services/post/post';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPostList();

  return [
    {
      url: SITE_METADATA.VERCEL_DEPLOY_URL,
      lastModified: new Date().toISOString(),
    },
    ...posts.map((post) => ({
      url: `${SITE_METADATA.VERCEL_DEPLOY_URL}/posts/${post.slug}`,
      lastModified: post.date,
    })),
  ];
}
