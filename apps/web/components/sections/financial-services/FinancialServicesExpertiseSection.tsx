"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
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
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string>(services[0].id);
  const [reduceMotion, setReduceMotion] = useState(false);
  const activeIndex = Math.max(
    0,
    services.findIndex((service) => service.id === activeId)
  );
  const activeService = services[activeIndex] ?? services[0];
  const progress = ((activeIndex + 1) / services.length) * 100;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReduceMotion(media.matches);
    syncMotion();
    media.addEventListener("change", syncMotion);
    return () => media.removeEventListener("change", syncMotion);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const updateActiveTab = () => {
      frame = 0;
      const rect = track.getBoundingClientRect();
      const scrollable = track.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const scrolled = Math.min(scrollable, Math.max(0, -rect.top));
      const nextIndex = Math.min(
        services.length - 1,
        Math.floor((scrolled / scrollable) * services.length)
      );
      const nextId = services[nextIndex].id;
      setActiveId((current) => (current === nextId ? current : nextId));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateActiveTab);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateActiveTab();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [reduceMotion]);

  const selectTab = (id: string) => {
    if (reduceMotion) {
      setActiveId(id);
      return;
    }

    const track = trackRef.current;
    const index = services.findIndex((service) => service.id === id);
    if (!track || index < 0) {
      setActiveId(id);
      return;
    }

    const start = track.getBoundingClientRect().top + window.scrollY;
    const scrollable = track.offsetHeight - window.innerHeight;
    const target =
      start + ((index + 0.2) / services.length) * Math.max(scrollable, 0);
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const ActiveIcon = activeService.icon;

  return (
    <div
      ref={trackRef}
      className="relative bg-default"
      style={
        reduceMotion ? undefined : { height: `${services.length * 100}vh` }
      }
    >
      <section className="sticky top-16 flex min-h-[calc(100svh-4rem)] items-stretch md:top-20 md:min-h-[calc(100svh-5rem)]">
        <div className="flex w-full flex-col justify-center rounded-t-[12px] bg-white py-12 text-black md:rounded-t-[12px] md:py-16">
          <Container>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px", amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-pink"
            >
              We Deliver Excellence
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px", amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mx-auto mt-4 max-w-3xl text-center text-3xl font-medium leading-tight text-black md:text-4xl"
            >
              Beyond IP driven solutions, expert services built for regulated
              finance
            </motion.h2>

            <div className="mt-10 md:mt-12">
              <div
                role="tablist"
                aria-label="Expert services"
                className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-5"
              >
                {services.map((service) => {
                  const isActive = service.id === activeId;
                  const Icon = service.icon;
                  return (
                    <button
                      key={service.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`expertise-panel-${service.id}`}
                      id={`expertise-tab-${service.id}`}
                      onClick={() => selectTab(service.id)}
                      className={cn(
                        "flex min-h-[72px] cursor-pointer items-center gap-3 rounded-[12px] px-4 py-3 text-left transition-all duration-300",
                        isActive
                          ? "bg-primary-pink text-white shadow-[0_8px_28px_rgba(211,40,122,0.28)]"
                          : "bg-[#F4F6FB] text-black hover:bg-[#E8ECF6]"
                      )}
                    >
                      {isActive ? (
                        <Icon className="h-5 w-5 shrink-0" aria-hidden />
                      ) : null}
                      <span className="text-[18px] font-medium leading-snug">
                        {service.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 h-[3px] overflow-hidden rounded-full bg-black/10">
                <div
                  className="h-full rounded-full bg-primary-pink transition-[width] duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="mt-8 md:mt-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  role="tabpanel"
                  id={`expertise-panel-${activeService.id}`}
                  aria-labelledby={`expertise-tab-${activeService.id}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="grid items-stretch gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10"
                >
                  <div className="relative aspect-[16/9] overflow-hidden rounded-[12px] bg-[#0A0A1A] lg:aspect-auto lg:min-h-[280px]">
                    <Image
                      src={activeService.imageSrc}
                      alt={activeService.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 640px"
                      className="object-cover"
                    />
                  </div>

                  <div className="relative flex flex-col justify-center overflow-hidden rounded-[12px] border border-black/10 bg-[#F4F6FB] px-6 py-8 md:px-8 md:py-10">
                    <div className="relative">
                      <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-pink">
                        <ActiveIcon className="h-4 w-4" aria-hidden />
                        Expert service
                      </span>
                      <h3 className="mt-4 text-[26px] font-semibold leading-snug text-black md:text-[28px]">
                        {activeService.label}
                      </h3>
                      <p className="mt-4 max-w-md text-[16px] leading-relaxed text-black">
                        {activeService.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
}
