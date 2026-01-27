"use client";

import Container from "@/components/atoms/Container";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ServiceCard {
    id: string;
    icon: string;
    iconType: "png" | "svg";
    title: string;
    description: string;
}

const services: ServiceCard[] = [
    {
        id: "velocity-ai",
        icon: "/assets/images/landing/velocityAI.png",
        iconType: "png",
        title: "Velocity AI",
        description:
            "Our secure-first methodology dramatically shortens the time-to-market for intelligent digital solutions."
    },
    {
        id: "agentic-orchestration",
        icon: "/assets/images/landing/agentic-orchestration.png",
        iconType: "png",
        title: "Agentic Orchestration",
        description:
            "Specialized, AI-powered solution delivery for targeted, industry-specific operational excellence."
    },
    {
        id: "foundational-data-layer",
        icon: "/assets/images/landing/foundational-data-layer.svg",
        iconType: "svg",
        title: "Foundational Data Layer",
        description:
            "Establishing the essential data infrastructure needed to build and sustain next-generation businesses."
    },
];

export default function ServicesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="w-full bg-default py-16 md:py-24 lg:py-32">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="relative max-w-sm rounded-lg py-6 md:py-8 px-20 border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col"
                            style={{
                                background: `linear-gradient(to bottom, #0A0A1A, #10082C, #2A0079)`,
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                        >
                            {/* Icon */}
                            <div className="mb-6 flex items-center justify-center h-full">
                                {service.iconType === "svg" ? (
                                    <Image
                                        src={service.icon}
                                        alt={`${service.title} icon`}
                                        width={155}
                                        height={155}
                                        className="w-auto h-full object-contain"
                                    />
                                ) : (
                                    <Image
                                        src={service.icon}
                                        alt={`${service.title} icon`}
                                        width={155}
                                        height={155}
                                        className="w-auto h-full object-contain"
                                    />
                                )}
                            </div>
                            <div className="flex flex-col items-center justify-start text-center ">
                                {/* Title */}
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm md:text-base text-desc leading-relaxed mb-6 flex-1">
                                    {service.description}
                                </p>
                            </div>

                            {/* Button */}
                            <Link
                                href="#"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm md:text-base font-medium text-primary-pink border border-primary-pink bg-transparent hover:bg-primary-pink hover:text-white hover:border-transparent transition-all duration-200"
                            >
                                Learn more
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
