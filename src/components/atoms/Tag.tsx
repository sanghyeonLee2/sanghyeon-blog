// components/atoms/Thumbnail.tsx
import React from 'react';

interface TagProps {
  name: string;
}

const Tag = ({ name }: TagProps) => {
  return (
    <span
      className="
      bg-[var(--color-primary)]
      shadow-[var(--shadow)]
      hover-opacity
    text-xs px-2 py-1 rounded-2xl
  "
    >
      {name}
    </span>
  );
};

export default Tag;
