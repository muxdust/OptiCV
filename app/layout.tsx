import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/utils/ThemeProvider";

const fontName = Inter({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-name",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpticV",
  description:
    "Optimize your resume with AI based on job description and keywords",
  keywords: [
    "resume optimization",
    "AI resume optimization",
    "job description optimization",
    "keyword optimization",
    "resume optimization tool",
    "AI resume optimization tool",
    "job description optimization tool",
    "keyword optimization tool",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={fontName.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
