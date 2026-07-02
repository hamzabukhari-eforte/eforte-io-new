import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppProviders from "@/components/providers/AppProviders";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { VelocityAIFooterCTASection } from "@/components/sections/velocity-ai";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "eForte Solutions",
  description: "eForte Solutions is a software development company that provides software development services to businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <AppProviders>
          <Navbar />
          {children}
          <VelocityAIFooterCTASection />
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
