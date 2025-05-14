import { MultiSelectTags } from '@/types/domain/post';
import PostMeta from './PostMeta';
import { JSX } from 'react';

type NotionPostHeaderProps = {
  title: string;
  postedDate: string;
  tags: MultiSelectTags[];
};

export default function NotionPostHeader({
  title,
  postedDate,
  tags,
}: NotionPostHeaderProps): JSX.Element {
  return (
    <div>
      <div className="pb-2">
        <h1 className="pb-4 text-4xl font-bold leading-snug tracking-tight">{title}</h1>
        <PostMeta tags={tags} date={postedDate} />
      </div>
    </div>
  );
}
