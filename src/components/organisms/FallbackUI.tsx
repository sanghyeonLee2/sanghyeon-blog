'use client';

type Props = {
  error: Error;
  onRetry: () => void;
};

export default function FallbackUI({ error, onRetry }: Props) {
  return (
    <div className="p-4 border rounded bg-red-100 text-red-800">
      <p>앗! 에러가 발생했습니다.</p>
      <p className="text-sm">{error.message}</p>
      <button onClick={onRetry} className="mt-2 underline">
        다시 시도
      </button>
    </div>
  );
}
