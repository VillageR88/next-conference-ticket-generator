import './globals.css';
import type { Metadata } from 'next';
import { Fira_Code, Inconsolata } from 'next/font/google';

const firaCode = Fira_Code({
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fira-code',
  subsets: ['latin', 'latin-ext'],
});
const inconsolata = Inconsolata({
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inconsolata',
  subsets: ['latin', 'latin-ext'],
});

export const metadata: Metadata = {
  title: 'Conference Ticket Generator',
  description: 'Conference Ticket Generator',
  applicationName: 'Conference Ticket Generator',
} as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta property="og:image" content={undefined} />
      </head>
      <body
        className={`${firaCode.variable} ${inconsolata.variable} relative flex min-h-dvh flex-col gap-[48px] overflow-x-clip bg-[url(../public/assets/images/background-desktop.png)] bg-cover bg-[100%] px-[16px] py-[18px] font-inconsolata`}
      >
        {children}
      </body>
    </html>
  );
}
