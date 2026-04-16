import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://techandus.rw"),
  title: {
    default: "Tech & Us — Technology That Moves Your Business Forward",
    template: "%s | Tech & Us",
  },
  description:
    "Tech & Us builds scalable web and mobile applications, business systems, and smart solutions that help companies operate better — locally and globally.",
  keywords: [
    "web development Rwanda",
    "mobile app development",
    "business systems",
    "software company Rwanda",
    "API integration",
    "Tech & Us",
  ],
  authors: [{ name: "Tech & Us" }],
  creator: "Tech & Us",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techandus.rw",
    siteName: "Tech & Us",
    title: "Tech & Us — Technology That Moves Your Business Forward",
    description:
      "Scalable web and mobile applications, business systems, and smart solutions for companies operating locally and globally.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Tech & Us" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech & Us — Technology That Moves Your Business Forward",
    description: "Scalable web and mobile applications, business systems, and smart solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      {/*
        suppressHydrationWarning: ThemeProvider sets data-theme on <html>
        client-side; this prevents the hydration mismatch warning.
      */}
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
