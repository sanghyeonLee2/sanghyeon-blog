'use client';

import { useNextTheme } from '@/hooks/useNextTheme';
import useDropdown from '@/hooks/useDropDown';
import DropdownButton from '@/components/atoms/dropdown/DropdownButton';
import { THEME_OPTIONS } from '@/constants/ThemeOptions';
import IconDropdownList from '../IconDropdown/IconDropdownList';
import { useThemeSelect } from '@/hooks/useThemeSelect';
import { getThemeOption } from '@/utils/ui';

export default function ThemeDropdown() {
  const { setTheme, mounted, currentTheme } = useNextTheme();
  const { open, setOpen, dropdownRef } = useDropdown<HTMLDivElement>();
  const handleSelect = useThemeSelect(setTheme, setOpen);

  if (!mounted) return null;

  return (
    <div ref={dropdownRef} className="relative text-sm">
      <DropdownButton
        className="flex-center-between gap-2"
        sizeClassName="min-w-15.5 px-1.5 py-1.25"
        onClick={() => setOpen((prev) => !prev)}
      >
        {getThemeOption(currentTheme)?.icon}
        <span className="capitalize">{currentTheme}</span>
      </DropdownButton>
      {open && <IconDropdownList options={THEME_OPTIONS} onSelect={handleSelect} />}
    </div>
  );
}
