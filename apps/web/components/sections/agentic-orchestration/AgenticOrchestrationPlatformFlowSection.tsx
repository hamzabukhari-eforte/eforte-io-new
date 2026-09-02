"use client";

import { motion } from "framer-motion";
import { useRef, useLayoutEffect, useState, useCallback } from "react";
import { section } from "./layout";
import { useInViewReplay } from "@/lib/useInViewReplay";

const flowItems = [
  {
    title: "AI Product Manager",
    paragraphs: [
      "AI Product Managers envision the next generation of AI apps, unlocking value from novel ways of interaction with AI tools.",
      "AI Product Managers follow a data-centric approach where the data steers the capabilities of the product, and so proper data management is a key aspect of AI products.",
    ],
  },
  {
    title: "Data Scientist",
    paragraphs: [
      "A Data Scientist in a AI project plays a central role across the AI lifecycle, combining technical, analytical, and strategic skills to build, evaluate, and optimize generative models.",
      "They act as a strategist, experimenter, and ethical steward, ensuring that AI systems are effective, safe, and aligned with both business goals and user needs.",
    ],
  },
  {
    title: "AI Engineer",
    paragraphs: [
      "AI Engineers bridge the gap between data science and production software. They focus on deploying models, optimizing inference pipelines, and ensuring the scalability of AI solutions.",
      "Their role involves working with large language models (LLMs), fine-tuning techniques, and integrating AI capabilities into robust application architectures.",
    ],
  },
  {
    title: "ML Ops Engineer",
    paragraphs: [
      "ML Ops Engineers establish the infrastructure and processes for continuous integration, delivery, and deployment of machine learning models.",
      "They ensure reproducibility, monitoring, and governance of AI systems, automating the lifecycle from development to production to maintain high reliability.",
    ],
  },
];

// Order: flowItems [AI Product Manager, Data Scientist, AI Engineer, ML Ops] -> SVG role indices
const contentIndexToRoleIndex = [1, 2, 3, 0];

// Order matches quadrantWedgePaths (index -> quadrant):
// 0: ML Ops (top-left), 1: AI Product (top-right), 2: Data Scientist (bottom-right), 3: AI Engineer (bottom-left)
const rolesForSvg = [
  { label: ["ML Ops", "Engineer"], x: 200, y: 220, dotX: 230, dotY: 230 }, // top-left
  { label: ["AI Product", "Manager"], x: 400, y: 220, dotX: 370, dotY: 230 }, // top-right
  { label: ["Data", "Scientist"], x: 400, y: 380, dotX: 370, dotY: 390 }, // bottom-right
  { label: ["AI", "Engineer"], x: 200, y: 380, dotX: 230, dotY: 390 }, // bottom-left
];

// Wedge paths: glow starts *after* the AI icon circle (inner r=50), extends to outer orbit r=260 (donut-segment per corner)
// Order matches rolesForSvg: [0] ML Ops (TL), [1] AI Product (TR), [2] AI Engineer (BL), [3] Data Scientist (BR)
const INNER_R = 50;   // just outside the AI icon circle (r=40)
const OUTER_R = 260;
const quadrantWedgePaths = [
  `M 250 300 L 40 300 A ${OUTER_R} ${OUTER_R} 0 0 1 300 40 L 300 250 A ${INNER_R} ${INNER_R} 0 0 0 250 300 Z`,   // top-left
  `M 300 250 L 300 40 A ${OUTER_R} ${OUTER_R} 0 0 1 560 300 L 350 300 A ${INNER_R} ${INNER_R} 0 0 0 300 250 Z`,   // top-right
  `M 350 300 L 560 300 A ${OUTER_R} ${OUTER_R} 0 0 1 300 560 L 300 350 A ${INNER_R} ${INNER_R} 0 0 0 350 300 Z`,   // bottom-right
  `M 300 350 L 300 560 A ${OUTER_R} ${OUTER_R} 0 0 1 40 300 L 250 300 A ${INNER_R} ${INNER_R} 0 0 0 300 350 Z`,   // bottom-left
];

type FlowItem = (typeof flowItems)[number];

function RightColumnSection({
  item,
  index,
  registerRef,
}: {
  item: FlowItem;
  index: number;
  registerRef: (index: number, el: HTMLDivElement | null) => void;
}) {
  const localRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInViewReplay(localRef, { margin: "0px", amount: 0.25 });
  const setRef = useCallback(
    (el: HTMLDivElement | null) => {
      localRef.current = el;
      registerRef(index, el);
    },
    [index, registerRef]
  );
  return (
    <motion.div
      ref={setRef}
      className="flex flex-col gap-4 md:gap-6 justify-center"
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.h3
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
        initial={{ opacity: 0, x: -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {item.title}
      </motion.h3>
      <div className="space-y-4 text-white text-base leading-relaxed">
        {item.paragraphs.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {p}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}

export default function AgenticOrchestrationPlatformFlowSection() {
  const ref = useRef(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  const registerRef = useCallback((index: number, el: HTMLDivElement | null) => {
    sectionRefs.current[index] = el;
  }, []);

  const ratiosRef = useRef<number[]>([0, 0, 0, 0]);

  // Glow = section most in viewport center (middle ~50%); single observer, pick max intersectionRatio
  useLayoutEffect(() => {
    let observer: IntersectionObserver | null = null;
    const id = requestAnimationFrame(() => {
      const refs = sectionRefs.current;
      const ratios = ratiosRef.current;
      const options: IntersectionObserverInit = {
        root: null,
        rootMargin: "-25% 0px -25% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 1],
      };
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.sectionIndex);
          if (!Number.isNaN(index) && index >= 0 && index < 4) ratios[index] = entry.intersectionRatio;
        });
        let bestIndex = 0;
        let bestRatio = 0;
        for (let i = 0; i < 4; i++) {
          if (ratios[i] > bestRatio) {
            bestRatio = ratios[i];
            bestIndex = i;
          }
        }
        if (bestRatio > 0) setActiveContentIndex(bestIndex);
      }, options);
      for (let i = 0; i < 4; i++) {
        const el = refs[i];
        if (el) {
          (el as HTMLElement).dataset.sectionIndex = String(i);
          observer.observe(el);
        }
      }
    });
    return () => {
      cancelAnimationFrame(id);
      observer?.disconnect();
    };
  }, []);

  const activeRoleIndex = contentIndexToRoleIndex[activeContentIndex] ?? 0;

  return (
    <section
      ref={ref}
      id="platform-flow"
      className={`${section.padding} bg-black relative ${section.paddingX}`}
    >
      <div className={`${section.container} grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20`}>
        {/* Left: full-height column so sticky has room to stick while right content scrolls */}
        <div className="hidden lg:block relative lg:self-stretch min-h-0">
          <div className="sticky top-[100px] lg:top-[120px] flex items-center justify-center py-8 w-full">
            <div className="relative w-full max-w-[400px] xl:max-w-[500px] aspect-square">
              {/* SVG styling is intentionally aligned with the AI Pods radar above */}
              <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <radialGradient id="pf-centerGlowBlue" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#1D4ED8" stopOpacity={0} />
                  </radialGradient>
                  <linearGradient id="pf-crosshairGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                    <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                  </linearGradient>
                  <linearGradient id="pf-crosshairGradientV" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                    <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                  </linearGradient>
                  {/* Glow from center AI icon out to last orbit (r=260) */}
                  <radialGradient
                    id="pf-centerToOrbitGlow"
                    gradientUnits="userSpaceOnUse"
                    cx="300"
                    cy="300"
                    r="360"
                    fx="300"
                    fy="300"
                  >
                    <stop offset="0%" stopColor="#60A5FA" stopOpacity={0.5} />
                    <stop offset="18%" stopColor="#3B82F6" stopOpacity={0.28} />
                    <stop offset="45%" stopColor="#2563EB" stopOpacity={0.12} />
                    <stop offset="75%" stopColor="#1D4ED8" stopOpacity={0.04} />
                    <stop offset="100%" stopColor="#1D4ED8" stopOpacity={0} />
                  </radialGradient>
                  {/* Active wedge: glow starts at inner edge (after AI icon), fades to outer orbit */}
                  <radialGradient
                    id="pf-activeWedgeGlow"
                    gradientUnits="userSpaceOnUse"
                    cx="300"
                    cy="300"
                    r="260"
                    fx="300"
                    fy="300"
                  >
                    <stop offset="19%" stopColor="#93C5FD" stopOpacity={0.5} />
                    <stop offset="40%" stopColor="#60A5FA" stopOpacity={0.25} />
                    <stop offset="70%" stopColor="#3B82F6" stopOpacity={0.08} />
                    <stop offset="100%" stopColor="#1D4ED8" stopOpacity={0} />
                  </radialGradient>
                </defs>
                {/* Full glow from center to last orbit (behind everything) */}
                <circle cx="300" cy="300" r="260" fill="url(#pf-centerToOrbitGlow)" />
                <g stroke="#3B82F6" strokeWidth="1" fill="none" className="opacity-20">
                  <circle cx="300" cy="300" r="100" />
                  <circle cx="300" cy="300" r="180" />
                  <circle cx="300" cy="300" r="260" />
                </g>
                <line x1="50" y1="300" x2="550" y2="300" stroke="url(#pf-crosshairGradient)" strokeWidth="1.5" />
                <line x1="300" y1="50" x2="300" y2="550" stroke="url(#pf-crosshairGradientV)" strokeWidth="1.5" />
                <circle
                  cx="300"
                  cy="300"
                  r="60"
                  fill="url(#pf-centerGlowBlue)"
                  opacity={0.4}
                  className="animate-pulse"
                  style={{ animationDuration: "4s" }}
                />
                <circle cx="300" cy="300" r="40" fill="#1e3a8a" stroke="#60A5FA" strokeWidth="2" />
                <path d="M300 280 L305 295 L320 300 L305 305 L300 320 L295 305 L280 300 L295 295 Z" fill="white" className="animate-pulse" />
                <path d="M315 275 L318 282 L325 285 L318 288 L315 295 L312 288 L305 285 L312 282 Z" fill="white" opacity={0.8} />
                {/* Active role: wedge from center (AI icon) to outer orbit, behind the text */}
                <path
                  d={quadrantWedgePaths[activeRoleIndex]}
                  fill="url(#pf-activeWedgeGlow)"
                  className="transition-opacity duration-500"
                />
                {rolesForSvg.map((r, i) => {
                  const isActive = i === activeRoleIndex;
                  return (
                    <g key={i} className="transition-all duration-500 ease-out cursor-default">
                      <text
                        x={r.x}
                        y={r.y}
                        textAnchor="middle"
                        fill="white"
                        fontFamily="Inter, sans-serif"
                        fontSize="16"
                        fontWeight="600"
                        opacity={1}
                      >
                        {r.label[0]}
                      </text>
                      <text
                        x={r.x}
                        y={r.y + 20}
                        textAnchor="middle"
                        fill="white"
                        fontFamily="Inter, sans-serif"
                        fontSize="16"
                        fontWeight="600"
                        opacity={1}
                      >
                        {r.label[1]}
                      </text>
                      <circle
                        cx={r.dotX}
                        cy={r.dotY}
                        r={isActive ? 2.5 : 2}
                        fill="#60A5FA"
                        opacity={isActive ? 1 : 0.7}
                      />
                    </g>
                  );
                })}
                <path d="M300 300 L450 150 A212 212 0 0 1 512 300 Z" fill="url(#pf-centerGlowBlue)" opacity={0.1} />
                <path d="M300 300 L150 450 A212 212 0 0 1 88 300 Z" fill="url(#pf-centerGlowBlue)" opacity={0.1} />
              </svg>
            </div>
          </div>
        </div>

        {/* Right: Content — each section has its own framer-motion; center section drives left glow */}
        <div className="flex flex-col gap-16">
          {flowItems.map((item, index) => (
            <RightColumnSection
              key={item.title}
              item={item}
              index={index}
              registerRef={registerRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
