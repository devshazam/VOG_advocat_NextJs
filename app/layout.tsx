import type { Metadata } from "next";
import { inter, el_messiri } from './fonts';
import "./globals.css";
// import 'bootstrap/dist/css/bootstrap.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';

import type { Viewport } from 'next'
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}


export const metadata: Metadata = {
  title: "Адвокатское бюро 'Лисицкая и Удовенко'",
  description: "Адвокатура в Волгограде. Защита по всем направлениям и видам юридических дел.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={el_messiri.className}>
      <AntdRegistry>
        {children}
        </AntdRegistry>
        </body>
    </html>
  );
}
