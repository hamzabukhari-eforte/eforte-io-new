"use client";

import { useId, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { BLUE, DrawPath, EASE, ICON_BOX, WHITE } from "./primitives";
import type { WorkflowStep } from "./steps";

const VIEW_WIDTH = 1000;
const VIEW_HEIGHT = 194;
const SIDE_PADDING = 30;
const NODE_SIZE = 92;
const NODE_Y = 22;
const CENTER_Y = NODE_Y + NODE_SIZE / 2;
const LABEL_Y = 148;
const DESCRIPTION_Y = 170;
/** Gap left between a node edge and the rail that leaves it. */
const RAIL_INSET = 10;
const ICON_SIZE = 60;
const ICON_SCALE = ICON_SIZE / ICON_BOX;
const STEP_DELAY = 0.16;

function nodeOffsets(count: number) {
  const usable = VIEW_WIDTH - SIDE_PADDING * 2;
  const gap = count > 1 ? (usable - count * NODE_SIZE) / (count - 1) : 0;

  return Array.from(
    { length: count },
    (_, index) => SIDE_PADDING + index * (NODE_SIZE + gap)
  );
}

export default function AiWorkflowDiagram({
  steps,
  label,
  className,
}: {
  steps: WorkflowStep[];
  /** Domain name, used to describe the diagram to screen readers. */
  label: string;
  className?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduce = useReducedMotion() ?? false;
  // Several of these diagrams can share a page, so gradient ids must be unique.
  const uid = useId().replace(/:/g, "");
  const nodeFillId = `${uid}-node`;
  const arrowId = `${uid}-arrow`;

  const offsets = nodeOffsets(steps.length);
  const rails = offsets.slice(0, -1).map((offset, index) => ({
    from: offset + NODE_SIZE + RAIL_INSET,
    to: offsets[index + 1] - RAIL_INSET,
  }));

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
      className={className}
      role="img"
      aria-label={`${label} workflow: ${steps.map((step) => step.label).join(", ")}`}
    >
      <defs>
        <linearGradient id={nodeFillId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#171C4E" />
          <stop offset="100%" stopColor="#0C0F2B" />
        </linearGradient>
        <marker
          id={arrowId}
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

      {rails.map((rail, index) => (
        <g key={`rail-${rail.from}`}>
          <DrawPath
            d={`M ${rail.from} ${CENTER_Y} H ${rail.to}`}
            stroke={BLUE}
            strokeWidth={1.6}
            markerEnd={`url(#${arrowId})`}
            delay={index * STEP_DELAY + 0.34}
            inView={inView}
            duration={0.4}
          />
          {reduce ? null : (
            <motion.circle
              cy={CENTER_Y}
              r={2.6}
              fill={WHITE}
              initial={{ cx: rail.from + 4, opacity: 0 }}
              animate={
                inView
                  ? { cx: [rail.from + 4, rail.to - 8], opacity: [0, 1, 1, 0] }
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
      ))}

      {steps.map((step, index) => {
        const x = offsets[index];
        const cx = x + NODE_SIZE / 2;
        const base = index * STEP_DELAY;
        const { Icon } = step;

        return (
          <motion.g
            key={step.label}
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
              fill={`url(#${nodeFillId})`}
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
