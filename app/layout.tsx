import type { Metadata } from "next";
import { jetBrainsMonoFont } from '../public/fonts';
import Navbar from "./components/navbar";
import Footer from "./components/footer"
import "./globals.css";

export const metadata: Metadata = {
  title: "Sofia Arzamendia",
  description: "Portfolio",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" >
      <body className={`${jetBrainsMonoFont.variable} font-sans bg-gray-800`}> 
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
