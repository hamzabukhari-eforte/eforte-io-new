import { LegalPageSection } from "@/components/sections/legal";
import { termsAndConditionsSections } from "@/data/legalContent";

export const metadata = {
  title: "Terms and Conditions | eForte",
  description:
    "Read the terms and conditions governing your use of the eForte website and services.",
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPageSection
      eyebrow="Legal"
      title="Terms and Conditions"
      intro="Please read these terms carefully before using our website and services."
      sections={termsAndConditionsSections}
    />
  );
}
