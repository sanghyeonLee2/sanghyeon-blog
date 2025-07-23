import { useEffect, useRef, useState } from 'react';

const useImageLoad = (src?: string) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const handleLoad = () => setLoaded(true);
    const handleError = () => setLoaded(false);

    if (img.complete) {
      setLoaded(true);
      return;
    }

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);

    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [src]);

  return { loaded, imgRef };
};

export default useImageLoad;
