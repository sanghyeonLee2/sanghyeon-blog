export const MESSAGES = {
  ERROR: {
    DEFAULT: '오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
    NETWORK: '네트워크 연결이 불안정합니다.',
    BAD_REQUEST: '잘못된 요청입니다.',
    UNAUTHORIZED: '로그인이 필요합니다.',
    FORBIDDEN: '접근 권한이 없습니다.',
    NOT_FOUND: '요청하신 정보를 찾을 수 없습니다.',
    SERVER: '서버 에러가 발생했습니다.',
    UNKNOWN: '알 수 없는 에러가 발생했습니다.',
  },
  SUCCESS: {
    SAVE: '저장되었습니다.',
    DELETE: '삭제되었습니다.',
  },
  WARNING: {
    LEAVE_PAGE: '페이지를 나가면 입력한 내용이 사라집니다. 계속하시겠습니까?',
  },
} as const;
