"use client";

import dynamic from "next/dynamic";
import type { CSSProperties } from "react";

export type ReactPlayerClientProps = {
  src?: string;
  url?: string;
  width?: string | number;
  height?: string | number;
  style?: CSSProperties;
  className?: string;
  controls?: boolean;
  playing?: boolean;
  light?: boolean | string;
  muted?: boolean;
  loop?: boolean;
  volume?: number;
  config?: Record<string, unknown>;
  onReady?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
};

/**
 * Client-only react-player.
 * Avoids next/dynamic + dual @types/react (web React 19 vs Strapi React 18)
 * type failures on Vercel by keeping a local props type and casting the loader.
 */
const Inner = dynamic(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (() => import("react-player").then((mod) => mod.default)) as any,
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 animate-pulse rounded-[12px] bg-black/80" />
    ),
  }
) as unknown as React.ComponentType<ReactPlayerClientProps>;

export default function ReactPlayerClient(props: ReactPlayerClientProps) {
  return <Inner {...props} />;
}
