import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Montserrat, Oxanium, Onest } from "next/font/google";
import "./globals.css";
import ProvidersWrapper from "./providers";
import { cn } from "@/lib/utils";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const titan_one = Onest({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-titan",
  weight: ['400']
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(`antialiased font-montser`, montserrat.className, titan_one.variable, montserrat.variable)}
      >
        <ProvidersWrapper>
          {children}
        </ProvidersWrapper>
      </body>
    </html>
  );
}
