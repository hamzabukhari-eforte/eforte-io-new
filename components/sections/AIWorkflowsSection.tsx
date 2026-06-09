"use client";

import Container from "@/components/atoms/Container";
import { motion } from "framer-motion";
import { useInViewReplay } from "@/lib/useInViewReplay";
import { useRef } from "react";

interface WorkflowCard {
    id: string;
    title: string;
    description: string;
}

const workflows: WorkflowCard[] = [
    {
        id: "elevate-service",
        title: "Elevate Service",
        description: "Autonomous Inquiry Handling & Feedback Analysis"
    },
    {
        id: "accelerate-revenue",
        title: "Accelerate Revenue",
        description: "AI-Powered Lead Scoring & Proposal Generation"
    },
    {
        id: "guarantee-compliance",
        title: "Guarantee Compliance",
        description: "Intelligent Invoice Processing & Reporting Automation"
    },
    {
        id: "optimize-talent",
        title: "Optimize Talent",
        description: "Precision Resume Screening & Onboarding Orchestration"
    },
    {
        id: "ensure-integrity",
        title: "Ensure Integrity",
        description: "Continuous Monitoring, Data Extraction & Policy Enforcement"
    },
    {
        id: "drive-decisions",
        title: "Drive Decisions",
        description: "Real-Time Analytics and Resource Allocation Optimization"
    },
];

export default function AIWorkflowsSection() {
    const ref = useRef(null);
    const isInView = useInViewReplay(ref);

    return (
        <section ref={ref} className="w-full bg-default py-16 md:py-24 lg:py-32">
            <Container>
                {/* Header Section */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    {/* Label */}
                    <motion.div
                        className="inline-flex items-center justify-center mb-6 md:mb-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <span className="text-primary-pink text-[11px] font-bold uppercase tracking-[0.15em] px-6 md:px-8 py-2 border border-primary-pink rounded-full">
                            AI WORKFLOWS
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-[56px] font-medium text-white leading-tight mb-6 md:mb-8 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    >
                        From Task to Autonomous Outcome
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="text-base md:text-[17px] text-desc font-light leading-relaxed max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                    >
                        Revolutionize your enterprise with intelligent agents that reason, plan, and execute across your core business functions—freeing your team for strategy.
                    </motion.p>
                </motion.div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {workflows.map((workflow, index) => (
                        <motion.div
                            key={workflow.id}
                            className="relative py-6 md:py-8 px-6 md:px-10 flex flex-col items-center justify-center border border-white/10 hover:border-white/30 transition-all duration-300 text-center lg:h-[210px]  lg:mx-auto"
                            style={{
                                background: index % 2 === 0 
                                    ? `linear-gradient(to bottom, #0A0A1A, #10082C, #2A0079)`
                                    : 'transparent',
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: 0.7 + index * 0.1, ease: "easeOut" }}
                        >
                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-3 md:mb-4">
                                {workflow.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[15px] text-desc leading-relaxed">
                                {workflow.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
