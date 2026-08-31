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
    "eForte's Product Design Studio helps you craft engaging, intuitive experiences that feel effortless to use and easy to love.",
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