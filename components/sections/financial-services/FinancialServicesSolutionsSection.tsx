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
    title: "Digital Banking",
    description:
      "We help clients conceive, build, and launch full-featured digital banking products and platforms. This ranges from user onboarding, wallets, payments, ledger and account management, to customer-facing banking experiences.",
  },
  {
    title: "AI Credit Scoring",
    description:
      "We develop AI-driven credit scoring models that leverage a broader set of data (customer behavior, transactions, external credit bureau data, etc.) to generate more accurate, dynamic assessments of creditworthiness.",
  },
  {
    title: "Debt Collection Risk & Bankruptcy Prediction",
    description:
      "Using machine-learning and data science, we build predictive models that assess borrower risk: estimating default probability, bankruptcy risk, or debt-collection likelihood based on payment histories, transaction data, credit bureau information and behavioral signals.",
  },
  {
    title: "AI Financial Analyst",
    description:
      "Our AI Financial Analyst solution is based on a compound AI system that processes structured and unstructured data and allows a company to very quickly answer complex questions about its data.",
  },
  {
    title: "Galileo API Integration",
    description:
      "We have deep expertise integrating with modern banking-as-a-service (BaaS) ecosystems such as Galileo, APIs, and third-party core banking or payments platforms. This allows clients to plug in financial services without reinventing core banking infrastructure.",
  },
  {
    title: "Predictive First Payment Default",
    description:
      "Leveraging algorithms (both off-the-shelf as well as custom) including XG-Boost based AI risk models, eForte builds intelligent fraud-detection systems tailored for financial services. This specific solution focuses on the probability of 3rd party fraud, using the first 6 months on book as the time window.",
  },
];

const accelerators: Accelerator[] = [
  {
    id: "ui-banking-wrappers",
    label: "UI banking wrappers",
    imageSrc: "/assets/images/industry/wrappers.jpg",
    imageAlt: "Mobile banking app UI wrappers preview",
    paragraphs: [
      "Streamline your banking app development with our intuitive UI wrappers.",
      "Rapidly prototype and then customize user interfaces, empowering you to craft distinctive, engaging financial experiences that resonate with your customers.",
    ],
  },
  {
    id: "airflow-blueprints",
    label: "Airflow blueprints",
    imageSrc: "/assets/images/industry/airflow.jpg",
    imageAlt: "Apache Airflow logo",
    paragraphs: [
      "Businesses can jumpstart their machine learning workflows with eForte's Airflow Blueprints.",
      "Our pre-built templates and reusable components streamline pipeline creation and optimize resource utilization within the Airflow environment.",
    ],
  },
  {
    id: "model-monitoring-dashboards",
    label: "Model monitoring dashboards",
    imageSrc: "/assets/images/industry/monitoring.jpg",
    imageAlt: "Model monitoring dashboards preview",
    paragraphs: [
      "Gain real-time insights into the health of your machine learning models with our pre-configured dashboards. Visualize key performance metrics like accuracy, precision, and drift over time.",
      "Set automated alerts to proactively address any performance degradation, ensuring your models remain effective and reliable.",
    ],
  },
  {
    id: "ai-cloud-engine",
    label: "AI Cloud Engine",
    imageSrc: "/assets/images/industry/accelerators-5.jpg",
    imageAlt: "AI Cloud Engine architecture diagram",
    paragraphs: [
      "Streamline AI/ML infrastructure deployment and management using industry-leading platforms like Databricks, Snowflake, Airflow, dbt, and MLflow.",
    ],
  },
];

export default function FinancialServicesSolutionsSection() {
  const [activeId, setActiveId] = useState<string>(accelerators[0].id);
  const activeAccelerator =
    accelerators.find((a) => a.id === activeId) ?? accelerators[0];

  return (
    <section className="rounded-t-[36px] bg-default py-20 text-white md:rounded-t-[42px] md:py-28">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium italic text-white/80"
        >
          Learn more about eForte Finance Solutions
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mx-auto mt-4 max-w-3xl text-center text-3xl font-medium leading-tight text-white md:text-4xl lg:text-[44px]"
        >
          eForte Finance Studio has 6 customizable, IP-driven solutions to
          accelerate time-to-market
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
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
              viewport={{ once: true, margin: "-80px" }}
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
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-white"
          >
            Accelerators
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mx-auto mt-4 max-w-3xl text-center text-3xl font-medium leading-tight text-white md:text-4xl lg:text-[40px]"
          >
            eForte Accelerators are assets that are integral parts of our
            solutions and drive 50%+ increase in productivity, efficiency, and
            time to market.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
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
              aria-label="Accelerators"
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
                      "cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 md:px-6",
                      isActive
                        ? "bg-primary-pink text-white shadow-[0_4px_18px_rgba(211,40,122,0.4)]"
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
                  <div className="relative aspect-4/3 w-full max-w-[440px] overflow-hidden rounded-2xl">
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
