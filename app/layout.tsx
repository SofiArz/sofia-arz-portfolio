import type { Metadata } from "next";
import { jetBrainsMonoFont } from '../public/fonts';
import Navbar from "./components/navbar";
import NextThemeProvider from '../util/themeClient'
import "./globals.css";

export const metadata: Metadata = {
  title: "Sofia A. Hafner",
  description: "Portfolio",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" >
      <body className={`${jetBrainsMonoFont.variable} font-sans bg-white dark:bg-gray-800`}>
        <NextThemeProvider>
          <Navbar />
          {children}
        </NextThemeProvider>
      </body>
    </html>
  );
}
