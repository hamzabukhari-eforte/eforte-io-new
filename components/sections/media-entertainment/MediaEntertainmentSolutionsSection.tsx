"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";

type Solution = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageSide: "left" | "right";
};

const solutions: Solution[] = [
  {
    id: "cdn",
    title: "Content Delivery Network (CDN) solution",
    description:
      "Leveraging years of experience and deep expertise, eForte builds modern, cloud-based content delivery networks that ensure your content reaches your audience seamlessly, no matter where they are. Our CDNs are designed for speed, reliability, and security.",
    image: "/assets/images/industry/cdn.svg",
    imageSide: "left",
  },
  {
    id: "ams",
    title: "Asset Management System (AMS) solution",
    description:
      "eForte empowers media companies to take control of their valuable content with modern, cloud-based asset management systems. The systems we build streamline workflows, enhance collaboration, and ensure your assets are easily accessible and ready for distribution whenever you need them.",
    image: "/assets/images/industry/ams.svg",
    imageSide: "right",
  },
  {
    id: "vooks",
    title: "Entertainment platform solution",
    description:
      "eForte empowers media companies to create and launch their own proprietary entertainment platforms, delivering exceptional user experiences and driving audience engagement. Our end-to-end solutions encompass everything from design and development to deployment and ongoing support, ensuring your platform is a success.",
    image: "/assets/images/industry/vooks.svg",
    imageSide: "left",
  },
];

export default function MediaEntertainmentSolutionsSection() {
  return (
    <section className="bg-default py-16 text-white md:py-24">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-medium text-white md:text-4xl"
        >
          Our solutions
        </motion.h2>

        <div className="mt-16 space-y-16 md:mt-20 md:space-y-24 max-w-7xl mx-auto">
          {solutions.map((solution) => {
            const isImageLeft = solution.imageSide === "left";

            const imageBlock = (
              <motion.div
                initial={{ opacity: 0, x: isImageLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex justify-center"
              >
                <div className="relative aspect-square w-full max-w-[350px]">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    sizes="350px"
                    className="object-contain"
                  />
                </div>
              </motion.div>
            );

            const textBlock = (
              <motion.div
                initial={{ opacity: 0, x: isImageLeft ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col justify-center"
              >
                <h3 className="text-2xl font-semibold leading-tight text-white md:text-[28px] max-w-2xl">
                  {solution.title}
                </h3>
                <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/60 md:text-base">
                  {solution.description}
                </p>
              </motion.div>
            );

            return (
              <div
                key={solution.id}
                className="grid items-center lg:grid-cols-2"
              >
                {isImageLeft ? (
                  <>
                    {imageBlock}
                    {textBlock}
                  </>
                ) : (
                  <>
                    {textBlock}
                    {imageBlock}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
