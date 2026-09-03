"use client";

import Container from "@/components/atoms/Container";
import {
  FaDatabase,
  FaCloudUploadAlt,
  FaShieldAlt,
  FaLayerGroup,
  FaComments,
  FaChartBar,
  FaMagic,
} from "react-icons/fa";

const databricksServices = [
  {
    title: "Data Governance",
    description:
      "Frameworks and tooling to ensure data quality, security, and compliance.",
    icon: FaDatabase,
    position: "center" as const,
  },
  {
    title: "Platform Migration",
    description:
      "Secure migration from legacy platforms to the Databricks Lakehouse.",
    icon: FaCloudUploadAlt,
    position: "top-left" as const,
  },
  {
    title: "Databricks Health Check",
    description:
      "Performance, cost, and architecture assessments to optimize your platform.",
    icon: FaShieldAlt,
    position: "top-right" as const,
  },
  {
    title: "Databricks Integration",
    description:
      "Seamless integration with your existing data and application ecosystems.",
    icon: FaLayerGroup,
    position: "left" as const,
  },
  {
    title: "Consulting & Advisory",
    description:
      "Strategic guidance across data, analytics, and AI initiatives.",
    icon: FaComments,
    position: "right" as const,
  },
  {
    title: "Advanced Analytics",
    description:
      "Scalable analytics and insights for data-driven decision-making.",
    icon: FaChartBar,
    position: "bottom-left" as const,
  },
  {
    title: "LLM & Agentic AI Solutions",
    description:
      "Build and deploy GenAI, RAG, and AI agent workflows on Databricks.",
    icon: FaMagic,
    position: "bottom-right" as const,
  },
];

const positionClasses: Record<string, string> = {
  center:
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20",
  "top-left": "top-[15%] left-[20%] z-10",
  "top-right": "top-[15%] right-[20%] z-10",
  left: "top-[45%] left-[3%] -translate-y-1/2 z-10",
  right: "top-[45%] right-[3%] -translate-y-1/2 z-10",
  "bottom-left": "bottom-[0%] left-[20%] z-10",
  "bottom-right": "bottom-[0%] right-[20%] z-10",
};

const cardBase =
  "w-24 h-24 rounded-[12px] bg-[#0F0F1A] border-2 border-[#2946CF] flex items-center justify-center text-blue-100 shadow-[0_0_20px_rgba(59,130,246,0.1),0_0_10px_rgba(233,30,99,0.03)] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3),0_0_15px_rgba(233,30,99,0.1)] group-hover:scale-110  group-hover:bg-[#1a1a2e] ";
const cardCenter =
  "w-24 h-24 rounded-[12px] bg-[#1a1a2e] border-2 border-[#2946CF] flex items-center justify-center text-white shadow-[0_0_30px_rgba(59,130,246,0.15),0_0_15px_rgba(233,30,99,0.05)] transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.4),0_0_20px_rgba(233,30,99,0.15)] group-hover:scale-110 group-hover:border-[#2946CF] group-hover:bg-[#232342] z-20 hover:border-[#E91E63]/20";

function ServiceCard({
  item,
  isCenter,
}: {
  item: (typeof databricksServices)[0];
  isCenter: boolean;
}) {
  const Icon = item.icon;
  return (
    <div
      className={`absolute ${positionClasses[item.position]} flex flex-col items-center group cursor-pointer`}
    >
      <div className={isCenter ? cardCenter : cardBase}>
        <Icon className={isCenter ? "text-5xl" : "text-[2.75rem]"} />
      </div>
      <span className="mt-4 text-sm font-medium text-white text-center max-w-[140px]">
        {item.title}
      </span>
      <p className="mt-2 text-xs text-white text-center max-w-[180px] leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}

export default function FoundationalDataLayerDatabricksServicesSection() {
  return (
    <section
      id="databricks-services"
      className="pt-16 bg-black relative overflow-hidden"
      aria-labelledby="databricks-services-heading"
    >
      <Container className="relative z-10">
        <div className="text-center mb-12">
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-primary-pink">
            DATABRICKS
          </p>
          <h2
            id="databricks-services-heading"
            className="mb-6 text-[48px] font-medium tracking-tight text-white"
          >
            Our Databricks Expertise
          </h2>
          <p className="text-base text-white max-w-2xl mx-auto font-light leading-relaxed">
            eForte&apos;s Data Studio and AI Studio have partnered with Databricks
            for over five years, working closely with organizations to unlock the
            full potential of the Lakehouse Platform. Our teams help industry
            leaders achieve measurable business outcomes through scalable data,
            analytics, and AI solutions.
          </p>
        </div>

        {/* Desktop: positioned layout matching HTML (h-[750px], absolute items) */}
        <div className="relative w-full max-w-6xl mx-auto h-[750px] hidden md:block">
          {databricksServices.map((item) => (
            <ServiceCard
              key={item.title}
              item={item}
              isCenter={item.position === "center"}
            />
          ))}
        </div>

        {/* Mobile: simple grid */}
        <div className="grid grid-cols-1 gap-10 md:hidden mt-12">
          {databricksServices.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-[12px] bg-[#0F0F1A] border-2 border-[#2946CF] flex items-center justify-center text-blue-100 mb-3 transition-all group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3),0_0_10px_rgba(233,30,99,0.1)] hover:border-[#E91E63]/15">
                  <Icon className="text-3xl" />
                </div>
                <span className="text-sm font-medium text-white mb-2">
                  {item.title}
                </span>
                <p className="text-xs text-white text-center max-w-[250px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
