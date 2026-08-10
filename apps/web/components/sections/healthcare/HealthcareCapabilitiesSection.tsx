"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
  bullets: Bullet[];
  image: string;
  imageSide: "left" | "right";
};

const capabilities: Capability[] = [
  {
    id: "digital-patient",
    label: "Digital Patient Experience",
    icon: HiOutlineIdentification,
    heading: "Digital Patient Experience",
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
    image: "/assets/images/case-study/krank-banner.png",
    imageSide: "right",
  },
  {
    id: "mhealth",
    label: "mHealth & Connected Devices",
    icon: HiOutlineDeviceMobile,
    heading: "mHealth & Connected Devices",
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
    image: "/assets/images/case-study/oddysee-banner.png",
    imageSide: "left",
  },
  {
    id: "virtual-care",
    label: "Virtual Care & Remote Monitoring",
    icon: HiOutlineVideoCamera,
    heading: "Virtual Care & Remote Monitoring",
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
    image: "/assets/images/case-study/invesment-banner.png",
    imageSide: "right",
  },
  {
    id: "agentic-care",
    label: "Agentic Orchestration",
    icon: HiOutlineChartSquareBar,
    heading: "Agentic Orchestration for Care Teams",
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
    image: "/assets/images/case-study/prism-banner.png",
    imageSide: "left",
  },
  {
    id: "foundational-data",
    label: "Foundational Data Layer",
    icon: HiOutlineViewGridAdd,
    heading: "Foundational Data Layer for Health Systems",
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
    image: "/assets/images/case-study/sellsMart4.png",
    imageSide: "right",
  },
];


function CapabilityNav({ activeId }: { activeId: string }) {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-1.5 md:justify-start">
      {capabilities.map((c) => {
        const Icon = c.icon;
        const isActive = c.id === activeId;
        return (
          <div
            key={c.id}
            className="flex w-20 flex-col items-center gap-2 text-center md:w-24"
          >
            <span
              className={cn(
                "flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300",
                isActive
                  ? "bg-[#2D68F0] text-white shadow-md"
                  : "bg-[#E6EEFF] text-[#2D68F0]"
              )}
            >
              <Icon className="h-6 w-6" />
            </span>
            <span
              className={cn(
                "text-[11px] font-medium leading-tight transition-colors duration-300",
                isActive ? "text-[#2D68F0]" : "text-[#9aa3b2]"
              )}
            >
              {c.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function HealthcareCapabilitiesSection() {
  return (
    <section className="overflow-hidden rounded-b-[36px] bg-white py-8 pb-16 md:rounded-b-[42px] md:py-12 md:pb-24">
      {capabilities.map((capability) => {
        const isImageRight = capability.imageSide === "right";

        const textBlock = (
          <motion.div
            initial={{ opacity: 0, x: isImageRight ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-120px", amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <h3 className="max-w-md text-3xl font-semibold leading-tight text-[#011C57] md:text-4xl">
              {capability.heading}
            </h3>
            <ul className="mt-7 space-y-5">
              {capability.bullets.map((bullet) => (
                <li key={bullet.title} className="flex gap-3">
                  <span className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#888888]" />
                  <p className="text-[15px] leading-relaxed text-[#666]">
                    <span className="font-semibold text-[#222]">
                      {bullet.title}
                    </span>{" "}
                    {bullet.text}
                  </p>
                </li>
              ))}
            </ul>

            <CapabilityNav activeId={capability.id} />
          </motion.div>
        );

        const imageBlock = (
          <motion.div
            initial={{ opacity: 0, x: isImageRight ? 80 : -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-120px", amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "relative flex items-center",
              isImageRight ? "justify-start lg:-mr-24" : "justify-end lg:-ml-24"
            )}
          >
            <div className="relative aspect-4/3 w-full lg:scale-110">
              <Image
                src={capability.image}
                alt={capability.heading}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-contain object-center"
              />
            </div>
          </motion.div>
        );

        return (
          <div key={capability.id} className="py-12 md:py-16">
            <Container>
              <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
                {isImageRight ? (
                  <>
                    {textBlock}
                    {imageBlock}
                  </>
                ) : (
                  <>
                    {imageBlock}
                    {textBlock}
                  </>
                )}
              </div>
            </Container>
          </div>
        );
      })}
    </section>
  );
}
