'use client';
import { Post } from '@/types/domain/post';
import LocalErrorBoundary from '../boundaries/LocalErrorBoundary';
import PostItem from '../organisms/post/PostItem';
import Banner from '../molecules/ui/Banner';

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <main className="w-full px-content flex-grow">
      <Banner />
      <section className="py-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4.75">
        {posts?.map((post) => (
          <LocalErrorBoundary key={post.id}>
            <PostItem post={post} />
          </LocalErrorBoundary>
        ))}
      </section>
    </main>
  );
}
