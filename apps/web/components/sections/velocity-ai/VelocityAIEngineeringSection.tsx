"use client";

import { motion } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";
import { section, typography } from "./layout";
import { useInViewReplay } from "@/lib/useInViewReplay";
import { FaRocket } from "react-icons/fa";
import { cn } from "@/lib/utils";

const THEME_BLUE = "#2563EB";
const ACCENT_PINK = "#D3287A";
const PINK_10 = "rgba(211, 40, 122, 0.1)";

type Step = {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
};

function IconUsers() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" aria-hidden>
      <circle cx="9" cy="7" r="3" stroke="white" strokeWidth="1.8" />
      <path
        d="M3 20v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="17" cy="8" r="2.2" stroke={ACCENT_PINK} strokeWidth="1.8" />
      <path
        d="M21 20v-.5a3.5 3.5 0 0 0-3-3.46"
        stroke={ACCENT_PINK}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconDatabase() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" aria-hidden>
      <ellipse cx="12" cy="5" rx="7" ry="3" stroke="white" strokeWidth="1.8" />
      <path
        d="M5 5v6c0 1.66 3.13 3 7 3s7-1.34 7-3V5"
        stroke="white"
        strokeWidth="1.8"
      />
      <path
        d="M5 11v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6"
        stroke="white"
        strokeWidth="1.8"
      />
      <path
        d="M5 11c0 1.66 3.13 3 7 3s7-1.34 7-3"
        stroke="white"
        strokeWidth="1.8"
      />
      {/* Tiny pink accent dots on the right of each tier */}
      <circle cx="17.5" cy="5" r="1" fill={ACCENT_PINK} />
      <circle cx="17.5" cy="11" r="1" fill={ACCENT_PINK} />
      <circle cx="17.5" cy="17" r="1" fill={ACCENT_PINK} />
    </svg>
  );
}

function IconCode() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" aria-hidden>
      <path d="M8 6L3 12l5 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 6l5 6-5 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 4L10 20" stroke={ACCENT_PINK} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function IconCog() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden>
      <path
        fill="white"
        d="M19.4 13a7.7 7.7 0 0 0 .1-1 7.7 7.7 0 0 0-.1-1l2-1.6a.5.5 0 0 0 .1-.6l-1.9-3.3a.5.5 0 0 0-.6-.2l-2.4 1a7.3 7.3 0 0 0-1.7-1l-.4-2.5a.5.5 0 0 0-.5-.4h-3.8a.5.5 0 0 0-.5.4l-.4 2.5a7.3 7.3 0 0 0-1.7 1l-2.4-1a.5.5 0 0 0-.6.2L2.4 8.8a.5.5 0 0 0 .1.6l2 1.6a7.7 7.7 0 0 0-.1 1 7.7 7.7 0 0 0 .1 1l-2 1.6a.5.5 0 0 0-.1.6l1.9 3.3a.5.5 0 0 0 .6.2l2.4-1a7.3 7.3 0 0 0 1.7 1l.4 2.5a.5.5 0 0 0 .5.4h3.8a.5.5 0 0 0 .5-.4l.4-2.5a7.3 7.3 0 0 0 1.7-1l2.4 1a.5.5 0 0 0 .6-.2l1.9-3.3a.5.5 0 0 0-.1-.6z"
      />
      <circle cx="12" cy="12" r="3.2" fill={ACCENT_PINK} />
    </svg>
  );
}

function IconCloudUpload() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden>
      <path
        fill="white"
        d="M19.3 10.1A6 6 0 0 0 8.2 8.4 4.5 4.5 0 0 0 4.5 17H19a4 4 0 0 0 .3-6.9z"
      />
      <path
        fill={ACCENT_PINK}
        d="M12 10.5l-3 3h2v3.5h2V13.5h2z"
      />
    </svg>
  );
}

const steps: Step[] = [
  {
    number: "1",
    title: "Build AI-First Teams",
    description:
      "We assemble skilled engineering teams and equip them with the right AI tools and mindset.",
    icon: <IconUsers />,
  },
  {
    number: "2",
    title: "Leverage Data & Context",
    description:
      "We integrate your existing data, domain knowledge and business logic to give AI real context.",
    icon: <IconDatabase />,
  },
  {
    number: "3",
    title: "AI-Driven Development",
    description:
      "Our squads use AI assistants to code, review, test and iterate — faster and smarter.",
    icon: <IconCode />,
  },
  {
    number: "4",
    title: "Continuous Improvement",
    description:
      "We track performance, learn from feedback and refine with AI for ongoing gains in speed and quality.",
    icon: <IconCog />,
  },
  {
    number: "5",
    title: "Deliver Faster",
    description:
      "You get high-quality software, delivered on time and built for what's next.",
    icon: <IconCloudUpload />,
  },
];

function PersonSilhouette({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <circle cx="12" cy="7" r="3.5" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </svg>
  );
}

const PERSON_SEQUENCE_COLORS = [
  "#2563EB",
  "#EF4444",
  "#D3287A",
  "#3B82F6",
  "#F97316",
  "#60A5FA",
  "#EC4899",
  "#22D3EE",
  "#F472B6",
];

function FunnelPeopleCluster() {
  return (
    <div className="relative z-10 flex w-14 shrink-0 flex-col items-center sm:w-20 md:w-24">
      <div className="relative flex h-24 w-full items-center justify-center sm:h-28 md:h-32">
        {/* Triangular background with smooth light/dark gradient shift */}
        <motion.div
          className="absolute inset-y-1 left-0 right-0"
          style={{
            clipPath: "polygon(0 0, 100% 50%, 0 100%)",
          }}
          animate={{
            background: [
              "linear-gradient(105deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.32) 48%, rgba(255,255,255,0.1) 100%)",
              "linear-gradient(105deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.08) 52%, rgba(255,255,255,0.24) 100%)",
              "linear-gradient(105deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.36) 45%, rgba(255,255,255,0.07) 100%)",
              "linear-gradient(105deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.32) 48%, rgba(255,255,255,0.1) 100%)",
            ],
          }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
        <div
          className="absolute inset-y-1 left-0 right-0 border border-white/20"
          style={{
            clipPath: "polygon(0 0, 100% 50%, 0 100%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 grid grid-cols-3 gap-0.5 sm:gap-1">
          {Array.from({ length: 9 }).map((_, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-center"
              animate={{
                color: [
                  "rgba(255,255,255,0.55)",
                  PERSON_SEQUENCE_COLORS[i],
                  "rgba(255,255,255,0.55)",
                ],
              }}
              transition={{
                duration: 0.9,
                delay: i * 0.45,
                repeat: Infinity,
                repeatDelay: 9 * 0.45 - 0.9,
                ease: "easeInOut",
              }}
            >
              <PersonSilhouette className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashedConnector() {
  return (
    <div
      className="relative z-0 hidden h-[2px] min-w-3 flex-1 overflow-hidden sm:block md:min-w-5"
      aria-hidden
    >
      <motion.svg
        className="h-full w-full overflow-visible"
        preserveAspectRatio="none"
        initial={false}
      >
        <motion.line
          x1="0"
          y1="1"
          x2="100%"
          y2="1"
          stroke={THEME_BLUE}
          strokeWidth="2"
          strokeDasharray="5 5"
          vectorEffect="non-scaling-stroke"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{
            duration: 1.1,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.svg>
    </div>
  );
}

function ProcessRing({
  children,
  title,
  description,
  active,
  onHoverChange,
  index,
}: {
  children: ReactNode;
  title: string;
  description: string;
  active: boolean;
  onHoverChange: (hovered: boolean) => void;
  index: number;
}) {
  return (
    <motion.div
      className="group relative z-10 flex h-20 w-20 shrink-0 cursor-pointer items-center justify-center sm:h-24 sm:w-24 md:h-28 md:w-28"
      animate={{
        y: [0, -5, 0],
        scale: active ? 1.08 : 1,
      }}
      transition={{
        y: {
          duration: 2.8 + index * 0.25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2,
        },
        scale: { duration: 0.3, ease: "easeOut" },
      }}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
      onFocus={() => onHoverChange(true)}
      onBlur={() => onHoverChange(false)}
      tabIndex={0}
      role="button"
      aria-label={`${title}. ${description}`}
    >
      <motion.div
        className="absolute inset-0 rounded-full opacity-20 blur-md"
        style={{ background: THEME_BLUE }}
        animate={{ opacity: active ? 0.45 : 0.2 }}
        aria-hidden
      />
      <div
        className="absolute inset-0 rounded-full border-2"
        style={{
          borderColor: active ? ACCENT_PINK : THEME_BLUE,
          boxShadow: active
            ? `0 0 20px ${ACCENT_PINK}55`
            : `0 0 16px ${THEME_BLUE}40`,
        }}
        aria-hidden
      />
      <div className="relative z-10">{children}</div>

      {/* Tooltip */}
      <div
        className={cn(
          "pointer-events-none absolute bottom-[calc(100%+12px)] left-1/2 z-30 w-56 -translate-x-1/2 rounded-[12px] border border-white/15 bg-black/95 p-4 text-left opacity-0 shadow-[0_12px_40px_rgba(0,0,0,0.55)] transition-opacity duration-300",
          active && "opacity-100"
        )}
      >
        <p className="mb-1.5 text-sm font-bold text-white">{title}</p>
        <p className="text-xs leading-relaxed text-white">{description}</p>
        <span
          className="absolute top-full left-1/2 -translate-x-1/2 border-x-[6px] border-t-[6px] border-x-transparent border-t-black/95"
          aria-hidden
        />
      </div>
    </motion.div>
  );
}

function VelocityServicesProcessVisual({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}) {
  return (
    <div className="relative mx-auto w-full max-w-5xl py-10 md:py-14">
      <div
        className="pointer-events-none absolute top-1/2 left-[8%] right-[8%] h-8 -translate-y-1/2 rounded-full bg-white/10 blur-[2px] md:h-10"
        aria-hidden
      />

      <div className="relative flex items-center justify-between gap-0 sm:gap-1 md:gap-2">
        {/* Input funnel with people */}
        <div className="relative z-10 flex w-14 shrink-0 flex-col items-center sm:w-20 md:w-24">
          <div className="relative flex h-24 w-full items-center justify-center sm:h-28 md:h-32">
            <div
              className="absolute inset-y-2 left-0 right-1 bg-white/10"
              style={{
                clipPath: "polygon(0 0, 100% 28%, 100% 72%, 0 100%)",
              }}
              aria-hidden
            />
            <div className="relative z-10 grid grid-cols-3 gap-0.5 text-white/60">
              {Array.from({ length: 9 }).map((_, i) => (
                <PersonSilhouette key={i} className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              ))}
            </div>
          </div>
        </div>

        <DashedConnector />

        {/* Process rings with dashed connectors */}
        {steps.map((step, index) => (
          <div key={step.number} className="contents">
            <ProcessRing
              title={step.title}
              description={step.description}
              active={activeIndex === index}
              onHoverChange={(hovered) => setActiveIndex(hovered ? index : null)}
              index={index}
            >
              {step.icon}
            </ProcessRing>
            {index < steps.length - 1 ? <DashedConnector /> : null}
          </div>
        ))}

        <DashedConnector />

        {/* Output rocket — floating with flame */}
        <div className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center sm:h-24 sm:w-24 md:h-28 md:w-28">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-dashed border-white/40"
            style={{ boxShadow: `0 0 20px ${PINK_10}` }}
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            aria-hidden
          />
          <div
            className="absolute inset-4 rounded-full"
            style={{ background: PINK_10 }}
            aria-hidden
          />
          <motion.div
            className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full text-white sm:h-14 sm:w-14"
            style={{
              background: THEME_BLUE,
              boxShadow: `0 0 28px ${THEME_BLUE}66, 0 0 12px ${PINK_10}`,
            }}
            animate={{
              x: [0, 5, 2, 6, 0],
              y: [0, -7, -3, -8, 0],
              rotate: [0, 4, 1, 5, 0],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span
              className="pointer-events-none absolute -bottom-0.5 left-0.5 z-0 flex -rotate-45 items-center justify-center"
              aria-hidden
            >
              <motion.span
                className="absolute h-4 w-2.5 rounded-full bg-gradient-to-b from-white via-[#D3287A] to-transparent blur-[1px] sm:h-5 sm:w-3"
                animate={{
                  scaleY: [0.85, 1.25, 0.9, 1.35, 0.85],
                  opacity: [0.7, 1, 0.75, 1, 0.7],
                }}
                transition={{ duration: 0.45, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.span
                className="absolute h-5 w-1.5 rounded-full bg-gradient-to-b from-[#F472B6] via-[#D3287A] to-transparent opacity-90 blur-[0.5px] sm:h-6"
                animate={{
                  scaleY: [1, 1.4, 0.95, 1.5, 1],
                  y: [0, 2, 0, 3, 0],
                  opacity: [0.6, 0.95, 0.65, 1, 0.6],
                }}
                transition={{ duration: 0.35, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
            <FaRocket className="relative z-10 text-lg text-white sm:text-xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function VelocityAIEngineeringSection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref, { margin: "0px", amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden bg-black ${section.padding} ${section.paddingX}`}
    >
      <div className="mx-auto w-full max-w-[1300px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-4 flex items-center gap-3 md:mb-6">
            <p className={typography.sectionLabel}>VELOCITY AI SERVICES</p>
            <span className="h-px w-10 bg-primary-pink md:w-14" aria-hidden />
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-12 lg:gap-20">
            <h2 className="max-w-3xl text-[28px] font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-[48px] lg:text-[48px]">
              AI-Augmented Software Development
            </h2>
            <p className={`${typography.lead} max-w-2xl shrink-0 text-white md:pb-1`}>
              Velocity AI empowers engineering teams to become AI-first, turning
              traditional agile pods into data-centric, AI-driven squads for
              faster, smarter software delivery.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
        >
          <VelocityServicesProcessVisual
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </motion.div>

        {/* Bottom step cards intentionally preserved for possible reuse
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div key={step.number} ...>
              ...
            </motion.div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
}
