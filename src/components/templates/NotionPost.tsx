'use client';

import dynamic from 'next/dynamic';
import { NotionRenderer } from 'react-notion-x';
import { PostRecordMap } from '@/types/api/response';
import NotionImage from '../molecules/image/NotionImage';
import NotionPostHeader from '../molecules/post/NotionPostHeader';
import Giscus from '../organisms/post/Giscus';
import Button from '../atoms/button/Button';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code), {
  ssr: false,
});

export default function NotionPost({ additionalPostData, recordMap }: PostRecordMap) {
  const router = useRouter();
  return (
    <div className="pb-20">
      {/* <CoverImage alt={'썸네일'} src={additionalPostData.cover} className="h-[30vh]" /> */}
      <NotionRenderer
        fullPage={true}
        rootPageId={additionalPostData.id}
        disableHeader={true}
        recordMap={recordMap}
        pageTitle={<></>}
        forceCustomImages={true}
        showTableOfContents={true}
        components={{
          Code,
          Image: NotionImage,
          Collection: () => null,
        }}
        pageHeader={
          <NotionPostHeader
            tags={additionalPostData.tags}
            title={additionalPostData.title}
            postedDate={additionalPostData.postedDate}
          />
        }
      />
      <Button
        text="목록으로 돌아가기"
        className="mb-6 w-full"
        onClick={() => router.push(ROUTES.HOME)}
      />
      <Giscus />
    </div>
  );
}
