"use client";

import {
  FaLayerGroup,
  FaMicrosoft,
  FaProjectDiagram,
  FaSitemap,
} from "react-icons/fa";
import { SiAmazon, SiNvidia } from "react-icons/si";

const partnerLogos: {
  id: string;
  icon: React.ReactNode;
  label: string | null;
  isTextOnly?: boolean;
}[] = [
  { id: "databricks", icon: <FaLayerGroup className="text-2xl text-white/80" />, label: "databricks" },
  { id: "aws", icon: <SiAmazon className="text-3xl text-white/80" />, label: null },
  { id: "azure", icon: <FaMicrosoft className="text-2xl text-white/80" />, label: "Azure" },
  { id: "pilot", icon: <FaSitemap className="text-2xl text-white/80" />, label: null },
  { id: "anthropic", icon: null, label: "ANTHROPIC", isTextOnly: true },
  { id: "langgraph", icon: <FaProjectDiagram className="text-xl text-white/80" />, label: "LangGraph" },
  { id: "nvidia", icon: <SiNvidia className="text-2xl text-white/80" />, label: "Nvidia" },
];

export default function PartnerLogosRow() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-12 md:mt-16">
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
        {partnerLogos.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 group cursor-default transition-transform duration-300 hover:-translate-y-0.5"
          >
            {item.isTextOnly ? (
              <span className="text-xs md:text-base font-bold text-white/80 group-hover:text-white tracking-widest uppercase">
                {item.label}
              </span>
            ) : (
              <>
                {item.icon}
                {item.label && (
                  <span className="text-xs md:text-base font-semibold text-white/80 group-hover:text-white tracking-tight">
                    {item.label}
                  </span>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
