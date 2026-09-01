"use client";

import Image from "next/image";
import { motion } from "@/lib/replayMotion";
import {
  HiOutlineClock,
  HiOutlineChatBubbleOvalLeft,
  HiOutlineBolt,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import type { IconType } from "react-icons";
import Container from "@/components/atoms/Container";

type Advantage = {
  icon: IconType;
  iconColor: string;
  iconBg: string;
  title: string;
  text: string;
};

const advantages: Advantage[] = [
  {
    icon: HiOutlineClock,
    iconColor: "text-[#1FA971]",
    iconBg: "bg-[#1FA971]/10",
    title: "Real-time collaboration.",
    text: "A minimal time zone difference means seamless communication and efficient project management.",
  },
  {
    icon: HiOutlineChatBubbleOvalLeft,
    iconColor: "text-[#2D9BF0]",
    iconBg: "bg-[#2D9BF0]/10",
    title: "Cultural alignment.",
    text: "Shared cultural understanding and fluent English communication ensure smooth collaboration.",
  },
  {
    icon: HiOutlineBolt,
    iconColor: "text-[#E0A516]",
    iconBg: "bg-[#E0A516]/10",
    title: "Faster time-to-market.",
    text: "Streamlined workflows and efficient communication accelerate development cycles, enabling you to launch products sooner.",
  },
  {
    icon: HiOutlineCog6Tooth,
    iconColor: "text-primary-pink",
    iconBg: "bg-primary-pink/10",
    title: "Access to specialized skills.",
    text: "Tap into a diverse talent pool with expertise in both core and niche embedded technologies.",
  },
];

export default function EmbeddedEngineeringNearshoreSection() {
  return (
    <section className="relative overflow-hidden bg-default py-16 text-white md:py-24">
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[56%] lg:block">
        <Image
          src="/assets/images/industry/map.png"
          alt=""
          fill
          sizes="56vw"
          className="object-contain object-top"
          aria-hidden
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-xl lg:max-w-[48%]">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70">
              Collaboration
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              The nearshore advantage
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/65">
              eForte&apos;s nearshore Embedded Engineering Studio offers a
              compelling blend of expertise, cost-effectiveness, and convenient
              collaboration for North American technology leaders.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-white/65">
              We provide risk mitigation from geographic, political, and services
              supply chain risks by being located in stable and predictable
              geographic locations.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {advantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-80px", amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-[12px] bg-white p-6 text-default shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-[12px] ${item.iconBg}`}
                  >
                    <Icon className={`h-5 w-5 ${item.iconColor}`} />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-default">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#666]">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mt-20 grid items-center gap-8 md:mt-28 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-12"
        >
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70">
              Security
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl">
              A multi-layered approach to your security.
            </h2>
          </div>

          <div className="flex items-center justify-center gap-8 md:gap-10">
            {[
              { src: "/assets/images/landing/soc.png", alt: "SOC 2 Type 2 certified" },
              { src: "/assets/images/landing/iso.png", alt: "ISO 27001 certified" },
              { src: "/assets/images/landing/nist.png", alt: "NIST AI compliant" },
            ].map((badge) => (
              <div key={badge.src} className="relative h-16 w-16 md:h-20 md:w-20">
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          <div>
            <p className="text-base font-semibold text-white">
              Our Certifications
            </p>
            <p className="mt-2 max-w-md text-[14px] leading-relaxed text-white/60">
              We are ISO 27001 and SOC2 Type 2 certified. We are also compliant
              with the NIST AI Risk Management Framework demonstrating strong
              governance, risk management, and transparency in the design and
              deployment of AI systems.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
