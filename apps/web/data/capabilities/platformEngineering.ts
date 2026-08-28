import { studioTrustedBrands } from "./studioBrands";
import type { StudioPageContent } from "./types";

export const platformEngineeringContent: StudioPageContent = {
  slug: "platform-engineering",
  accent: "blue",
  hero: {
    label: "Platform Engineering",
    titleBefore: "eForte's Platform Engineering Studio builds the internal ",
    titleHighlight: "platforms your teams build on top of",
    description:
      "As your product and engineering teams grow, everyone building on shared infrastructure ad hoc starts to slow everyone down. Our Platform Engineering Studio designs internal developer platforms, APIs, and shared services that let your teams move fast without reinventing the same infrastructure decisions project after project. We build platforms that make the rest of eForte's work, and your own team's future work, faster to ship and easier to maintain.",
    brandsLabel: "Brands that trust us",
    brands: studioTrustedBrands,
    graphicSrc:
      "/assets/final-images/capabilities/platform-engineering/Platform Engineering-01.svg",
    labelIconSrc:
      "/assets/final-images/capabilities/platform-engineering/Platform Engineering-01.svg",
    ctaLabel: "Contact Us",
    ctaBgClass: "bg-black",
  },
  features: [
    {
      id: "case-study",
      number: "In action",
      title: "Building an internal developer platform for Halloway Financial Technologies",
      description:
        "Halloway Financial Technologies had a dozen product teams each independently provisioning infrastructure, leading to inconsistent security configurations and duplicated effort. We built a self-service internal platform with standardized, secure infrastructure templates and a unified API gateway. Outcomes so far: new service provisioning time cut from 2 weeks to under 1 day, 100% of new services meeting baseline security configuration, 3 previously duplicated internal tools consolidated into one, and developer satisfaction up 41% in internal survey.",
      image:
        "/assets/final-images/capabilities/platform-engineering/halloway_internal_platform_case_study.png?v=2",
      imageAlt: "Halloway Financial Technologies internal platform case study",
      theme: "dark",
      layout: "row",
      imageSide: "right",
      mediaInset: true,
      cardKind: "text",
    },
    {
      id: "frontend-web",
      number: "01",
      title: "Frontend web software development",
      description:
        "Harnessing HTML, CSS, and JavaScript, our frontend wizards craft captivating web interfaces. Collaborating with UI/UX experts, we create visually stunning, user-friendly designs that adapt to any device or browser.",
      image:
        "/assets/final-images/capabilities/platform-engineering/1-frontend_hero_professional_copy_v2.png",
      imageAlt: "Frontend web software development mockup",
      theme: "black",
      layout: "row",
      imageSide: "right",
      cardKind: "text",
    },
    // Preserved for possible future reuse — paired visual cards temporarily omitted so
    // cards 02/03 can show their new SVG artwork in full-width row layouts
    // {
    //   id: "code-analysis",
    //   title: "Code Analysis",
    //   image:
    //     "/assets/images/capabilities/platform-engineering/code-analysis.svg",
    //   imageAlt: "Code analysis graphic",
    //   theme: "black",
    //   layout: "half",
    //   imageSide: "right",
    //   cardKind: "visual",
    // },
    {
      id: "eval-architecture",
      number: "02",
      title: "Evaluation of existing architecture",
      description:
        "We'll analyze your code architecture to identify strengths, weaknesses, and potential issues. Our service involves assessing the system structure, separation of responsibilities, scalability, and modularity.",
      image:
        "/assets/final-images/capabilities/platform-engineering/evaluation-of-existing-architecture.svg",
      imageAlt: "Evaluation of existing architecture graphic",
      theme: "light",
      layout: "row",
      imageSide: "right",
      mediaPanel: "black",
      mediaFullBleed: true,
      cardKind: "text",
    },
    {
      id: "backend-dev",
      number: "03",
      title: "Backend software development",
      description:
        "Our backend software development experts create the foundation to empower your applications. We build the systems that enable seamless data management, secure APIs, and reliable integrations at scale.",
      image:
        "/assets/final-images/capabilities/platform-engineering/backend-software-development.svg",
      imageAlt: "Backend software development graphic",
      theme: "light",
      layout: "row",
      imageSide: "left",
      mediaPanel: "black",
      mediaFullBleed: true,
      cardKind: "text",
    },
    // {
    //   id: "empower-apps",
    //   title: "Empower applications",
    //   image:
    //     "/assets/images/capabilities/platform-engineering/empower-apps.svg",
    //   imageAlt: "Empower applications graphic",
    //   theme: "black",
    //   layout: "half",
    //   imageSide: "right",
    //   cardKind: "visual",
    // },
    {
      id: "architecture",
      number: "04",
      title: "Architecture design and planning",
      description:
        "In collaboration with the development team, we'll design a robust and efficient code architecture according to your specific requirements. This involves defining architectural patterns and guidelines for implementation.",
      image:
        "/assets/final-images/capabilities/platform-engineering/4-architecture_design_planning_without_circle.png",
      imageAlt: "Architecture design and planning visual",
      theme: "black",
      layout: "row",
      imageSide: "left",
      cardKind: "text",
    },
    {
      id: "code-review",
      number: "05",
      title: "Code review",
      description:
        "Our experts will analyze your existing code for design problems, efficiency, readability, and maintainability. We'll leave no stone unturned in identifying security vulnerabilities and risks.",
      image:
        "/assets/final-images/capabilities/platform-engineering/5-code_review_human_interaction_visual.png?v=2",
      imageAlt: "",
      theme: "light",
      layout: "half",
      imageSide: "right",
      cardKind: "text",
    },
    {
      id: "code-review-photo",
      title: "Code review",
      image:
        "/assets/final-images/capabilities/platform-engineering/5-code_review_human_interaction_visual.png?v=2",
      imageAlt: "Engineers collaborating during a code review",
      theme: "light",
      layout: "half",
      imageSide: "right",
      cardKind: "media",
      mediaObjectFit: "contain",
    },
    {
      id: "discovery-photo",
      title: "Technical product discovery",
      image:
        "/assets/final-images/capabilities/platform-engineering/6-technical_product_discovery_natural_realism_v2.png?v=2",
      imageAlt: "Team collaborating in a product discovery session",
      theme: "light",
      layout: "half",
      imageSide: "left",
      cardKind: "media",
      mediaObjectFit: "contain",
    },
    {
      id: "tech-discovery",
      number: "06",
      title: "Technical product discovery",
      description:
        "We'll help you uncover the technical aspects of your product and make decisions about its development and future roadmap.",
      image:
        "/assets/final-images/capabilities/platform-engineering/6-technical_product_discovery_natural_realism_v2.png?v=2",
      imageAlt: "",
      theme: "light",
      layout: "half",
      imageSide: "left",
      cardKind: "text",
    },
    {
      id: "due-diligence",
      number: "07",
      title: "Technical due diligence",
      description:
        "Technical due diligence provides valuable insights and recommendations to help organizations make informed decisions regarding investments, acquisitions, partnerships, or other business activities.",
      image:
        "/assets/final-images/capabilities/platform-engineering/technical-due-diligence.svg",
      imageAlt: "Technical due diligence graphic",
      theme: "black",
      layout: "row",
      imageSide: "right",
      mediaPanel: "black",
      cardKind: "text",
    },
  ],
  proprietaryTech: [
    {
      id: "connect",
      name: "eForte Connect™",
      tagline: "Middleware for legacy integration",
      description:
        "Internal platforms often need to expose functionality from older internal systems that were never designed with modern APIs in mind. eForte Connect™, our middleware solution, enables seamless integration with these legacy systems without API dependencies: letting your new platform surface capabilities from systems that predate it by years.",
      benefits: [
        "No API dependency: surfaces functionality from systems that never exposed one",
        "Consistent developer experience: legacy and modern systems look the same to platform users",
        "Faster platform rollout: avoids waiting on legacy system rebuilds",
        "Governed access: controlled, auditable connections into sensitive legacy systems",
      ],
    },
  ],
  faqs: [
    {
      question: "What's the difference between platform engineering and DevOps?",
      answer:
        "DevOps focuses on deployment pipelines and operations for a given system. Platform engineering goes further, building reusable internal products (platforms, APIs, tooling) that many teams build on top of, reducing duplicated effort across the organization.",
    },
    {
      question: "Do you build this on top of our existing infrastructure?",
      answer:
        "Yes: we design the platform layer to sit on top of your existing cloud and infrastructure investment rather than requiring a separate parallel environment.",
    },
    {
      question: "Can the platform expose functionality from our legacy systems?",
      answer:
        "Yes, this is exactly what eForte Connect™ is built for: surfacing legacy system capabilities through a modern platform interface without needing those legacy systems to change first.",
    },
    {
      question: "How long does a typical platform engagement take?",
      answer:
        "Initial platform builds typically range from 8-16 weeks depending on scope, followed by ongoing enhancement as your teams' needs evolve.",
    },
  ],
  faqsSubtitle: "Frequently asked questions about our Platform Engineering services",
  // Preserved for possible future reuse — mid-CTA intentionally omitted from this page
  // midCta: {
  //   titleBefore: "Let's build the ",
  //   titleHighlight: "platform your teams deserve.",
  //   description:
  //     "Internal platforms, API gateways, and shared services that make the rest of your team's work faster to ship and easier to maintain.",
  //   ctaLabel: "Contact Us",
  // },
};
