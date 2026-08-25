"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiX } from "react-icons/hi";
import { useLenisControl } from "@/components/providers/SmoothScrollProvider";
import FormSuccessState from "@/components/atoms/FormSuccessState";
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

const inputClassName =
  "w-full rounded-[12px] border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary-pink focus:ring-1 focus:ring-primary-pink";


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
        className="absolute -top-2.5 left-3 z-10 bg-white px-1 text-xs font-medium text-gray-500"
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
      <legend className="mb-2 text-sm font-semibold text-gray-900 xl:mb-1.5">
        {legend}
      </legend>
      <div className="space-y-2 xl:space-y-1.5">
        {options.map((option) => {
          const optionId = `${name}-${option.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase()}`;
          return (
            <label
              key={option}
              htmlFor={optionId}
              className="flex cursor-pointer items-start gap-2 text-sm leading-snug text-gray-700"
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
                  "mt-0.5 h-4 w-4 shrink-0 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white",
                  "checked:border-primary-pink checked:bg-primary-pink",
                  "checked:shadow-[inset_0_0_0_3px_white]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-pink/30"
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
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [countryCode, setCountryCode] = useState("+1");
  const [lookingFor, setLookingFor] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const lenisControl = useLenisControl();

  useEffect(() => {
    if (!isOpen) return;

    lenisControl?.stop();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      lenisControl?.start();
      document.body.style.overflow = previousOverflow;
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
    } catch {
      setSubmitError("Something went wrong. Please try again.");
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
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            aria-label="Close quote form"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-modal-title"
            className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[12px] bg-white shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
              aria-label="Close"
            >
              <HiX className="h-5 w-5" />
            </button>

            <div
              className="max-h-[90vh] overflow-y-auto overscroll-contain px-6 py-8 sm:px-10 sm:py-10 xl:max-h-[94vh] xl:py-7"
              onWheel={(event) => event.stopPropagation()}
            >
              {submitted ? (
                <FormSuccessState
                  title="Thank you for your quote request!"
                  description="We've received your details and will get back to you within 24 hours."
                  onDone={onClose}
                />
              ) : (
                <>
                  <h2
                    id="quote-modal-title"
                    className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl"
                  >
                    How much our services cost?
                  </h2>
                  <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-gray-500 sm:text-base">
                    Get a quote in 24 Hours
                  </p>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-5 xl:space-y-4">
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-4">
                    <QuoteField label="Business name" id="quote-business-name">
                      <input
                        id="quote-business-name"
                        name="businessName"
                        type="text"
                        required
                        placeholder="Business name"
                        className={inputClassName}
                      />
                    </QuoteField>

                    <QuoteField label="First Name" id="quote-first-name">
                      <input
                        id="quote-first-name"
                        name="firstName"
                        type="text"
                        required
                        placeholder="First name"
                        className={inputClassName}
                      />
                    </QuoteField>

                    <QuoteField label="Last Name" id="quote-last-name">
                      <input
                        id="quote-last-name"
                        name="lastName"
                        type="text"
                        required
                        placeholder="Last name"
                        className={inputClassName}
                      />
                    </QuoteField>

                    <QuoteField label="Phone" id="quote-phone">
                      <div className="flex gap-2">
                        <label htmlFor="quote-country-code" className="sr-only">
                          Country code
                        </label>
                        <select
                          id="quote-country-code"
                          name="countryCode"
                          value={countryCode}
                          onChange={(event) => setCountryCode(event.target.value)}
                          className="w-30 shrink-0 rounded-[12px] border border-gray-300 bg-white px-2 py-3 text-sm text-gray-900 outline-none focus:border-primary-pink focus:ring-1 focus:ring-primary-pink"
                        >
                          {quotePhoneCountryOptions.map((option) => (
                            <option key={option.code} value={option.code}>
                              {option.flag} {option.code}
                            </option>
                          ))}
                        </select>
                        <input
                          id="quote-phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="Phone Number"
                          className={inputClassName}
                        />
                      </div>
                    </QuoteField>

                    <QuoteField label="Email" id="quote-email">
                      <input
                        id="quote-email"
                        name="email"
                        type="email"
                        required
                        placeholder="Email"
                        className={inputClassName}
                      />
                    </QuoteField>

                    <QuoteField label="How did you hear about us?" id="quote-referral">
                      <input
                        id="quote-referral"
                        name="referralSource"
                        type="text"
                        placeholder="Google, Facebook, Linkedin"
                        className={inputClassName}
                      />
                    </QuoteField>
                  </div>

                  <div className="grid gap-6 border-t border-gray-100 pt-6 md:grid-cols-3 xl:gap-5 xl:pt-5">
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
                  >
                    <textarea
                      id="quote-requirements"
                      name="requirements"
                      rows={4}
                      required
                      placeholder="Briefly explain your project"
                      className={cn(inputClassName, "resize-none")}
                    />
                  </QuoteField>

                  {submitError ? (
                    <p className="text-sm text-red-600" role="alert">
                      {submitError}
                    </p>
                  ) : null}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full cursor-pointer h-10 rounded-full border-2 border-primary-pink bg-white px-8 py-0 text-sm font-semibold text-primary-pink transition-all duration-200 hover:bg-primary-pink hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? "Sending…" : "Send Message"}
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
      <QuoteModal isOpen={isOpen} onClose={closeQuoteModal} />
    </QuoteModalContext.Provider>
  );
}
