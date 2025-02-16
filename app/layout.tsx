import './globals.css';
import type { Metadata } from 'next';
import { Fira_Code, Inconsolata } from 'next/font/google';
import Image from 'next/image';
import logoMark from '../public/assets/images/logo-mark.svg';

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

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta property="og:image" content={undefined} />
      </head>
      <body
        className={`${firaCode.variable} ${inconsolata.variable} relative flex min-h-dvh flex-col gap-[48px] overflow-x-clip bg-[100%] px-[16px] font-inconsolata [background:no-repeat_0%_100%_url(../public/assets/images/pattern-squiggly-line-bottom-desktop.svg),no-repeat_100%_4em_url(../public/assets/images/pattern-squiggly-line-top.svg),no-repeat_calc(50%+20.5em)_32.5em_url(../public/assets/images/pattern-circle.svg),100%_0%_repeat-x_url(../public/assets/images/pattern-lines.svg),center/cover_no-repeat_url(../public/assets/images/background-desktop.png)]`}
      >
        <header className="mx-auto flex items-center gap-[16px] pt-[40px]">
          <Image height={30} width={30} alt="logo image" src={logoMark as string} />
          <h1 className="font-firaCode text-[24px] font-bold text-white">Coding Conf</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
