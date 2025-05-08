// components/atoms/Thumbnail.tsx
import { DEFAULTS } from '@/constants/defaults';
import React from 'react';

interface ThumbnailProps {
  src: string | null;
}

const Thumbnail = ({ src }: ThumbnailProps) => {
  return (
    <div className="transition-all duration-200 ease-in-out hover:brightness-80 hover:-translate-y-1 aspect-[3/2] overflow-hidden rounded-2xl">
      <img src={src ?? DEFAULTS.IMG_URL} alt={'썸네일'} className="w-full h-full object-cover " />
    </div>
  );
};

export default Thumbnail;
