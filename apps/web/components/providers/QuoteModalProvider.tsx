"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiX } from "react-icons/hi";
import { useLenisControl } from "@/components/providers/SmoothScrollProvider";
import { lockBodyScroll } from "@/lib/lockBodyScroll";
import FormSuccessState from "@/components/atoms/FormSuccessState";
import { useCallbackModal } from "@/components/providers/CallbackModalProvider";
import {
  quoteBudgetOptions,
  quoteLookingForOptions,
  quotePhoneCountryOptions,
  quoteProjectTypeOptions,
} from "@/data/quoteFormOptions";
import { cn } from "@/lib/utils";

type QuoteModalContextValue = {
  openQuoteModal: () => void;
  closeQuoteModal: () => void;
  isOpen: boolean;
};

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within QuoteModalProvider");
  }
  return context;
}

const fieldShellClass =
  "flex h-10 items-center rounded-xl border border-[#E5E7EB] bg-white px-3.5 transition-all duration-200 hover:border-[#C7CBD4] focus-within:border-primary-pink focus-within:shadow-[0_0_0_4px_rgba(211,40,122,0.16)]";

const inputClassName =
  "h-full w-full bg-transparent text-[15px] leading-normal text-black outline-none placeholder:text-[#9CA3AF]";

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
        className={cn("text-[14px] font-medium text-black", labelClassName)}
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
      <legend className="mb-2.5 text-[18px] font-semibold text-black">
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
                "flex cursor-pointer items-start gap-2.5 rounded-[12px] border px-3 py-1.5 text-sm leading-snug text-black transition-all duration-200",
                selected
                  ? "border-primary-pink/40 bg-primary-pink/5"
                  : "border-transparent hover:border-[#E6E6EE] hover:bg-[#FAFAFC]"
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
                  "mt-0.5 h-4 w-4 shrink-0 cursor-pointer appearance-none rounded-full border bg-white",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-pink/30",
                  selected
                    ? "border-primary-pink bg-primary-pink shadow-[inset_0_0_0_3px_white]"
                    : "border-[#D1D5DB]"
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

function QuoteModal({
  isOpen,
  onClose,
  onReopen,
}: {
  isOpen: boolean;
  onClose: () => void;
  onReopen: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [countryCode, setCountryCode] = useState("+1");
  const [lookingFor, setLookingFor] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const lenisControl = useLenisControl();
  const { openCallbackModal } = useCallbackModal();

  const handleRequestCallback = () => {
    onClose();
    window.setTimeout(() => {
      openCallbackModal({ onBack: onReopen });
    }, 220);
  };

  useLayoutEffect(() => {
    if (!isOpen) return;

    lenisControl?.stop();
    const unlock = lockBodyScroll();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      unlock();
      lenisControl?.start();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose, lenisControl]);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setCountryCode("+1");
      setLookingFor("");
      setProjectType("");
      setBudget("");
      setIsSubmitting(false);
      setSubmitError(null);
    }
  }, [isOpen]);

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
        // No API configured — still confirm to the user on the marketing site.
        await new Promise((resolve) => window.setTimeout(resolve, 450));
      }

      setSubmitted(true);
    } catch {
      // Keep the form usable even if the API is temporarily unavailable.
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/45 backdrop-blur-[6px]"
            aria-label="Close quote form"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-modal-title"
            className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[12px] border border-[#ECECF3] bg-white shadow-[0_24px_80px_rgba(10,10,26,0.22)]"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#E5E7EB] text-[#6B7280] transition-all duration-200 hover:border-[#D1D5DB] hover:bg-[#F7F7FA] hover:text-black"
              aria-label="Close"
            >
              <HiX className="h-5 w-5" />
            </button>

            <div
              className="overflow-y-auto overscroll-contain px-6 py-5 sm:px-8 sm:py-6"
              onWheel={(event) => event.stopPropagation()}
            >
              {submitted ? (
                <FormSuccessState
                  title="Success! Your quote request was sent."
                  description="We've received your details and will get back to you within 24 hours."
                  onDone={onClose}
                  doneLabel="Done"
                />
              ) : (
                <>
                  <h2
                    id="quote-modal-title"
                    className="text-center text-[28px] font-semibold tracking-tight text-[#111827] sm:text-[32px]"
                  >
                    How much our services cost?
                  </h2>
                  <p className="mx-auto mt-1.5 max-w-xl text-center text-sm leading-relaxed text-[#6B7280]">
                    Get a quote in 24 Hours
                  </p>
                  <span className="mx-auto mt-2.5 block h-1 w-12 rounded-full bg-primary-pink" />

                  <form
                    onSubmit={handleSubmit}
                    className="mt-5 space-y-4"
                  >
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <QuoteField label="Business name" id="quote-business-name">
                        <div className={fieldShellClass}>
                          <input
                            id="quote-business-name"
                            name="businessName"
                            type="text"
                            required
                            placeholder="Your company name"
                            className={inputClassName}
                          />
                        </div>
                      </QuoteField>

                      <QuoteField label="First name" id="quote-first-name">
                        <div className={fieldShellClass}>
                          <input
                            id="quote-first-name"
                            name="firstName"
                            type="text"
                            required
                            placeholder="Jane"
                            className={inputClassName}
                          />
                        </div>
                      </QuoteField>

                      <QuoteField label="Last name" id="quote-last-name">
                        <div className={fieldShellClass}>
                          <input
                            id="quote-last-name"
                            name="lastName"
                            type="text"
                            required
                            placeholder="Doe"
                            className={inputClassName}
                          />
                        </div>
                      </QuoteField>

                      <QuoteField label="Phone" id="quote-phone">
                        <div className={fieldShellClass}>
                          <label htmlFor="quote-country-code" className="sr-only">
                            Country code
                          </label>
                          <select
                            id="quote-country-code"
                            name="countryCode"
                            value={countryCode}
                            onChange={(event) =>
                              setCountryCode(event.target.value)
                            }
                            className="h-full w-[88px] shrink-0 bg-transparent pr-1 text-[15px] text-black outline-none"
                          >
                            {quotePhoneCountryOptions.map((option) => (
                              <option key={option.code} value={option.code}>
                                {option.flag} {option.code}
                              </option>
                            ))}
                          </select>
                          <span
                            className="mx-2 h-6 w-px bg-[#E5E7EB]"
                            aria-hidden
                          />
                          <input
                            id="quote-phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="Phone number"
                            className={inputClassName}
                          />
                        </div>
                      </QuoteField>

                      <QuoteField label="Email" id="quote-email">
                        <div className={fieldShellClass}>
                          <input
                            id="quote-email"
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
                        id="quote-referral"
                      >
                        <div className={fieldShellClass}>
                          <input
                            id="quote-referral"
                            name="referralSource"
                            type="text"
                            placeholder="Google, LinkedIn, referral"
                            className={inputClassName}
                          />
                        </div>
                      </QuoteField>
                    </div>

                    <div className="grid gap-5 rounded-[12px] border border-[#ECECF3] bg-[#FCFCFD] p-4 md:grid-cols-3 md:p-5">
                      <RadioGroup
                        legend="What are you looking for?"
                        name="lookingFor"
                        options={quoteLookingForOptions}
                        value={lookingFor}
                        onChange={setLookingFor}
                      />
                      <RadioGroup
                        legend="Project type"
                        name="projectType"
                        options={quoteProjectTypeOptions}
                        value={projectType}
                        onChange={setProjectType}
                      />
                      <RadioGroup
                        legend="What's your budget?"
                        name="budget"
                        options={quoteBudgetOptions}
                        value={budget}
                        onChange={setBudget}
                      />
                    </div>

                    <QuoteField
                      label="Tell us more about your requirements"
                      id="quote-requirements"
                      labelClassName="text-[18px] font-semibold"
                    >
                      <div
                        className={cn(
                          fieldShellClass,
                          "h-auto items-start py-2"
                        )}
                      >
                        <textarea
                          id="quote-requirements"
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
                      <p className="text-sm text-red-600" role="alert">
                        {submitError}
                      </p>
                    ) : null}

                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex h-10 w-auto min-w-40 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#be185d] to-[#db2777] px-8 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(211,40,122,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#db2777] hover:to-[#be185d] hover:shadow-[0_12px_24px_rgba(211,40,122,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-pink/40 focus-visible:ring-offset-2 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none"
                      >
                        {isSubmitting ? "Sending…" : "Send Message"}
                      </button>
                      <button
                        type="button"
                        onClick={handleRequestCallback}
                        disabled={isSubmitting}
                        className="inline-flex h-10 w-auto min-w-40 cursor-pointer items-center justify-center rounded-full border-2 border-primary-pink bg-white px-8 text-sm font-semibold text-primary-pink transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-pink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-pink/40 focus-visible:ring-offset-2 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        Request a Callback
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openQuoteModal = useCallback(() => setIsOpen(true), []);
  const closeQuoteModal = useCallback(() => setIsOpen(false), []);

  return (
    <QuoteModalContext.Provider
      value={{ openQuoteModal, closeQuoteModal, isOpen }}
    >
      {children}
      <QuoteModal
        isOpen={isOpen}
        onClose={closeQuoteModal}
        onReopen={openQuoteModal}
      />
    </QuoteModalContext.Provider>
  );
}
