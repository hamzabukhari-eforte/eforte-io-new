"use client";

import { useEffect, useState, type RefObject } from "react";
import { useInView } from "framer-motion";

interface UseInViewReplayOptions {
  margin?: string;
  amount?: number | "some" | "all";
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
  { margin = "-60px", amount = 0.15, settleMs = 800 }: UseInViewReplayOptions = {}
): boolean {
  // framer-motion's margin typing is a branded string; cast keeps callers simple.
  const rawInView = useInView(ref, {
    margin: margin as `${number}px`,
    amount,
  });

  const [settled, setSettled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setSettled(true), settleMs);
    return () => window.clearTimeout(timer);
  }, [settleMs]);

  useEffect(() => {
    if (rawInView) {
      setVisible(true);
      return;
    }

    // Only allow animating back out once the initial load has settled. During
    // the load window we keep the last visible state to prevent flicker.
    if (settled) {
      setVisible(false);
    }
  }, [rawInView, settled]);

  return visible;
}
