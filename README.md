# 블로그 프로젝트

Next.js 기반으로 제작된 개인 블로그입니다. Notion을 Headless CMS로 활용하고 있으며, 다크 모드 기능을 제공합니다.

---

## 목차

- [블로그 프로젝트](#블로그-프로젝트)
  - [목차](#목차)
  - [배포 주소](#배포-주소)
  - [기술 스택](#기술-스택)
    - [프레임워크 \& 언어](#프레임워크--언어)
    - [스타일링](#스타일링)
    - [데이터 \& API](#데이터--api)
    - [기타](#기타)
  - [폴더 구조](#폴더-구조)
  - [기능](#기능)
  - [스크립트](#스크립트)
  - [향후 계획](#향후-계획)

---

## 배포 주소

- **블로그 URL**: [https://sanghyeon-blog.vercel.app](https://sanghyeon-blog.vercel.app)

## 기술 스택

### 프레임워크 & 언어

- **Next.js 15**
- **TypeScript**
- **React 19**

### 스타일링

- **Tailwind CSS v4**
- CSS 변수 기반 다크 모드 지원

### 데이터 & API

- **Notion API** (via [`notion-client`](https://github.com/NotionX/react-notion-x))
- **react-notion-x** 렌더링 커스텀

### 기타

- **next-themes**: 시스템/다크/라이트 테마 전환
- **clsx**: 조건부 className 처리
- **lucide-react**: 아이콘 사용

---

## 폴더 구조

<pre>
├── app/                    # Next.js App Router
│   ├── layout.tsx          # 전체 레이아웃
│   ├── page.tsx            # 홈 페이지
│   ├── posts/              # 게시글 상세 페이지
│   └── global-error.tsx    # 전역 에러 처리
├── components/             # 컴포넌트 (Atoms/Molecules/Organisms 등)
├── constants/              # 상수 정의
├── hooks/                  # 커스텀 훅
├── services/               # API 통신 관련 로직
├── styles/                 # 전역 스타일 (CSS 변수, reset 등)
├── types/                  # 타입 정의
└── utils/                  # 유틸 함수
</pre>

---

## 기능

- Notion 기반 콘텐츠 렌더링
- 시스템 테마 감지 및 테마 토글
- 반응형 디자인
- 커버 이미지, 썸네일 지원

---

## 스크립트

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드된 앱 실행
npm run start
```

---

## 향후 계획

- 태그 클릭 시 해당 태그에 속한 글만 보여주는 필터링 기능 구현
- 스크롤에 따라 자동으로 글이 로드되는 무한 스크롤 적용
- 게시글 하단에 같은 태그의 다른 글을 보여주는 추천 영역 만들기
- 구글 애널리틱스를 연동해서 방문자 수, 유입 경로, 인기 글 등을 분석할 수 있도록 설정할 계획
- 제목, 태그, 내용 기준으로 검색 가능한 검색 기능 도입
- lazy load, dynamic import 등을 활용해 전체적인 성능 개선 작업 진행
