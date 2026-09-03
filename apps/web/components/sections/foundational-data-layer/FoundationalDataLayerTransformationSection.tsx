"use client";

import Container from "@/components/atoms/Container";

const items = [
  {
    label: "AGENTIC AI & GEN AI",
    title:
      "Specialized AI teams work alongside domain experts to design and deploy industry-specific AI agents and GenAI solutions. By combining deep sector knowledge with advanced data and AI capabilities, these agents drive efficiency, innovation, and sustained competitive advantage.",
  },
  {
    label: "DATA ENGINEERING WITH VELOCITY AI",
    title:
      "Accelerate digital delivery with a security-first, AI-augmented engineering approach. The Velocity AI framework brings together proven best practices, workflows, and methodologies to improve speed and quality, supported by a rigorously vetted toolset for secure, scalable AI-driven development.",
  },
  {
    label: "DATA FOUNDATION LAYER",
    title:
      "Build the data backbone required for AI-driven transformation. eForte's Foundational Data Layer focuses on creating robust, scalable, and secure data ecosystems. From data ingestion and processing to governance and compliance, we ensure your data is ready to power impactful AI and analytics.",
  },
];

export default function FoundationalDataLayerTransformationSection() {
  return (
    <section
      id="transformation"
      className="pt-16 relative overflow-hidden bg-black"
      aria-labelledby="transformation-heading"
    >
      <div className="absolute inset-0 z-0" aria-hidden>
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#E91E63] opacity-[0.08] blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-[#E91E63] opacity-[0.05] blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute top-[15%] left-[10%] w-1 h-1 bg-[#E91E63] rounded-full opacity-40 animate-pulse" />
        <div className="absolute top-[35%] right-[15%] w-1 h-1 bg-[#E91E63] rounded-full opacity-30 animate-pulse" />
        <div className="absolute bottom-[25%] left-[20%] w-1 h-1 bg-[#E91E63] rounded-full opacity-35 animate-pulse" />
      </div>

      <Container className="relative z-20">
        <div className="flex flex-col md:flex-row gap-20 items-start">
          <div className="md:w-1/3 md:sticky md:top-32">
            <h2
              id="transformation-heading"
              className="text-4xl font-medium leading-tight mb-6 text-white drop-shadow-lg"
            >
              From data governance to Agentic AI
            </h2>
            <p className="text-white text-sm leading-relaxed">
              eForte is an end-to-end data & AI transformation partner, helping
              organizations move from trusted data foundations to intelligent,
              autonomous systems.
            </p>
          </div>
          <div className="md:w-2/3 space-y-8">
            {items.map((item) => (
              <div
                key={item.label}
                className="group relative rounded-[12px] transition-all duration-300 hover:bg-white/5 hover:shadow-[0_0_30px_-5px_rgba(233,30,99,0.15)] border border-transparent hover:border-[#E91E63]/20 p-8 -ml-8"
              >
                <div className="absolute left-0 top-8 bottom-8 w-px bg-gray-800 group-hover:bg-[#E91E63] transition-colors duration-300" />
                <div className="flex flex-col md:flex-row gap-8 pl-4">
                  <div className="flex-1">
                    <div className="text-xs font-bold text-white mb-2 uppercase tracking-wider group-hover:text-[#E91E63] transition-colors">
                      {item.label}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-white transition-colors">
                      <span className="text-blue-500 mr-2 group-hover:text-[#E91E63] transition-colors duration-300">●</span>
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-[#E91E63] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
