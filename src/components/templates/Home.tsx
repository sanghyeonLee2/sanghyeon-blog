'use client';
import { Post } from '@/types/domain/post';
import PostItem from '../organisms/post/PostItem';
import Banner from '../molecules/ui/Banner';
import EmptyState from '../molecules/common/EmptyState';

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <>
      {posts.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="py-[2rem] grid grid-cols-1 gap-5">
          <h1 className="font-mono">Logs</h1>
          {posts?.map((post) => <PostItem post={post} key={post.id} />)}
        </div>
      )}
    </>
  );
}
