"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

/**
 * next/dynamic + react-player default export typing breaks under React 19 /
 * dual @types/react resolution (Vercel production builds). Load the default
 * export explicitly and cast for the dynamic loader.
 */
const ReactPlayerClient = dynamic(
  () =>
    import("react-player").then(
      (mod) => mod.default as unknown as ComponentType<Record<string, unknown>>
    ),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 animate-pulse rounded-2xl bg-black/80" />
    ),
  }
);

export default ReactPlayerClient;
