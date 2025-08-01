'use client';

import React from 'react';
import clsx from 'clsx';
import useImageLoad from '@/hooks/useImageLoad';
import SkeletonImage from '@/components/atoms/image/SkeletonImage';
import useImageFallback from '@/hooks/useImageFallback';

export interface ImageProps {
  src: string;
  className?: string;
  wrapClassName?: string;
  alt: string;
}

const Image = ({ src = '', className, wrapClassName, alt }: ImageProps) => {
  const { loaded, imgRef } = useImageLoad(src);
  const { presignedUrl, setPresignedUrl } = useImageFallback(src);

  return (
    <div className={clsx('relative overflow-hidden', wrapClassName)}>
      {!loaded && <SkeletonImage />}
      <img
        key={presignedUrl} // presignedUrl이 바뀌면 강제 리렌더
        ref={imgRef}
        src={presignedUrl}
        onError={setPresignedUrl}
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
