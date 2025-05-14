// app/layout.tsx
import { CONFIG } from '@/constants/config';
import '@/styles/globals.css';
import { pretendard } from '@/fonts/fonts';
import Header from '@/components/organisms/layout/Header';
import Footer from '@/components/organisms/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={CONFIG.DEFAULT_LANGUAGE} className={pretendard.variable} suppressHydrationWarning>
      <body className={`${pretendard.className} layout-wrapper`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
