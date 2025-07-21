export const dynamic = 'force-static';

import HomeTemplate from '@/components/templates/Home';
import { getPostList } from '@/services/blogPost';

export default async function Home() {
  const posts = await getPostList();
  return <HomeTemplate posts={posts} />;
}
