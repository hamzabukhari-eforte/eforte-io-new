"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { cn } from "@/lib/utils";

type Solution = {
  title: string;
  description: string;
};

type Accelerator = {
  id: string;
  label: string;
  imageSrc: string;
  imageAlt: string;
  paragraphs: string[];
};

const solutions: Solution[] = [
  {
    title: "Embedded Banking",
    description:
      "Pre built modules that let non bank platforms launch banking features without building from scratch.",
  },
  {
    title: "AI Credit Scoring",
    description:
      "Scoring models that draw on alternative data sources to assess borrowers traditional models miss.",
  },
  {
    title: "Collections & Recovery Optimization",
    description:
      "Machine-learning models that prioritize collections outreach by likelihood and value of recovery.",
  },
  {
    title: "AI Financial Analyst",
    description:
      "A compound AI system that reads structured and unstructured financial data to answer analyst style questions on demand.",
  },
  {
    title: "Core Banking API Integration",
    description:
      "Deep integration expertise across modern banking as a service ecosystems.",
  },
  {
    title: "Early Delinquency Prediction",
    description:
      "Predictive models that flag accounts at risk of first missed payment before it happens.",
  },
];



const accelerators: Accelerator[] = [
  {
    id: "ui-banking-wrappers",
    label: "Banking UI component library",
    imageSrc: "/assets/images/industry/wrappers.jpg",
    imageAlt: "Banking UI component library preview",
    paragraphs: [
      "Pre built, brandable interface components for banking and lending apps.",
      "eForte's Velocities are pre built assets that are integral to our solutions and drive faster delivery without sacrificing quality.",
    ],
  },
  {
    id: "airflow-blueprints",
    label: "Workflow orchestration blueprints",
    imageSrc: "/assets/images/industry/airflow.jpg",
    imageAlt: "Workflow orchestration blueprints",
    paragraphs: [
      "Reusable pipeline templates that cut new data workflow setup time significantly.",
      "Jumpstart delivery with proven orchestration patterns tuned for financial workloads.",
    ],
  },
  {
    id: "model-monitoring-dashboards",
    label: "Model performance dashboards",
    imageSrc: "/assets/images/industry/monitoring.jpg",
    imageAlt: "Model performance dashboards preview",
    paragraphs: [
      "Pre built monitoring views that track model drift and accuracy in production.",
      "Keep financial AI models observable and reliable after go-live.",
    ],
  },
  {
    id: "ai-cloud-engine",
    label: "AI infrastructure engine",
    imageSrc: "/assets/images/industry/accelerators-5.jpg",
    imageAlt: "AI infrastructure engine architecture diagram",
    paragraphs: [
      "A managed foundation for deploying and scaling financial AI models securely.",
    ],
  },
];


export default function FinancialServicesSolutionsSection() {
  const [activeId, setActiveId] = useState<string>(accelerators[0].id);
  const activeAccelerator =
    accelerators.find((a) => a.id === activeId) ?? accelerators[0];

  return (
    <section className="rounded-t-[12px] bg-default py-20 text-white md:rounded-t-[12px] md:py-28">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium italic text-white/80"
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-12 md:mt-16"
        >
          <div className="relative aspect-2044/1287 w-full overflow-hidden">
            <Image
              src="/assets/images/industry/learn-more.webp"
              alt="eForte Finance Studio solutions diagram"
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-contain"
            />
          </div>
        </motion.div>

        <div className="mt-12 grid gap-x-10 gap-y-12 md:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px", amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: 0.06 * (index % 3),
                ease: "easeOut",
              }}
              className="max-w-md"
            >
              <h3 className="text-lg font-semibold leading-snug text-white">
                {solution.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 md:mt-32">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-white"
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
            className="mx-auto mt-6 max-w-2xl text-center text-[15px] leading-relaxed text-white/75 md:text-base"
          >
            They ensure high quality results, based on tried-and-tested
            technologies, ensuring alignment with industry best practices and
            regulations.
          </motion.p>

          <div className="mt-12 flex justify-center md:mt-16">
            <div
              role="tablist"
              aria-label="Velocities"
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {accelerators.map((accelerator) => {
                const isActive = accelerator.id === activeId;
                return (
                  <button
                    key={accelerator.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`accelerator-panel-${accelerator.id}`}
                    id={`accelerator-tab-${accelerator.id}`}
                    onClick={() => setActiveId(accelerator.id)}
                    className={cn(
                      "h-10 cursor-pointer rounded-full px-5 py-0 text-sm font-medium transition-all duration-200 md:px-6",
                      isActive
                        ? "bg-primary-pink text-white shadow-[0_4px_18px_rgba(211, 40, 122, 0.4)]"
                        : "bg-white/15 text-white/80 hover:bg-primary-pink hover:text-white"
                    )}
                  >
                    {accelerator.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-12 md:mt-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAccelerator.id}
                role="tabpanel"
                id={`accelerator-panel-${activeAccelerator.id}`}
                aria-labelledby={`accelerator-tab-${activeAccelerator.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid items-center gap-6 lg:grid-cols-[440px_1fr] lg:gap-8"
              >
                <div className="flex justify-center lg:justify-start">
                  <div className="relative aspect-4/3 w-full max-w-[440px] overflow-hidden rounded-[12px]">
                    <Image
                      src={activeAccelerator.imageSrc}
                      alt={activeAccelerator.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 440px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="max-w-xl space-y-4 text-[15px] leading-relaxed text-white/80 md:text-base">
                  {activeAccelerator.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
