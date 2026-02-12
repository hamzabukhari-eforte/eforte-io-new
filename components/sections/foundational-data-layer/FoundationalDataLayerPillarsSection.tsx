"use client";

import Container from "@/components/atoms/Container";
import Link from "next/link";
import { FaBolt, FaCube, FaDatabase } from "react-icons/fa";

const pillars = [
  {
    title: "AccelerateAI",
    description:
      "How eForte is shaping the future of next generation applications",
    href: "/#ai-pillars",
    icon: FaBolt,
  },
  {
    title: "Agentic Factory",
    description:
      "AI-Powered solutions tailored for industry-specific challenges",
    href: "/agentic-orchestration",
    icon: FaCube,
  },
  {
    title: "Data Foundation",
    description: "Establish the data foundation of a next generation business",
    href: "/foundational-data-layer",
    icon: FaDatabase,
  },
];

export default function FoundationalDataLayerPillarsSection() {
  return (
    <section
      id="pillars"
      className="py-24 bg-black relative"
      aria-labelledby="pillars-heading"
    >
      <Container>
        <div className="text-center mb-16">
          <h2
            id="pillars-heading"
            className="text-4xl font-medium mb-4 text-white"
          >
            3 core pillars to
            <br />
            eForte&apos;s approach
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            eForte&apos;s expertise empowers organizations to successfully adopt
            AI and transform key business functions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isMiddle = index === 1;
            return (
              <div
                key={pillar.title}
                className="bg-[#0a0a1a] border border-blue-900/30 rounded-2xl p-8 flex flex-col items-center text-center group hover:border-blue-500/50 transition-all relative overflow-hidden"
              >
                {isMiddle && (
                  <div className="absolute inset-0 bg-linear-to-t from-blue-900/10 to-transparent pointer-events-none" />
                )}
                <div className="w-16 h-16 rounded-full bg-blue-900/20 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform relative z-10">
                  <Icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white relative z-10">
                  {pillar.title}
                </h3>
                <p className="text-xs text-gray-400 mb-6 flex-1 relative z-10">
                  {pillar.description}
                </p>
                <Link
                  href={pillar.href}
                  className="px-6 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-gray-200 transition relative z-10"
                >
                  Learn more
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
