import { SITE_METADATA } from '@/constants/metaData';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${SITE_METADATA.VERCEL_DEPLOY_URL}/sitemap.xml`,
    host: SITE_METADATA.VERCEL_DEPLOY_URL,
  };
}
