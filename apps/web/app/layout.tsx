import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import AppProviders from "@/components/providers/AppProviders";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import LayoutFooterCta from "@/components/sections/LayoutFooterCta";
import { getAiPillarsInsights, getInsightsMenuData } from "@/lib/strapi/insights";
import JsonLd from "@/components/atoms/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/jsonLd";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://eforte.io";
const defaultTitle = "eForte Solutions";
const defaultDescription =
  "eForte Solutions is a software development company that provides software development services to businesses.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "eForte Solutions",
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
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
      <body className={`${geistMono.variable} antialiased`} suppressHydrationWarning>
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
