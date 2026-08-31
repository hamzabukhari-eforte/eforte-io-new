"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  BLUE_SOFT,
  DARK,
  DrawCircle,
  DrawEllipse,
  DrawPath,
  EASE,
  FadeIn,
  PageOutline,
  PINK,
  polarPoint,
  Pulse,
  Spin,
  starPath,
  WHITE,
  type IconProps,
} from "./primitives";

/** Scales up from its own bottom edge — used for chart bars. */
function GrowUp({
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
      style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
      initial={{ scaleY: 0, opacity: 0 }}
      animate={inView ? { scaleY: 1, opacity: 1 } : undefined}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </motion.g>
  );
}

/** Scales out from its own left edge — used for ranked rows. */
function GrowRight({
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
      style={{ transformBox: "fill-box", transformOrigin: "left" }}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={inView ? { scaleX: 1, opacity: 1 } : undefined}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      {children}
    </motion.g>
  );
}

/* ------------------------------------------------------------------ *
 * Intake
 * ------------------------------------------------------------------ */

/** Inbound message with a live "just arrived" ping. */
export function MessageIcon({ delay, inView, reduce }: IconProps) {
  return (
    <>
      <DrawPath
        d="M 9 8 H 27 A 5 5 0 0 1 32 13 V 23 A 5 5 0 0 1 27 28 H 16 L 9 34 V 28 A 5 5 0 0 1 4 23 V 13 A 5 5 0 0 1 9 8 Z"
        delay={delay}
        inView={inView}
      />
      <DrawPath
        d="M 10 15 H 26"
        strokeWidth={1.5}
        delay={delay + 0.1}
        inView={inView}
      />
      <DrawPath
        d="M 10 21 H 21"
        strokeWidth={1.5}
        delay={delay + 0.16}
        inView={inView}
      />

      <FadeIn delay={delay + 0.22} inView={inView}>
        <circle cx={33} cy={7} r={3.5} fill={PINK} />
      </FadeIn>
      {reduce ? null : (
        <motion.circle
          cx={33}
          cy={7}
          fill="none"
          stroke={PINK}
          strokeWidth={1.4}
          initial={{ r: 3.5, opacity: 0 }}
          animate={inView ? { r: [3.5, 10], opacity: [0.75, 0] } : undefined}
          transition={{
            duration: 1.9,
            delay: delay + 0.8,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      )}
    </>
  );
}

/** Single sheet with a highlighted total line. */
export function DocumentIcon({ delay, inView }: IconProps) {
  return (
    <>
      <PageOutline
        x={9}
        y={4}
        width={22}
        height={32}
        delay={delay}
        inView={inView}
      />
      <DrawPath
        d="M 14 18 H 26"
        strokeWidth={1.5}
        delay={delay + 0.2}
        inView={inView}
      />
      <DrawPath
        d="M 14 24 H 26"
        strokeWidth={1.5}
        delay={delay + 0.25}
        inView={inView}
      />
      <DrawPath
        d="M 14 30 H 21"
        strokeWidth={2}
        stroke={PINK}
        delay={delay + 0.3}
        inView={inView}
      />
    </>
  );
}

/** Batch of documents waiting to be processed. */
export function DocumentStackIcon({ delay, inView }: IconProps) {
  return (
    <>
      <DrawPath
        d="M 16 7 H 27 L 32 12 V 29"
        strokeWidth={1.5}
        delay={delay}
        inView={inView}
      />
      <PageOutline
        x={8}
        y={12}
        width={19}
        height={22}
        delay={delay + 0.1}
        inView={inView}
      />
      <DrawPath
        d="M 12 24 H 23"
        strokeWidth={1.5}
        delay={delay + 0.3}
        inView={inView}
      />
      <DrawPath
        d="M 12 29 H 19"
        strokeWidth={2}
        stroke={PINK}
        delay={delay + 0.35}
        inView={inView}
      />
    </>
  );
}

/** Application file: a sheet with a person on it. */
export function PersonFileIcon({ delay, inView }: IconProps) {
  return (
    <>
      <PageOutline
        x={11}
        y={4}
        width={21}
        height={32}
        delay={delay}
        inView={inView}
      />
      <DrawCircle
        cx={21.5}
        cy={17}
        r={4}
        strokeWidth={1.8}
        delay={delay + 0.2}
        inView={inView}
      />
      <DrawPath
        d="M 15.5 27.5 C 15.5 23.5, 18.5 21.5, 21.5 21.5 C 24.5 21.5, 27.5 23.5, 27.5 27.5"
        strokeWidth={1.8}
        delay={delay + 0.26}
        inView={inView}
      />
      <DrawPath
        d="M 16 32 H 27"
        strokeWidth={2}
        stroke={PINK}
        delay={delay + 0.34}
        inView={inView}
      />
    </>
  );
}

/** Wide top, narrow spout, with a lead dropping through. */
export function FunnelIcon({ delay, inView, reduce }: IconProps) {
  return (
    <>
      <DrawPath
        d="M 5 8 H 35 L 23 22 V 34 L 17 30 V 22 Z"
        delay={delay}
        inView={inView}
      />
      <DrawPath
        d="M 11 14 H 29"
        strokeWidth={1.5}
        delay={delay + 0.2}
        inView={inView}
      />
      {reduce ? (
        <FadeIn delay={delay + 0.3} inView={inView}>
          <circle cx={20} cy={37} r={2.4} fill={PINK} />
        </FadeIn>
      ) : (
        <motion.circle
          cx={20}
          r={2.4}
          fill={PINK}
          initial={{ cy: 34, opacity: 0 }}
          animate={inView ? { cy: [34, 39], opacity: [0, 1, 0] } : undefined}
          transition={{
            duration: 1.4,
            delay: delay + 0.7,
            repeat: Infinity,
            repeatDelay: 0.7,
            ease: "easeIn",
          }}
        />
      )}
    </>
  );
}

/** Three feeds converging into an intelligence hub. */
export function HubIcon({ delay, inView, reduce }: IconProps) {
  return (
    <>
      <DrawPath
        d="M 7.5 8 C 15 8, 14 20, 19.5 20"
        strokeWidth={1.5}
        delay={delay}
        inView={inView}
      />
      <DrawPath
        d="M 7.5 20 H 19.5"
        strokeWidth={1.5}
        delay={delay + 0.06}
        inView={inView}
      />
      <DrawPath
        d="M 7.5 32 C 15 32, 14 20, 19.5 20"
        strokeWidth={1.5}
        delay={delay + 0.12}
        inView={inView}
      />

      <FadeIn delay={delay + 0.2} inView={inView}>
        <circle cx={5} cy={8} r={2.4} fill={BLUE_SOFT} />
        <circle cx={5} cy={20} r={2.4} fill={BLUE_SOFT} />
        <circle cx={5} cy={32} r={2.4} fill={BLUE_SOFT} />
      </FadeIn>

      <DrawCircle
        cx={27}
        cy={20}
        r={7}
        delay={delay + 0.24}
        inView={inView}
      />
      <DrawPath
        d="M 34 20 H 38"
        strokeWidth={1.5}
        delay={delay + 0.34}
        inView={inView}
      />
      <Pulse delay={delay + 0.4} inView={inView} reduce={reduce} low={0.4}>
        <circle cx={27} cy={20} r={3} fill={PINK} />
      </Pulse>
    </>
  );
}

/* ------------------------------------------------------------------ *
 * Reasoning
 * ------------------------------------------------------------------ */

/** Neural core fanning work out to sorted destinations. */
export function AiCoreIcon({ delay, inView, reduce }: IconProps) {
  return (
    <>
      <DrawPath
        d="M 16 10.5 L 25.5 15.75 V 24.25 L 16 29.5 L 6.5 24.25 V 15.75 Z"
        delay={delay}
        inView={inView}
      />
      <DrawPath
        d="M 21.8 13.2 L 32.6 7.4"
        strokeWidth={1.5}
        delay={delay + 0.18}
        inView={inView}
      />
      <DrawPath
        d="M 25.5 20 H 33.3"
        strokeWidth={1.5}
        delay={delay + 0.23}
        inView={inView}
      />
      <DrawPath
        d="M 21.8 26.8 L 32.6 32.6"
        strokeWidth={1.5}
        delay={delay + 0.28}
        inView={inView}
      />

      <FadeIn delay={delay + 0.38} inView={inView}>
        <circle cx={34.6} cy={6.6} r={2.2} fill={BLUE_SOFT} />
        <circle cx={35.6} cy={20} r={2.2} fill={BLUE_SOFT} />
        <circle cx={34.6} cy={33.4} r={2.2} fill={BLUE_SOFT} />
      </FadeIn>

      <motion.circle
        cx={16}
        cy={20}
        fill={PINK}
        initial={{ r: 0, opacity: 0 }}
        animate={
          inView
            ? reduce
              ? { r: 3.2, opacity: 1 }
              : { r: [3, 4.4, 3], opacity: 1 }
            : undefined
        }
        transition={
          reduce
            ? { duration: 0.3, delay: delay + 0.3 }
            : {
                r: {
                  duration: 2.4,
                  delay: delay + 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                opacity: { duration: 0.3, delay: delay + 0.3 },
              }
        }
      />
    </>
  );
}

/** Sheet under a sweeping extraction beam. */
export function ScanIcon({ delay, inView, reduce }: IconProps) {
  return (
    <>
      <PageOutline
        x={10}
        y={6}
        width={20}
        height={28}
        delay={delay}
        inView={inView}
      />
      <DrawPath
        d="M 14 16 H 26"
        strokeWidth={1.5}
        delay={delay + 0.2}
        inView={inView}
      />
      <DrawPath
        d="M 14 28 H 22"
        strokeWidth={1.5}
        delay={delay + 0.25}
        inView={inView}
      />

      <motion.g
        initial={{ opacity: 0 }}
        animate={
          inView
            ? reduce
              ? { opacity: 1 }
              : { opacity: 1, y: [-5, 5, -5] }
            : undefined
        }
        transition={
          reduce
            ? { duration: 0.3, delay: delay + 0.3 }
            : {
                opacity: { duration: 0.3, delay: delay + 0.3 },
                y: {
                  duration: 2.6,
                  delay: delay + 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
        }
      >
        <path
          d="M 7 22 H 33"
          fill="none"
          stroke={PINK}
          strokeWidth={2}
          strokeLinecap="round"
        />
      </motion.g>
    </>
  );
}

/** Score dial with the reading swept in as an arc. */
export function GaugeIcon({ delay, inView, reduce }: IconProps) {
  const cx = 20;
  const cy = 24.5;
  const r = 14;
  const left = polarPoint(cx, cy, r, 180);
  const right = polarPoint(cx, cy, r, 0);
  const score = polarPoint(cx, cy, r, 63);
  const tickOuterLeft = polarPoint(cx, cy, r, 150);
  const tickInnerLeft = polarPoint(cx, cy, r - 3.5, 150);
  const tickOuterRight = polarPoint(cx, cy, r, 30);
  const tickInnerRight = polarPoint(cx, cy, r - 3.5, 30);

  return (
    <>
      <DrawPath
        d={`M ${left.x} ${left.y} A ${r} ${r} 0 0 1 ${right.x} ${right.y}`}
        strokeWidth={1.8}
        delay={delay}
        inView={inView}
      />
      <DrawPath
        d={`M ${tickOuterLeft.x} ${tickOuterLeft.y} L ${tickInnerLeft.x} ${tickInnerLeft.y}`}
        strokeWidth={1.5}
        delay={delay + 0.18}
        inView={inView}
      />
      <DrawPath
        d={`M ${cx} ${cy - r} V ${cy - r + 3.5}`}
        strokeWidth={1.5}
        delay={delay + 0.22}
        inView={inView}
      />
      <DrawPath
        d={`M ${tickOuterRight.x} ${tickOuterRight.y} L ${tickInnerRight.x} ${tickInnerRight.y}`}
        strokeWidth={1.5}
        delay={delay + 0.26}
        inView={inView}
      />
      <DrawPath
        d={`M ${left.x} ${left.y} A ${r} ${r} 0 0 1 ${score.x} ${score.y}`}
        stroke={PINK}
        strokeWidth={2.6}
        duration={0.8}
        delay={delay + 0.3}
        inView={inView}
      />
      <DrawPath
        d={`M 12 ${cy + 5} H 28`}
        strokeWidth={1.5}
        delay={delay + 0.4}
        inView={inView}
      />
      <Pulse
        delay={delay + 0.9}
        inView={inView}
        reduce={reduce}
        low={0.45}
        seconds={2}
      >
        <circle cx={score.x} cy={score.y} r={2.6} fill={PINK} />
      </Pulse>
    </>
  );
}

/** Three sources reconciled into a single confirmation. */
export function MatchIcon({ delay, inView }: IconProps) {
  return (
    <>
      <FadeIn delay={delay} inView={inView}>
        <rect
          x={3}
          y={5}
          width={8}
          height={8}
          rx={2}
          fill="none"
          stroke={WHITE}
          strokeWidth={1.6}
        />
        <rect
          x={3}
          y={16}
          width={8}
          height={8}
          rx={2}
          fill="none"
          stroke={WHITE}
          strokeWidth={1.6}
        />
        <rect
          x={3}
          y={27}
          width={8}
          height={8}
          rx={2}
          fill="none"
          stroke={WHITE}
          strokeWidth={1.6}
        />
      </FadeIn>

      <DrawPath
        d="M 11 9 H 16 V 20"
        strokeWidth={1.5}
        delay={delay + 0.14}
        inView={inView}
      />
      <DrawPath
        d="M 11 20 H 21"
        strokeWidth={1.5}
        delay={delay + 0.18}
        inView={inView}
      />
      <DrawPath
        d="M 11 31 H 16 V 20"
        strokeWidth={1.5}
        delay={delay + 0.22}
        inView={inView}
      />

      <DrawCircle
        cx={29}
        cy={20}
        r={7.5}
        strokeWidth={1.8}
        delay={delay + 0.3}
        inView={inView}
      />
      <DrawPath
        d="M 25.5 20 L 28 22.8 L 32.5 17"
        strokeWidth={2}
        stroke={PINK}
        delay={delay + 0.42}
        inView={inView}
      />
    </>
  );
}

/** Capacity sliders being balanced. */
export function SlidersIcon({ delay, inView }: IconProps) {
  const rows = [
    { y: 11, handle: 13, accent: false },
    { y: 20, handle: 24, accent: true },
    { y: 29, handle: 17, accent: false },
  ];

  return (
    <>
      {rows.map((row, index) => (
        <DrawPath
          key={`track-${row.y}`}
          d={`M 6 ${row.y} H 34`}
          strokeWidth={1.5}
          delay={delay + index * 0.06}
          inView={inView}
        />
      ))}

      {rows.map((row, index) => (
        <motion.rect
          key={`handle-${row.y}`}
          x={row.handle - 2.5}
          y={row.y - 3.5}
          width={5}
          height={7}
          rx={2.5}
          fill={DARK}
          stroke={row.accent ? PINK : WHITE}
          strokeWidth={1.8}
          initial={{ opacity: 0, x: -5 }}
          animate={inView ? { opacity: 1, x: 0 } : undefined}
          transition={{
            duration: 0.5,
            delay: delay + 0.24 + index * 0.08,
            ease: EASE,
          }}
        />
      ))}
    </>
  );
}

/* ------------------------------------------------------------------ *
 * Action and governance
 * ------------------------------------------------------------------ */

/** Turning gear resolving to a confirmed outcome. */
export function GearCheckIcon({ delay, inView, reduce }: IconProps) {
  return (
    <>
      <Spin seconds={16} reduce={reduce}>
        <DrawCircle
          cx={20}
          cy={20}
          r={12}
          delay={delay}
          inView={inView}
          strokeWidth={1.8}
        />
        <DrawPath
          d="M 33.5 20 H 37 M 29.6 29.6 L 32 32 M 20 33.5 V 37 M 10.4 29.6 L 8 32 M 6.5 20 H 3 M 10.4 10.4 L 8 8 M 20 6.5 V 3 M 29.6 10.4 L 32 8"
          strokeWidth={1.8}
          delay={delay + 0.12}
          inView={inView}
          duration={0.6}
        />
      </Spin>

      <DrawPath
        d="M 14 20.5 L 18.5 25 L 26.5 16"
        strokeWidth={2.2}
        stroke={PINK}
        delay={delay + 0.36}
        inView={inView}
      />
    </>
  );
}

/** Hand-off to a headset agent, with an escalation cue. */
export function AgentIcon({ delay, inView, reduce }: IconProps) {
  return (
    <>
      <DrawCircle cx={18} cy={13} r={6.5} delay={delay} inView={inView} />
      <DrawPath
        d="M 7 32 C 7 25, 12 22, 18 22 C 24 22, 29 25, 29 32"
        delay={delay + 0.1}
        inView={inView}
      />
      <DrawPath
        d="M 10.5 12 C 10.5 5, 25.5 5, 25.5 12"
        strokeWidth={1.5}
        delay={delay + 0.18}
        inView={inView}
      />

      <FadeIn delay={delay + 0.28} inView={inView}>
        <rect x={8.5} y={10} width={4} height={7} rx={2} fill={BLUE_SOFT} />
        <rect x={23.5} y={10} width={4} height={7} rx={2} fill={BLUE_SOFT} />
      </FadeIn>

      <motion.g
        initial={{ opacity: 0 }}
        animate={
          inView
            ? reduce
              ? { opacity: 1 }
              : { opacity: 1, y: [0, -2.5, 0] }
            : undefined
        }
        transition={
          reduce
            ? { duration: 0.3, delay: delay + 0.34 }
            : {
                opacity: { duration: 0.3, delay: delay + 0.34 },
                y: {
                  duration: 1.8,
                  delay: delay + 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
        }
      >
        <path
          d="M 34 22 V 10 M 30.6 13.4 L 34 10 L 37.4 13.4"
          fill="none"
          stroke={PINK}
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </>
  );
}

/** Sign-off against a policy or authority hierarchy. */
export function ClipboardCheckIcon({ delay, inView }: IconProps) {
  return (
    <>
      <DrawPath
        d="M 12 9 H 28 A 3 3 0 0 1 31 12 V 34 A 3 3 0 0 1 28 37 H 12 A 3 3 0 0 1 9 34 V 12 A 3 3 0 0 1 12 9 Z"
        delay={delay}
        inView={inView}
      />
      <DrawPath
        d="M 13.5 9 V 6 A 2 2 0 0 1 15.5 4 H 24.5 A 2 2 0 0 1 26.5 6 V 9"
        strokeWidth={1.6}
        delay={delay + 0.14}
        inView={inView}
      />
      <DrawPath
        d="M 14.5 22 L 18.5 26 L 26 17"
        strokeWidth={2.2}
        stroke={PINK}
        delay={delay + 0.24}
        inView={inView}
      />
      <DrawPath
        d="M 14 31.5 H 26"
        strokeWidth={1.5}
        delay={delay + 0.34}
        inView={inView}
      />
    </>
  );
}

/** Rules and regulations enforced. */
export function ShieldCheckIcon({ delay, inView }: IconProps) {
  return (
    <>
      <DrawPath
        d="M 20 4 L 33 9 V 21 C 33 29, 27 34.5, 20 37 C 13 34.5, 7 29, 7 21 V 9 Z"
        delay={delay}
        inView={inView}
      />
      <DrawPath
        d="M 14 20 L 18.5 24.5 L 26.5 15.5"
        strokeWidth={2.2}
        stroke={PINK}
        delay={delay + 0.2}
        inView={inView}
      />
    </>
  );
}

/** Anomaly raised for attention. */
export function AlertIcon({ delay, inView, reduce }: IconProps) {
  return (
    <>
      <DrawPath
        d="M 20 6 L 36 34 H 4 Z"
        delay={delay}
        inView={inView}
      />
      <Pulse delay={delay + 0.3} inView={inView} reduce={reduce} seconds={1.6}>
        <path
          d="M 20 17 V 25"
          fill="none"
          stroke={PINK}
          strokeWidth={2.4}
          strokeLinecap="round"
        />
        <circle cx={20} cy={29.5} r={1.9} fill={PINK} />
      </Pulse>
    </>
  );
}

/** Work advancing through stages, with a rolling highlight. */
export function StagesIcon({ delay, inView, reduce }: IconProps) {
  const chevrons = [
    { d: "M 8 12 L 15 20 L 8 28", stroke: WHITE, width: 1.8 },
    { d: "M 17 12 L 24 20 L 17 28", stroke: WHITE, width: 2 },
    { d: "M 26 12 L 33 20 L 26 28", stroke: PINK, width: 2.2 },
  ];

  return (
    <>
      {chevrons.map((chevron, index) => (
        <motion.g
          key={chevron.d}
          animate={
            inView && !reduce ? { opacity: [0.45, 1, 0.45] } : undefined
          }
          transition={{
            duration: 1.8,
            delay: delay + 0.6 + index * 0.22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <DrawPath
            d={chevron.d}
            stroke={chevron.stroke}
            strokeWidth={chevron.width}
            delay={delay + index * 0.1}
            inView={inView}
          />
        </motion.g>
      ))}
    </>
  );
}

/* ------------------------------------------------------------------ *
 * Outcome
 * ------------------------------------------------------------------ */

/** Live dashboard with bars growing into place. */
export function ChartBarIcon({ delay, inView }: IconProps) {
  const bars = [
    { x: 9, height: 10, accent: false },
    { x: 17.5, height: 18, accent: false },
    { x: 26, height: 26, accent: true },
  ];

  return (
    <>
      <DrawPath
        d="M 5 34 H 35"
        strokeWidth={1.8}
        delay={delay}
        inView={inView}
      />
      {bars.map((bar, index) => (
        <GrowUp
          key={bar.x}
          delay={delay + 0.18 + index * 0.12}
          inView={inView}
        >
          <rect
            x={bar.x}
            y={34 - bar.height}
            width={5}
            height={bar.height}
            rx={1.5}
            fill="none"
            stroke={bar.accent ? PINK : WHITE}
            strokeWidth={1.8}
          />
        </GrowUp>
      ))}
    </>
  );
}

/** Trend line climbing to a highlighted peak. */
export function TrendUpIcon({ delay, inView, reduce }: IconProps) {
  return (
    <>
      <DrawPath
        d="M 7 6 V 33 H 34"
        strokeWidth={1.8}
        delay={delay}
        inView={inView}
      />
      <DrawPath
        d="M 11 28 L 18 21 L 24 25 L 32 13"
        strokeWidth={2.2}
        duration={0.7}
        delay={delay + 0.18}
        inView={inView}
      />
      <FadeIn delay={delay + 0.5} inView={inView}>
        <circle cx={18} cy={21} r={1.8} fill={WHITE} />
        <circle cx={24} cy={25} r={1.8} fill={WHITE} />
      </FadeIn>
      <Pulse delay={delay + 0.6} inView={inView} reduce={reduce} low={0.45}>
        <circle cx={32} cy={13} r={2.8} fill={PINK} />
      </Pulse>
    </>
  );
}

/** Ranked shortlist with the top match starred. */
export function RankIcon({ delay, inView }: IconProps) {
  const rows = [
    { y: 8, width: 24, accent: true },
    { y: 18, width: 18, accent: false },
    { y: 28, width: 12, accent: false },
  ];

  return (
    <>
      {rows.map((row, index) => (
        <GrowRight key={row.y} delay={delay + index * 0.1} inView={inView}>
          <rect
            x={5}
            y={row.y}
            width={row.width}
            height={6}
            rx={3}
            fill="none"
            stroke={row.accent ? PINK : WHITE}
            strokeWidth={1.8}
          />
        </GrowRight>
      ))}
      <FadeIn delay={delay + 0.36} inView={inView}>
        <path d={starPath(34, 11, 4, 1.9)} fill={PINK} />
      </FadeIn>
    </>
  );
}

/** Cleansed data store. */
export function DatabaseIcon({ delay, inView }: IconProps) {
  return (
    <>
      <DrawEllipse
        cx={18}
        cy={10}
        rx={10}
        ry={4}
        strokeWidth={1.8}
        delay={delay}
        inView={inView}
      />
      <DrawPath
        d="M 8 10 V 28 A 10 4 0 0 0 28 28 V 10"
        strokeWidth={1.8}
        delay={delay + 0.14}
        inView={inView}
      />
      <DrawPath
        d="M 8 19 A 10 4 0 0 0 28 19"
        strokeWidth={1.5}
        delay={delay + 0.24}
        inView={inView}
      />
      <DrawPath
        d="M 28.5 30 L 31 32.5 L 36.5 27"
        strokeWidth={2.2}
        stroke={PINK}
        delay={delay + 0.34}
        inView={inView}
      />
    </>
  );
}

/** Generated document, badged as AI-assembled. */
export function ProposalIcon({ delay, inView, reduce }: IconProps) {
  return (
    <>
      <PageOutline
        x={9}
        y={5}
        width={22}
        height={30}
        delay={delay}
        inView={inView}
      />
      <DrawPath
        d="M 14 19 H 24"
        strokeWidth={1.5}
        delay={delay + 0.2}
        inView={inView}
      />
      <DrawPath
        d="M 14 25 H 21"
        strokeWidth={1.5}
        delay={delay + 0.25}
        inView={inView}
      />
      <Pulse
        delay={delay + 0.34}
        inView={inView}
        reduce={reduce}
        low={0.4}
        seconds={2}
      >
        <path d={starPath(32, 31, 7, 3, 4)} fill={PINK} />
      </Pulse>
    </>
  );
}

/** Sentiment feeding back into the next run. */
export function LoopStarIcon({ delay, inView, reduce }: IconProps) {
  return (
    <>
      <Spin seconds={11} reduce={reduce}>
        <DrawPath
          d="M 7.8 15.6 A 13 13 0 0 1 32.2 15.6"
          delay={delay}
          inView={inView}
        />
        <DrawPath
          d="M 32.2 24.4 A 13 13 0 0 1 7.8 24.4"
          delay={delay + 0.12}
          inView={inView}
        />
        <FadeIn delay={delay + 0.3} inView={inView}>
          <path d="M 28.2 14 L 36.2 14 L 32.2 21 Z" fill={BLUE_SOFT} />
          <path d="M 3.8 26 L 11.8 26 L 7.8 19 Z" fill={BLUE_SOFT} />
        </FadeIn>
      </Spin>

      <FadeIn delay={delay + 0.36} inView={inView}>
        <path d={starPath(20, 20, 4.2, 1.9)} fill={PINK} />
      </FadeIn>
    </>
  );
}
