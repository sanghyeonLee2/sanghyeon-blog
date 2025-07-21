'use client';

import { MultiSelectTags } from '@/types/domain/post';
import { JSX } from 'react';
import Tags from '@/components/molecules/post/Tags';
import Thumbnail from '@/components/atoms/image/Image';
import { DEFAULTS } from '@/constants/defaults';

type NotionPostHeaderProps = {
  title: string;
  postedDate: string;
  cover: string | null;
  tags: MultiSelectTags[];
};
export default function NotionPostHeader({
  title,
  postedDate,
  tags,
  cover,
}: NotionPostHeaderProps): JSX.Element {
  return (
    <div className="w-full">
      <h1 className="pb-3 text-4xl break-keep text-center font-bold leading-snug tracking-tight">
        {title}
      </h1>
      <div className="flex flex-col items-center gap-5 py-5">
        <Tags tags={tags} />
        <Thumbnail
          alt="커버이미지"
          src={cover ?? DEFAULTS.IMG_URL}
          className="aspect-[3/2] w-full max-w-xl rounded-2xl backdrop-blur-md border border-white/10 shadow-[var(--shadow)]"
        />
        <p className="text-sm text-gray-400">{postedDate}</p>
      </div>
    </div>
  );
}
