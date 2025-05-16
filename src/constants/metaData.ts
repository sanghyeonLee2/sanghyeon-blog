import type { Metadata } from 'next';

export const SITE_METADATA = {
  BLOG_INTRO: 'SH.LOG',
  BLOG_DESCRIPTION: '기록하며 성장합니다',
  COPY_RIGHT: '© 2025 Sanghyeon Lee. All rights reserved.',
  MY_GITHUB_URL: 'https://github.com/sanghyeonLee2',
  VERCEL_DEPLOY_URL: 'https://sanghyeon-blog.vercel.app',
  LINK_TO_GITHUB: 'View on GitHub ↗',
  AUTHOR: 'Sanghyeon Lee',
  SITE_NAME: 'SH.LOG',
  DESCRIPTION: '개발 블로그입니다.',
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_METADATA.VERCEL_DEPLOY_URL),
  title: 'SH.LOG',
  description: 'Learning from building',
  keywords: [
    'SH.LOG',
    '프론트엔드',
    '개발 블로그',
    'frontend',
    'Next.js',
    'React',
    'TypeScript',
    '다크모드',
    '프론트엔드 공부',
    '기술 정리',
    'TIL',
    '성능 최적화',
    '블로그 개발기',
    '상현 블로그',
  ],
  openGraph: {
    title: 'SH.LOG',
    description: 'Learning from building',
    url: SITE_METADATA.VERCEL_DEPLOY_URL,
    images: ['/opengraph-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SH.LOG',
    description: 'Learning from building',
    images: ['/opengraph-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};
