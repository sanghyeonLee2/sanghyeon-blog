'use client';

import { CustomError } from '@/types/api/errors';
import { useState } from 'react';
interface FallbackUIProps {
  error: Error;
  onRetry?: () => void;
}

export default function ErrorFallback({ error, onRetry }: FallbackUIProps) {
  const typedError = error as unknown as CustomError;
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div className="h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md p-6 border rounded-lg bg-red-50 text-red-800 shadow-md">
        <p className="text-lg font-semibold mb-2">앗! 에러가 발생했습니다.</p>
        <p className="text-sm">{typedError.message}</p>
        {typedError.rawMessage && (
          <>
            <button
              className="mt-2 text-xs text-blue-600 underline hover:text-blue-800 transition"
              onClick={() => setShowDetail((prev) => !prev)}
            >
              {showDetail ? '상세 숨기기' : '상세 보기'}
            </button>

            {showDetail && (
              <p className="text-xs mt-1 text-gray-700 bg-white p-2 rounded border">
                {typedError.rawMessage}
              </p>
            )}
          </>
        )}

        {typedError.status && (
          <p className="text-xs mt-3 text-gray-500">에러 코드: {typedError.status}</p>
        )}

        {onRetry && (
          <button
            onClick={onRetry}
            className="mt-4 px-3 py-1 border border-blue-600 text-blue-600 text-sm rounded hover:bg-blue-50 transition"
          >
            다시 시도
          </button>
        )}
      </div>
    </div>
  );
}
