import { useState } from 'react';
import { DEFAULTS } from '@/constants/defaults';
import { API_URLS } from '@/constants/apiUrls';

const useImageFallback = (src?: string) => {
  const [presignedUrl, setPresignedUrl] = useState(src);

  const handleError = () => {
    const fallbackUrl = API_URLS.GET.IMAGE_PROXY(src ?? DEFAULTS.IMG_URL);
    setPresignedUrl(fallbackUrl);
  };

  return { presignedUrl, setPresignedUrl: handleError };
};

export default useImageFallback;
