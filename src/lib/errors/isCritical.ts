import { isAxiosError } from 'axios';

function isCritical(error: unknown): boolean {
  if (isAxiosError(error)) {
    const status = error.response?.status;
    return status === 500 || status === 403; // 예: 서버 에러는 에러바운더리로
  }
  return true; // 알 수 없는 에러는 일단 critical 처리
}

export default isCritical;
