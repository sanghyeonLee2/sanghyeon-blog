import React from 'react';

const SkeletonImage = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-[var(--color-skeleton)] animate-pulse rounded" />
  );
};

export default SkeletonImage;
