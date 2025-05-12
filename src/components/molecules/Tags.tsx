// components/atoms/Thumbnail.tsx
import React, { JSX } from 'react';
import { MultiSelectTags } from '../../types/domain/post';

const Tags = ({ tags }: { tags: MultiSelectTags[] }): JSX.Element => {
  return (
    <div className="flex gap-1.25 flex-wrap h-16 py-3">
      {tags.map((tag) => (
        <span
          key={tag.id}
          className={`
            h-4.5
            content-center
            cursor-pointer
    shadow-[var(--shadow)]
    hover-opacity
    text-[0.65rem]
    px-1.25  rounded
  `}
          style={{
            backgroundColor: `var(--color-tag-${tag.color}-bg)`,
            color: `var(--color-tag-${tag.color}-text)`,
          }}
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
};

export default React.memo(Tags);
