import { LegalPageSection } from "@/components/sections/legal";
import { privacyPolicySections } from "@/data/legalContent";

export const metadata = {
  title: "Privacy Policy | eForte",
  description:
    "Learn how eForte collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageSection
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This policy explains how we handle your personal information and protect your privacy when you use our website and services."
      sections={privacyPolicySections}
    />
  );
}
