'use client';

import clsx from 'clsx';
import { ButtonProps } from './Button.types';

export default function Button({
  text,
  onClick,
  className,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        'hover:opacity-85 text-[var(--color-button-text)] text-base font-medium px-4 py-2 rounded bg-[var(--color-button-bg)] transition',
        className,
      )}
      {...rest}
    >
      {text}
    </button>
  );
}
