'use client';
import React, { JSX } from 'react';

interface PostContentProps {
  title: string;
  summary: string;
}

const PostContent = ({ title, summary }: PostContentProps): JSX.Element => {
  return (
    <div>
      <h2 className="min-h-[3.5rem] text-xl font-semibold mb-1 line-clamp-2">{title}</h2>
      <p className="text-sm min-h-[3.75rem] text-muted-foreground mb-2 line-clamp-3">{summary}</p>
    </div>
  );
};

export default React.memo(PostContent);
