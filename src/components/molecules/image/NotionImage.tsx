import React from 'react';
import clsx from 'clsx';
import { ImageProps } from '../../atoms/image/types';
import SkeletonImage from '../../atoms/image/SkeletonImage';
import useImageLoad from '@/hooks/useImageLoad';

const NotionImage = ({ src, alt = '', className }: ImageProps) => {
  const { setLoadSuccess, loaded, imgRef } = useImageLoad();

  return (
    <div className="relative w-full min-h-[12.5rem] flex-center overflow-hidden rounded shadow-[var(--shadow)]">
      {!loaded && <SkeletonImage />}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
        onLoad={setLoadSuccess}
        onError={setLoadSuccess}
        className={clsx(
          'transition-opacity duration-300 max-h-[30rem] object-contain !w-auto',
          loaded ? 'opacity-100' : 'opacity-0',
          className,
        )}
      />
    </div>
  );
};

export default React.memo(NotionImage);
