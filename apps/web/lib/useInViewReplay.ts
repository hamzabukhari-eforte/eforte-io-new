"use client";

import { useEffect, useState, type RefObject } from "react";
import { useInView } from "framer-motion";

interface UseInViewReplayOptions {
  margin?: string;
  amount?: number | "some" | "all";
  /** When true, stay in view after the first intersection (framer-motion `once`). */
  once?: boolean;
  /**
   * Time (ms) after mount during which we never animate an element back out.
   * This prevents the flicker that happens while the page is still loading and
   * images are reflowing the layout (which makes the IntersectionObserver toggle
   * rapidly). After this window, normal replay-on-scroll behavior resumes.
   */
  settleMs?: number;
}

/**
 * A drop-in replacement for framer-motion's `useInView` that keeps the
 * "replay every time the element enters the viewport" behavior, but avoids the
 * load-time flicker caused by layout reflow toggling the observer on and off.
 */
export function useInViewReplay(
  ref: RefObject<Element | null>,
  {
    margin = "-60px",
    amount = 0.15,
    once = false,
    settleMs = 800,
  }: UseInViewReplayOptions = {}
): boolean {
  // framer-motion's margin typing is a branded string; cast keeps callers simple.
  const rawInView = useInView(ref, {
    margin: margin as `${number}px`,
    amount,
    once,
  });

  const [settled, setSettled] = useState(false);
  const [seenInView, setSeenInView] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setSettled(true), settleMs);
    return () => window.clearTimeout(timer);
  }, [settleMs]);

  // Latch first visibility during render (React-supported pattern) so we do not
  // need a syncing effect that mirrors rawInView into local state.
  if (rawInView && !seenInView) {
    setSeenInView(true);
  }

  if (settled) return rawInView;
  return rawInView || seenInView;
}
