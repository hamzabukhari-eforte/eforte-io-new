"use client";

import {
  forwardRef,
  useRef,
  type ElementType,
  type Ref,
} from "react";
import { motion as fmMotion } from "framer-motion";
import { useInViewReplay } from "@/lib/useInViewReplay";

function assignRef<T>(ref: Ref<T> | undefined, value: T | null) {
  if (!ref) return;
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  (ref as { current: T | null }).current = value;
}

type ViewportOpts = {
  once?: boolean;
  margin?: string;
  amount?: number | "some" | "all";
};

type LatchProps = {
  initial?: unknown;
  whileInView?: unknown;
  viewport?: ViewportOpts;
  animate?: unknown;
  transition?: unknown;
};

const SKIP_KEYS = new Set(["custom", "create"]);

function wrapMotionComponent(Component: ElementType) {
  const Wrapped = forwardRef(function ReplayMotionComponent(
    {
      initial,
      whileInView,
      viewport,
      animate,
      transition,
      ...rest
    }: LatchProps & Record<string, unknown>,
    forwardedRef: Ref<Element>
  ) {
    const latchRef = useRef<Element | null>(null);
    const useLatch = whileInView != null && viewport?.once !== true;
    const inView = useInViewReplay(latchRef, {
      margin: "0px",
      amount:
        typeof viewport?.amount === "number"
          ? Math.max(viewport.amount, 0.25)
          : 0.25,
      once: viewport?.once ?? false,
    });

    return (
      <Component
        {...rest}
        ref={(node: Element | null) => {
          latchRef.current = node;
          assignRef(forwardedRef, node);
        }}
        initial={initial}
        whileInView={useLatch ? undefined : whileInView}
        viewport={useLatch ? undefined : viewport}
        animate={useLatch ? (inView ? whileInView : initial) : animate}
        transition={useLatch && !inView ? { duration: 0 } : transition}
      />
    );
  });

  Wrapped.displayName = "ReplayMotion";
  return Wrapped;
}

const wrappedCache = new Map<PropertyKey, unknown>();

/**
 * Drop-in `motion` that latches `whileInView` (when `once` is not true)
 * so sections replay on re-entry without bouncing at the observer edge.
 */
export const motion = new Proxy(fmMotion, {
  get(target, prop, receiver) {
    if (typeof prop === "symbol" || SKIP_KEYS.has(String(prop))) {
      return Reflect.get(target, prop, receiver);
    }

    if (wrappedCache.has(prop)) return wrappedCache.get(prop);

    const value = Reflect.get(target, prop, receiver);
    if (typeof value !== "object" && typeof value !== "function") {
      return value;
    }

    const wrapped = wrapMotionComponent(value);
    wrappedCache.set(prop, wrapped);
    return wrapped;
  },
}) as typeof fmMotion;
