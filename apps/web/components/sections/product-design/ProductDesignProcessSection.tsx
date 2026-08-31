"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { productDesignProcess } from "@/data/productDesign";
import { cn } from "@/lib/utils";

function toTabId(eyebrow: string) {
  return `process-${eyebrow.toLowerCase().replace(/\s+/g, "-")}`;
}

export default function ProductDesignProcessSection() {
  const items = productDesignProcess;
  const [activeId, setActiveId] = useState(toTabId(items[0]?.eyebrow ?? ""));

  const scrollToCard = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  }, []);

  useEffect(() => {
    const cards = items
      .map((item) => document.getElementById(toTabId(item.eyebrow)))
      .filter((el): el is HTMLElement => Boolean(el));

    if (cards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          );

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0.15, 0.35, 0.55],
      }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [items]);

  return (
    <section className="relative bg-white pb-12 md:pb-20 pt-10">
      <Container>
        <h2 className="mx-auto max-w-3xl text-center text-3xl font-semibold leading-tight text-default md:text-5xl">
          Core design capabilities
        </h2>
      </Container>

      <div className="sticky top-16 z-40 mt-8 py-3 md:top-20 md:mt-10">
        <Container>
          <div className="flex justify-center">
            <nav
              aria-label="Product design process"
              className="inline-flex max-w-full items-center gap-1.5 overflow-x-auto rounded-full bg-[#F3F3F5] p-2 shadow-[0_10px_40px_rgba(10,10,26,0.08)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {items.map((item) => {
                const id = toTabId(item.eyebrow);
                const isActive = activeId === id;

                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => scrollToCard(id)}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "inline-flex items-center justify-center h-10 shrink-0 cursor-pointer rounded-full leading-none px-5 py-0 text-base font-medium whitespace-nowrap transition-colors duration-200 md:px-6 md:text-lg",
                      isActive
                        ? "bg-black text-white"
                        : "bg-transparent text-gray-500 hover:text-gray-800"
                    )}
                  >
                    {item.eyebrow}
                  </button>
                );
              })}
            </nav>
          </div>
        </Container>
      </div>

      <Container className="mt-8 md:mt-10">
        <div className="space-y-16 md:space-y-20">
          {items.map((item, index) => {
            const id = toTabId(item.eyebrow);
            const imageFirst = item.imageSide === "left";

            return (
              <motion.article
                key={item.title}
                id={id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.18 }}
                transition={{ duration: 0.5, delay: 0.04 * index }}
                className="scroll-mt-36 grid items-center gap-8 md:scroll-mt-40 md:grid-cols-2 md:gap-14"
              >
                <div className={imageFirst ? "md:order-1" : "md:order-2"}>
                  <div className="h-[380px] w-[608px] max-w-full overflow-hidden rounded-[12px] shadow-[0_24px_70px_rgba(10,10,26,0.12)]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      width={608}
                      height={380}
                      sizes="608px"
                      unoptimized
                      className="size-full object-fill"
                    />
                  </div>
                </div>

                <div className={imageFirst ? "md:order-2" : "md:order-1"}>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-pink">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-default md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
                    {item.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex h-[25px] items-center justify-center rounded-full leading-none border border-gray-200 px-3 py-0 text-xs font-medium text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
