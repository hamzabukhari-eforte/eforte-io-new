"use client";

import Image from "next/image";
import type { IconType } from "react-icons";
import {
  SiAmazonwebservices,
  SiAnthropic,
  SiDatabricks,
  SiFigma,
  SiLangchain,
  SiNvidia,
} from "react-icons/si";
import { cn } from "@/lib/utils";

const iconClass = "h-7 w-auto text-white/80 transition-colors group-hover:text-white md:h-8";

const partnerLogos: {
  id: string;
  name: string;
  Icon?: IconType;
  src?: string;
  iconClassName?: string;
}[] = [
  { id: "databricks", name: "Databricks", Icon: SiDatabricks },
  {
    id: "aws",
    name: "AWS",
    Icon: SiAmazonwebservices,
    iconClassName: "h-8 w-auto text-[2.25rem] text-white/80 transition-colors group-hover:text-white md:h-9 md:text-[2.75rem]",
  },
  {
    id: "azure",
    name: "Azure",
    src: "/assets/images/capabilities/providers/azure.svg",
  },
  { id: "figma", name: "Figma", Icon: SiFigma },
  { id: "anthropic", name: "Anthropic", Icon: SiAnthropic },
  { id: "langgraph", name: "LangGraph", Icon: SiLangchain },
  { id: "nvidia", name: "NVIDIA", Icon: SiNvidia },
];

interface PartnerLogosRowProps {
  heading?: string;
  className?: string;
}

export default function PartnerLogosRow({ heading, className }: PartnerLogosRowProps) {
  return (
    <div className={cn("mx-auto mt-12 w-full max-w-6xl md:mt-16", className)}>
      {heading && (
        <h2 className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary-pink">
          {heading}
        </h2>
      )}
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 pb-6 md:gap-x-10">
        {partnerLogos.map((item) => (
          <div
            key={item.id}
            className="group relative flex h-9 items-center justify-center transition-transform duration-300 hover:-translate-y-0.5"
          >
            {item.src ? (
              <Image
                src={item.src}
                alt={item.name}
                width={120}
                height={32}
                className="h-7 w-auto object-contain opacity-80 brightness-0 invert transition-opacity group-hover:opacity-100 md:h-8"
              />
            ) : (
              item.Icon && (
                <item.Icon
                  aria-label={item.name}
                  className={item.iconClassName ?? iconClass}
                />
              )
            )}
            <span className="pointer-events-none absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/80 px-3 py-1 text-xs font-medium tracking-wide text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
