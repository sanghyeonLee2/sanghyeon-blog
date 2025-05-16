import { SITE_METADATA } from '@/constants/metaData';
import { getPostList } from '@/services/post/post';

export async function GET() {
  const posts = await getPostList();

  const urls = posts.map((post) => {
    const loc = `${SITE_METADATA.VERCEL_DEPLOY_URL}/posts/${post.slug}`;
    const lastmod = new Date(post.date ?? new Date()).toISOString();
    return `
    <url>
      <loc>${loc}</loc>
      <lastmod>${lastmod}</lastmod>
    </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_METADATA.VERCEL_DEPLOY_URL}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
  ${urls.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600', // 1시간 캐시
    },
  });
}
