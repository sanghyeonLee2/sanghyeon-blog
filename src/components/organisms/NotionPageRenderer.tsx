// components/organisms/NotionPageRenderer.tsx
'use client';
import { NotionRenderer } from 'react-notion-x';
import { PostRecordMap } from '@/types/api/response';
import { Code } from 'react-notion-x/build/third-party/code';
import { useTheme } from '@/hooks/useTheme';

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
        previewImages={true}
        components={{
          Code,
        }}
      />
    </div>
  );
}
