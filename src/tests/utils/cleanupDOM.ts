// tests/utils/cleanupDOM.ts
export function cleanupPortalRoot() {
  const portal = document.getElementById('portal-root');
  if (portal) {
    portal.innerHTML = '';
  }
}
//설명: 모달, 포탈 기반 UI 컴포넌트 테스트에서 DOM 정리용.
