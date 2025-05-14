import { DEFAULTS } from '@/constants/defaults';
import React from 'react';
import { ImageProps } from './types';
import clsx from 'clsx';

const Image = ({ src = '', className, alt }: ImageProps) => {
  return (
    <div className={clsx('overflow-hidden', className)}>
      <img src={src ?? DEFAULTS.IMG_URL} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default React.memo(Image);
