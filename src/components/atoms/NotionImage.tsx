// components/atoms/NotionImage.tsx
import React from 'react';

interface NotionImageProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

const NotionImage = ({ className, ...props }: NotionImageProps) => {
  return (
    <img
      {...props}
      className={`shadow-[var(--shadow)] ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
};

export default React.memo(NotionImage);
