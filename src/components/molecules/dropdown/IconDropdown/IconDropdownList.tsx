'use client';

import DropdownItem from '@/components/atoms/dropdown/DropdownItem';
import React from 'react';
import { DropdownOptions } from '@/types/ui/dropdown';

interface IconDropdownListProps {
  options: DropdownOptions[];
  onSelect: (value: string) => void;
}

function IconDropdownList({ options, onSelect }: IconDropdownListProps) {
  return (
    <ul className="absolute right-0 mt-2 border border-gray-600 shadow-[var(--shadow)] bg-[var(--color-dropdown-bg)] rounded z-10">
      {options.map(({ value, label, icon }) => (
        <DropdownItem
          key={value}
          className="flex items-center gap-2"
          sizeClassName="px-2 py-1.25 w-22"
          onClick={() => onSelect(value)}
        >
          {icon}
          <span className="flex-1 text-center">{label}</span>
        </DropdownItem>
      ))}
    </ul>
  );
}

export default React.memo(IconDropdownList);
