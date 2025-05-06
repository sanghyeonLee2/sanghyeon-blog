// app/page.tsx
import HomeTemplate from '@/components/templates/HomeTemplate';
import { fetcher } from '@/lib/api/fetcher';
import { API_URLS } from '@/constants/apiUrls';
import { Post } from '@/types/domain/post';

export default async function Home() {
  try {
    const posts = await fetcher.post<Post[]>(API_URLS.POST.ALL, {});
    return <HomeTemplate posts={posts} />;
  } catch (err) {
    console.error('❌ 에러:', err);
    return <div>서버 에러 발생</div>;
  }
}
