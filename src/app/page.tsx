// app/page.tsx
export const dynamic = 'force-static';

import HomeTemplate from '@/components/templates/HomeTemplate';
import { getPostList } from '@/services/post/post';

export default async function Home() {
  const posts = await getPostList();
  return <HomeTemplate posts={posts} />;
}
