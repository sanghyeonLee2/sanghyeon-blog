'use client';

import React, { JSX } from 'react';
import Thumbnail from '../../atoms/image/Image';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { Post } from '@/types/domain/post';
import { DEFAULTS } from '@/constants/defaults';
import Tags from '@/components/molecules/post/Tags';

const PostItem = ({ post }: { post: Post }): JSX.Element => {
  return (
    <Link
      href={ROUTES.POST(post.slug)}
      className="rounded-2xl hover:bg-[var(--color-bg-hover)] transition-colors duration-300 ease-in-out p-4 -mx-4 flex sm:flex-row flex-col-reverse gap-4 justify-between sm:items-center"
    >
      <div className="flex flex-col gap-2">
        <h2 className="line-clamp-2">{post.title}</h2>
        <p className="text-sm line-clamp-1 font-light">{post.summary}</p>
        <p className="text-sm text-gray-400">{post.date}</p>
        <Tags tags={post.tags} />
      </div>
      <Thumbnail
        alt="커버이미지"
        src={post.cover ?? DEFAULTS.IMG_URL}
        wrapClassName="aspect-[3/2] w-full rounded-2xl sm:max-w-45 backdrop-blur-md border border-white/10 shadow-[var(--shadow)]"
        className="object-cover"
      />
    </Link>
  );
};

export default React.memo(PostItem);
