# Next.js + Tailwind Boilerplate

Next.js 기반의 프론트엔드 프로젝트를 빠르게 시작할 수 있는 보일러플레이트입니다.  
다크모드/라이트모드 지원, 상태 관리, API 통신, 테스트 환경까지 기본 셋업이 구성되어 있습니다.

---

## 🛠 사용법

### 개발 서버 실행

```bash
npm run dev
```

### 프로덕션 빌드

```bash
npm run build
npm run start
```

### 린트 및 포맷

```bash
npm run lint
npm run format
```

### 테스트 실행

```bash
npm run test
```

---

## 📄 환경 변수

`.env`는 기본적으로 Git에서 제외되어 있으며 `.env.example` 파일을 복사해 사용하세요.

```bash
cp .env.example .env
```

예시:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## ✨ 기본 제공 기능

- ✅ **Next.js 15** + **TypeScript**
- ✅ **Tailwind CSS** + 기본 다크/라이트 테마 전환 기능
- ✅ **Zustand** 상태 관리 + Immer 미들웨어
- ✅ **React Query (TanStack)** API 상태 관리
- ✅ **Jest + React Testing Library** 테스트 환경
- ✅ **React Error Boundary** 기반의 전역/로컬 에러 처리
- ✅ **React Toastify** 토스트 알림 기본 탑재
- ✅ **절대경로(@/)** 및 공통 타입/유틸 구조화

---

## 📁 디렉토리 구조

```
📦src
 ┣ 📂components        // 재사용 가능한 UI 컴포넌트
 ┣ 📂constants         // 정적 상수 (URL, 설정 등)
 ┣ 📂hooks             // 커스텀 훅
 ┣ 📂lib               // fetcher 등 외부 유틸
 ┣ 📂pages             // Next.js 라우트
 ┣ 📂services          // API 모듈화
 ┣ 📂stores            // Zustand 상태관리
 ┣ 📂styles            // 글로벌 스타일, Tailwind 설정
 ┣ 📂types             // 전역 Type 정의
 ┣ 📂utils             // 공통 유틸 함수
```

---

## 🔗 의존성 주요 목록

```json
"dependencies": {
  "@tanstack/react-query": "^5.74.11",
  "axios": "^1.9.0",
  "immer": "^10.1.1",
  "lucide-react": "^0.506.0",
  "next": "15.3.1",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-error-boundary": "^5.0.0",
  "react-toastify": "^11.0.5",
  "zustand": "^5.0.3"
},
"devDependencies": {
  "@eslint/eslintrc": "^3",
  "@tailwindcss/postcss": "^4.1.5",
  "@testing-library/jest-dom": "^6.6.3",
  "@testing-library/react": "^16.3.0",
  "@testing-library/user-event": "^14.6.1",
  "@types/jest": "^29.5.14",
  "@types/node": "^20",
  "@types/react": "^19.1.2",
  "@types/react-dom": "^19.1.3",
  "@typescript-eslint/eslint-plugin": "^8.31.1",
  "@typescript-eslint/parser": "^8.31.1",
  "autoprefixer": "^10.4.21",
  "eslint": "^8.57.1",
  "eslint-config-next": "15.3.1",
  "eslint-config-prettier": "^10.1.2",
  "eslint-plugin-react": "^7.37.5",
  "eslint-plugin-react-hooks": "^5.2.0",
  "jest": "^29.7.0",
  "jest-environment-jsdom": "^29.7.0",
  "prettier": "^3.5.3",
  "tailwindcss": "^4",
  "ts-jest": "^29.3.2",
  "typescript": "^5"
}
```

---

## 🧪 테스트 예시

```tsx
// components/__tests__/Example.test.tsx
import { render, screen } from '@testing-library/react';
import ExampleComponent from '../ExampleComponent';

test('컴포넌트 렌더링 확인', () => {
  render(<ExampleComponent />);
  expect(screen.getByText(/hello/i)).toBeInTheDocument();
});
```

---

## 🧱 라이선스

MIT
