'use client';

import clsx from 'clsx';
import { DropdownProps } from './types';

export default function DropdownItem({
  onClick,
  children,
  className,
  sizeClassName,
}: DropdownProps) {
  return (
    <li
      onClick={onClick}
      className={clsx('hover:bg-[var(--color-bg-hover)] cursor-pointer', sizeClassName, className)}
      role="menuitem"
    >
      {children}
    </li>
  );
}
