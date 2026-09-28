import type { Metadata } from "next";
import { Be_Vietnam_Pro, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppProviders from "@/components/providers/AppProviders";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import LayoutFooterCta from "@/components/sections/LayoutFooterCta";
import { getAiPillarsInsights, getInsightsMenuData } from "@/lib/strapi/insights";
import JsonLd from "@/components/atoms/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/jsonLd";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://eforte.io";
const defaultTitle = "eForte Solutions";
const defaultDescription =
  "eForte is an AI transformation partner that builds production AI-augmented software and agentic workflows on a governed data layer.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  // Fallback only — each page should set its own title/description/canonical via pageMeta.
  title: {
    default: defaultTitle,
    template: "%s",
  },
  description: defaultDescription,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "eForte Solutions",
  },
  twitter: {
    card: "summary_large_image",
  },
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
      <body
        className={`${beVietnamPro.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <AppProviders>
          <Navbar
            insightsMenuData={insightsMenuData}
            aiPillarsInsights={aiPillarsInsights}
          />
          {children}
          <LayoutFooterCta />
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
