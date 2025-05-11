// components/organisms/NotionPageRenderer.tsx
'use client';

import dynamic from 'next/dynamic';
import { NotionRenderer } from 'react-notion-x';
import { PostRecordMap } from '@/types/api/response';
import { useTheme } from '@/hooks/useTheme';
import NotionImage from './../atoms/NotionImage';

// ✅ Code 컴포넌트 lazy import
const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code), {
  ssr: false, // Next.js에서 클라이언트에서만 로드되도록 설정
});

export default function NotionPageRenderer({ recordMap, id }: PostRecordMap) {
  const { isDark } = useTheme();

  return (
    <div>
      <NotionRenderer
        rootPageId={id}
        fullPage={true}
        disableHeader={true}
        recordMap={recordMap}
        darkMode={isDark}
        forceCustomImages={true}
        components={{
          Code,
          Image: NotionImage,
        }}
      />
    </div>
  );
}
