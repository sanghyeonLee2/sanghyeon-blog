// components/organisms/NotionPageRenderer.tsx
'use client';
import { NotionRenderer } from 'react-notion-x';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import { PostRecordMap } from '@/types/api/response';
import { Code } from 'react-notion-x/build/third-party/code';
import { Collection } from 'react-notion-x/build/third-party/collection';

export default function NotionPageRenderer({ recordMap }: { recordMap: PostRecordMap }) {
  return (
    <div className="prose dark:prose-invert">
      <NotionRenderer
        recordMap={recordMap}
        darkMode={true}
        showTableOfContents={true}
        defaultPageCover="/default-cover.png"
        components={{
          Code,
          Collection,
        }}
      />
    </div>
  );
}
