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
      "Protect your sensitive data and maintain customer trust with our robust cybersecurity solutions. We help you identify vulnerabilities, implement best practices, and ensure compliance with industry regulations.",
  },
  {
    id: "bi-data-engineering",
    label: "BI and Data Engineering",
    imageSrc: "/assets/images/industry/bi.jpg",
    imageAlt: "BI dashboards and data engineering visualizations",
    description:
      "Harness the power of your data with our BI and data engineering expertise. We help you collect, store, analyze, and visualize data to gain valuable insights and make informed business decisions.",
  },
  {
    id: "baas-api-integrations",
    label: "BaaS Integrations/API Integrations",
    imageSrc: "/assets/images/industry/baas.jpg",
    imageAlt: "BaaS and API integrations diagram",
    description:
      "Seamlessly connect your systems and leverage third-party services with our BaaS and API integration expertise. We ensure smooth data flow and enable you to build a truly integrated financial ecosystem.",
  },
  {
    id: "cloud-migration",
    label: "Cloud Migration & Optimization",
    imageSrc: "/assets/images/industry/cloud.jpg",
    imageAlt: "Cloud migration and optimization illustration",
    description:
      "Accelerate your journey to the cloud with our migration and optimization services. We help you modernize your infrastructure, reduce costs, and achieve greater scalability and flexibility.",
  },
  {
    id: "app-modernization",
    label: "App Modernization",
    imageSrc: "/assets/images/industry/app-modernization.jpg",
    imageAlt: "Omnichannel banking app modernization diagram",
    description:
      "Transform your legacy applications into modern, cloud-native solutions. We help you enhance performance, improve user experience, and reduce maintenance costs.",
  },
  {
    id: "qa",
    label: "QA",
    imageSrc: "/assets/images/industry/qa.jpg",
    imageAlt: "Quality assurance for financial systems",
    description:
      "We provide specialized QA services for financial institutions, ensuring that AI-driven systems, digital banking products, payment platforms, data pipelines, meet the highest standards of reliability, security, and regulatory compliance.",
  },
];

export default function FinancialServicesExpertiseSection() {
  const [activeId, setActiveId] = useState<string>(services[0].id);
  const activeService = services.find((s) => s.id === activeId) ?? services[0];

  return (
    <section className="bg-default">
      <div className="rounded-t-[36px] bg-primary-pink py-20 text-white md:rounded-t-[42px] md:py-28">
        <Container>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-white"
        >
          We Deliver Excellence
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mx-auto mt-4 max-w-3xl text-center text-3xl font-medium leading-tight text-white md:text-4xl"
        >
          Beyond our IP-driven solutions, eForte offers a range of expert
          services to ensure your financial services transformation is
          seamless, secure, and optimized for success.
        </motion.h2>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[minmax(320px,420px)_1fr] lg:gap-12 xl:gap-16">
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
                    "flex w-full cursor-pointer items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left transition-all duration-200",
                    isActive
                      ? "bg-white/95 text-primary-pink shadow-[0_8px_28px_rgba(0,0,0,0.18)]"
                      : "bg-transparent text-white hover:bg-white/10"
                  )}
                >
                  <span className="text-base font-medium">{service.label}</span>
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-md transition-colors duration-200",
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
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
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
