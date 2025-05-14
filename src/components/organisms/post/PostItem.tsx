'use client';

import React, { JSX } from 'react';
import Thumbnail from '../../atoms/image/Image';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import PostContent from '../../molecules/post/PostContent';
import PostMeta from '../../molecules/post/PostMeta';
import { Post } from '@/types/domain/post';
import { DEFAULTS } from '@/constants/defaults';

const PostItem = ({ post }: { post: Post }): JSX.Element => {
  return (
    <Link href={ROUTES.POST(post.slug)}>
      <article className="bg-[var(--color-post-bg)] h-full flex flex-col rounded-2xl shadow-[var(--shadow)] transition hover:shadow-lg hover:-translate-y-1">
        <Thumbnail
          alt="커버이미지"
          src={post.cover ?? DEFAULTS.IMG_URL}
          className="aspect-[3/2] w-full rounded-t-2xl"
        />
        <div className="flex flex-col justify-between flex-1 px-4 py-4">
          <PostContent title={post.title} summary={post.summary} />
          <PostMeta tags={post.tags} date={post.date} />
        </div>
      </article>
    </Link>
  );
};

export default PostItem;
