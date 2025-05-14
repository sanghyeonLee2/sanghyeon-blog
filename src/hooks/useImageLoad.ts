import { useLayoutEffect, useRef, useState } from 'react';

type UseLoadImageReturn = {
  setLoadSuccess: () => void;
  loaded: boolean;
  imgRef: React.RefObject<HTMLImageElement | null>;
};

const useImageLoad = (): UseLoadImageReturn => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return {
    setLoadSuccess: () => setLoaded(true),
    loaded,
    imgRef,
  };
};

export default useImageLoad;
