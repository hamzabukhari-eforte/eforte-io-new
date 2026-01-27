import Banner from "@/components/sections/Banner";
import TrustedBySection from "@/components/sections/TrustedBySection";
import LegacyToIntelligenceSection from "@/components/sections/LegacyToIntelligenceSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AIWorkflowsSection from "@/components/sections/AIWorkflowsSection";
import StrategicApproachSection from "@/components/sections/StrategicApproachSection";
import VelocityAISection from "@/components/sections/VelocityAISection";
import IntegratedAIOfferingsSection from "@/components/sections/IntegratedAIOfferingsSection";
import ServiceCategoriesSection from "@/components/sections/ServiceCategoriesSection";
import FoundationalDataLayerSection from "@/components/sections/FoundationalDataLayerSection";
import AgenticOrchestrationSection from "@/components/sections/AgenticOrchestrationSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import NavigateAISection from "@/components/sections/NavigateAISection";
import GlobalLeadersSection from "@/components/sections/GlobalLeadersSection";
import SecureDataPracticesSection from "@/components/sections/SecureDataPracticesSection";
import LetsCoCreateSection from "@/components/sections/LetsCoCreateSection";
import { defaultTrustedByLogos } from "@/data/trustedByLogos";
import { defaultServiceCategories } from "@/data/serviceCategories";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      {/* First instance - with heading (carousel) */}
      <TrustedBySection 
        items={defaultTrustedByLogos} 
        heading="Trusted by industry leaders" 
      />
      <LegacyToIntelligenceSection />
      <ServicesSection />
      <AIWorkflowsSection />
      <StrategicApproachSection />
      {/* Service Categories Grid (not carousel) */}
      <ServiceCategoriesSection items={defaultServiceCategories} />
      <VelocityAISection />
      <IntegratedAIOfferingsSection />
      <ServiceCategoriesSection items={defaultServiceCategories} />
      <AgenticOrchestrationSection />
      <ServiceCategoriesSection items={defaultServiceCategories} />
      <FoundationalDataLayerSection />
      <ServiceCategoriesSection items={defaultServiceCategories} />
      <TestimonialsSection />
      <NavigateAISection />
      <GlobalLeadersSection />
      <ServiceCategoriesSection items={defaultServiceCategories} />
      <SecureDataPracticesSection />
      <LetsCoCreateSection />
    </main>
  );
}
