"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

export const BLUE = "#2739DD";
export const BLUE_SOFT = "#5B6BFF";
export const PINK = "#D3287A";
export const WHITE = "#FFFFFF";
/** Matches the node fill, so shapes can punch holes through lines behind them. */
export const DARK = "#0C0F2B";

export const EASE = [0.22, 1, 0.36, 1] as const;

/** Every icon is authored inside a 40x40 box centred on (20, 20). */
export const ICON_BOX = 40;

export type IconProps = {
  delay: number;
  inView: boolean;
  reduce: boolean;
};

type StrokeProps = {
  delay: number;
  inView: boolean;
  duration?: number;
  stroke?: string;
  strokeWidth?: number;
};

export function DrawPath({
  d,
  delay,
  inView,
  duration = 0.5,
  stroke = WHITE,
  strokeWidth = 2,
  markerEnd,
}: StrokeProps & { d: string; markerEnd?: string }) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      markerEnd={markerEnd}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={inView ? { pathLength: 1, opacity: 1 } : undefined}
      transition={{ duration, delay, ease: EASE }}
    />
  );
}

export function DrawCircle({
  cx,
  cy,
  r,
  delay,
  inView,
  duration = 0.55,
  stroke = WHITE,
  strokeWidth = 2,
}: StrokeProps & { cx: number; cy: number; r: number }) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={r}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={inView ? { pathLength: 1, opacity: 1 } : undefined}
      transition={{ duration, delay, ease: EASE }}
    />
  );
}

export function DrawEllipse({
  cx,
  cy,
  rx,
  ry,
  delay,
  inView,
  duration = 0.55,
  stroke = WHITE,
  strokeWidth = 2,
}: StrokeProps & { cx: number; cy: number; rx: number; ry: number }) {
  return (
    <motion.ellipse
      cx={cx}
      cy={cy}
      rx={rx}
      ry={ry}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={inView ? { pathLength: 1, opacity: 1 } : undefined}
      transition={{ duration, delay, ease: EASE }}
    />
  );
}

export function FadeIn({
  delay,
  inView,
  children,
}: {
  delay: number;
  inView: boolean;
  children: ReactNode;
}) {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : undefined}
      transition={{ duration: 0.35, delay }}
    >
      {children}
    </motion.g>
  );
}

/** Slow continuous spin around the group's own centre. */
export function Spin({
  seconds,
  reduce,
  children,
}: {
  seconds: number;
  reduce: boolean;
  children: ReactNode;
}) {
  return (
    <motion.g
      style={{ transformBox: "fill-box", transformOrigin: "center" }}
      animate={reduce ? undefined : { rotate: 360 }}
      transition={{ duration: seconds, ease: "linear", repeat: Infinity }}
    >
      {children}
    </motion.g>
  );
}

/** Fades in, then breathes on a loop. Static when motion is reduced. */
export function Pulse({
  delay,
  inView,
  reduce,
  seconds = 2.2,
  low = 0.35,
  children,
}: {
  delay: number;
  inView: boolean;
  reduce: boolean;
  seconds?: number;
  low?: number;
  children: ReactNode;
}) {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={
        inView ? (reduce ? { opacity: 1 } : { opacity: [1, low, 1] }) : undefined
      }
      transition={
        reduce
          ? { duration: 0.3, delay }
          : { duration: seconds, delay, repeat: Infinity, ease: "easeInOut" }
      }
    >
      {children}
    </motion.g>
  );
}

/** Sheet of paper with a folded top-right corner. */
export function PageOutline({
  x,
  y,
  width,
  height,
  delay,
  inView,
  fold = 6,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  delay: number;
  inView: boolean;
  fold?: number;
}) {
  return (
    <>
      <DrawPath
        d={`M ${x} ${y} H ${x + width - fold} L ${x + width} ${y + fold} V ${y + height} H ${x} Z`}
        delay={delay}
        inView={inView}
      />
      <DrawPath
        d={`M ${x + width - fold} ${y} V ${y + fold} H ${x + width}`}
        strokeWidth={1.5}
        delay={delay + 0.1}
        inView={inView}
      />
    </>
  );
}

function pointsToPath(points: string[]) {
  return `M ${points.join(" L ")} Z`;
}

/** Alternating outer/inner points, first point at 12 o'clock. */
export function starPath(
  cx: number,
  cy: number,
  outer: number,
  inner: number,
  points = 5
) {
  const step = 360 / (points * 2);

  return pointsToPath(
    Array.from({ length: points * 2 }, (_, index) => {
      const angle = ((-90 + index * step) * Math.PI) / 180;
      const radius = index % 2 === 0 ? outer : inner;

      return `${(cx + radius * Math.cos(angle)).toFixed(2)} ${(cy + radius * Math.sin(angle)).toFixed(2)}`;
    })
  );
}

/** Point on a circle, measured in degrees anticlockwise from 3 o'clock. */
export function polarPoint(
  cx: number,
  cy: number,
  radius: number,
  degrees: number
) {
  const angle = (degrees * Math.PI) / 180;

  return {
    x: Number((cx + radius * Math.cos(angle)).toFixed(2)),
    y: Number((cy - radius * Math.sin(angle)).toFixed(2)),
  };
}
