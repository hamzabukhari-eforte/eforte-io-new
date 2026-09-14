"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiOutlineIdentification,
  HiOutlineDeviceMobile,
  HiOutlineVideoCamera,
  HiOutlineChartSquareBar,
  HiOutlineViewGridAdd,
} from "react-icons/hi";
import type { IconType } from "react-icons";
import Container from "@/components/atoms/Container";
import { cn } from "@/lib/utils";

type Bullet = { title: string; text: string };

type Capability = {
  id: string;
  label: string;
  icon: IconType;
  heading: string;
  caseBrand: string;
  href: string;
  bullets: Bullet[];
  image: string;
};

const capabilities: Capability[] = [
  {
    id: "digital-patient",
    label: "Digital Patient Experience",
    icon: HiOutlineIdentification,
    heading: "Digital Patient Experience",
    caseBrand: "Aurelia Clinics",
    href: "/case-studies/aurelia-clinics",
    bullets: [
      {
        title: "Patient-first interface design",
        text: "Reimagine how patients interact with providers across web, mobile, and messaging channels.",
      },
      {
        title: "Engagement & retention platforms",
        text: "Give patients simple access to records, reminders, and personalized health content.",
      },
      {
        title: "Health-specific CRM tooling",
        text: "Manage and strengthen every patient relationship with purpose built systems.",
      },
      {
        title: "Accessible, inclusive design",
        text: "Apply health design thinking so digital tools work for every patient, not just the tech-savvy ones.",
      },
    ],
    image:
      "/assets/final-images/industries/healthcare/aurelia-clinics-intro.png",
  },
  {
    id: "mhealth",
    label: "mHealth & Connected Devices",
    icon: HiOutlineDeviceMobile,
    heading: "mHealth & Connected Devices",
    caseBrand: "PulseLink",
    href: "/case-studies/pulselink",
    bullets: [
      {
        title: "Consumer health apps",
        text: "Bring services like symptom tracking, coaching, and reminders directly to patients' phones.",
      },
      {
        title: "Apple Health / Google Fit integrations",
        text: "Build on established mobile health data ecosystems.",
      },
      {
        title: "Custom wearable engineering",
        text: "Design connected devices over BLE, WiFi, or NFC that deliver meaningful, real time health metrics.",
      },
    ],
    image: "/assets/final-images/industries/healthcare/pulselink-mhealth-clear.png",
  },
  {
    id: "virtual-care",
    label: "Virtual Care & Remote Monitoring",
    icon: HiOutlineVideoCamera,
    heading: "Virtual Care & Remote Monitoring",
    caseBrand: "Northstar Care",
    href: "/case-studies/northstar-care",
    bullets: [
      {
        title: "Telehealth platforms",
        text: "Support high quality video and audio consultations that feel as good as an in-person visit.",
      },
      {
        title: "Remote patient monitoring",
        text: "Connect at home devices and clinical systems so care teams can act before small issues become emergencies.",
      },
      {
        title: "Medication adherence tools",
        text: "Help patients and caregivers track and manage prescriptions accurately.",
      },
    ],
    image: "/assets/final-images/industries/healthcare/northstar-intro.png",
  },
  {
    id: "agentic-care",
    label: "Agentic Orchestration",
    icon: HiOutlineChartSquareBar,
    heading: "Agentic Orchestration for Care Teams",
    caseBrand: "Thornfield Health",
    href: "/case-studies/thornfield-health",
    bullets: [
      {
        title: "Clinical documentation agents",
        text: "Reduce administrative burden by drafting visit summaries and notes for clinician review.",
      },
      {
        title: "Patient triage agents",
        text: "Help route incoming patient questions and requests to the right team member faster.",
      },
      {
        title: "Care-coordination agents",
        text: "Keep multidisciplinary care teams aligned on a patient's evolving treatment plan.",
      },
    ],
    image: "/assets/final-images/industries/healthcare/thornfield-intro.png",
  },
  {
    id: "foundational-data",
    label: "Foundational Data Layer",
    icon: HiOutlineViewGridAdd,
    heading: "Foundational Data Layer for Health Systems",
    caseBrand: "Helix Health Data",
    href: "/case-studies/helix-health-data",
    bullets: [
      {
        title: "HIPAA aligned data architecture",
        text: "Build governed, secure pipelines for ingesting and storing sensitive health data.",
      },
      {
        title: "EHR & device interoperability",
        text: "Connect wearables, remote monitoring tools, and medical devices directly into electronic health records.",
      },
      {
        title: "Health data analytics",
        text: "Turn clinical and operational data into insight that improves both care quality and efficiency.",
      },
    ],
    image: "/assets/final-images/industries/healthcare/helix-intro-v2.png",
  },
];

const STEP_VH = 110;
const EASE = [0.22, 1, 0.36, 1] as const;
const FADE = { duration: 0.55, ease: EASE };

export default function HealthcareCapabilitiesSection() {
  const trackRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const clickLockRef = useRef(false);
  const clickUnlockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);

  const setActiveSmooth = useCallback((next: number) => {
    if (next === activeIndexRef.current) return;
    activeIndexRef.current = next;
    setActiveIndex(next);
  }, []);

  const syncFromScroll = useCallback(() => {
    if (clickLockRef.current) return;
    const track = trackRef.current;
    if (!track) return;

    const rect = track.getBoundingClientRect();
    const scrollable = track.offsetHeight - window.innerHeight;
    if (scrollable <= 0) {
      setActiveSmooth(0);
      return;
    }

    const scrolled = Math.min(scrollable, Math.max(0, -rect.top));
    const progress = scrolled / scrollable;
    const scaled = progress * (capabilities.length - 0.0001);
    const next = Math.min(
      capabilities.length - 1,
      Math.max(0, Math.round(scaled - 0.15))
    );
    setActiveSmooth(next);
  }, [setActiveSmooth]);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        syncFromScroll();
      });
    };

    syncFromScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      if (clickUnlockTimer.current) clearTimeout(clickUnlockTimer.current);
    };
  }, [syncFromScroll]);

  const goToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;

    clickLockRef.current = true;
    setActiveSmooth(index);

    const scrollable = Math.max(0, track.offsetHeight - window.innerHeight);
    const segment = scrollable / capabilities.length;
    const top =
      window.scrollY +
      track.getBoundingClientRect().top +
      index * segment +
      segment * 0.35;

    window.scrollTo({ top, behavior: "smooth" });

    if (clickUnlockTimer.current) clearTimeout(clickUnlockTimer.current);
    clickUnlockTimer.current = setTimeout(() => {
      clickLockRef.current = false;
      syncFromScroll();
    }, 900);
  };

  const capability = capabilities[activeIndex];

  return (
    <section
      ref={trackRef}
      className="relative bg-white"
      style={{ height: `${capabilities.length * STEP_VH}vh` }}
      aria-label="Healthcare capabilities"
    >
      {/*
        Sticky scrub on every breakpoint. Panel uses max-height of the viewport
        (minus navbar) so content stays visible; overflow-y-auto only if needed.
      */}
      <div className="sticky top-16 z-10 flex max-h-[calc(100dvh-4rem)] items-center overflow-y-auto overscroll-contain bg-white py-6 md:top-20 md:max-h-[calc(100dvh-5rem)] md:py-8 lg:py-10">
        <Container className="w-full">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
            <div className="flex flex-col justify-center">
              <div className="relative">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={capability.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={FADE}
                    className="w-full"
                  >
                    <h3 className="max-w-md text-2xl font-semibold leading-tight text-[#011C57] sm:text-3xl md:text-4xl">
                      {capability.heading}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-primary-pink">
                      Case study · {capability.caseBrand}
                    </p>
                    <ul className="mt-4 space-y-3 sm:mt-6 sm:space-y-4 md:mt-7 md:space-y-5">
                      {capability.bullets.map((bullet, i) => (
                        <motion.li
                          key={bullet.title}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.35,
                            delay: 0.06 + i * 0.04,
                            ease: EASE,
                          }}
                          className="flex gap-3"
                        >
                          <span className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#888888]" />
                          <p className="text-[13px] leading-relaxed text-[#666] sm:text-[14px] md:text-[15px]">
                            <span className="font-semibold text-[#222]">
                              {bullet.title}
                            </span>{" "}
                            {bullet.text}
                          </p>
                        </motion.li>
                      ))}
                    </ul>
                    <Link
                      href={capability.href}
                      className="mt-5 inline-flex h-10 items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white transition-colors hover:bg-black/80 sm:mt-6 md:mt-7"
                    >
                      Learn more
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-1.5 sm:mt-8 md:mt-10 md:justify-start">
                {capabilities.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => goToIndex(index)}
                      aria-label={item.label}
                      aria-current={isActive ? "true" : undefined}
                      className="flex w-[4.25rem] flex-col items-center gap-1.5 text-center sm:w-20 md:w-24 md:gap-2"
                    >
                      <span
                        className={cn(
                          "flex h-11 w-11 items-center justify-center rounded-[12px] transition-all duration-500 ease-out sm:h-12 sm:w-12 md:h-14 md:w-14",
                          isActive
                            ? "scale-105 bg-primary-pink text-white shadow-[0_10px_24px_rgba(211,40,122,0.35)]"
                            : "bg-primary-pink/10 text-primary-pink hover:bg-primary-pink/15"
                        )}
                      >
                        <Icon className="h-5 w-5 md:h-6 md:w-6" />
                      </span>
                      <span
                        className={cn(
                          "text-[10px] font-medium leading-tight transition-colors duration-500 sm:text-[11px]",
                          isActive ? "text-primary-pink" : "text-[#9aa3b2]"
                        )}
                      >
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative w-full lg:-mr-16">
              <div className="relative mx-auto aspect-4/3 w-full max-w-[560px] lg:max-w-[640px]">
                {capabilities.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="absolute inset-0"
                    initial={false}
                    animate={{
                      opacity: index === activeIndex ? 1 : 0,
                      scale: index === activeIndex ? 1 : 0.97,
                    }}
                    transition={{ duration: 0.55, ease: EASE }}
                    style={{
                      pointerEvents: index === activeIndex ? "auto" : "none",
                      zIndex: index === activeIndex ? 2 : 1,
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.heading}
                      fill
                      sizes="(max-width: 1024px) 100vw, 640px"
                      className="object-contain object-center"
                      priority={index === 0}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
