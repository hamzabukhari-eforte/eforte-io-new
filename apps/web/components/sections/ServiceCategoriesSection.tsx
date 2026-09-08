"use client";

import Container from "@/components/atoms/Container";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useInViewReplay } from "@/lib/useInViewReplay";
import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";

const THEME_BLUE = "#426CFF";
const ACCENT_PINK = "#D3287A";

interface ServiceCategory {
  id: string;
  icon: ReactNode;
  text: string;
  href?: string;
}

interface ServiceCategoriesSectionProps {
  items: ServiceCategory[];
}

const SHORT_LABELS: Record<string, string> = {
  "customer-service": "Customer Service",
  "sales-marketing": "Sales & Marketing",
  financial: "Financial Ops",
  "human-resources": "Human Resources",
  "operations-compliance": "Ops & Compliance",
  "project-management": "Project & Data",
};

function DashedConnector({ active }: { active?: boolean }) {
  return (
    <div className="relative z-0 mx-0.5 h-2.5 min-w-[10px] flex-1 sm:min-w-[16px] md:min-w-[22px]">
      <motion.svg
        className="h-full w-full overflow-visible"
        preserveAspectRatio="none"
        initial={false}
        aria-hidden
      >
        <motion.line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke={active ? ACCENT_PINK : THEME_BLUE}
          strokeWidth="2"
          strokeDasharray="4 4"
          vectorEffect="non-scaling-stroke"
          animate={{ strokeDashoffset: [0, -16] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.svg>
    </div>
  );
}

function CategoryNode({
  item,
  index,
  active,
  onHoverChange,
  isInView,
}: {
  item: ServiceCategory;
  index: number;
  active: boolean;
  onHoverChange: (hovered: boolean) => void;
  isInView: boolean;
}) {
  const short = SHORT_LABELS[item.id] ?? item.text;
  const href = item.href ?? "#";

  return (
    <motion.div
      className="relative z-10 flex w-16 shrink-0 flex-col items-center sm:w-20 md:w-[5.5rem]"
      initial={{ opacity: 0, y: 12, scale: 0.92 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 12, scale: 0.92 }
      }
      transition={{
        duration: 0.45,
        delay: 0.1 + index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={href}
        className="group flex w-full flex-col items-center gap-1.5 outline-none"
        onMouseEnter={() => onHoverChange(true)}
        onMouseLeave={() => onHoverChange(false)}
        onFocus={() => onHoverChange(true)}
        onBlur={() => onHoverChange(false)}
        aria-label={item.text}
      >
        <motion.span
          className="relative flex h-11 w-11 items-center justify-center sm:h-12 sm:w-12 md:h-14 md:w-14"
          animate={{
            y: [0, -3, 0],
            scale: active ? 1.06 : 1,
          }}
          transition={{
            y: {
              duration: 2.6 + index * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.1,
            },
            scale: { duration: 0.22, ease: "easeOut" },
          }}
        >
          <span
            className="absolute inset-0 rounded-full blur-md transition-opacity duration-300"
            style={{
              background: active ? ACCENT_PINK : THEME_BLUE,
              opacity: active ? 0.32 : 0.16,
            }}
            aria-hidden
          />
          <span
            className="absolute inset-0 rounded-full border-2 bg-[#0A0A1A]/80 transition-all duration-300"
            style={{
              borderColor: active ? ACCENT_PINK : THEME_BLUE,
              boxShadow: active
                ? `0 0 16px ${ACCENT_PINK}55`
                : `0 0 10px ${THEME_BLUE}40`,
            }}
            aria-hidden
          />
          <span
            className={cn(
              "relative z-10 text-sm transition-colors duration-300 sm:text-base md:text-lg",
              active ? "text-primary-pink" : "text-white"
            )}
          >
            {item.icon}
          </span>
        </motion.span>

        <span
          className={cn(
            "line-clamp-2 min-h-[2.2em] text-center text-[10px] font-medium leading-snug transition-colors duration-300 sm:text-[11px] md:text-[12px]",
            active
              ? "text-primary-pink"
              : "text-white group-hover:text-primary-pink"
          )}
        >
          {short}
        </span>
      </Link>
    </motion.div>
  );
}

export default function ServiceCategoriesSection({
  items,
}: ServiceCategoriesSectionProps) {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="w-full bg-default">
      <Container>
        <div className="relative mx-auto w-full max-w-5xl">
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 h-16 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-pink/10 blur-3xl"
            aria-hidden
          />

          <div className="relative overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="relative min-w-[640px] px-2 py-3 md:min-w-0 md:px-0 md:py-4">
              <div
                className="pointer-events-none absolute top-[36%] right-[6%] left-[6%] h-6 -translate-y-1/2 rounded-full bg-white/[0.06] blur-[1px] md:h-7"
                aria-hidden
              />

              <div className="relative flex items-start justify-between">
                {items.map((item, index) => (
                  <div key={item.id} className="contents">
                    <CategoryNode
                      item={item}
                      index={index}
                      active={activeIndex === index}
                      onHoverChange={(hovered) =>
                        setActiveIndex(hovered ? index : null)
                      }
                      isInView={isInView}
                    />
                    {index < items.length - 1 ? (
                      <div className="mt-5 flex flex-1 items-center sm:mt-6 md:mt-7">
                        <DashedConnector
                          active={
                            activeIndex === index || activeIndex === index + 1
                          }
                        />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
