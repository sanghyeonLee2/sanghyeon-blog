import { useEffect, useState } from 'react';
import { DEFAULTS } from '@/constants/defaults';
import { API_URLS } from '@/constants/apiUrls';

const useImageFallback = (src: string) => {
  const [presignedUrl, setPresignedUrl] = useState(DEFAULTS.IMG_URL);

  useEffect(() => {
    if (src) {
      // 최초 로드: 캐시 사용
      setPresignedUrl(API_URLS.GET.IMAGE_PROXY(src));
    }
  }, [src]);

  const handleError = () => {
    console.error(`Image load failed for ${src}. Retrying with cache-bust...`);

    // 에러 시: ts 붙여서 캐시 무효화
    setPresignedUrl(API_URLS.GET.IMAGE_PROXY(src, true) || DEFAULTS.IMG_URL);
  };

  return {
    presignedUrl,
    setPresignedUrl: handleError,
  };
};

export default useImageFallback;
