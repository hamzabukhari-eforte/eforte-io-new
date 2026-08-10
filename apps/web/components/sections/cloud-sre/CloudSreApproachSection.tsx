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
  SiAnsible,
  SiDatadog,
  SiElastic,
  SiGithubactions,
  SiJenkins,
  SiKubernetes,
  SiNewrelic,
  SiPulumi,
  SiSplunk,
  SiTerraform,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
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

const toolIcons: Record<string, IconType> = {
  "Azure Resource Manager": VscAzure,
  Pulumi: SiPulumi,
  Terraform: SiTerraform,
  "AWS CloudFormation": SiTerraform,
  Ansible: SiAnsible,
  Jenkins: SiJenkins,
  "GitHub Actions": SiGithubactions,
  Elastic: SiElastic,
  Dynatrace: HiChartBar,
  Splunk: SiSplunk,
  Datadog: SiDatadog,
  "New Relic": SiNewrelic,
  Kubernetes: SiKubernetes,
  Istio: HiShieldCheck,
  checkov: HiShieldCheck,
  tfsec: HiShieldCheck,
};

function ToolMark({
  name,
  size = "md",
}: {
  name: string;
  size?: "sm" | "md" | "lg";
}) {
  const Icon = toolIcons[name];
  const iconClass =
    size === "lg"
      ? "h-10 w-10 shrink-0 md:h-12 md:w-12"
      : size === "sm"
        ? "h-5 w-5 shrink-0"
        : "h-6 w-6 shrink-0";
  const textClass =
    size === "lg"
      ? "text-lg font-semibold tracking-tight md:text-xl"
      : size === "sm"
        ? "text-xs font-semibold md:text-[13px]"
        : "text-[13px] font-semibold md:text-sm";

  return (
    <span className="inline-flex items-center gap-2 text-default md:gap-2.5">
      {Icon ? <Icon className={iconClass} /> : null}
      <span className={`${textClass} whitespace-nowrap`}>{name}</span>
    </span>
  );
}

function ToolsCard({ tools }: { tools: readonly string[] }) {
  const isSingle = tools.length === 1;
  const isTwoRows = tools.length >= 5;

  return (
    <div className="flex h-28 items-center justify-center rounded-2xl bg-white px-5 md:h-32 md:px-8">
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
      <div className="rounded-[36px] bg-black py-20 text-white md:rounded-[42px] md:py-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-20"
          >
            <h2 className="max-w-md text-3xl font-semibold leading-tight md:text-4xl lg:text-[48px]">
              Our approach to cloud engineering
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-white/75 lg:pt-2">
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
                      className="w-full cursor-pointer rounded-lg bg-[#1A1A1A] px-4 py-4 text-left md:px-5 md:py-5"
                      style={{ borderBottom: `2px solid ${CLOUD_SRE_ACCENT}` }}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[5px] text-white"
                          style={{ backgroundColor: CLOUD_SRE_ACCENT }}
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-base font-semibold leading-snug text-white md:text-lg">
                            {item.title}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-white/70 md:text-[15px]">
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
                    className="flex w-full cursor-pointer items-center gap-3 px-4 py-2.5 text-left text-[#8A8A8A] transition-colors hover:text-[#B0B0B0] md:px-5 md:py-3"
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="text-[15px] font-medium leading-snug md:text-base">
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
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={active.image}
                      alt={active.title}
                      fill
                      sizes="(max-width: 1024px) 90vw, 620px"
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
