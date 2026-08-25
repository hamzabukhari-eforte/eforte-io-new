"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import Container from "@/components/atoms/Container";
import { cn } from "@/lib/utils";

type ExpertService = {
  id: string;
  label: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
};

const services: ExpertService[] = [
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    imageSrc: "/assets/images/industry/cybersecurity.jpg",
    imageAlt: "Cybersecurity shield protecting financial data",
    description:
      "Protect sensitive financial data with layered, continuously monitored security architecture.",
  },
  {
    id: "bi-data-engineering",
    label: "BI & Data Engineering",
    imageSrc: "/assets/images/industry/bi.jpg",
    imageAlt: "BI dashboards and data engineering visualizations",
    description:
      "Turn raw financial data into decision ready insight across the organization.",
  },
  {
    id: "baas-api-integrations",
    label: "Banking as a Service & API Integrations",
    imageSrc: "/assets/images/industry/baas.jpg",
    imageAlt: "BaaS and API integrations diagram",
    description:
      "Connect core systems to modern banking infrastructure providers.",
  },
  {
    id: "cloud-migration",
    label: "Cloud Migration & Optimization",
    imageSrc: "/assets/images/industry/cloud.jpg",
    imageAlt: "Cloud migration and optimization illustration",
    description:
      "Move and right size financial workloads on secure, cost efficient cloud infrastructure.",
  },
  {
    id: "app-modernization",
    label: "App Modernization",
    imageSrc: "/assets/images/industry/app-modernization.jpg",
    imageAlt: "Omnichannel banking app modernization diagram",
    description:
      "Rebuild legacy financial applications on modern, maintainable architectures.",
  },
  /* Preserved for future reuse, not listed in July 30 Finance content
  {
    id: "qa",
    label: "QA",
    imageSrc: "/assets/images/industry/qa.jpg",
    imageAlt: "Quality assurance for financial systems",
    description:
      "We provide specialized QA services for financial institutions, ensuring that AI driven systems, digital banking products, payment platforms, data pipelines, meet the highest standards of reliability, security, and regulatory compliance.",
  },
  */
];


export default function FinancialServicesExpertiseSection() {
  const [activeId, setActiveId] = useState<string>(services[0].id);
  const activeService = services.find((s) => s.id === activeId) ?? services[0];

  return (
    <section className="bg-default">
      <div className="rounded-t-[12px] bg-primary-pink py-20 text-white md:rounded-t-[12px] md:py-28">
        <Container>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-white"
        >
          We Deliver Excellence
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mx-auto mt-4 max-w-3xl text-center text-3xl font-medium leading-tight text-white md:text-4xl"
        >
          Beyond IP driven solutions, expert services built for regulated
          finance
        </motion.h2>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[minmax(320px, 420px)_1fr] lg:gap-12 xl:gap-16">
          <div role="tablist" aria-label="Expert services" className="space-y-3">
            {services.map((service) => {
              const isActive = service.id === activeId;
              return (
                <button
                  key={service.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`expertise-panel-${service.id}`}
                  id={`expertise-tab-${service.id}`}
                  onClick={() => setActiveId(service.id)}
                  className={cn(
                    "flex w-full cursor-pointer items-center justify-between gap-4 rounded-[12px] px-5 py-4 text-left transition-all duration-200",
                    isActive
                      ? "bg-white/95 text-primary-pink shadow-[0_8px_28px_rgba(0, 0, 0, 0.18)]"
                      : "bg-transparent text-white hover:bg-white/10"
                  )}
                >
                  <span className="text-base font-medium">{service.label}</span>
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] transition-colors duration-200",
                      isActive
                        ? "bg-primary-pink text-white"
                        : "border border-white/40 text-white"
                    )}
                    aria-hidden="true"
                  >
                    <HiArrowRight className="h-4 w-4" />
                  </span>
                </button>
              );
            })}
          </div>

          <div className="lg:pt-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                role="tabpanel"
                id={`expertise-panel-${activeService.id}`}
                aria-labelledby={`expertise-tab-${activeService.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-[12px]">
                  <Image
                    src={activeService.imageSrc}
                    alt={activeService.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 720px"
                    className="object-cover"
                  />
                </div>
                <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/90 md:text-base">
                  {activeService.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        </Container>
      </div>
    </section>
  );
}
