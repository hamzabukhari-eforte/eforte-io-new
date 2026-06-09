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
    label: "Digital Patient",
    icon: HiOutlineIdentification,
    heading: "Digital patient interaction & engagement",
    bullets: [
      {
        title: "Digital patient experiences.",
        text: "Develop interfaces and platforms that improve and transform patient experiences across the digital touchpoints that people use to engage with healthcare providers.",
      },
      {
        title: "Patient engagement platforms.",
        text: "Build platforms that significantly enhance patient engagement - such as with easy access to medical records and personalized health messaging.",
      },
      {
        title: "Patient relationship management.",
        text: "Create and implement CRM-like systems tailored for healthcare to manage, analyze, and improve patient interactions.",
      },
      {
        title: "Health design thinking and accessibility.",
        text: "Adopt health design thinking and accessibility frameworks to create patient-centric digital healthcare solutions.",
      },
    ],
    image: "/assets/images/case-study/krank-banner.png",
    imageSide: "right",
  },
  {
    id: "mhealth",
    label: "mHealth & Wearables",
    icon: HiOutlineDeviceMobile,
    heading: "mHealth & wearable tech",
    bullets: [
      {
        title: "Mobile health applications/ mHealth.",
        text: "Create mobile apps that bring health-related services directly to people's smartphones.",
      },
      {
        title: "iOS & Android frameworks for health data.",
        text: "Utilize mobile development frameworks, in particular Apple Health and Google Fit.",
      },
      {
        title: "Cutting-edge wearables.",
        text: "Build wearables that offer in-depth health metrics and data powered by BLE, WiFi, or NFC.",
      },
    ],
    image: "/assets/images/case-study/oddysee-banner.png",
    imageSide: "left",
  },
  {
    id: "virtual-care",
    label: "Virtual Care",
    icon: HiOutlineVideoCamera,
    heading: "Virtual care platforms & remote care",
    bullets: [
      {
        title: "Telehealth applications.",
        text: "Enable medical professionals to provide top-notch remote services and seamlessly transition to virtual care.",
      },
      {
        title: "Remote video & audio applications.",
        text: "Utilize advanced tools and technologies that make virtual patient visits a reality and ensure clear, uninterrupted communication between physicians and patients.",
      },
      {
        title: "Medication management.",
        text: "Leverage tools and platforms that streamline the tracking and management of medication - to improve accuracy and efficiency of medication administration.",
      },
    ],
    image: "/assets/images/case-study/invesment-banner.png",
    imageSide: "right",
  },
  {
    id: "genai-data",
    label: "GenAI & Data",
    icon: HiOutlineChartSquareBar,
    heading: "GenAI & data",
    bullets: [
      {
        title: "GenAI.",
        text: "Our experts are working with GenAI in areas ranging from data analysis to patient care, as well as in various other highly regulated industries such as finance.",
      },
      {
        title: "Data and AI services in accordance with HIPAA.",
        text: "Benefit from our comprehensive solutions in data governance, ingestion, storage, ETL, machine learning, and AI services.",
      },
      {
        title: "EHR and PHI data.",
        text: "Ensure the secure handling, storage, and transmission of Electronic Health Records (EHRs) and Protected Health Information (PHI) data.",
      },
    ],
    image: "/assets/images/case-study/prism-banner.png",
    imageSide: "left",
  },
  {
    id: "integration",
    label: "Integration & Interoperability",
    icon: HiOutlineViewGridAdd,
    heading: "Integration & interoperability",
    bullets: [
      {
        title: "Medical device integration.",
        text: "Enable the smooth integration of medical devices with Electronic Health Records (EHRs) and other platforms.",
      },
      {
        title: "Remote patient monitoring (RPM) integrations.",
        text: "Implement systems that integrate remote patient monitoring data with other healthcare systems, and drive improved patient outcomes.",
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
