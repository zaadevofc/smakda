import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Mulish, Montserrat } from "next/font/google";
import "./globals.css";
import ProvidersWrapper from "./providers";
import { METADATA } from "@/consts";

const fredoka = Mulish({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-fredoka",
  // weight: ['400']
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-montserrat",
});

export const metadata = METADATA

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(`antialiased font-fredoka`, montserrat.className, fredoka.variable, montserrat.variable)}
      >
        <ProvidersWrapper>
          {children}
        </ProvidersWrapper>
      </body>
    </html>
  );
}
