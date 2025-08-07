import { useEffect, useState } from 'react';
import { DEFAULTS } from '@/constants/defaults';
import { API_URLS } from '@/constants/apiUrls';

const useImageFallback = (src: string) => {
  const [presignedUrl, setPresignedUrl] = useState(DEFAULTS.IMG_URL);

  useEffect(() => {
    if (src) {
      setPresignedUrl(API_URLS.GET.IMAGE_PROXY(src));
    }
  }, [src]);

  const handleError = () => {
    console.error(`Image load failed for ${src}. Falling back to default image.`);

    setPresignedUrl(API_URLS.GET.IMAGE_PROXY(src) || DEFAULTS.IMG_URL);
  };

  return {
    presignedUrl,
    setPresignedUrl: handleError,
  };
};

export default useImageFallback;
