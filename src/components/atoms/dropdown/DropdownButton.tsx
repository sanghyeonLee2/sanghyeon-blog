'use client';

import clsx from 'clsx';
import { DropdownProps } from './types';

export default function DropdownButton({
  onClick,
  children,
  className,
  sizeClassName,
}: DropdownProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'focus:outline-none focus:ring-1 focus:ring-primary/50 hover:bg-[var(--color-bg-hover)] rounded',
        sizeClassName,
        className,
      )}
    >
      {children}
    </button>
  );
}
