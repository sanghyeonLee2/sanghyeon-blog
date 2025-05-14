import { Sun, Moon, Monitor } from 'lucide-react';
import { DropdownOptions } from '@/types/ui/dropdown';

export const THEME_OPTIONS: DropdownOptions[] = [
  { value: 'light', label: 'Light', icon: <Sun className="w-4 h-4" /> },
  { value: 'dark', label: 'Dark', icon: <Moon className="w-4 h-4" /> },
  { value: 'system', label: 'System', icon: <Monitor className="w-4 h-4" /> },
];
