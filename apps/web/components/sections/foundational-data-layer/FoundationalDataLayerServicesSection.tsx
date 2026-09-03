"use client";

import Container from "@/components/atoms/Container";
import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  FaLayerGroup,
  FaCodeBranch,
  FaShieldAlt,
  FaLock,
  FaChartLine,
  FaCloudUploadAlt,
  FaMagic,
  FaEye,
  FaBrain,
} from "react-icons/fa";

const accents = [
  { color: "#22C55E", glow: "rgba(34, 197, 94, 0.4)" },
  { color: "#F97316", glow: "rgba(249, 115, 22, 0.4)" },
  { color: "#EAB308", glow: "rgba(234, 179, 8, 0.4)" },
  { color: "#0EA5E9", glow: "rgba(14, 165, 233, 0.4)" },
] as const;

const services: { title: string; description: string; icon: IconType }[] = [
  {
    title: "Data Platform Development",
    description:
      "Design and implement modern data platforms (e.g., Databricks) that enable large-scale data processing and advanced analytics.",
    icon: FaLayerGroup,
  },
  {
    title: "Data Engineering and ETL Services",
    description:
      "Build and maintain resilient ETL/ELT pipelines to ensure efficient, scalable data ingestion and transformation.",
    icon: FaCodeBranch,
  },
  {
    title: "Data Quality and Governance",
    description:
      "Establish frameworks, processes, and tooling to ensure data accuracy, consistency, and reliability across the enterprise.",
    icon: FaShieldAlt,
  },
  {
    title: "Data Security and Compliance",
    description:
      "Implement security controls, encryption strategies, and compliance programs aligned with GDPR, HIPAA, CCPA, and other regulatory standards.",
    icon: FaLock,
  },
  {
    title: "Data Analytics and Visualization",
    description:
      "Deliver intuitive dashboards and reporting solutions that convert raw data into clear, actionable insights for decision-makers.",
    icon: FaChartLine,
  },
  {
    title: "Data Migration Services",
    description:
      "Plan and execute seamless migrations from legacy systems to modern, cloud-based data platforms with minimal disruption.",
    icon: FaCloudUploadAlt,
  },
  {
    title: "Generative AI Solutions",
    description:
      "Leverage GPT and leading generative models to create personalized content, high-quality visuals, and automated workflows for complex business tasks.",
    icon: FaMagic,
  },
  {
    title: "Computer Vision",
    description:
      "Unlock insights from images and video using advanced computer vision techniques for detection, recognition, and tracking.",
    icon: FaEye,
  },
  {
    title: "Machine Learning product development and deployment",
    description:
      "Deliver end-to-end ML solutions—from model design and training to validation, deployment, and ongoing optimization in production.",
    icon: FaBrain,
  },
];

function ServiceCard({
  title,
  description,
  icon: Icon,
  accentColor,
  accentGlow,
}: {
  title: string;
  description: string;
  icon: IconType;
  accentColor: string;
  accentGlow: string;
}) {
  return (
    <div
      className="group relative h-full overflow-hidden rounded-[12px] border bg-default/95 p-6 transition-all duration-300 ease-out md:p-8"
      style={{ borderColor: "rgba(255,255,255,0.08)" } as CSSProperties}
      onMouseEnter={(event) => {
        event.currentTarget.style.borderColor = accentColor;
        event.currentTarget.style.boxShadow = `0 0 24px ${accentGlow}`;
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        event.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      >
        <div
          className="absolute right-0 bottom-0 h-full w-full min-h-[60vh] min-w-[50vw]"
          style={{
            background: `radial-gradient(ellipse 90% 90% at 100% 100%, ${accentGlow} 0%, transparent 50%)`,
          }}
        />
        <div className="absolute -right-10 -bottom-5 flex items-end justify-end p-0">
          <div className="origin-bottom-right -mr-2 -mb-2 scale-[4] opacity-20">
            <Icon size={32} color={accentColor} />
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="mb-4 transition-transform duration-300 group-hover:scale-105">
          <Icon size={32} color={accentColor} />
        </div>
        <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 md:text-2xl">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-white transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function FoundationalDataLayerServicesSection() {
  return (
    <section id="services" className="relative bg-black pt-16" aria-labelledby="services-heading">
      <Container>
        <div className="mb-12 flex flex-col items-start justify-between md:flex-row">
          <div>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-primary-pink">
              OUR SERVICES
            </p>
            <h2
              id="services-heading"
              className="text-[48px] font-medium leading-[1.1] text-white"
            >
              End-to-End Data &<br /> AI Services
            </h2>
          </div>
          <p className="mt-8 max-w-2xl text-[18px] font-light leading-relaxed text-white md:mt-12">
            With over 20 years of experience, eForte delivers comprehensive data
            and AI services that help organizations build trusted data foundations
            and turn intelligence into action.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => {
            const accent = accents[index % accents.length];
            return (
              <ServiceCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
                accentColor={accent.color}
                accentGlow={accent.glow}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
