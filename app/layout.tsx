import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";
import TanStackProvider from "@/context/QueryContext";
import ThemeProvider from "@/utils/ThemeProvider";
import ToastProvider from "@/components/ToastProvider";
import AuthProvider from "@/context/AuthProvider";

const fontName = Inter({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-name",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OptiCV",
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
    "opticv",
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
        <meta property="og:title" content="OptiCV" />
        <meta
          property="og:description"
          content="Optimize your resume with AI based on job description and keywords"
        />
        <meta
          property="og:image"
          content="https://opticv.vercel.app/logo.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://opticv.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OptiCV" />
        <meta
          name="twitter:description"
          content="Optimize your resume with AI based on job description and keywords"
        />
        <meta
          name="twitter:image"
          content="https://opticv.vercel.app/logo.png"
        />
      </Head>
      <body className={fontName.className}>
        <AuthProvider>
          <ThemeProvider>
            <TanStackProvider>
              {children}
              <ToastProvider />
            </TanStackProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
