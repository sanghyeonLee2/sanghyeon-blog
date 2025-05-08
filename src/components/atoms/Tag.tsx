// components/atoms/Thumbnail.tsx
import React from 'react';

interface TagProps {
  name: string;
}

const Tag = ({ name }: TagProps) => {
  return (
    <span
      className="
    bg-gray-200 text-gray-800
    dark:bg-gray-700 dark:text-gray-100
    text-xs px-2 py-1 rounded-2xl
  "
    >
      {name}
    </span>
  );
};

export default Tag;
