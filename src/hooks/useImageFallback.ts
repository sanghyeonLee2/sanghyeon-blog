import { useEffect, useState } from 'react';
import { DEFAULTS } from '@/constants/defaults';
import { API_URLS } from '@/constants/apiUrls';

const useImageFallback = (src?: string) => {
  const [presignedUrl, setPresignedUrl] = useState(DEFAULTS.IMG_URL);

  useEffect(() => {
    if (src) {
      setPresignedUrl(src);
    }
  }, [src]);

  const handleError = () => {
    setPresignedUrl(API_URLS.GET.IMAGE_PROXY(DEFAULTS.IMG_URL));
  };

  return {
    presignedUrl,
    setPresignedUrl: handleError,
  };
};

export default useImageFallback;
