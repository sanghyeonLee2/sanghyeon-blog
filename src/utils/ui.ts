import { THEME_OPTIONS } from '@/constants/ThemeOptions';

export const getThemeOption = (value: string | undefined) =>
  THEME_OPTIONS.find((option) => option.value === value);
