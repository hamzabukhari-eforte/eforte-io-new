"use client";

import Link from "next/link";
import Container from "@/components/atoms/Container";
import { cloudSreSplitCards } from "@/data/capabilities/cloudSre";
import { motion } from "@/lib/replayMotion";

function CloudSreIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 107 76.3"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M104.5,35.2c-1-2.5-2.5-4.7-4.4-6.6c-0.5-0.5-1.1-1-1.7-1.5c6.9-9,9.4-16.9,6.2-21.9c-4-6.3-15.9-6.6-32.7-0.7c-1.5,0.5-3,1.1-4.5,1.7c-0.2,0.1-0.3,0.2-0.4,0.4c-2.8-1.5-5.9-2.5-9-2.8c-5.4-0.5-11,0.8-15.5,3.8c-4.4,2.9-7.7,7.1-9.4,12c-0.1,0-0.3,0-0.4,0c-5.8,0-11.3,2.3-15.5,6.4c-4.1,4.1-6.4,9.6-6.4,15.5c0,1.3,0.1,2.6,0.4,3.9C1,56.5-2.1,64.8,1.7,70.7c2.1,3.2,6.3,4.9,12.2,4.9c3.3,0,7.2-0.5,11.5-1.5c8.3-2,17.6-5.7,27.2-10.7h33.1c2.7,0,5.3-0.5,7.8-1.5c2.5-1,4.7-2.5,6.6-4.4c1.9-1.9,3.4-4.1,4.4-6.6c1-2.5,1.5-5.1,1.5-7.8C106,40.3,105.5,37.7,104.5,35.2z M72.6,6.4C88,1,99.6,1,103,6.3c2.7,4.3,0.1,11.5-6.2,19.7c-1-0.7-2.1-1.3-3.3-1.7c-2.5-1-5.1-1.5-7.8-1.5c-2.2,0-4.4,0.3-6.4,1c-0.8-5-3.2-9.6-6.8-13.1c-1.1-1.1-2.2-2-3.5-2.8C70.2,7.3,71.4,6.8,72.6,6.4z M18.6,27.4c3.8-3.8,8.7-5.8,14-5.8c0,0,0,0,0.1,0c0.3,0,0.7,0,1,0c0.5,0,0.9-0.3,1-0.7c1.5-4.8,4.7-8.9,8.9-11.7c4.2-2.8,9.2-4,14.2-3.5c5,0.5,9.7,2.7,13.3,6.2c3.6,3.5,5.8,8.2,6.4,13.2c0,0.3,0.2,0.6,0.5,0.7c0.3,0.2,0.6,0.2,0.9,0.1c2.2-0.9,4.5-1.3,6.8-1.3c2.4,0,4.8,0.5,7.1,1.4c1,0.4,1.9,0.9,2.8,1.5C88.3,36.3,77.1,46,63.7,54.6c-3.9,2.5-7.8,4.7-11.6,6.8H32.6c-5.3,0-10.3-2.1-14-5.8c-3.8-3.8-5.8-8.7-5.8-14C12.7,36.2,14.8,31.2,18.6,27.4z M25,72.1C13.9,74.8,6,73.9,3.3,69.6c-3.1-4.9-0.4-12,8.3-21.9c1,3.4,2.9,6.6,5.5,9.2c4.1,4.1,9.6,6.4,15.5,6.4h15.6C40,67.4,32.1,70.4,25,72.1z M102.6,50c-0.9,2.2-2.3,4.2-4,5.9c-1.7,1.7-3.7,3-5.9,4c-2.2,0.9-4.6,1.4-7,1.4H56.3c2.8-1.6,5.7-3.3,8.5-5.1C78.7,47.4,90,37.6,97.2,28.7c0.5,0.4,1,0.8,1.5,1.3c1.7,1.7,3,3.7,4,5.9c0.9,2.2,1.4,4.6,1.4,7C104,45.4,103.6,47.8,102.6,50z" />
    </svg>
  );
}

function CybersecurityIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 75"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M98.5,8.3c-3.8-5.9-15-6.2-30.8-0.7c-1.4,0.5-2.8,1-4.2,1.6c-0.3,0.1-0.5,0.4-0.6,0.7c-5.2-1.5-10.1-4.1-15.2-8.8c-0.4-0.3-1-0.3-1.3,0c-9.7,8.9-18.8,10.2-29.8,11.1c-0.5,0-0.9,0.5-0.9,1c0,9.6,1,17.8,2.7,24.6c-0.2,0-0.4,0.1-0.5,0.2C3.4,51.2-2.6,63.1,1.6,69.7c2,3.1,6.1,4.6,11.6,4.6c6.3,0,14.4-1.9,23.4-5.5c5.4,4.2,9.8,5.4,10.1,5.4c0.1,0,0.2,0,0.2,0s0.2,0,0.2,0c0.3-0.1,8-2.1,15.7-10.6c3.1-3.5,6.5-8.4,9.3-15.1C87,37.2,97.5,24.9,99.4,16C100.1,12.9,99.8,10.4,98.5,8.3z M47,3.2c9.7,8.5,18.7,10.1,29.4,11c-0.1,14.1-2.5,24.9-5.8,33.1c-3.3,2.5-6.8,4.9-10.5,7.3c-7.8,4.9-15.6,8.9-22.9,11.9c-8.5-7-19.2-21.9-19.4-52.3C28.3,13.2,37.3,11.7,47,3.2z M3.2,68.6c-3.5-5.5,2.6-16.8,15.6-28.8c3.1,11.4,7.9,19,12.2,23.8c1.3,1.4,2.5,2.6,3.8,3.7C19.4,73.2,6.8,74.1,3.2,68.6z M47,72.2c-0.9-0.3-4.1-1.4-8.1-4.3c7-3,14.5-6.9,22.1-11.7c2.7-1.7,5.3-3.5,7.8-5.3C60.8,67.3,48.8,71.6,47,72.2z M97.5,15.6c-1.8,8-10.9,18.9-23.9,29.3c2.8-8.1,4.8-18.4,4.8-31.6c0-0.5-0.4-1-0.9-1c-4.2-0.3-8.1-0.8-11.9-1.6c1-0.4,1.9-0.7,2.8-1c14.4-5,25.3-5.1,28.5-0.1C97.8,11,98.1,13.1,97.5,15.6z" />
      <path d="M51.9,52l-2.8-20.7c0.9-0.5,1.6-1.2,2-2.1c0.4-0.9,0.5-1.9,0.2-2.9c-0.2-1-0.8-1.8-1.6-2.4C48.9,23.3,47.9,23,47,23c-1,0-2,0.3-2.7,0.9c-0.8,0.6-1.3,1.5-1.6,2.4c-0.2,1-0.2,2,0.2,2.9c0.4,0.9,1.1,1.7,2,2.1L42,52H51.9z" />
    </svg>
  );
}

const icons = {
  cloud: CloudSreIcon,
  shield: CybersecurityIcon,
} as const;

function OrbitalIcon({
  Icon,
}: {
  Icon: (typeof icons)[keyof typeof icons];
}) {
  return (
    <span className="mx-auto flex h-14 w-14 items-center justify-center text-default md:h-16 md:w-16">
      <Icon className="h-full w-full" />
    </span>
  );
}

export default function CloudSreSplitSection() {
  return (
    <section className="relative z-10 -mt-10 bg-default md:-mt-14">
      <div className="rounded-t-[12px] bg-white py-16 text-default md:rounded-t-[12px]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-primary-pink">
              Performance &amp; Security
            </p>
            <h2 className="mt-4 text-[36px] font-semibold leading-tight">
              Explore our Cloud, SRE, DevOps and Cybersecurity solutions
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-0">
            {cloudSreSplitCards.map((card, index) => {
              const Icon = icons[card.iconId];
              return (
                <motion.article
                  key={card.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-80px", amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={`flex flex-col items-center px-4 text-center md:px-12 ${
                    index === 0 ? "md:border-r md:border-[#E8E8E8]" : ""
                  }`}
                >
                  <OrbitalIcon Icon={Icon} />
                  <h3 className="mt-6 text-2xl font-semibold text-default">
                    {card.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-base leading-relaxed text-black">
                    {card.description}
                  </p>
                  <Link
                    href={card.href}
                    className="mt-8 inline-flex h-10 items-center justify-center rounded-full leading-none bg-default px-7 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    {card.cta}
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
