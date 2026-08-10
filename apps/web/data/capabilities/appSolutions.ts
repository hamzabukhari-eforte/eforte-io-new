import { studioTrustedBrands } from "./studioBrands";
import type { StudioPageContent } from "./types";

export const appSolutionsContent: StudioPageContent = {
  slug: "app-solutions",
  accent: "coral",
  hero: {
    label: "App Solutions",
    titleBefore: "eForte's App Solutions Studio builds the web and mobile ",
    titleHighlight: "applications your business runs on",
    description:
      "Great backend systems and AI still need a front door: a web or mobile application people can actually use. Our App Solutions Studio designs and builds custom applications, from customer-facing products to internal tools, and connects them cleanly to the systems you already have, including the legacy ones nobody wants to touch. We build for the long term: applications that are maintainable, scalable, and ready to plug into Velocity AI and Agentic Orchestration as your needs grow.",
    brandsLabel: "Brands that trust us",
    brands: studioTrustedBrands,
    graphicSrc:
      "/assets/images/package/studios/app-solutions-studio-hero-diagram.svg",
    ctaLabel: "Contact Us",
  },
  features: [
    {
      id: "case-study",
      number: "In action",
      title: "Rebuilding the customer portal for Ashcombe Insurance Group",
      description:
        "Ashcombe Insurance Group's customer portal ran on a decade-old codebase that made even minor feature requests take months. We rebuilt the portal on a modern, modular architecture and integrated it with their existing policy management system without disrupting live operations. Outcomes so far: new feature delivery time cut from 3 months to 3 weeks, a 47% increase in self-service policy changes, 99.9% uptime maintained through the migration, and zero data loss across the full legacy system cutover.",
      image: "/assets/images/package/studios/ashcombe-insurance-case.svg",
      imageAlt: "Ashcombe Insurance Group customer portal case study",
      theme: "dark",
      layout: "row",
      imageSide: "right",
      mediaInset: true,
      cardKind: "text",
    },
    {
      id: "mobile-app-dev",
      number: "01",
      title: "Mobile application development",
      description:
        "eForte specializes in building software applications for mobile devices, including smartphones, tablets, and smart TVs. Services span solution design, front-end and back-end development, integrations, and thorough testing to ensure high quality and reliability.",
      image: "/assets/images/case-study/InstApp-Dealbanner.png",
      imageAlt: "Mobile application development code and product screens",
      theme: "light",
      layout: "row",
      imageSide: "right",
    },
    {
      id: "mobile-sdk",
      number: "02",
      title: "Mobile SDK development",
      description:
        "eForte creates custom software development kits (SDKs) for major mobile platforms. These SDKs provide developers with pre-built components, APIs, and tools that streamline app development and speed up adoption of your technology.",
      image: "/assets/images/case-study/InstApp-Deal-Mobilebanner.png",
      imageAlt: "Mobile SDK interface with design annotations",
      theme: "black",
      layout: "row",
      imageSide: "left",
    },
    {
      id: "app-testing",
      number: "03",
      title: "Application testing, review and maintenance",
      description:
        "Ensure your mobile apps run smoothly with eForte's testing, review, and maintenance services. The team conducts functional, performance, security, and compatibility testing, then supports ongoing improvements to maintain stability across devices and OS versions.",
      image: "/assets/images/case-study/oddysee-banner.png",
      imageAlt: "Mobile app under testing on a device mockup",
      theme: "light",
      layout: "split",
      imageSide: "right",
      mediaPanel: "accent",
    },
    {
      id: "consultancy",
      number: "04",
      title: "Mobile consultancy and mentoring",
      description:
        "From choosing the right tech stack and architecture to refining user experience, processes, and best practices, eForte provides guidance grounded in real project experience. Clients receive recommendations, strategies, and mentoring to help teams deliver better mobile products.",
      image: "/assets/images/case-study/CulturalFit.jpg",
      imageAlt: "Consultancy and mentoring collaboration visuals",
      theme: "dark",
      layout: "row",
      imageSide: "left",
    },
    {
      id: "discovery",
      number: "05",
      title: "Technical product discovery",
      description:
        "Through research, prototyping, and technical analysis, eForte helps evaluate feasibility, uncover risks, and align your mobile product vision with a realistic implementation plan. Discovery work ensures that investments focus on the highest-value opportunities.",
      image: "/assets/images/case-study/krank-banner.png",
      imageAlt: "Technical product discovery on a mobile prototype",
      theme: "light",
      layout: "split",
      imageSide: "right",
      mediaPanel: "accent",
    },
    {
      id: "device-integration",
      number: "06",
      title: "Application integration with external devices",
      description:
        "eForte excels at integrating mobile apps with external devices over BLE, Wi-Fi, or Ethernet. For example, fitness and wellness products can be managed directly from phones, smartwatches, or smart TVs, enabling real-time data flow and richer user experiences.",
      image: "/assets/images/industry/ipad.webp",
      imageAlt: "Mobile app integrated with external devices",
      theme: "black",
      layout: "row",
      imageSide: "left",
    },
    {
      id: "store-positioning",
      number: "07",
      title: "App Store and Google Play positioning",
      description:
        "Maximize your app's visibility with eForte's store positioning and optimization services. This includes app store optimization (ASO), keyword research, targeted ad campaigns, and marketing strategies tailored to your audience and category.",
      image: "/assets/images/case-study/komb-banner.png",
      imageAlt: "App Store and Google Play listing mockups",
      theme: "dark",
      layout: "row",
      imageSide: "right",
    },
  ],
  proprietaryTech: [
    {
      id: "connect",
      name: "eForte Connect™",
      tagline: "Middleware for legacy integration",
      description:
        "Legacy systems rarely expose clean APIs, which usually means either an expensive rebuild or years of workarounds. eForte Connect™ is our middleware solution that enables seamless integration with legacy systems without API dependencies: letting new applications talk to decades-old infrastructure without needing that infrastructure to change first.",
      benefits: [
        "No API dependency: integrates with systems that were never built to be integrated with",
        "Non-disruptive: legacy systems keep running during and after integration",
        "Faster time to value: avoids multi-year legacy replacement projects",
        "Reusable connector patterns: built once, applied across future integrations",
      ],
    },
    {
      id: "legacy-bridge",
      name: "eForte Legacy Bridge™",
      tagline: "Modern AI for outdated architectures",
      description:
        "Where Connect handles integration, eForte Legacy Bridge™ goes a step further: extending modern AI functionality to outdated system architectures that were never designed to support it. This means older systems can benefit from Velocity AI capabilities (like intelligent search, recommendations, or agentic workflows) without a ground-up rebuild.",
      benefits: [
        "Brings intelligent search, recommendations, and agentic workflows to legacy systems",
        "No ground-up rebuild required to unlock modern AI capabilities",
        "Works alongside eForte Connect™ for full legacy modernization",
        "Extends the useful life of existing infrastructure investments",
      ],
    },
  ],
  faqs: [
    {
      question: "Can you integrate with our legacy systems without replacing them?",
      answer:
        "Yes: this is exactly what eForte Connect™ and eForte Legacy Bridge™ are built for: integrating with and extending legacy infrastructure rather than requiring a full replacement.",
    },
    {
      question: "Do you build both web and mobile applications?",
      answer:
        "Yes, including native iOS/Android, cross-platform frameworks, and responsive web applications, depending on what fits your users and existing stack best.",
    },
    {
      question: "How do you avoid downtime during a migration or integration?",
      answer:
        "We design integrations and migrations to run alongside existing systems first, cutting over only once the new system is validated in production-like conditions.",
    },
    {
      question: "Who maintains the application after launch?",
      answer:
        "We offer ongoing maintenance and support arrangements, or a clean handoff to your internal team with full documentation: whichever fits your organization.",
    },
  ],
  faqsSubtitle: "Frequently asked questions about our App Solutions services",
  midCta: {
    titleBefore: "Let's build the ",
    titleHighlight: "application your business runs on.",
    description:
      "From legacy integration to ground-up builds, our App Solutions Studio designs applications ready to plug into Velocity AI and Agentic Orchestration as your needs grow.",
    ctaLabel: "Contact Us",
  },
};
