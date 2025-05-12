'use client';

import { MultiSelectTags } from '@/types/domain/post';
import React, { JSX } from 'react';
import Tags from './Tags';

interface PostMetaProps {
  tags: MultiSelectTags[];
  date: string;
}

const PostMeta = ({ tags, date }: PostMetaProps): JSX.Element => {
  return (
    <div>
      <p className="my-1.25 text-xs">{date}</p>
      <Tags tags={tags} />
    </div>
  );
};

export default React.memo(PostMeta);
