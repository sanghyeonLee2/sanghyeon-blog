'use client';

import { HomeTemplateProps } from '@/types/components/HomeTemplate';

export default function HomeTemplate({ posts }: HomeTemplateProps) {
  console.log(posts);
  return <ul>{posts?.map((post) => <li key={post.id}>{post.title}</li>)}</ul>;
}
