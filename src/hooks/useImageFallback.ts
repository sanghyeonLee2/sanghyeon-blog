import { useEffect, useState } from 'react';
import { DEFAULTS } from '@/constants/defaults';
import { API_URLS } from '@/constants/apiUrls';

const useImageFallback = (src?: string) => {
  const [presignedUrl, setPresignedUrl] = useState(src ?? DEFAULTS.IMG_URL);
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    if (isFallback) {
      setPresignedUrl(API_URLS.GET.IMAGE_PROXY(DEFAULTS.IMG_URL));
    }
  }, [isFallback]);

  const handleError = () => {
    setIsFallback(true);
  };

  return {
    presignedUrl,
    setPresignedUrl: handleError,
  };
};

export default useImageFallback;
