export const quoteLookingForOptions = [
  "Dedicated IT Staff hiring",
  "Create a mobile or web app",
  "Fix my current application",
  "Improve my application",
  "Something else",
] as const;

export const quoteProjectTypeOptions = [
  "Dedicated IT Staff hiring",
  "Mobile App Development",
  "Business Dashboard",
  "Product Designing & Strategy",
  "Startup MVP & Prototyping",
  "Blockchain Development",
] as const;

export const quoteBudgetOptions = [
  "Not specified",
  "less than $15,000",
  "$15,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000 - $500,000",
  "$500,000 or more",
] as const;

export const quotePhoneCountryOptions = [
  { code: "+1", label: "US/CA", flag: "🇺🇸" },
  { code: "+44", label: "UK", flag: "🇬🇧" },
  { code: "+92", label: "PK", flag: "🇵🇰" },
  { code: "+971", label: "AE", flag: "🇦🇪" },
  { code: "+91", label: "IN", flag: "🇮🇳" },
  { code: "+61", label: "AU", flag: "🇦🇺" },
  { code: "+49", label: "DE", flag: "🇩🇪" },
  { code: "+33", label: "FR", flag: "🇫🇷" },
] as const;

export type QuoteLookingFor = (typeof quoteLookingForOptions)[number];
export type QuoteProjectType = (typeof quoteProjectTypeOptions)[number];
export type QuoteBudget = (typeof quoteBudgetOptions)[number];
