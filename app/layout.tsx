import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  subsets: ['latin', 'latin-ext'],
});

export const metadata: Metadata = {
  title: 'Character Counter',
  description: 'Character Counter Frontend Mentor Challenge',
  applicationName: 'Character Counter',
} as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="hidden">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta property="og:image" content={undefined} />
      </head>
      <body
        className={`${dmSans.variable} relative flex min-h-dvh flex-col gap-[48px] overflow-x-clip bg-[url(../public/assets/images/bg-light-theme.png)] px-[16px] py-[18px] font-dmSans [transition:background_300ms] dark:bg-[url(../public/assets/images/bg-dark-theme.png)] md:p-[32px]`}
      >
        {children}
      </body>
    </html>
  );
}
