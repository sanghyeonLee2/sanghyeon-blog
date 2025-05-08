// PostItem.tsx
'use client';
import React from 'react';
import Thumbnail from '../atoms/Thumbnail';
import Tag from '../atoms/Tag';
import Summary from '../atoms/Summary';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { PostItemProps } from '@/types/props/postItemProps';

const PostItem = ({ post }: PostItemProps) => {
  return (
    <Link href={ROUTES.POST(post.slug)}>
      <article className="min-h-80">
        <Thumbnail src={post.cover} />
        <h2>{post.title}</h2>
        <Summary text={post.summary} />
        <div className="flex gap-1 my-3">
          {post.tags.map((tag) => (
            <Tag key={tag.id} name={tag.name} />
          ))}
        </div>
        <span className="date">{post.date}</span>
      </article>
    </Link>
  );
};

export default PostItem;
