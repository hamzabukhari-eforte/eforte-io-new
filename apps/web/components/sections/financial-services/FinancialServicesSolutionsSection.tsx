"use client";

// import { useState } from "react"; // preserved — Velocities tabs no longer use local active state
// import Image from "next/image"; // preserved — diagram and velocity photos commented out
// import { AnimatePresence } from "framer-motion";
import {
  HiOutlineArrowPath,
  HiOutlineChartBar,
  HiOutlineCodeBracket,
  HiOutlineCpuChip,
  HiOutlineCreditCard,
  HiOutlineDocumentText,
  HiOutlineExclamationCircle,
  HiOutlineQueueList,
  HiOutlineSquares2X2,
} from "react-icons/hi2";
import type { IconType } from "react-icons";
import Container from "@/components/atoms/Container";
import FinancialServicesVelocitiesInfographics from "@/components/sections/financial-services/FinancialServicesVelocitiesInfographics";
import { cn } from "@/lib/utils";
import { motion } from "@/lib/replayMotion";

type SolutionCorner = "tl" | "tr" | "bl" | "br";

type Solution = {
  title: string;
  description: string;
  icon: IconType;
  iconAnim: string;
  accent: string;
  corner: SolutionCorner;
};

type Accelerator = {
  id: string;
  label: string;
  icon: IconType;
  accent: string;
  imageSrc: string;
  imageAlt: string;
  paragraphs: string[];
};

const BLUE = "#2563EB";
const BLUE_SOFT = "#3B82F6";
const PINK = "#D3287A";

const solutions: Solution[] = [
  {
    title: "Embedded Banking",
    description:
      "Pre built modules that let non bank platforms launch banking features without building from scratch.",
    icon: HiOutlineCreditCard,
    iconAnim: "fs-sol-float",
    accent: BLUE,
    corner: "tl",
  },
  {
    title: "AI Credit Scoring",
    description:
      "Scoring models that draw on alternative data sources to assess borrowers traditional models miss.",
    icon: HiOutlineChartBar,
    iconAnim: "fs-sol-pulse",
    accent: PINK,
    corner: "tr",
  },
  {
    title: "Collections & Recovery Optimization",
    description:
      "Machine-learning models that prioritize collections outreach by likelihood and value of recovery.",
    icon: HiOutlineArrowPath,
    iconAnim: "fs-sol-spin",
    accent: BLUE_SOFT,
    corner: "tr",
  },
  {
    title: "AI Financial Analyst",
    description:
      "A compound AI system that reads structured and unstructured financial data to answer analyst style questions on demand.",
    icon: HiOutlineDocumentText,
    iconAnim: "fs-sol-nudge",
    accent: PINK,
    corner: "bl",
  },
  {
    title: "Core Banking API Integration",
    description:
      "Deep integration expertise across modern banking as a service ecosystems.",
    icon: HiOutlineCodeBracket,
    iconAnim: "fs-sol-pulse",
    accent: BLUE,
    corner: "bl",
  },
  {
    title: "Early Delinquency Prediction",
    description:
      "Predictive models that flag accounts at risk of first missed payment before it happens.",
    icon: HiOutlineExclamationCircle,
    iconAnim: "fs-sol-alert",
    accent: PINK,
    corner: "tr",
  },
];

const cornerClip: Record<SolutionCorner, string> = {
  tl: "[clip-path:inset(0_75%_75%_0)] group-hover:[clip-path:inset(0_0_0_0)]",
  tr: "[clip-path:inset(0_0_75%_75%)] group-hover:[clip-path:inset(0_0_0_0)]",
  bl: "[clip-path:inset(75%_75%_0_0)] group-hover:[clip-path:inset(0_0_0_0)]",
  br: "[clip-path:inset(75%_0_0_75%)] group-hover:[clip-path:inset(0_0_0_0)]",
};

const SOLUTION_CARD_STYLES = `
@keyframes fs-sol-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
@keyframes fs-sol-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.12); }
}
@keyframes fs-sol-spin { to { transform: rotate(360deg); } }
@keyframes fs-sol-nudge {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-4px) rotate(-6deg); }
}
@keyframes fs-sol-alert {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.14); opacity: 0.72; }
}

.fs-sol-float { animation: fs-sol-float 2.4s ease-in-out infinite; }
.fs-sol-pulse { animation: fs-sol-pulse 2.1s ease-in-out infinite; }
.fs-sol-spin { animation: fs-sol-spin 4.8s linear infinite; }
.fs-sol-nudge { animation: fs-sol-nudge 2.6s ease-in-out infinite; }
.fs-sol-alert { animation: fs-sol-alert 1.8s ease-in-out infinite; }

@media (prefers-reduced-motion: reduce) {
  .fs-sol-float, .fs-sol-pulse, .fs-sol-spin, .fs-sol-nudge, .fs-sol-alert {
    animation: none !important;
  }
}
`;

function LoadText({
  text,
  delay = 0,
  className,
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-60px", amount: 0.4 }}
          transition={{
            duration: 0.42,
            delay: delay + index * 0.028,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </span>
  );
}



const accelerators: Accelerator[] = [
  {
    id: "ui-banking-wrappers",
    label: "Banking UI component library",
    icon: HiOutlineSquares2X2,
    accent: BLUE,
    // imageSrc: "/assets/images/industry/wrappers.jpg",
    imageSrc:
      "/assets/final-images/industries/financial-services/velocity-banking-ui.png",
    imageAlt: "Banking UI component library preview",
    paragraphs: [
      "Pre built, brandable interface components for banking and lending apps.",
      "eForte's Velocities are pre built assets that are integral to our solutions and drive faster delivery without sacrificing quality.",
    ],
  },
  {
    id: "airflow-blueprints",
    label: "Workflow orchestration blueprints",
    icon: HiOutlineQueueList,
    accent: PINK,
    // imageSrc: "/assets/images/industry/airflow.jpg",
    imageSrc:
      "/assets/final-images/industries/financial-services/velocity-orchestration.png",
    imageAlt: "Workflow orchestration blueprints",
    paragraphs: [
      "Reusable pipeline templates that cut new data workflow setup time significantly.",
      "Jumpstart delivery with proven orchestration patterns tuned for financial workloads.",
    ],
  },
  {
    id: "model-monitoring-dashboards",
    label: "Model performance dashboards",
    icon: HiOutlineChartBar,
    accent: BLUE_SOFT,
    // imageSrc: "/assets/images/industry/monitoring.jpg",
    imageSrc:
      "/assets/final-images/industries/financial-services/velocity-model-dashboards.png",
    imageAlt: "Model performance dashboards preview",
    paragraphs: [
      "Pre built monitoring views that track model drift and accuracy in production.",
      "Keep financial AI models observable and reliable after go-live.",
    ],
  },
  {
    id: "ai-cloud-engine",
    label: "AI infrastructure engine",
    icon: HiOutlineCpuChip,
    accent: PINK,
    // imageSrc: "/assets/images/industry/accelerators-5.jpg",
    imageSrc:
      "/assets/final-images/industries/financial-services/velocity-ai-infra.png",
    imageAlt: "AI infrastructure engine architecture diagram",
    paragraphs: [
      "A managed foundation for deploying and scaling financial AI models securely.",
    ],
  },
];


export default function FinancialServicesSolutionsSection() {
  // Preserved — previous Velocities tab state:
  // const [activeId, setActiveId] = useState<string>(accelerators[0].id);
  // const activeAccelerator =
  //   accelerators.find((a) => a.id === activeId) ?? accelerators[0];

  return (
    <section className="rounded-t-[12px] bg-default py-20 text-white md:rounded-t-[12px] md:py-28">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-pink"
        >
          eForte Finance Studio, IP driven solutions
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mx-auto mt-4 max-w-3xl text-center text-3xl font-medium leading-tight text-white md:text-4xl lg:text-[44px]"
        >
          Six customizable finance solutions built to add velocity for
          time to market
        </motion.h2>

        {/* Solutions diagram preserved for possible future reuse:
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-6 md:mt-8"
        >
          <div className="relative aspect-[2.2/1] w-full overflow-hidden">
            <Image
              src="/assets/images/industry/learn-more.webp"
              alt="eForte Finance Studio solutions diagram"
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover object-center"
            />
          </div>
        </motion.div>
        */}

        <style>{SOLUTION_CARD_STYLES}</style>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.article
                key={solution.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px", amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: 0.06 * (index % 3),
                  ease: "easeOut",
                }}
                className="group relative h-full overflow-hidden rounded-[12px] border border-white/10 bg-[#0C1020] p-6 md:p-7"
              >
                <span
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute inset-0 rounded-[12px] border-[3px] transition-[clip-path] duration-500 ease-out",
                    cornerClip[solution.corner]
                  )}
                  style={{ borderColor: solution.accent }}
                />

                <div className="relative flex items-start gap-3">
                  <span
                    className={cn(
                      "mt-0.5 inline-flex h-7 w-7 shrink-0 origin-center",
                      solution.iconAnim
                    )}
                  >
                    <Icon
                      className="h-7 w-7"
                      style={{ color: solution.accent }}
                      aria-hidden
                    />
                  </span>
                  <h3 className="text-[20px] font-semibold leading-snug text-white">
                    <LoadText
                      text={solution.title}
                      delay={0.08 + 0.05 * (index % 3)}
                    />
                  </h3>
                </div>

                <p className="relative mt-4 text-[16px] leading-relaxed text-white">
                  <LoadText
                    text={solution.description}
                    delay={0.18 + 0.05 * (index % 3)}
                  />
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-24 md:mt-32">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-pink"
          >
            Velocities
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mx-auto mt-4 max-w-3xl text-center text-3xl font-medium leading-tight text-white md:text-4xl lg:text-[40px]"
          >
            eForte&apos;s Velocities are pre built assets that are integral to
            our solutions and drive faster delivery without sacrificing quality.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mx-auto mt-6 max-w-2xl text-center text-[15px] leading-relaxed text-white md:text-base"
          >
            They ensure high quality results, based on tried-and-tested
            technologies, ensuring alignment with industry best practices and
            regulations.
          </motion.p>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-16 md:gap-5">
            {accelerators.map((accelerator, index) => {
              const Icon = accelerator.icon;
              const number = String(index + 1).padStart(2, "0");
              return (
                <motion.article
                  key={accelerator.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-80px", amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.08 * index,
                    ease: "easeOut",
                  }}
                  className="group flex h-full flex-col overflow-hidden rounded-[12px] border border-white/10 bg-[#0C1020] transition-colors duration-300 hover:border-white/20"
                >
                  <div className="relative h-[112px] w-full overflow-hidden bg-black md:h-[124px]">
                    <div className="absolute inset-0 origin-center transition-transform duration-700 group-hover:scale-[1.04]">
                      {/* Photos kept for later reuse:
                      <Image
                        src={accelerator.imageSrc}
                        alt={accelerator.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 320px"
                        className="object-cover"
                      />
                      */}
                      <FinancialServicesVelocitiesInfographics id={accelerator.id} />
                    </div>
                    <span
                      aria-hidden
                      className="absolute left-0 top-0 h-full w-[3px]"
                      style={{ backgroundColor: accelerator.accent }}
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-4 md:p-5">
                    <div className="flex items-start gap-2.5">
                      <span
                        className="mt-0.5 text-[11px] font-semibold tracking-[0.18em]"
                        style={{ color: accelerator.accent }}
                      >
                        {number}
                      </span>
                      <Icon
                        className="mt-0.5 h-5 w-5 shrink-0"
                        style={{ color: accelerator.accent }}
                        aria-hidden
                      />
                      <h3 className="text-[16px] font-semibold leading-snug text-white md:text-[17px]">
                        {accelerator.label}
                      </h3>
                    </div>

                    <div className="mt-3 flex flex-1 flex-col justify-start space-y-2.5 text-[14px] leading-relaxed text-white">
                      {accelerator.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Previous underline-tabs + split image/text layout preserved:
          <div className="mt-12 md:mt-16">
            <div
              role="tablist"
              aria-label="Velocities"
              className="grid w-full grid-cols-1 border-b border-white/12 sm:grid-cols-2 lg:grid-cols-4"
            >
              {accelerators.map((accelerator) => {
                const isActive = accelerator.id === activeId;
                const Icon = accelerator.icon;
                return (
                  <button ... />
                );
              })}
            </div>
          </div>
          <div className="mt-12 md:mt-16">
            <AnimatePresence mode="wait">
              split panel with infographic left and paragraphs right
            </AnimatePresence>
          </div>
          */}
        </div>
      </Container>
    </section>
  );
}
