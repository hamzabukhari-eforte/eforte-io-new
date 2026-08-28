import { getStudioTrustedBrands } from "./studioBrands";
import {
  getBlockchainHeroImage,
  getBlockchainImages,
} from "./blockchainImages";
import type { StudioPageContent } from "./types";

function cardImage(
  featureId: string,
  images: Record<string, string>,
  fallback: string
): string {
  return images[featureId] ?? fallback;
}

/** Rebuilds from disk each call so new/replaced folder assets apply immediately. */
export function getBlockchainContent(): StudioPageContent {
  const images = getBlockchainImages();
  const heroFromFolder = getBlockchainHeroImage();

  return {
    slug: "blockchain",
    accent: "blue",
    hero: {
      label: "Blockchain",
      titleBefore: "eForte's Blockchain Studio builds ",
      titleHighlight: "trust and traceability",
      titleAfter: " into systems that need it",
      description:
        "Not every problem needs a blockchain, and we'll tell you when it doesn't. But for systems that need an immutable audit trail, decentralized trust between parties, or verifiable provenance, our Blockchain Studio designs and builds solutions that fit the actual problem: not the hype cycle. We work case by case, from smart contract development to full decentralized application builds, integrated cleanly with the traditional systems around them.",
      brandsLabel: "Brands that trust us",
      brands: getStudioTrustedBrands(),
      graphicSrc:
        heroFromFolder ??
        "/assets/final-images/capabilities/blockchain/blockchain-hero.svg",
      ctaLabel: "Contact Us",
      ctaBgClass: "bg-black",
    },
    features: [
      {
        id: "case-study",
        number: "In action",
        title: "Building a supply chain provenance system for Marrow Creek Foods",
        description:
          "Marrow Creek Foods needed to prove ingredient sourcing claims to retail partners and regulators but had no verifiable record beyond paper documentation and supplier assurances. We built a blockchain-based provenance system that records key supply chain checkpoints immutably, giving retail partners direct, verifiable visibility. Outcomes so far: 100% of tracked ingredients independently verifiable end-to-end, retail partner audit time reduced by 64%, 3 new retail partnerships secured citing verified sourcing, and zero disputed provenance claims since launch.",
        image: "/assets/images/package/studios/marrow-creek-foods-case.svg",
        imageAlt: "Marrow Creek Foods supply chain provenance case study",
        theme: "dark",
        layout: "row",
        imageSide: "right",
        mediaFullBleed: true,
        cardKind: "text",
      },
      {
        id: "blockchain-dev",
        number: "01",
        title: "Blockchain development",
        description:
          "Our studio specializes in developing blockchain applications and solutions. This includes designing and implementing smart contracts, and building decentralized applications (dApps).",
        image: cardImage(
          "blockchain-dev",
          images,
          "/assets/images/industry/working.jpg"
        ),
        imageAlt: "Engineers reviewing blockchain systems on monitors",
        theme: "light",
        layout: "row",
        imageSide: "right",
        mediaFullBleed: true,
        cardKind: "text",
      },
      {
        id: "smart-contracts",
        number: "02",
        title: "Smart contract development",
        description:
          "We excel in crafting smart contracts using languages like Solidity or similar languages for other blockchain platforms. Our team ensures that smart contracts are secure, efficient, and aligned with your requirements.",
        image: cardImage(
          "smart-contracts",
          images,
          "/assets/images/capabilities/blockchain/smart-contracts.svg"
        ),
        imageAlt: "Smart contract development graphic",
        theme: "black",
        layout: "row",
        imageSide: "left",
        mediaFullBleed: true,
        cardKind: "text",
      },
      {
        id: "integration",
        number: "03",
        title: "Blockchain integration",
        description:
          "We integrate blockchain technology with existing systems or develop new systems that leverage blockchain capabilities. We connect databases or applications to blockchain networks, create APIs for interacting with blockchain platforms.",
        image: cardImage(
          "integration",
          images,
          "/assets/images/case-study/oddysee-banner.png"
        ),
        imageAlt: "Blockchain integration graphic",
        theme: "black",
        layout: "row",
        imageSide: "left",
        mediaFullBleed: true,
        cardKind: "text",
      },
      // Companion half visuals preserved for possible future reuse
      // {
      //   id: "empowering-networks",
      //   title: "Empowering Networks",
      //   image: "/assets/images/capabilities/blockchain/empowering-networks.svg",
      //   imageAlt: "Empowering Networks graphic",
      //   theme: "black",
      //   layout: "half",
      //   imageSide: "right",
      //   mediaFullBleed: true,
      //   cardKind: "media",
      // },
      // {
      //   id: "blockchain-security-visual",
      //   title: "Blockchain Security",
      //   image: "/assets/images/capabilities/blockchain/blockchain-security.svg",
      //   imageAlt: "Blockchain Security graphic",
      //   theme: "black",
      //   layout: "half",
      //   imageSide: "left",
      //   mediaFullBleed: true,
      //   cardKind: "media",
      // },
      {
        id: "security",
        number: "04",
        title: "Security and auditing",
        description:
          "We prioritize blockchain security to safeguard against vulnerabilities and potential attacks. Our team implements robust security measures, conducts thorough audits, and ensures compliance with relevant security standards.",
        image: cardImage(
          "security",
          images,
          "/assets/images/industry/cybersecurity.jpg"
        ),
        imageAlt: "Security and auditing graphic",
        theme: "black",
        layout: "row",
        imageSide: "right",
        mediaFullBleed: true,
        cardKind: "text",
      },
      {
        id: "tokenization",
        number: "05",
        title: "Tokenization and cryptocurrency development",
        description:
          "We design token economics, develop smart contracts for token issuance and management, and integrate tokens into your applications.",
        image: cardImage(
          "tokenization",
          images,
          "/assets/images/case-study/Dostpay-banner.png"
        ),
        imageAlt: "Tokenization and cryptocurrency development",
        theme: "dark",
        layout: "half",
        imageSide: "left",
        mediaFullBleed: true,
        cardKind: "text",
      },
      {
        id: "tokenization-photo",
        title: "Cryptocurrency product",
        image: cardImage(
          "tokenization",
          images,
          "/assets/images/case-study/Dostpay-banner.png"
        ),
        imageAlt: "Smartphone showing cryptocurrency portfolio app",
        theme: "light",
        layout: "half",
        imageSide: "right",
        mediaFullBleed: true,
        cardKind: "media",
      },
      {
        id: "testing-photo",
        title: "Blockchain testing",
        image: cardImage(
          "testing",
          images,
          "/assets/images/industry/qa.jpg"
        ),
        imageAlt: "Hands reviewing trading charts on a mobile device",
        theme: "light",
        layout: "half",
        imageSide: "left",
        mediaFullBleed: true,
        cardKind: "media",
      },
      {
        id: "testing",
        number: "06",
        title: "Blockchain testing and quality assurance",
        description:
          "Our QA team performs rigorous testing on blockchain applications. We conduct functional testing, performance testing, and security testing to ensure reliability before launch.",
        image: cardImage(
          "testing",
          images,
          "/assets/images/industry/qa.jpg"
        ),
        imageAlt: "Blockchain testing and quality assurance",
        theme: "light",
        layout: "half",
        imageSide: "right",
        mediaFullBleed: true,
        cardKind: "text",
      },
      {
        id: "infrastructure",
        number: "07",
        title: "Blockchain infrastructure and deployment",
        description:
          "We set up and manage the infrastructure required for running blockchain networks. This includes deploying nodes, configuring network parameters, and working with infrastructure providers. Our experts handle the deployment of smart contracts and dApps.",
        image: cardImage(
          "infrastructure",
          images,
          "/assets/images/capabilities/blockchain/infrastructure.svg"
        ),
        imageAlt: "Blockchain infrastructure dashboard graphic",
        theme: "black",
        layout: "row",
        imageSide: "right",
        mediaFullBleed: true,
        cardKind: "text",
      },
      {
        id: "monitoring-photo",
        title: "Monitoring systems",
        image: cardImage(
          "monitoring",
          images,
          "/assets/images/industry/working.jpg"
        ),
        imageAlt: "Engineer monitoring systems across multiple screens",
        theme: "light",
        layout: "half",
        imageSide: "left",
        mediaFullBleed: true,
        cardKind: "media",
      },
      {
        id: "monitoring",
        number: "08",
        title: "Monitoring and maintenance",
        description:
          "We offer continuous monitoring and maintenance services for blockchain applications to keep networks healthy, secure, and performant over time.",
        image: cardImage(
          "monitoring",
          images,
          "/assets/images/industry/working.jpg"
        ),
        imageAlt: "Monitoring and maintenance",
        theme: "light",
        layout: "half",
        imageSide: "right",
        mediaFullBleed: true,
        cardKind: "text",
      },
      {
        id: "consulting",
        number: "09",
        title: "Consulting services",
        description:
          "Our team of experts offers strategic guidance, industry insights, and technical expertise to help navigate the complexities of blockchain technology. We provide tailored solutions, recommendations, and best practices.",
        image: cardImage(
          "consulting",
          images,
          "/assets/images/case-study/CulturalFit.jpg"
        ),
        imageAlt: "Blockchain consulting services",
        theme: "dark",
        layout: "half",
        imageSide: "left",
        mediaFullBleed: true,
        cardKind: "text",
      },
      {
        id: "consulting-photo",
        title: "Blockchain consulting",
        image: cardImage(
          "consulting",
          images,
          "/assets/images/industry/cybersecurity.jpg"
        ),
        imageAlt: "Specialist reviewing blockchain data visualizations",
        theme: "light",
        layout: "half",
        imageSide: "right",
        mediaFullBleed: true,
        cardKind: "media",
      },
    ],
    faqs: [
      {
        question: "How do we know if blockchain is the right fit for our problem?",
        answer:
          "We start with a feasibility assessment. If a well-designed traditional database solves your problem just as well, we'll tell you: blockchain is worth the added complexity only when multi-party trust or immutable verification is genuinely required.",
      },
      {
        question: "Do you build public or private blockchain solutions?",
        answer:
          "Both, depending on your use case: private/permissioned chains for controlled business networks, public chains where open verification is the point.",
      },
      {
        question:
          "Can blockchain systems integrate with our existing traditional infrastructure?",
        answer:
          "Yes, we design blockchain components to integrate with existing databases and applications rather than requiring your whole system to move on-chain.",
      },
      {
        question: "What industries is this most relevant for?",
        answer:
          "Supply chain and provenance, financial services, and any multi-party process requiring an auditable, tamper-evident record are the strongest fits we typically see.",
      },
    ],
    faqsSubtitle: "Frequently asked questions about our Blockchain services",
    // Mid CTA intentionally preserved for possible future reuse (matches Product Management)
    // midCta: {
    //   titleBefore: "Let's build ",
    //   titleHighlight: "trust into your system.",
    //   description:
    //     "We work case by case, from smart contract development to full decentralized application builds, integrated cleanly with the traditional systems around them.",
    //   ctaLabel: "Contact Us",
    // },
  };
}

/** @deprecated Prefer getBlockchainContent() so brand logos stay fresh. */
export const blockchainContent = getBlockchainContent();
