"use client";

import Container from "@/components/atoms/Container";
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

const services = [
  {
    title: "Data Platform Development",
    description:
      "Design and implement modern data platforms (e.g., Databricks) that enable large-scale data processing and advanced analytics.",
    icon: FaLayerGroup,
    iconBg: "bg-[#1E2336]",
    iconColor: "text-[#8BA1F8]",
  },
  {
    title: "Data Engineering and ETL Services",
    description:
      "Build and maintain resilient ETL/ELT pipelines to ensure efficient, scalable data ingestion and transformation.",
    icon: FaCodeBranch,
    iconBg: "bg-[#251E33]",
    iconColor: "text-[#A78BFA]",
  },
  {
    title: "Data Quality and Governance",
    description:
      "Establish frameworks, processes, and tooling to ensure data accuracy, consistency, and reliability across the enterprise.",
    icon: FaShieldAlt,
    iconBg: "bg-[#162D23]",
    iconColor: "text-[#4ADE80]",
  },
  {
    title: "Data Security and Compliance",
    description:
      "Implement security controls, encryption strategies, and compliance programs aligned with GDPR, HIPAA, CCPA, and other regulatory standards.",
    icon: FaLock,
    iconBg: "bg-[#331E1E]",
    iconColor: "text-[#F87171]",
  },
  {
    title: "Data Analytics and Visualization",
    description:
      "Deliver intuitive dashboards and reporting solutions that convert raw data into clear, actionable insights for decision-makers.",
    icon: FaChartLine,
    iconBg: "bg-[#332516]",
    iconColor: "text-[#FB923C]",
  },
  {
    title: "Data Migration Services",
    description:
      "Plan and execute seamless migrations from legacy systems to modern, cloud-based data platforms with minimal disruption.",
    icon: FaCloudUploadAlt,
    iconBg: "bg-[#132E2E]",
    iconColor: "text-[#2DD4BF]",
  },
  {
    title: "Generative AI Solutions",
    description:
      "Leverage GPT and leading generative models to create personalized content, high-quality visuals, and automated workflows for complex business tasks.",
    icon: FaMagic,
    iconBg: "bg-[#331E29]",
    iconColor: "text-[#F472B6]",
  },
  {
    title: "Computer Vision",
    description:
      "Unlock insights from images and video using advanced computer vision techniques for detection, recognition, and tracking.",
    icon: FaEye,
    iconBg: "bg-[#1E2336]",
    iconColor: "text-[#8BA1F8]",
  },
  {
    title: "Machine Learning product development and deployment",
    description:
      "Deliver end-to-end ML solutions—from model design and training to validation, deployment, and ongoing optimization in production.",
    icon: FaBrain,
    iconBg: "bg-[#332D16]",
    iconColor: "text-[#FACC15]",
  },
];

export default function FoundationalDataLayerServicesSection() {
  return (
    <section id="services" className="py-24 relative bg-black" aria-labelledby="services-heading">
      <Container>
        {/* Header: left block + right paragraph - match HTML flex justify-between */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <div>
            <div className="inline-block px-4 py-2 rounded-full border border-gray-700 mb-8">
              <span className="text-[11px] font-bold tracking-widest text-white uppercase block">
                OUR SERVICES
              </span>
            </div>
            <h2
              id="services-heading"
              className="text-5xl md:text-[56px] font-medium text-white leading-[1.1]"
            >
              End-to-End Data &<br /> AI Services
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm mt-8 md:mt-24 text-lg font-light leading-relaxed">
            With over 20 years of experience, eForte delivers comprehensive data
            and AI services that help organizations build trusted data foundations
            and turn intelligence into action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative bg-[#0B0B15] border border-white/5 rounded-3xl p-10 h-[420px] flex flex-col justify-center overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_50px_-10px_rgba(59,130,246,0.25)] hover:bg-[#0F0F1F] hover:scale-[1.02]"
              >
                <div
                  className="absolute top-0 right-0 w-[350px] h-[350px] bg-blue-900/30 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  aria-hidden
                />
                <div
                  className={`w-20 h-20 relative mb-8 flex items-center justify-center ${item.iconBg} rounded-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_10px_20px_-5px_rgba(59,130,246,0.3)]`}
                >
                  <Icon className={`text-3xl ${item.iconColor} transition-transform duration-500 group-hover:scale-110`} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-medium text-white mb-3 group-hover:text-blue-50 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
