import { useEffect, useState } from 'react';
import { DEFAULTS } from '@/constants/defaults';
import { API_URLS } from '@/constants/apiUrls';

const useImageFallback = (src?: string) => {
  const [presignedUrl, setPresignedUrl] = useState(src ?? DEFAULTS.IMG_URL);
  const [clientUrl, setClientUrl] = useState(presignedUrl);

  useEffect(() => {
    if (presignedUrl) {
      setClientUrl(API_URLS.GET.IMAGE_PROXY(presignedUrl));
    }
  }, [presignedUrl]);

  const handleError = () => {
    const fallback = DEFAULTS.IMG_URL;
    setPresignedUrl(fallback);
  };

  return {
    presignedUrl: clientUrl,
    setPresignedUrl: handleError,
  };
};

export default useImageFallback;
