"use client";

import { useEffect, useState, type RefObject } from "react";
import { useInView } from "framer-motion";

type IoMargin = `${number}px`;

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
  /**
   * Time (ms) the element must stay fully off-screen before we reset it for replay.
   */
  exitDelayMs?: number;
  /**
   * Extra root margin used only for the *exit* observer. Positive values keep the
   * latch on until the element is clearly past the viewport, so reverse animations
   * never play while the card is still on screen.
   */
  exitMargin?: string;
}

/**
 * Replay-on-re-entry in-view flag with enter/exit hysteresis.
 *
 * Latches when `amount` of the element is visible. Stays latched while any pixel
 * remains in an expanded viewport (`exitMargin`). Resets only after the element
 * has been continuously off-screen for `exitDelayMs`.
 */
export function useInViewReplay(
  ref: RefObject<Element | null>,
  {
    margin = "0px",
    amount = 0.25,
    once = false,
    settleMs = 800,
    exitDelayMs = 400,
    exitMargin = "200px",
  }: UseInViewReplayOptions = {}
): boolean {
  const entered = useInView(ref, {
    margin: margin as IoMargin,
    amount,
    once,
  });

  const stillAround = useInView(ref, {
    margin: exitMargin as IoMargin,
    amount: "some",
    once: false,
  });

  const [settled, setSettled] = useState(false);
  const [latched, setLatched] = useState(false);

  if (entered && !latched) {
    setLatched(true);
  }

  useEffect(() => {
    const timer = window.setTimeout(() => setSettled(true), settleMs);
    return () => window.clearTimeout(timer);
  }, [settleMs]);

  useEffect(() => {
    if (stillAround || once || !settled || !latched) return;

    const timer = window.setTimeout(() => setLatched(false), exitDelayMs);
    return () => window.clearTimeout(timer);
  }, [stillAround, once, settled, latched, exitDelayMs]);

  return latched;
}
