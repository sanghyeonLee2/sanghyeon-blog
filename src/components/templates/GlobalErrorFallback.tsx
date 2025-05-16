'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/atoms/button/Button';
import { CustomError } from '@/types/api/errors';
import { ROUTES } from '@/constants/routes';
import { TEXT } from '@/constants/text';

export default function GlobalErrorFallback({ error }: { error: Error }) {
  const router = useRouter();
  const typedError = error as unknown as CustomError;

  return (
    <div className="h-[70vh] flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-2xl sm:text-3xl text-heading mb-2"> {TEXT.FALLBACK.HEAD}</h1>
      <p className="text-base text-body mb-4">{typedError.message}</p>
      {typedError.status && <p className="text-subtle mb-1">에러 코드: {typedError.status}</p>}
      <p className="text-muted mb-6">{TEXT.FALLBACK.PAGE_HINT}</p>
      <Button
        text={TEXT.BUTTON.GO_HOME}
        className="w-full max-w-[240px]"
        onClick={() => router.push(ROUTES.HOME)}
      />
    </div>
  );
}
