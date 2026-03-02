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
  title: "Safenetics | Enterprise Cybersecurity & AI Innovation",
  description:
    "Secure. Intelligent. Precise. Safenetics provides enterprise-grade cybersecurity and AI solutions for industry leaders.",
  keywords: [
    "cybersecurity",
    "AI innovation",
    "enterprise security",
    "advanced analytics",
    "Safenetics",
  ],
  authors: [{ name: "Safenetics Team" }],
  openGraph: {
    title: "Safenetics | Enterprise Cybersecurity & AI Innovation",
    description:
      "Secure. Intelligent. Precise. Future-ready technology for the modern enterprise.",
    type: "website",
    locale: "en_US",
    siteName: "Safenetics",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safenetics | Enterprise Cybersecurity & AI Innovation",
    description:
      "Secure. Intelligent. Precise. Future-ready technology for the modern enterprise.",
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
