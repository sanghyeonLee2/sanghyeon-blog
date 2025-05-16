'use client';
import { Post } from '@/types/domain/post';
import PostItem from '../organisms/post/PostItem';
import Banner from '../molecules/ui/Banner';

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <>
      <Banner />
      <section className="py-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4.75">
        {posts?.map((post) => <PostItem post={post} key={post.id} />)}
      </section>
    </>
  );
}
