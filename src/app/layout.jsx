/** @format */

import "../styles/globals.css";

import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/common/components/layout/components/theme/theme-provider";
import Header from "@/common/components/layout/header/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <ThemeProvider attribute="class" defaultTheme="light">

            <div
              className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px]  justify-items-center min-h-screen pt-2 sm:pt-2 sm:pb-20 pb-20 gap-12  font-[family-name:var(--font-geist-sans)] `}>
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
