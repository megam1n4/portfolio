import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import FloatingBackground from "@/components/FloatingBackground";
import { ThemeProvider } from "@/components/ThemeProvider";
import { resumeData } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${resumeData.name} | Portfolio`,
  description: resumeData.summary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col selection:bg-blue-500/30 text-gray-900 bg-zinc-50 dark:bg-[#0a0a0a] dark:text-gray-100">
        <ThemeProvider>
          <CustomCursor />
          <FloatingBackground />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
