"use client";

import { motion, useInView } from "framer-motion";
import { useId, useRef } from "react";
import type { IconType } from "react-icons";
import {
  HiOutlineArrowPath,
  HiOutlineClipboardDocumentList,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import { cn } from "@/lib/utils";

const NODES: {
  title: string;
  lines: string[];
  Icon: IconType;
  left: string;
  top: string;
}[] = [
  {
    title: "Security First",
    lines: ["Security First"],
    Icon: HiOutlineShieldCheck,
    left: "9.55%",
    top: "24.02%",
  },
  {
    title: "Model-Centric Sprints",
    lines: ["Model-Centric", "Sprints"],
    Icon: HiOutlineArrowPath,
    left: "90.55%",
    top: "24.47%",
  },
  {
    title: "Human-in-the-Loop",
    lines: ["Human-in-the", "Loop"],
    Icon: HiOutlineUserGroup,
    left: "9.55%",
    top: "74%",
  },
  {
    title: "AI-First Backlog",
    lines: ["AI-First", "Backlog"],
    Icon: HiOutlineClipboardDocumentList,
    left: "90.55%",
    top: "74%",
  },
];

const CORNERS = [
  {
    d: "M478.468 95.8469L525.182 68.8767L571.896 95.8469V149.787L525.182 176.758L478.468 149.787V95.8469Z",
    fill: "paint15",
    stroke: "paint16",
    origin: "525px 122px",
  },
  {
    d: "M478.468 344.53L525.182 317.559L571.896 344.53V398.47L525.182 425.44L478.468 398.47V344.53Z",
    fill: "paint17",
    stroke: "paint18",
    origin: "525px 371px",
  },
  {
    d: "M8.6889 344.53L55.4028 317.559L102.117 344.53V398.47L55.4028 425.44L8.6889 398.47V344.53Z",
    fill: "paint19",
    stroke: "paint20",
    origin: "55px 371px",
  },
  {
    d: "M8.6889 93.6345L55.4028 66.6643L102.117 93.6345V147.575L55.4028 174.545L8.6889 147.575V93.6345Z",
    fill: "paint21",
    stroke: "paint22",
    origin: "55px 121px",
  },
];

const LINE_GROUPS: string[][] = [
  [
    "M322.675 199.252L375.715 146.213C377.215 144.713 379.25 143.87 381.372 143.87H430.695C432.816 143.87 434.851 143.027 436.351 141.527L446.292 131.586C447.792 130.086 449.827 129.243 451.949 129.243H501.035",
    "M317.675 190.596L371.008 137.264C372.32 135.951 374.101 135.214 375.957 135.214H426.109C427.965 135.214 429.746 134.476 431.058 133.163L441.585 122.637C442.898 121.324 444.678 120.587 446.535 120.587H496.035",
    "M312.675 182.026L365.715 128.987C367.215 127.487 369.25 126.644 371.372 126.644H420.695C422.816 126.644 424.851 125.801 426.351 124.301L436.292 114.36C437.792 112.86 439.827 112.017 441.949 112.017H491.035",
  ],
  [
    "M243.354 290.054L190.314 343.094C188.814 344.594 186.779 345.437 184.657 345.437L135.335 345.437C133.213 345.437 131.178 346.28 129.678 347.78L119.737 357.72C118.237 359.221 116.202 360.063 114.08 360.063L64.9938 360.063",
    "M248.354 298.711L195.021 352.043C193.709 353.355 191.928 354.093 190.072 354.093L139.92 354.093C138.064 354.093 136.283 354.83 134.971 356.143L124.444 366.669C123.132 367.982 121.351 368.72 119.495 368.72L69.9938 368.72",
    "M253.354 307.28L200.314 360.32C198.814 361.82 196.779 362.663 194.657 362.663L145.335 362.663C143.213 362.663 141.178 363.506 139.678 365.006L129.737 374.946C128.237 376.447 126.202 377.29 124.08 377.29L74.9938 377.29",
  ],
  [
    "M243.354 199.252L190.314 146.213C188.814 144.713 186.779 143.87 184.657 143.87H135.335C133.213 143.87 131.178 143.027 129.678 141.527L119.737 131.586C118.237 130.086 116.202 129.243 114.08 129.243H64.9938",
    "M248.354 190.596L195.021 137.264C193.709 135.951 191.928 135.214 190.072 135.214H139.92C138.064 135.214 136.283 134.476 134.971 133.163L124.444 122.637C123.132 121.324 121.351 120.587 119.495 120.587H69.9938",
    "M253.354 182.026L200.314 128.987C198.814 127.487 196.779 126.644 194.657 126.644H145.335C143.213 126.644 141.178 125.801 139.678 124.301L129.737 114.36C128.237 112.86 126.202 112.017 124.08 112.017H74.9938",
  ],
  [
    "M322.675 290.054L375.715 343.094C377.215 344.594 379.25 345.437 381.372 345.437L430.695 345.437C432.816 345.437 434.851 346.28 436.351 347.78L446.292 357.72C447.792 359.221 449.827 360.063 451.949 360.063L501.035 360.063",
    "M317.675 298.711L371.008 352.043C372.32 353.355 374.101 354.093 375.957 354.093L426.109 354.093C427.965 354.093 429.746 354.83 431.058 356.143L441.585 366.669C442.898 367.982 444.678 368.72 446.535 368.72L496.035 368.72",
    "M312.675 307.28L365.715 360.32C367.215 361.82 369.25 362.663 371.372 362.663L420.695 362.663C422.816 362.663 424.851 363.506 426.351 365.006L436.292 374.946C437.792 376.447 439.827 377.29 441.949 377.29L491.035 377.29",
  ],
];

const LINE_GRADIENTS = [
  { x1: "476.133", y1: "121.804", x2: "343.945", y2: "180.684" },
  { x1: "471.133", y1: "113.147", x2: "338.945", y2: "172.028" },
  { x1: "466.133", y1: "104.577", x2: "333.945", y2: "163.458" },
  { x1: "89.8956", y1: "367.503", x2: "222.084", y2: "308.623" },
  { x1: "94.8956", y1: "376.159", x2: "227.084", y2: "317.279" },
  { x1: "99.8956", y1: "384.729", x2: "232.084", y2: "325.849" },
  { x1: "89.8956", y1: "121.804", x2: "222.084", y2: "180.684" },
  { x1: "94.8956", y1: "113.147", x2: "227.084", y2: "172.028" },
  { x1: "99.8956", y1: "104.577", x2: "232.084", y2: "163.458" },
  { x1: "476.133", y1: "367.503", x2: "343.945", y2: "308.623" },
  { x1: "471.133", y1: "376.159", x2: "338.945", y2: "317.279" },
  { x1: "466.133", y1: "384.729", x2: "333.945", y2: "325.849" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function AgenticMethodologyDiagram({
  className,
}: {
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const uid = useId().replace(/:/g, "");

  return (
    <div ref={ref} className={cn("relative mx-auto w-full", className)}>
      <svg
        viewBox="0 0 580 502"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
        role="img"
        aria-label="Agentic methodology: Security First, Model-Centric Sprints, AI-First Backlog, and Human-in-the-Loop"
      >
        <defs>
          <filter
            id={`${uid}-glow`}
            x="42.9722"
            y="0.203033"
            width="480.196"
            height="501.508"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="81.45" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.145098 0 0 0 0 0.270588 0 0 0 0 0.619608 0 0 0 1 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          {LINE_GRADIENTS.map((gradient, i) => (
            <linearGradient
              key={`line-${i}`}
              id={`${uid}-line-${i}`}
              x1={gradient.x1}
              y1={gradient.y1}
              x2={gradient.x2}
              y2={gradient.y2}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2745B7" />
              <stop offset="0.05" stopColor="#D3287A" />
              <stop offset="0.475" stopColor="#8C7FF8" />
              <stop offset="0.98" stopColor="#4E40F8" />
            </linearGradient>
          ))}
          <radialGradient
            id={`${uid}-centerFill`}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(284.536 351.644) rotate(-90.4425) scale(189.833 990.733)"
          >
            <stop offset="0.005" stopColor="#5E8DF8" stopOpacity="0.59" />
            <stop offset="0.188597" stopColor="#263FBC" />
            <stop offset="0.71" stopColor="#0C1354" />
          </radialGradient>
          <radialGradient
            id={`${uid}-centerGlow`}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(283.07 250.957) rotate(90) scale(75.4664 85.2103)"
          >
            <stop stopColor="#4F86F8" stopOpacity="0.73" />
            <stop offset="1" stopColor="#3177C9" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id={`${uid}-centerStroke`}
            x1="283.07"
            y1="161.817"
            x2="283.07"
            y2="340.098"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2D63F8" />
            <stop offset="0.05" stopColor="#D3287A" />
            <stop offset="0.525" stopColor="#BEB0F8" />
            <stop offset="0.925" stopColor="#715CF8" />
          </linearGradient>
          {CORNERS.map((corner, i) => (
            <g key={`corner-defs-${i}`}>
              <radialGradient
                id={`${uid}-${corner.fill}`}
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform={`translate(${i < 2 ? "525.182" : "55.4028"} ${i === 0 || i === 3 ? "122.817" : "371.5"}) rotate(90) scale(82.1456 80.4179)`}
              >
                <stop offset="0.304968" />
                <stop offset="1" stopColor="#2153E8" />
              </radialGradient>
              <linearGradient
                id={`${uid}-${corner.stroke}`}
                x1={i < 2 ? "525.182" : "55.4028"}
                y1={i === 0 || i === 3 ? "68.2993" : "316.982"}
                x2={i < 2 ? "525.182" : "55.4028"}
                y2={i === 0 || i === 3 ? "177.335" : "426.018"}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3347C9" />
                <stop offset="0.495" stopColor="#10175D" />
                <stop offset="1" stopColor="#919DF8" />
              </linearGradient>
            </g>
          ))}
        </defs>

        {LINE_GROUPS.map((group, groupIndex) => (
          <g key={`lines-${groupIndex}`} opacity="0.88">
            {group.map((d, pathIndex) => (
              <motion.path
                key={`${groupIndex}-${pathIndex}`}
                d={d}
                stroke={`url(#${uid}-line-${groupIndex * 3 + pathIndex})`}
                pathLength={1}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 0.88 } : undefined}
                transition={{
                  duration: 0.7,
                  delay: 1.05 + pathIndex * 0.05,
                  ease: EASE,
                }}
              />
            ))}
          </g>
        ))}

        <motion.g
          filter={`url(#${uid}-glow)`}
          initial={{ opacity: 0, scale: 0.86 }}
          animate={inView ? { opacity: 1, scale: 1 } : undefined}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ transformOrigin: "283px 251px" }}
        >
          <path
            d="M278.913 164.217C281.485 162.732 284.655 162.732 287.227 164.217L356.111 203.987C358.683 205.472 360.268 208.217 360.268 211.187V290.727C360.268 293.698 358.683 296.442 356.111 297.928L287.227 337.697C284.655 339.183 281.485 339.183 278.913 337.697L210.029 297.928C207.457 296.442 205.872 293.698 205.872 290.727V211.187C205.872 208.217 207.457 205.472 210.029 203.987L278.913 164.217Z"
            fill={`url(#${uid}-centerFill)`}
          />
          <path
            d="M278.913 164.217C281.485 162.732 284.655 162.732 287.227 164.217L356.111 203.987C358.683 205.472 360.268 208.217 360.268 211.187V290.727C360.268 293.698 358.683 296.442 356.111 297.928L287.227 337.697C284.655 339.183 281.485 339.183 278.913 337.697L210.029 297.928C207.457 296.442 205.872 293.698 205.872 290.727V211.187C205.872 208.217 207.457 205.472 210.029 203.987L278.913 164.217Z"
            fill={`url(#${uid}-centerGlow)`}
          />
          <path
            d="M279.163 164.65C281.581 163.254 284.559 163.254 286.977 164.65L355.861 204.42C358.279 205.816 359.768 208.396 359.768 211.187V290.727C359.768 293.519 358.279 296.099 355.861 297.495L286.977 337.264C284.559 338.66 281.581 338.66 279.163 337.264L210.279 297.495C207.862 296.099 206.372 293.519 206.372 290.727V211.187C206.372 208.396 207.862 205.816 210.279 204.42L279.163 164.65Z"
            stroke={`url(#${uid}-centerStroke)`}
          />
        </motion.g>

        {CORNERS.map((corner, index) => (
          <motion.path
            key={corner.d}
            d={corner.d}
            fill={`url(#${uid}-${corner.fill})`}
            stroke={`url(#${uid}-${corner.stroke})`}
            initial={{ opacity: 0, scale: 0.78 }}
            animate={inView ? { opacity: 1, scale: 1 } : undefined}
            transition={{ duration: 0.45, delay: 0.52 + index * 0.08, ease: EASE }}
            style={{ transformOrigin: corner.origin }}
          />
        ))}
      </svg>

      {NODES.map((node, index) => (
        <div
          key={node.title}
          className="pointer-events-none absolute flex items-center justify-center text-center"
          style={{
            left: node.left,
            top: node.top,
            width: "16%",
            height: "21%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <motion.div
            className="flex flex-col items-center justify-center px-1"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : undefined}
            transition={{ duration: 0.4, delay: 0.52 + index * 0.08, ease: EASE }}
          >
            <node.Icon className="mb-0.5 h-4 w-4 text-white sm:h-5 sm:w-5" strokeWidth={1.5} />
            <p className="text-[9px] font-medium leading-tight text-white sm:text-[11px]">
              {node.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </motion.div>
        </div>
      ))}

      <motion.div
        className="pointer-events-none absolute flex flex-col items-center justify-center text-center"
        style={{
          left: "48.81%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : undefined}
        transition={{ duration: 0.45, delay: 0.12, ease: EASE }}
      >
        <p className="text-xs font-semibold leading-tight text-white sm:text-sm">
          Agentic
          <span className="mt-0.5 block font-medium">methodology</span>
        </p>
      </motion.div>
    </div>
  );
}
