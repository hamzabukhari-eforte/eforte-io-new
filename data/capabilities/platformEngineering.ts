import { studioTrustedBrands } from "./studioBrands";
import type { StudioPageContent } from "./types";

export const platformEngineeringContent: StudioPageContent = {
  slug: "platform-engineering",
  accent: "blue",
  hero: {
    label: "Platform Engineering",
    titleBefore: "Maximize performance, security, and scalability with our ",
    titleHighlight: "Platform Engineering Studio",
    description:
      "From building robust software foundations to optimizing existing systems we'll deliver tailored solutions for your business.",
    brandsLabel: "Brands that trust us",
    brands: studioTrustedBrands,
    graphicSrc:
      "/assets/images/capabilities/platform-engineering/studio-mark.svg",
    ctaLabel: "Contact Us",
  },
  features: [
    {
      id: "frontend-web",
      number: "01",
      title: "Frontend web software development",
      description:
        "Harnessing HTML, CSS, and JavaScript, our frontend wizards craft captivating web interfaces. Collaborating with UI/UX experts, we create visually stunning, user-friendly designs that adapt to any device or browser.",
      image: "/assets/images/case-study/komb-banner.png",
      imageAlt: "Frontend web software development mockup",
      theme: "black",
      layout: "row",
      imageSide: "right",
      cardKind: "text",
    },
    {
      id: "code-analysis",
      title: "Code Analysis",
      image:
        "/assets/images/capabilities/platform-engineering/code-analysis.svg",
      imageAlt: "Code analysis graphic",
      theme: "black",
      layout: "half",
      imageSide: "right",
      cardKind: "visual",
    },
    {
      id: "eval-architecture",
      number: "02",
      title: "Evaluation of existing architecture",
      description:
        "We'll analyze your code architecture to identify strengths, weaknesses, and potential issues. Our service involves assessing the system structure, separation of responsibilities, scalability, and modularity.",
      image: "/assets/images/case-study/prism-banner.png",
      imageAlt: "",
      theme: "light",
      layout: "half",
      imageSide: "right",
      cardKind: "text",
    },
    {
      id: "backend-dev",
      number: "03",
      title: "Backend software development",
      description:
        "Our backend software development experts create the foundation to empower your applications. We build the systems that enable seamless data management, secure APIs, and reliable integrations at scale.",
      image: "/assets/images/case-study/emerge-banner.png",
      imageAlt: "",
      theme: "light",
      layout: "half",
      imageSide: "left",
      cardKind: "text",
    },
    {
      id: "empower-apps",
      title: "Empower applications",
      image:
        "/assets/images/capabilities/platform-engineering/empower-apps.svg",
      imageAlt: "Empower applications graphic",
      theme: "black",
      layout: "half",
      imageSide: "right",
      cardKind: "visual",
    },
    {
      id: "architecture",
      number: "04",
      title: "Architecture design and planning",
      description:
        "In collaboration with the development team, we'll design a robust and efficient code architecture according to your specific requirements. This involves defining architectural patterns and guidelines for implementation.",
      image: "/assets/images/case-study/emerge-banner.png",
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
      image: "/assets/images/industry/working.jpg",
      imageAlt: "",
      theme: "light",
      layout: "half",
      imageSide: "right",
      cardKind: "text",
    },
    {
      id: "code-review-photo",
      title: "Code review",
      image: "/assets/images/industry/working.jpg",
      imageAlt: "Engineers collaborating during a code review",
      theme: "light",
      layout: "half",
      imageSide: "right",
      cardKind: "media",
    },
    {
      id: "discovery-photo",
      title: "Technical product discovery",
      image: "/assets/images/case-study/CulturalFit.jpg",
      imageAlt: "Team collaborating in a product discovery session",
      theme: "light",
      layout: "half",
      imageSide: "left",
      cardKind: "media",
    },
    {
      id: "tech-discovery",
      number: "06",
      title: "Technical product discovery",
      description:
        "We'll help you uncover the technical aspects of your product and make decisions about its development and future roadmap.",
      image: "/assets/images/case-study/CulturalFit.jpg",
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
        "/assets/images/capabilities/platform-engineering/due-diligence.svg",
      imageAlt: "Technical due diligence graphic",
      theme: "black",
      layout: "row",
      imageSide: "right",
      mediaPanel: "accent",
      cardKind: "text",
    },
  ],
  midCta: {
    titleBefore: "Start your journey with our ",
    titleHighlight: "Platform Engineering Studio.",
    description:
      "Build scalable foundations with our Platform Engineering Studio — from architecture and APIs to delivery excellence.",
    ctaLabel: "Contact Us",
  },
};
