"use client";

import Image from "next/image";
import {
  HiOutlineChartBar,
  HiOutlineCloud,
  HiOutlineCodeBracket,
  HiOutlineShieldCheck,
  HiOutlineSquares2X2,
} from "react-icons/hi2";
import type { IconType } from "react-icons";
import Container from "@/components/atoms/Container";
import { cn } from "@/lib/utils";
import { motion } from "@/lib/replayMotion";

type ExpertService = {
  id: string;
  label: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  icon: IconType;
};

const services: ExpertService[] = [
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    icon: HiOutlineShieldCheck,
    imageSrc:
      "/assets/final-images/industries/financial-services/expertise-cybersecurity.png",
    // imageSrc: "/assets/images/industry/cybersecurity.jpg",
    imageAlt: "Cybersecurity shield protecting financial data",
    description:
      "Protect sensitive financial data with layered, continuously monitored security architecture.",
  },
  {
    id: "bi-data-engineering",
    label: "BI & Data Engineering",
    icon: HiOutlineChartBar,
    imageSrc:
      "/assets/final-images/industries/financial-services/expertise-bi-data.png",
    // imageSrc: "/assets/images/industry/bi.jpg",
    imageAlt: "BI dashboards and data engineering visualizations",
    description:
      "Turn raw financial data into decision ready insight across the organization.",
  },
  {
    id: "baas-api-integrations",
    label: "Banking as a Service & API Integrations",
    icon: HiOutlineCodeBracket,
    imageSrc:
      "/assets/final-images/industries/financial-services/expertise-baas-api.png",
    // imageSrc: "/assets/images/industry/baas.jpg",
    imageAlt: "BaaS and API integrations diagram",
    description:
      "Connect core systems to modern banking infrastructure providers.",
  },
  {
    id: "cloud-migration",
    label: "Cloud Migration & Optimization",
    icon: HiOutlineCloud,
    imageSrc:
      "/assets/final-images/industries/financial-services/expertise-cloud.png",
    // imageSrc: "/assets/images/industry/cloud.jpg",
    imageAlt: "Cloud migration and optimization illustration",
    description:
      "Move and right size financial workloads on secure, cost efficient cloud infrastructure.",
  },
  {
    id: "app-modernization",
    label: "App Modernization",
    icon: HiOutlineSquares2X2,
    imageSrc:
      "/assets/final-images/industries/financial-services/expertise-app-modernization.png",
    // imageSrc: "/assets/images/industry/app-modernization.jpg",
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
  return (
    <section className="bg-default">
      <div className="rounded-t-[12px] bg-white py-12 text-black md:py-16">
        <Container>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="text-center text-[12px] font-semibold uppercase tracking-[0.22em] text-primary-pink"
          >
            We Deliver Excellence
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mx-auto mt-3 max-w-4xl text-center text-[48px] font-medium leading-[52px] text-black"
          >
            Beyond IP driven solutions, expert services built for regulated
            finance
          </motion.h2>

          <div className="relative mt-10 md:mt-12">
            <span
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-black/10 lg:block"
            />

            <div className="space-y-6 pb-4 lg:space-y-5 lg:pb-20">
              {services.map((service, index) => {
                const Icon = service.icon;
                const reversed = index % 2 === 1;
                // const number = String(index + 1).padStart(2, "0");

                return (
                  <motion.article
                    key={service.id}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-80px", amount: 0.25 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="lg:sticky lg:top-24"
                    style={{ zIndex: index + 1 }}
                  >
                    <div
                      className={cn(
                        "grid items-center gap-4 rounded-[12px] border border-black/10 bg-white p-2.5 shadow-[0_12px_40px_rgba(10,10,26,0.06)] md:gap-5 md:p-3 lg:grid-cols-2 lg:gap-8 lg:p-3.5",
                        reversed && "lg:[&>*:first-child]:order-2"
                      )}
                    >
                      <div className="relative aspect-[16/9] overflow-hidden rounded-[12px] bg-[#0A0A1A] lg:aspect-[2/1] lg:min-h-[200px] lg:max-h-[240px]">
                        <Image
                          src={service.imageSrc}
                          alt={service.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 640px"
                          className="object-cover"
                        />
                      </div>

                      <div className="flex flex-col justify-center px-3 py-2 md:px-5 md:py-3">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-primary-pink">
                            <Icon className="h-4 w-4" aria-hidden />
                            Expert service
                          </span>
                        </div>

                        <h3 className="mt-2.5 text-[28px] font-semibold leading-snug text-black md:text-[32px]">
                          {service.label}
                        </h3>
                        <p className="mt-2.5 max-w-md text-[16px] leading-relaxed text-black/80">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </Container>
      </div>

      {/* Previous tab + sticky-pin layout preserved for possible future reuse:
      const [activeId, setActiveId] = useState(services[0].id);
      tablist of 5 pills, progress bar, AnimatePresence panel with image + copy.
      Outer track height was services.length * 100vh with sticky inner section.
      */}
    </section>
  );
}
