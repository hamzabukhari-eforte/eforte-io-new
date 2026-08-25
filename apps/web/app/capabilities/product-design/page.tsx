import {
  ProductDesignFaqSection,
  ProductDesignHeroSection,
  ProductDesignProcessSection,
  ProductDesignServicesSection,
  ProductDesignShowcaseSection,
} from "@/components/sections/product-design";
import { VelocityAIInsightsSection } from "@/components/sections/velocity-ai";

export const metadata = {
  title: "Product Design | eForte",
  description:
    "Product design services for UX research, product strategy, UI design, prototyping, validation, and design systems.",
};

export default function ProductDesignPage() {
  return (
    <main className="min-h-screen bg-default text-white">
      <ProductDesignHeroSection />
      <ProductDesignServicesSection />
      <ProductDesignProcessSection />
      <ProductDesignShowcaseSection />
      <ProductDesignFaqSection />
      <VelocityAIInsightsSection />
    </main>
  );
}