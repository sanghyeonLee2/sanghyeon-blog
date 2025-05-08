'use client';
import LocalErrorBoundary from '../boundaries/LocalErrorBoundary';
import PostItem from '../organisms/PostItem';
import { HomeTemplateProps } from '@/types/props/homeTemplateProps';

export default function HomeTemplate({ posts }: HomeTemplateProps) {
  return (
    <main className="w-full px-6">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {posts?.map((post) => (
          <LocalErrorBoundary key={post.id}>
            <PostItem post={post} />
          </LocalErrorBoundary>
        ))}
      </section>
    </main>
  );
}
