"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const BLUE = "#2739DD";
const BLUE_SOFT = "#5B6BFF";
const PINK = "#D3287A";
const WHITE = "#FFFFFF";

const EASE = [0.22, 1, 0.36, 1] as const;

const NODE_SIZE = 92;
const NODE_Y = 22;
const CENTER_Y = NODE_Y + NODE_SIZE / 2;
const NODE_X = [30, 242, 454, 666, 878];
const LABEL_Y = 148;
const DESCRIPTION_Y = 170;

/** Icons are authored in a 40x40 box; scaled up to render at 60 units. */
const ICON_BOX = 40;
const ICON_SIZE = 60;
const ICON_SCALE = ICON_SIZE / ICON_BOX;

/** Straight rails between node edges — travelling pulses reuse these bounds. */
const LINKS = [
  { x1: 132, x2: 232 },
  { x1: 344, x2: 444 },
  { x1: 556, x2: 656 },
  { x1: 768, x2: 868 },
];

type IconProps = {
  delay: number;
  inView: boolean;
  reduce: boolean;
};

type DrawPathProps = {
  d: string;
  delay: number;
  inView: boolean;
  duration?: number;
  stroke?: string;
  strokeWidth?: number;
  markerEnd?: string;
};

function DrawPath({
  d,
  delay,
  inView,
  duration = 0.5,
  stroke = WHITE,
  strokeWidth = 2,
  markerEnd,
}: DrawPathProps) {
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

function DrawCircle({
  cx,
  cy,
  r,
  delay,
  inView,
  stroke = WHITE,
  strokeWidth = 2,
}: {
  cx: number;
  cy: number;
  r: number;
  delay: number;
  inView: boolean;
  stroke?: string;
  strokeWidth?: number;
}) {
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
      transition={{ duration: 0.55, delay, ease: EASE }}
    />
  );
}

function FadeIn({
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
function Spin({
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

/** 01 — inbound message with a live "new inquiry" ping. */
function InquiryIcon({ delay, inView, reduce }: IconProps) {
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

/** 02 — neural core fanning intents out to sorted channels. */
function TriageIcon({ delay, inView, reduce }: IconProps) {
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

/** 03 — turning gear resolving to a confirmed outcome. */
function ResolutionIcon({ delay, inView, reduce }: IconProps) {
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

/** 04 — hand-off to a headset agent, with an escalation cue. */
function EscalationIcon({ delay, inView, reduce }: IconProps) {
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

/** 05 — sentiment feeding back into the loop. */
function FeedbackIcon({ delay, inView, reduce }: IconProps) {
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
        <path
          d="M 20 15.8 L 21.33 18.67 L 24.45 19.06 L 22.18 21.25 L 22.73 24.29 L 20 22.81 L 17.27 24.29 L 17.82 21.25 L 15.55 19.06 L 18.67 18.67 Z"
          fill={PINK}
        />
      </FadeIn>
    </>
  );
}

const STEPS = [
  {
    id: "inquiry",
    label: "Inquiry Received",
    description: "Any channel, one queue",
    Icon: InquiryIcon,
  },
  {
    id: "triage",
    label: "AI Triage",
    description: "Intent, urgency, routing",
    Icon: TriageIcon,
  },
  {
    id: "resolution",
    label: "Automated Resolution",
    description: "Instant answers and actions",
    Icon: ResolutionIcon,
  },
  {
    id: "escalation",
    label: "Escalation to Agent",
    description: "Full context handed over",
    Icon: EscalationIcon,
  },
  {
    id: "feedback",
    label: "Feedback Loop",
    description: "Outcomes train the next run",
    Icon: FeedbackIcon,
  },
] as const;

export default function CustomerServiceWorkflowDiagram({
  className,
}: {
  className?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduce = useReducedMotion() ?? false;

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 194"
      className={className}
      role="img"
      aria-label="Customer service agentic workflow: inquiry received, AI triage, automated resolution, escalation to agent, feedback loop"
    >
      <defs>
        <linearGradient id="csw-node" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#171C4E" />
          <stop offset="100%" stopColor="#0C0F2B" />
        </linearGradient>
        <marker
          id="csw-arrow"
          viewBox="0 0 10 10"
          refX="7"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto-start-reverse"
        >
          <path d="M 1 2 L 8 5 L 1 8 Z" fill={BLUE} />
        </marker>
      </defs>

      {LINKS.map((link, index) => {
        const delay = index * 0.16 + 0.34;

        return (
          <g key={`link-${link.x1}`}>
            <DrawPath
              d={`M ${link.x1} ${CENTER_Y} H ${link.x2}`}
              stroke={BLUE}
              strokeWidth={1.6}
              markerEnd="url(#csw-arrow)"
              delay={delay}
              inView={inView}
              duration={0.4}
            />
            {reduce ? null : (
              <motion.circle
                cy={CENTER_Y}
                r={2.6}
                fill={WHITE}
                initial={{ cx: link.x1 + 4, opacity: 0 }}
                animate={
                  inView
                    ? {
                        cx: [link.x1 + 4, link.x2 - 8],
                        opacity: [0, 1, 1, 0],
                      }
                    : undefined
                }
                transition={{
                  duration: 1.5,
                  delay: 1.2 + index * 0.35,
                  repeat: Infinity,
                  repeatDelay: 1.1,
                  ease: "easeInOut",
                }}
              />
            )}
          </g>
        );
      })}

      {STEPS.map((step, index) => {
        const x = NODE_X[index];
        const cx = x + NODE_SIZE / 2;
        const base = index * 0.16;
        const { Icon } = step;

        return (
          <motion.g
            key={step.id}
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, delay: base, ease: EASE }}
          >
            <rect
              x={x}
              y={NODE_Y}
              width={NODE_SIZE}
              height={NODE_SIZE}
              rx={24}
              fill="url(#csw-node)"
              stroke={BLUE}
              strokeWidth={1.6}
            />

            <g
              transform={`translate(${cx}, ${CENTER_Y}) scale(${ICON_SCALE}) translate(${-ICON_BOX / 2}, ${-ICON_BOX / 2})`}
            >
              <Icon delay={base + 0.18} inView={inView} reduce={reduce} />
            </g>

            <text
              x={cx}
              y={LABEL_Y}
              textAnchor="middle"
              fill={WHITE}
              fontSize={16}
              fontWeight={500}
            >
              {step.label}
            </text>
            <text
              x={cx}
              y={DESCRIPTION_Y}
              textAnchor="middle"
              fill={WHITE}
              fontSize={12}
            >
              {step.description}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}
