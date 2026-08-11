import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import AppProviders from "@/components/providers/AppProviders";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { VelocityAIFooterCTASection } from "@/components/sections/velocity-ai";
import { getAiPillarsInsights, getInsightsMenuData } from "@/lib/strapi/insights";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "eForte Solutions",
  description:
    "eForte Solutions is a software development company that provides software development services to businesses.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [insightsMenuData, aiPillarsInsights] = await Promise.all([
    getInsightsMenuData(),
    getAiPillarsInsights(3),
  ]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistMono.variable} antialiased`} suppressHydrationWarning>
        <AppProviders>
          <Navbar
            insightsMenuData={insightsMenuData}
            aiPillarsInsights={aiPillarsInsights}
          />
          {children}
          <VelocityAIFooterCTASection />
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
