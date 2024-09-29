/** @format */

import { METADATA } from '@/consts';
import { cn } from '@/lib/utils';
import { Montserrat, Mulish } from 'next/font/google';
import { lazy } from 'react';
import './globals.css';

const ProvidersWrapper = lazy(() => import('./providers'));

const fredoka = Mulish({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fredoka',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata = METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`antialiased font-fredoka`, montserrat.className, fredoka.variable, montserrat.variable)}>
        <ProvidersWrapper>{children}</ProvidersWrapper>
      </body>
    </html>
  );
}
