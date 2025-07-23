'use client';

import { DEFAULTS } from '@/constants/defaults';
import React from 'react';
import clsx from 'clsx';
import useImageLoad from '@/hooks/useImageLoad';
import SkeletonImage from '@/components/atoms/image/SkeletonImage';
export interface ImageProps {
  src: string;
  className?: string;
  wrapClassName?: string;
  alt: string;
}

const Image = ({ src = '', className, wrapClassName, alt }: ImageProps) => {
  const { loaded, imgRef } = useImageLoad(src);

  return (
    <div className={clsx('relative overflow-hidden', wrapClassName)}>
      {!loaded && <SkeletonImage />}
      <img
        ref={imgRef}
        src={src ?? DEFAULTS.IMG_URL}
        alt={alt}
        className={clsx(
          'w-full h-full transition-opacity duration-300',
          loaded ? 'opacity-100' : 'opacity-0',
          className,
        )}
      />
    </div>
  );
};

export default React.memo(Image);
