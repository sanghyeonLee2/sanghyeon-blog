import React from 'react';

export interface DropdownProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  sizeClassName?: string;
}
