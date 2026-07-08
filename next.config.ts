import type { NextConfig } from "next";

function getStrapiRemotePatterns(): NonNullable<NextConfig["images"]>["remotePatterns"] {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:5000";

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
      { protocol: "http", hostname: "localhost", port: "5000", pathname: "/uploads/**" },
      { protocol: "http", hostname: "127.0.0.1", port: "5000", pathname: "/uploads/**" },
    ];
  }
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "storage.googleapis.com", pathname: "/**" },
      { protocol: "https", hostname: "cdn.jsdelivr.net", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      ...(getStrapiRemotePatterns() ?? []),
    ],
  },
};

export default nextConfig;
