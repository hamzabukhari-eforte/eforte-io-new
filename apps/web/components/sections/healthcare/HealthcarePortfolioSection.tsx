"use client";

import {
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import Container from "@/components/atoms/Container";
import FormSuccessState from "@/components/atoms/FormSuccessState";
import { useCallbackModal } from "@/components/providers/CallbackModalProvider";
import { motion } from "@/lib/replayMotion";
import {
  quoteBudgetOptions,
  quoteLookingForOptions,
  quotePhoneCountryOptions,
  quoteProjectTypeOptions,
} from "@/data/quoteFormOptions";
import { cn } from "@/lib/utils";

const fieldShellClass =
  "flex h-10 items-center rounded-xl border border-white/15 bg-white/[0.04] px-3.5 transition-all duration-200 hover:border-white/25 focus-within:border-primary-pink focus-within:shadow-[0_0_0_4px_rgba(211,40,122,0.2)]";

const inputClassName =
  "h-full w-full bg-transparent text-[15px] leading-normal text-white outline-none placeholder:text-white/40";

function QuoteField({
  label,
  id,
  children,
  className,
  labelClassName,
}: {
  label: string;
  id: string;
  children: ReactNode;
  className?: string;
  labelClassName?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <label
        htmlFor={id}
        className={cn("text-[14px] font-medium text-white", labelClassName)}
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
      <legend className="mb-2.5 text-[18px] font-semibold text-white">
        {legend}
      </legend>
      <div className="space-y-1.5">
        {options.map((option) => {
          const optionId = `${name}-${option.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase()}`;
          const selected = value === option;
          return (
            <label
              key={option}
              htmlFor={optionId}
              className={cn(
                "flex cursor-pointer items-start gap-2.5 rounded-[12px] border px-3 py-1.5 text-sm leading-snug text-white/80 transition-all duration-200",
                selected
                  ? "border-primary-pink/40 bg-primary-pink/10 text-white"
                  : "border-transparent hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
              )}
            >
              <input
                id={optionId}
                type="radio"
                name={name}
                value={option}
                checked={selected}
                onChange={() => onChange(option)}
                required
                className={cn(
                  "mt-0.5 h-4 w-4 shrink-0 cursor-pointer appearance-none rounded-full border bg-transparent",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-pink/30",
                  selected
                    ? "border-primary-pink bg-primary-pink shadow-[inset_0_0_0_3px_#0A0A1A]"
                    : "border-white/35"
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
  const { openCallbackModal } = useCallbackModal();

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

    try {
      if (apiBase) {
        const response = await fetch(`${apiBase}/quotes`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }
      } else {
        await new Promise((resolve) => window.setTimeout(resolve, 450));
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setSubmitted(true);
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
            <div className="rounded-[12px] border border-white/10 bg-[#0A0A1A] px-6 py-8">
              <FormSuccessState
                tone="dark"
                title="Success! Your quote request was sent."
                description="We've received your details and will get back to you within 24 hours."
                onDone={resetForm}
                doneLabel="Done"
              />
            </div>
          ) : (
            <>
              <div className="text-center">
                <h2 className="text-[28px] font-semibold tracking-tight text-white sm:text-[32px] md:text-4xl">
                  How much our services cost?
                </h2>
                <p className="mx-auto mt-1.5 max-w-xl text-center text-sm leading-relaxed text-desc md:text-base">
                  Get a quote in 24 Hours
                </p>
                <span className="mx-auto mt-2.5 block h-1 w-12 rounded-full bg-primary-pink" />
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-4 rounded-[12px] border border-white/10 bg-[#0A0A1A]/80 p-5 backdrop-blur-sm md:mt-10 md:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <QuoteField label="Business name" id="health-quote-business">
                    <div className={fieldShellClass}>
                      <input
                        id="health-quote-business"
                        name="businessName"
                        type="text"
                        required
                        placeholder="Your company name"
                        className={inputClassName}
                      />
                    </div>
                  </QuoteField>

                  <QuoteField label="First name" id="health-quote-first">
                    <div className={fieldShellClass}>
                      <input
                        id="health-quote-first"
                        name="firstName"
                        type="text"
                        required
                        placeholder="Jane"
                        className={inputClassName}
                      />
                    </div>
                  </QuoteField>

                  <QuoteField label="Last name" id="health-quote-last">
                    <div className={fieldShellClass}>
                      <input
                        id="health-quote-last"
                        name="lastName"
                        type="text"
                        required
                        placeholder="Doe"
                        className={inputClassName}
                      />
                    </div>
                  </QuoteField>

                  <QuoteField label="Phone" id="health-quote-phone">
                    <div className={fieldShellClass}>
                      <label htmlFor="health-quote-country" className="sr-only">
                        Country code
                      </label>
                      <select
                        id="health-quote-country"
                        name="countryCode"
                        value={countryCode}
                        onChange={(event) => setCountryCode(event.target.value)}
                        className="h-full w-[88px] shrink-0 bg-transparent pr-1 text-[15px] text-white outline-none"
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
                      <span
                        className="mx-2 h-6 w-px bg-white/15"
                        aria-hidden
                      />
                      <input
                        id="health-quote-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="Phone number"
                        className={inputClassName}
                      />
                    </div>
                  </QuoteField>

                  <QuoteField label="Email" id="health-quote-email">
                    <div className={fieldShellClass}>
                      <input
                        id="health-quote-email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className={inputClassName}
                      />
                    </div>
                  </QuoteField>

                  <QuoteField
                    label="How did you hear about us?"
                    id="health-quote-referral"
                  >
                    <div className={fieldShellClass}>
                      <input
                        id="health-quote-referral"
                        name="referralSource"
                        type="text"
                        placeholder="Google, LinkedIn, referral"
                        className={inputClassName}
                      />
                    </div>
                  </QuoteField>
                </div>

                <div className="grid gap-5 rounded-[12px] border border-white/10 bg-white/[0.03] p-4 md:grid-cols-3 md:p-5">
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
                  labelClassName="text-[18px] font-semibold"
                >
                  <div className={cn(fieldShellClass, "h-auto items-start py-2")}>
                    <textarea
                      id="health-quote-requirements"
                      name="requirements"
                      rows={3}
                      required
                      placeholder="Briefly explain your project — what you need, goals, and timeline."
                      className={cn(
                        inputClassName,
                        "min-h-[72px] resize-none leading-relaxed"
                      )}
                    />
                  </div>
                </QuoteField>

                {submitError ? (
                  <p className="text-sm text-red-400" role="alert">
                    {submitError}
                  </p>
                ) : null}

                <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex h-10 w-auto min-w-40 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#be185d] to-[#db2777] px-8 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(211,40,122,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#db2777] hover:to-[#be185d] hover:shadow-[0_12px_24px_rgba(211,40,122,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-pink/40 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none"
                  >
                    {isSubmitting ? "Sending…" : "Send Message"}
                  </button>
                  <button
                    type="button"
                    onClick={() => openCallbackModal()}
                    disabled={isSubmitting}
                    className="inline-flex h-10 w-auto min-w-40 cursor-pointer items-center justify-center rounded-full border-2 border-primary-pink bg-transparent px-8 text-sm font-semibold text-primary-pink transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-pink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-pink/40 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Request a Callback
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
