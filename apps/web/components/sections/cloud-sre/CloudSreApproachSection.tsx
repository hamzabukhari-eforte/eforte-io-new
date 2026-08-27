"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiTerminal,
  HiCog,
  HiChartBar,
  HiArrowsExpand,
  HiShieldCheck,
} from "react-icons/hi";
import {
  SiAmazonwebservices,
  SiAnsible,
  SiDatadog,
  SiDynatrace,
  SiElastic,
  SiGithubactions,
  SiIstio,
  SiJenkins,
  SiKubernetes,
  SiNewrelic,
  SiOwasp,
  SiPulumi,
  SiSplunk,
  SiTerraform,
  SiTrivy,
} from "react-icons/si";
import type { IconType } from "react-icons";
import Container from "@/components/atoms/Container";
import {
  CLOUD_SRE_ACCENT,
  cloudSrePrinciples,
} from "@/data/capabilities/cloudSre";

const tabIcons: Record<(typeof cloudSrePrinciples)[number]["id"], IconType> = {
  iac: HiTerminal,
  automation: HiCog,
  monitoring: HiChartBar,
  scalability: HiArrowsExpand,
  security: HiShieldCheck,
};

type ToolVisual =
  | { kind: "icon"; Icon: IconType }
  | { kind: "image"; src: string; alt: string };

const toolVisuals: Record<string, ToolVisual> = {
  "Azure Resource Manager": {
    kind: "image",
    src: "/assets/images/capabilities/providers/azure.svg",
    alt: "Microsoft Azure",
  },
  Pulumi: { kind: "icon", Icon: SiPulumi },
  Terraform: { kind: "icon", Icon: SiTerraform },
  "AWS CloudFormation": { kind: "icon", Icon: SiAmazonwebservices },
  Ansible: { kind: "icon", Icon: SiAnsible },
  Jenkins: { kind: "icon", Icon: SiJenkins },
  "GitHub Actions": { kind: "icon", Icon: SiGithubactions },
  Elastic: { kind: "icon", Icon: SiElastic },
  Dynatrace: { kind: "icon", Icon: SiDynatrace },
  Splunk: { kind: "icon", Icon: SiSplunk },
  Datadog: { kind: "icon", Icon: SiDatadog },
  "New Relic": { kind: "icon", Icon: SiNewrelic },
  Kubernetes: { kind: "icon", Icon: SiKubernetes },
  Istio: { kind: "icon", Icon: SiIstio },
  checkov: { kind: "icon", Icon: SiOwasp },
  tfsec: { kind: "icon", Icon: SiTrivy },
};

function ToolMark({
  name,
  size = "md",
}: {
  name: string;
  size?: "sm" | "md" | "lg";
}) {
  const visual = toolVisuals[name];
  const iconClass =
    size === "lg"
      ? "h-10 w-10 shrink-0 md:h-12 md:w-12"
      : size === "sm"
        ? "h-5 w-5 shrink-0"
        : "h-6 w-6 shrink-0";
  const imageClass =
    size === "lg"
      ? "h-10 w-auto shrink-0 md:h-12"
      : size === "sm"
        ? "h-5 w-auto shrink-0"
        : "h-6 w-auto shrink-0";
  const textClass =
    size === "lg"
      ? "text-lg font-semibold tracking-tight md:text-xl"
      : size === "sm"
        ? "text-xs font-semibold md:text-[13px]"
        : "text-[13px] font-semibold md:text-sm";

  return (
    <span className="inline-flex items-center gap-2 text-default md:gap-2.5">
      {visual?.kind === "icon" ? (
        <visual.Icon className={iconClass} aria-hidden />
      ) : visual?.kind === "image" ? (
        <Image
          src={visual.src}
          alt={visual.alt}
          width={48}
          height={48}
          className={imageClass}
        />
      ) : null}
      <span className={`${textClass} whitespace-nowrap`}>{name}</span>
    </span>
  );
}

function ToolsCard({ tools }: { tools: readonly string[] }) {
  const isSingle = tools.length === 1;
  const isTwoRows = tools.length >= 5;

  return (
    <div className="flex h-28 items-center justify-center rounded-[12px] bg-white px-5 md:h-32 md:px-8">
      {isSingle ? (
        <ToolMark name={tools[0]} size="lg" />
      ) : isTwoRows ? (
        <div className="flex w-full flex-col items-center justify-center gap-3 md:gap-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:gap-x-10">
            {tools.slice(0, 3).map((tool) => (
              <ToolMark key={tool} name={tool} size="sm" />
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:gap-x-10">
            {tools.slice(3).map((tool) => (
              <ToolMark key={tool} name={tool} size="sm" />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-10">
          {tools.map((tool) => (
            <ToolMark key={tool} name={tool} size="md" />
          ))}
        </div>
      )}
    </div>
  );
}

export default function CloudSreApproachSection() {
  const [activeId, setActiveId] =
    useState<(typeof cloudSrePrinciples)[number]["id"]>(
      cloudSrePrinciples[0].id
    );
  const active =
    cloudSrePrinciples.find((item) => item.id === activeId) ??
    cloudSrePrinciples[0];

  return (
    <section className="bg-default">
      <div className="rounded-[12px] bg-black py-16 text-white md:rounded-[12px]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-20"
          >
            <h2 className="max-w-md text-[36px] font-semibold leading-tight">
              Our approach to cloud engineering
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-white lg:pt-2">
              We embrace 5 key principles as part of our cloud engineering
              philosophy, centered around agility, resilience, automation,
              scalability, and best-in-class security.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch lg:gap-16 xl:gap-20">
            <div className="flex h-full flex-col justify-between gap-1 lg:min-h-0">
              {cloudSrePrinciples.map((item) => {
                const Icon = tabIcons[item.id];
                const isActive = item.id === active.id;

                if (isActive) {
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveId(item.id)}
                      className="w-full cursor-pointer rounded-[12px] bg-[#1A1A1A] px-4 py-4 text-left md:px-5 md:py-5"
                      style={{ borderBottom: `2px solid ${CLOUD_SRE_ACCENT}` }}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[12px] text-white"
                          style={{ backgroundColor: CLOUD_SRE_ACCENT }}
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-[20px] font-semibold leading-snug text-white">
                            {item.title}
                          </p>
                          <p className="mt-2 text-[16px] leading-relaxed text-white">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                }

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className="flex w-full cursor-pointer items-center gap-3 px-4 py-2.5 text-left text-white transition-colors hover:text-white md:px-5 md:py-3"
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="text-[20px] font-medium leading-snug">
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex h-full flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28 }}
                  className="flex flex-col gap-4"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[12px]">
                    <Image
                      src={active.image}
                      alt={active.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, (max-width: 1400px) 55vw, 800px"
                      quality={90}
                      className="object-cover"
                    />
                  </div>
                  <ToolsCard tools={active.tools} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
