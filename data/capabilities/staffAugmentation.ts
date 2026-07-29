import type {
  StudioContactBannerContent,
  StudioProcessItem,
  StudioValueItem,
} from "@/components/sections/studio-shared";

export const staffAugmentationContent = {
  hero: {
    badge: "Staff Augmentation",
    headline: "Your Gateway to a Skilled Workforce",
    body: "Build and scale software faster while reducing costs and maintaining high-quality standards.",
    subBody:
      "Find out how eForte's staff augmentation services can help accelerate your software development, AI initiatives, and overall business growth.",
  },
  valuesIntro: {
    eyebrow: "Staff Augmentation",
    title: "Benefits of working with eForte",
  },
  values: [
    {
      id: "cost-efficiency",
      title: "Cost efficiency",
      description:
        "Scale your teams without the overhead of full-time hiring, while maintaining high-quality delivery standards across software and AI engineering.",
      icon: "/assets/images/capabilities/asterisk.svg",
      variant: "dark",
    },
    {
      id: "faster-ttm",
      title: "Faster time-to-market",
      description:
        "Embed experienced professionals from day one so your product, AI, and cloud initiatives move faster with less ramp-up friction.",
      icon: "/assets/images/capabilities/venn.svg",
      variant: "muted",
    },
    {
      id: "top-talent",
      title: "Top AI & engineering talent",
      description:
        "Access software engineers, AI engineers, data scientists, and cloud specialists with a proven track record across industries.",
      icon: "/assets/images/capabilities/zag.svg",
      variant: "light",
    },
  ] satisfies StudioValueItem[],
  process: [
    {
      eyebrow: "Talent",
      title: "Quality IT & AI Engineering Professionals",
      description:
        "With over a decade of experience across software development and AI engineering, we have a proven track record of attracting top-tier talent. Our team includes highly skilled software engineers, AI engineers, data scientists, and cloud specialists — most holding four-year degrees — demonstrating our commitment to delivering excellence across every engagement.",
      image: "/assets/images/capabilities/team.jpg",
      imageAlt: "eForte engineering and AI talent collaborating",
      imageSide: "right",
      tags: ["Software Engineers", "AI Engineers", "Data Scientists", "Cloud Specialists"],
    },
    {
      eyebrow: "AI Engineering",
      title: "AI Engineering Capabilities",
      description:
        "Our AI engineering teams specialize in designing, building, and scaling intelligent systems across the full AI lifecycle. We provide dedicated experts in agentic AI, generative AI, machine learning, and MLOps who integrate seamlessly with your teams to deliver production-ready AI solutions.",
      image: "/assets/images/capabilities/machine-learning.jpg",
      imageAlt: "AI engineering and machine learning workflows",
      imageSide: "left",
      tags: ["Agentic AI", "Generative AI", "Machine Learning", "MLOps"],
    },
    {
      eyebrow: "Trial",
      title: "Risk-Free 2-Week Trial",
      description:
        "We offer a two-week risk-free trial for our outsourced teams (subject to terms and conditions), allowing you to validate technical capability, collaboration, and delivery quality across software and AI engineering engagements.",
      image: "/assets/images/capabilities/tech.jpg",
      imageAlt: "Team collaboration during a trial engagement",
      imageSide: "right",
      tags: ["Risk-Free Trial", "Delivery Quality", "Collaboration", "Validation"],
    },
    {
      eyebrow: "Quality",
      title: "Quality Assurance & Audit",
      description:
        "Our delivery is governed by a structured operational playbook and supported by robust quality assurance frameworks. This ensures consistent performance, code quality, model reliability, and adherence to engineering best practices.",
      image: "/assets/images/capabilities/quality-assurance-hero.png",
      imageAlt: "Quality assurance and audit frameworks",
      imageSide: "left",
      tags: ["Operational Playbook", "Code Quality", "Model Reliability", "Best Practices"],
    },
    {
      eyebrow: "Healthcare",
      title: "Healthcare IT & AI Consulting Services",
      description:
        "We provide specialized healthcare IT and AI consulting to help organizations address complex technology challenges, AI adoption, and regulatory compliance requirements. Our team brings deep expertise in healthcare systems, data platforms, and AI-driven solutions to ensure alignment with industry regulations and standards.",
      image: "/assets/images/industry/cardiex-machine.jpg",
      imageAlt: "Healthcare IT and AI consulting",
      imageSide: "right",
      tags: ["Healthcare IT", "AI Adoption", "Compliance", "Data Platforms"],
    },
    {
      eyebrow: "Security",
      title: "SOC 2 Audit Readiness & AI Security",
      description:
        "eForte is fully equipped to meet SOC 2 audit requirements, following strict protocols to ensure data privacy, security, and availability. We also apply AI security best practices to protect models, data pipelines, and cloud infrastructure, maintaining compliance with industry standards.",
      image: "/assets/images/industry/bg-security.jpg",
      imageAlt: "SOC 2 audit readiness and AI security",
      imageSide: "left",
      tags: ["SOC 2", "AI Security", "Data Privacy", "Cloud Infrastructure"],
    },
  ] satisfies StudioProcessItem[],
  closingCta: {
    title: "Access Industry-Leading Technology & AI Talent",
    description:
      "Looking to scale your IT or AI teams, build a new digital solution, or modernize your existing technology landscape? Partner with eForte to access experienced professionals who deliver results from day one. Our experts are available around the clock to support your needs.",
    ctaLabel: "Contact Us",
  } satisfies StudioContactBannerContent,
};
