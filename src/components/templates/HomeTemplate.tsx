'use client';
import LocalErrorBoundary from '../boundaries/LocalErrorBoundary';
import Banner from '../organisms/Banner';
import PostItem from '../organisms/PostItem';
import { HomeTemplateProps } from '@/types/props/homeTemplateProps';

export default function HomeTemplate({ posts }: HomeTemplateProps) {
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
