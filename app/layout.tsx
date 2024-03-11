import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const jetBrainsMonoFont = localFont({
  src: [
    {
      path: '../public/fonts/JetBrainsMono-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/JetBrainsMono-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/JetBrainsMono-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/JetBrainsMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/JetBrainsMono-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/JetBrainsMono-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/JetBrainsMono-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/JetBrainsMono-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-jet-brains-mono'
})

export const metadata: Metadata = {
  title: "Sofia A. Hafner",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMonoFont.variable} font-sans`}>{children}</body>
    </html>
  );
}
