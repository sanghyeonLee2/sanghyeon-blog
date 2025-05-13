import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import type { RefObject } from 'react';

function useGetGiscus(): RefObject<HTMLDivElement | null> {
  const giscusRef = useRef<HTMLDivElement | null>(null);
  const { resolvedTheme } = useTheme();

  const theme = resolvedTheme === 'dark' ? 'dark' : 'light';

  useEffect(() => {
    if (!giscusRef.current || giscusRef.current.dataset.giscusInitialized === 'true') return;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';

    script.setAttribute('data-repo', 'sanghyeonLee2/sanghyeon-blog');
    script.setAttribute('data-repo-id', 'R_kgDOOiQw2Q');
    script.setAttribute('data-category', 'Announcements');
    script.setAttribute('data-category-id', 'DIC_kwDOOiQw2c4CqGU7');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', theme);
    script.setAttribute('data-lang', 'ko');

    giscusRef.current.appendChild(script);
    giscusRef.current.dataset.giscusInitialized = 'true';
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
      iframe?.contentWindow?.postMessage(
        { giscus: { setConfig: { theme } } },
        'https://giscus.app',
      );
    });
  }, [theme]);

  return giscusRef;
}

export default useGetGiscus;
