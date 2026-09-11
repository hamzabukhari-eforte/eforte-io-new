"use client";

import {
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import Container from "@/components/atoms/Container";
import { motion } from "@/lib/replayMotion";
import {
  quoteBudgetOptions,
  quoteLookingForOptions,
  quotePhoneCountryOptions,
  quoteProjectTypeOptions,
} from "@/data/quoteFormOptions";
import { cn } from "@/lib/utils";

const inputClassName =
  "w-full rounded-[12px] border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-primary-pink focus:ring-1 focus:ring-primary-pink";

function QuoteField({
  label,
  id,
  children,
  className,
}: {
  label: string;
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <label
        htmlFor={id}
        className="absolute -top-2.5 left-3 z-10 bg-default px-1 text-xs font-medium text-white/60"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function RadioGroup({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset className="min-w-0">
      <legend className="mb-3 text-sm font-semibold text-white">
        {legend}
      </legend>
      <div className="space-y-2.5">
        {options.map((option) => {
          const optionId = `${name}-${option.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase()}`;
          return (
            <label
              key={option}
              htmlFor={optionId}
              className="flex cursor-pointer items-start gap-2.5 text-sm leading-snug text-white/75 transition-colors hover:text-white"
            >
              <input
                id={optionId}
                type="radio"
                name={name}
                value={option}
                checked={value === option}
                onChange={() => onChange(option)}
                required
                className={cn(
                  "mt-0.5 h-4 w-4 shrink-0 cursor-pointer appearance-none rounded-full border border-white/30 bg-transparent",
                  "checked:border-primary-pink checked:bg-primary-pink",
                  "checked:shadow-[inset_0_0_0_3px_#0A0A1A]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-pink/40"
                )}
              />
              <span>{option}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

/** Previous “Meet with our team” portfolio CTA preserved in git history. */
export default function HealthcarePortfolioSection() {
  const [submitted, setSubmitted] = useState(false);
  const [countryCode, setCountryCode] = useState("+1");
  const [lookingFor, setLookingFor] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const resetForm = () => {
    setSubmitted(false);
    setCountryCode("+1");
    setLookingFor("");
    setProjectType("");
    setBudget("");
    setIsSubmitting(false);
    setSubmitError(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      businessName: String(formData.get("businessName") ?? "").trim(),
      firstName: String(formData.get("firstName") ?? "").trim(),
      lastName: String(formData.get("lastName") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      countryCode,
      phone: String(formData.get("phone") ?? "").trim(),
      referralSource:
        String(formData.get("referralSource") ?? "").trim() || undefined,
      lookingFor,
      projectType,
      budget,
      requirements: String(formData.get("requirements") ?? "").trim(),
    };

    const apiBase = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");
    if (!apiBase) {
      setSubmitError("API URL is not configured. Please try again later.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${apiBase}/quotes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-default pt-8 pb-16 md:pt-12 md:pb-24">
      <div
        className="pointer-events-none absolute top-24 left-1/4 h-64 w-64 rounded-full bg-primary-pink/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-1/5 bottom-20 h-72 w-72 rounded-full bg-[#426CFF]/10 blur-3xl"
        aria-hidden
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.12 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-5xl"
        >
          {submitted ? (
            <div className="rounded-[12px] border border-white/10 bg-[#0A0A1A] px-6 py-14 text-center">
              <p className="text-2xl font-semibold text-white">
                Thank you for your quote request!
              </p>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/70">
                We&apos;ve received your details and will get back to you within
                24 hours.
              </p>
              <button
                type="button"
                onClick={resetForm}
                className="mt-8 inline-flex h-10 cursor-pointer items-center justify-center rounded-full border-2 border-primary-pink bg-transparent px-8 text-sm font-semibold text-primary-pink transition-all duration-200 hover:bg-primary-pink hover:text-white"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <div className="text-center">
                <h2 className="text-3xl font-semibold text-white md:text-4xl">
                  How much our services cost?
                </h2>
                <p className="mt-3 text-base font-medium text-white md:text-lg">
                  Get a quote in 24 Hours
                </p>
                <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-primary-pink" />
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-12 space-y-8 rounded-[12px] border border-white/10 bg-[#0A0A1A]/80 p-6 backdrop-blur-sm md:mt-14 md:space-y-10 md:p-10"
              >
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <QuoteField label="Business name" id="health-quote-business">
                    <input
                      id="health-quote-business"
                      name="businessName"
                      type="text"
                      required
                      placeholder="Business name"
                      className={inputClassName}
                    />
                  </QuoteField>

                  <QuoteField label="First Name" id="health-quote-first">
                    <input
                      id="health-quote-first"
                      name="firstName"
                      type="text"
                      required
                      placeholder="First name"
                      className={inputClassName}
                    />
                  </QuoteField>

                  <QuoteField label="Last Name" id="health-quote-last">
                    <input
                      id="health-quote-last"
                      name="lastName"
                      type="text"
                      required
                      placeholder="Last name"
                      className={inputClassName}
                    />
                  </QuoteField>

                  <QuoteField label="Phone" id="health-quote-phone">
                    <div className="flex gap-2">
                      <label htmlFor="health-quote-country" className="sr-only">
                        Country code
                      </label>
                      <select
                        id="health-quote-country"
                        name="countryCode"
                        value={countryCode}
                        onChange={(event) => setCountryCode(event.target.value)}
                        className="w-30 shrink-0 rounded-[12px] border border-white/15 bg-white/5 px-2 py-3 text-sm text-white outline-none focus:border-primary-pink focus:ring-1 focus:ring-primary-pink"
                      >
                        {quotePhoneCountryOptions.map((option) => (
                          <option
                            key={option.code}
                            value={option.code}
                            className="bg-default text-white"
                          >
                            {option.flag} {option.code}
                          </option>
                        ))}
                      </select>
                      <input
                        id="health-quote-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="Phone Number"
                        className={inputClassName}
                      />
                    </div>
                  </QuoteField>

                  <QuoteField label="Email" id="health-quote-email">
                    <input
                      id="health-quote-email"
                      name="email"
                      type="email"
                      required
                      placeholder="Email"
                      className={inputClassName}
                    />
                  </QuoteField>

                  <QuoteField
                    label="How did you hear about us?"
                    id="health-quote-referral"
                  >
                    <input
                      id="health-quote-referral"
                      name="referralSource"
                      type="text"
                      placeholder="Google, Facebook, LinkedIn"
                      className={inputClassName}
                    />
                  </QuoteField>
                </div>

                <div className="grid gap-8 border-t border-white/10 pt-8 md:grid-cols-3 md:gap-6">
                  <RadioGroup
                    legend="What are you looking for?"
                    name="health-lookingFor"
                    options={quoteLookingForOptions}
                    value={lookingFor}
                    onChange={setLookingFor}
                  />
                  <RadioGroup
                    legend="Project type"
                    name="health-projectType"
                    options={quoteProjectTypeOptions}
                    value={projectType}
                    onChange={setProjectType}
                  />
                  <RadioGroup
                    legend="What's your budget?"
                    name="health-budget"
                    options={quoteBudgetOptions}
                    value={budget}
                    onChange={setBudget}
                  />
                </div>

                <QuoteField
                  label="Tell us more about your requirements"
                  id="health-quote-requirements"
                >
                  <textarea
                    id="health-quote-requirements"
                    name="requirements"
                    rows={5}
                    required
                    placeholder="Briefly explain your project"
                    className={cn(inputClassName, "resize-none")}
                  />
                </QuoteField>

                {submitError ? (
                  <p className="text-sm text-red-400" role="alert">
                    {submitError}
                  </p>
                ) : null}

                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex h-11 min-w-[220px] cursor-pointer items-center justify-center rounded-[12px] border-2 border-primary-pink bg-primary-pink px-10 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-pink/90 disabled:cursor-not-allowed disabled:opacity-60 md:min-w-[280px]"
                  >
                    {isSubmitting ? "Sending…" : "Send Message"}
                  </button>
                </div>
              </form>
            </>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
