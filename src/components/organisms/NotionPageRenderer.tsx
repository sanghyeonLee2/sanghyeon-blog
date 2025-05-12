// components/organisms/NotionPageRenderer.tsx
'use client';

import dynamic from 'next/dynamic';
import { NotionRenderer } from 'react-notion-x';
import { PostRecordMap } from '@/types/api/response';
import { useTheme } from '@/hooks/useTheme';
import NotionImage from './../atoms/NotionImage';
import NotionPostHeader from '../molecules/NotionPostHeader';

// ✅ Code 컴포넌트 lazy import
const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code), {
  ssr: false, // Next.js에서 import { Tags } from './../../types/domain/post';
});

export default function NotionPageRenderer({ additionalPostData, recordMap }: PostRecordMap) {
  const { isDark } = useTheme();

  return (
    <div className="my-4">
      {/* <CoverImage alt={'썸네일'} src={additionalPostData.cover} className="h-[30vh]" /> */}
      <NotionRenderer
        rootPageId={additionalPostData.id}
        disableHeader={true}
        recordMap={recordMap}
        darkMode={isDark}
        forceCustomImages={true}
        components={{
          Code,
          Image: NotionImage,
        }}
        pageHeader={
          <NotionPostHeader
            tags={additionalPostData.tags}
            title={additionalPostData.title}
            postedDate={additionalPostData.postedDate}
          />
        }
      />
    </div>
  );
}
