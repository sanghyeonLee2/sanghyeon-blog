export async function parseErrorResponse(res: Response) {
  const errorBody = await res.json().catch(() => ({}));
  return {
    status: res.status,
    message: errorBody.message,
  };
}
// 서버 응답을 JSON으로 파싱 시도
// await res.json() 실행
// 파싱 실패해도 터지지 않게 예외 처리
// .catch(() => ({}))로 응답이 JSON이 아니어도 fallback 제공
// HTTP 상태 코드 포함한 커스텀 에러 객체 반환
// { status, message } 포맷 통일
