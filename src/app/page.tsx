// app/page.tsx
import HomeTemplate from '@/components/templates/HomeTemplate';
import { getPostList } from '@/services/post/post';

export default async function Home() {
  const posts = await getPostList();
  return <HomeTemplate posts={posts} />;
}
