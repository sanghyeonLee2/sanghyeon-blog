import { CONFIG } from '@/constants/config';
import '@/styles/globals.css';
import { pretendard } from '@/fonts/fonts';
import Header from '@/components/organisms/ui/Header';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Footer from '@/components/organisms/ui/Footer';
import { defaultMetadata } from '@/constants/metaData';

export const metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={CONFIG.DEFAULT_LANGUAGE} className={pretendard.variable} suppressHydrationWarning>
      <body className={`${pretendard.className} layout-wrapper`}>
        <ThemeProvider>
          <Header />
          <main className="pt-18 w-full flex-grow px-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
