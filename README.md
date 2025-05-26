# 블로그 프로젝트

Next.js 기반으로 제작된 개인 블로그입니다. Notion을 Headless CMS로 활용하고 있으며, 다크 모드 기능을 제공합니다.

---

## 목차

- [블로그 프로젝트](#블로그-프로젝트)
  - [목차](#목차)
  - [배포 주소](#배포-주소)
  - [기술 스택](#기술-스택)
  - [폴더 구조](#폴더-구조)
  - [주요 기능](#주요-기능)
  - [구현 상세](#구현-상세)
  - [스크립트](#스크립트)
  - [향후 계획](#향후-계획)

---

## 배포 주소

- **블로그 URL**: [https://sanghyeon-blog.vercel.app](https://sanghyeon-blog.vercel.app)

## 기술 스택

- **Next.js 15**
- **TypeScript**
- **React 19**
- **Tailwind CSS v4**
- **notion-client** Notion DB에서 게시글 목록 및 메타데이터 패칭
- **react-notion-x** 렌더링 커스텀
- **next-themes** 시스템/다크/라이트 테마 전환
- **lucide-react** 아이콘 사용

---

## 폴더 구조

```bash
src/
├── app/                             # Next.js App Router 디렉토리
│   ├── layout.tsx                   # 루트 레이아웃
│   ├── page.tsx                     # 메인 페이지
│   ├── posts/                       # 게시글 상세 페이지 라우팅
│   ├── global-error.tsx            # 전역 에러 처리
│   ├── not-found.tsx               # 404 페이지
│   ├── robot.ts                    # robots.txt 설정
│   ├── sitemap.xml                 # 사이트맵 (정적 파일)
│   ├── favicon.ico, og 이미지 등   # 메타 및 아이콘 관련 파일
├── components/                     # UI 컴포넌트 (Atomic Design 기반)
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/                  # 페이지 단위 템플릿
│   └── providers/                  # 테마/상태 등 전역 Provider
├── constants/                      # 상수 정의 (메시지, config 등)
├── fonts/                          # 웹폰트 관련 설정
├── hooks/                          # 커스텀 훅 모음
├── lib/                            # 기능 단위 모듈 (도메인/유틸 중심)
│   ├── api/                        # API 요청 유틸
│   ├── notion/                     # Notion 관련 유틸
│   ├── ui/                         # UI 관련 기능 유틸
│   └── utils/                      # 일반 유틸 함수
├── services/                       # 서버 API 호출 로직 (데이터 fetch 등)
├── styles/                         # 글로벌 스타일 (reset, 변수 등)
├── tests/                          # 테스트 코드
├── types/                          # 전역 타입 정의
└── utils/                          # 범용 유틸 함수
```

---

## 주요 기능

- Notion 기반 콘텐츠 렌더링
- 시스템, 다크, 라이트 테마 전환 지원
- 반응형 레이아웃 적용
- 커버 이미지 및 썸네일 표시
- SSG 기반 정적 페이지 제공으로 빠른 초기 로딩
- 게시글 단위 SEO 최적화

---

## 구현 상세

- **Next.js 15 + Tailwind CSS v4 기반 보일러플레이트 구성**
- **아토믹 디자인 적용**: atoms / molecules / organisms / templates 구조로 컴포넌트 재사용성 강화
- **Notion 연동**: `notion-client`, `react-notion-x`를 활용해 Notion DB로부터 게시글 목록 및 본문 정적 패칭
- **정적 페이지 생성**: `generateStaticParams`를 활용하여 게시글 단위 HTML을 빌드 시 생성 (SSG)
- **CLS 개선**: 이미지 로딩 전 스켈레톤 처리로 레이아웃 시프트 최소화
- **다크모드 구현**: `next-themes`와 Tailwind CSS 변수 조합으로 커스텀 드롭다운 테마 토글 기능 구현
- **렌더링 최적화**: `react.memo`, `useCallback` 등을 활용해 클라이언트 컴포넌트 렌더링 최소화

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
