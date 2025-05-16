'use client';
import { TEXT } from '@/constants/text';
import Button from '../atoms/button/Button';
import { ROUTES } from '@/constants/routes';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center p-6">
      <h1 className="text-4xl text-heading mb-4">404</h1>
      <p className="text-lg text-body mb-4">페이지를 찾을 수 없습니다</p>
      <Button
        text={TEXT.BUTTON.GO_HOME}
        className="w-full max-w-[240px]"
        onClick={() => router.push(ROUTES.HOME)}
      />
    </div>
  );
}
