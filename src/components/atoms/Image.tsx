// components/atoms/Thumbnail.tsx
import { DEFAULTS } from '@/constants/defaults';
import React from 'react';

interface ImageProps {
  src: string | null;
  className?: string;
  alt: string;
}

const Image = ({ src, className, alt }: ImageProps) => {
  return (
    <div className={`${className} overflow-hidden`}>
      <img src={src ?? DEFAULTS.IMG_URL} alt={alt} className="w-full h-full object-cover " />
    </div>
  );
};

export default React.memo(Image);
