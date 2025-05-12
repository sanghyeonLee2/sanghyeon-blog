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

const NotionImage = ({ className, src, alt = '', width, height, style }: NotionImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={style}
      loading="lazy"
      decoding="async"
      className={`shadow-[var(--shadow)] ${className ?? ''}`}
    />
  );
};

export default React.memo(NotionImage);
