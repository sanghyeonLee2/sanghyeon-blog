import { useEffect, useRef, useState } from 'react';

const useDropdown = <T extends HTMLElement>() => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return {
    open,
    setOpen,
    dropdownRef,
  };
};

export default useDropdown;
