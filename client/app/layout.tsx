import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingChatbot from "@/components/FloatingChatbot";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZONEX-PRO | Professional Business Solutions & Tech Innovation",
  description:
    "ZONEX-PRO delivers cutting-edge technology solutions and business innovation. We transform ideas into professional reality through expertise and precision.",
  keywords: [
    "tech innovation",
    "business solutions",
    "software development",
    "digital transformation",
    "ZONEX-PRO",
  ],
  authors: [{ name: "ZONEX-PRO Team" }],
  openGraph: {
    title: "ZONEX-PRO | Professional Business Solutions & Tech Innovation",
    description:
      "We transform ideas into professional reality through expertise and precision.",
    type: "website",
    locale: "en_US",
    siteName: "ZONEX-PRO",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZONEX-PRO | Professional Business Solutions & Tech Innovation",
    description:
      "We transform ideas into professional reality through expertise and precision.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col bg-background text-text-primary transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow pt-14">{children}</main>
          <Footer />
          <FloatingChatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
