import path from "node:path";
import type { NextConfig } from "next";

function getStrapiRemotePatterns(): NonNullable<NextConfig["images"]>["remotePatterns"] {
  const strapiPort = process.env.STRAPI_PORT ?? "6003";
  const strapiUrl =
    process.env.NEXT_PUBLIC_STRAPI_URL ?? `http://localhost:${strapiPort}`;

  try {
    const url = new URL(strapiUrl);
    const protocol = url.protocol.replace(":", "") as "http" | "https";

    return [
      {
        protocol,
        hostname: url.hostname,
        ...(url.port ? { port: url.port } : {}),
        pathname: "/uploads/**",
      },
    ];
  } catch {
    return [
      { protocol: "http", hostname: "localhost", port: strapiPort, pathname: "/uploads/**" },
      { protocol: "http", hostname: "127.0.0.1", port: strapiPort, pathname: "/uploads/**" },
    ];
  }
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "storage.googleapis.com", pathname: "/**" },
      { protocol: "https", hostname: "cdn.jsdelivr.net", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "eforte.io", pathname: "/**" },
      { protocol: "https", hostname: "static.eforte.io", pathname: "/**" },
      ...(getStrapiRemotePatterns() ?? []),
    ],
  },
  // Monorepo root so Turbopack can resolve hoisted `next` from the workspace.
  // Keep this at the repo root (not ~/), which owns pnpm-lock.yaml.
  turbopack: {
    root: path.join(__dirname, "../.."),
  },
  // HTML page lives at app/site-map (avoids conflict with app/sitemap.ts → /sitemap.xml).
  // Public URL is /sitemap.
  async rewrites() {
    return [{ source: "/sitemap", destination: "/site-map" }];
  },
};

export default nextConfig;
