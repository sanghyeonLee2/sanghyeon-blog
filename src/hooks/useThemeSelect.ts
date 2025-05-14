import { useCallback } from 'react';

type SetTheme = (value: string) => void;
type SetOpen = (open: boolean) => void;

export const useThemeSelect = (setTheme: SetTheme, setOpen: SetOpen) => {
  return useCallback(
    (value: string) => {
      setTheme(value);
      setOpen(false);
    },
    [setTheme, setOpen],
  );
};
