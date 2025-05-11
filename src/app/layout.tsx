// app/layout.tsx 또는 app/global.css에 직접 import
import { CONFIG } from '@/constants/config';
import '@/styles/globals.css';
import { pretendard } from '@/fonts/fonts';
import { cookies } from 'next/headers';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value === 'dark' ? 'dark' : '';
  return (
    <html lang={CONFIG.DEFAULT_LANGUAGE} className={`${pretendard.variable} ${theme}`}>
      <body className={`${pretendard.className} layout-wrapper`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
