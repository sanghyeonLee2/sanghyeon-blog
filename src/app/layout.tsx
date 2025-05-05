import { CONFIG } from '@/constants/config';
import '@/styles/globals.css';
import RootClientLayout from '@/components/layout/RootClientLayout';
import { pretendard } from '@/fonts/fonts';
import { cookies } from 'next/headers';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value === 'dark' ? 'dark' : '';
  return (
    <html lang={CONFIG.DEFAULT_LANGUAGE} className={`${pretendard.variable} ${theme}`}>
      <body className={pretendard.className}>
        <RootClientLayout>{children}</RootClientLayout>
      </body>
    </html>
  );
}
