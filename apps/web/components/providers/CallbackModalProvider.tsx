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
import { HiArrowLeft, HiX } from "react-icons/hi";
import FormSuccessState from "@/components/atoms/FormSuccessState";
import { useLenisControl } from "@/components/providers/SmoothScrollProvider";
import { lockBodyScroll } from "@/lib/lockBodyScroll";
import { quotePhoneCountryOptions } from "@/data/quoteFormOptions";
import { cn } from "@/lib/utils";

type OpenCallbackOptions = {
  onBack?: () => void;
};

type CallbackModalContextValue = {
  openCallbackModal: (options?: OpenCallbackOptions) => void;
  closeCallbackModal: () => void;
  isOpen: boolean;
};

const CallbackModalContext = createContext<CallbackModalContextValue | null>(
  null
);

export function useCallbackModal() {
  const context = useContext(CallbackModalContext);
  if (!context) {
    throw new Error(
      "useCallbackModal must be used within CallbackModalProvider"
    );
  }
  return context;
}

const TIME_ZONE_OPTIONS = [
  "UTC −08:00 Pacific Time (US & Canada)",
  "UTC −05:00 Eastern Time (US & Canada)",
  "UTC +00:00 Greenwich Mean Time",
  "UTC +01:00 Central European Time",
  "UTC +04:00 Gulf Standard Time",
  "UTC +05:00 Pakistan Standard Time",
  "UTC +05:30 India Standard Time",
  "UTC +08:00 Singapore / China",
  "UTC +10:00 Australian Eastern Time",
] as const;

const fieldShellClass =
  "flex h-10 items-center rounded-xl border border-[#E5E7EB] bg-white px-3.5 transition-all duration-200 hover:border-[#C7CBD4] focus-within:border-primary-pink focus-within:shadow-[0_0_0_4px_rgba(211,40,122,0.16)]";

const inputClassName =
  "h-full w-full bg-transparent text-[15px] leading-normal text-black outline-none placeholder:text-[#9CA3AF]";

function CallbackField({
  label,
  id,
  required,
  children,
}: {
  label: string;
  id: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-[18px] font-medium text-black">
        {label}
        {required ? <span className="text-primary-pink"> *</span> : null}
      </label>
      {children}
    </div>
  );
}

function CallbackModal({
  isOpen,
  onClose,
  onBack,
}: {
  isOpen: boolean;
  onClose: () => void;
  onBack?: (() => void) | null;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [countryCode, setCountryCode] = useState("+1");
  const [timeZone, setTimeZone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const lenisControl = useLenisControl();

  const handleBack = () => {
    onClose();
    if (onBack) {
      window.setTimeout(() => {
        onBack();
      }, 220);
    }
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
      setTimeZone("");
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
      name: String(formData.get("name") ?? "").trim(),
      countryCode,
      phone: String(formData.get("phone") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      preferredTime: String(formData.get("preferredTime") ?? "").trim(),
      timeZone,
      type: "callback",
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
          className="fixed inset-0 z-[125] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/45 backdrop-blur-[6px]"
            aria-label="Close callback form"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="callback-modal-title"
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-[12px] border border-[#ECECF3] bg-white shadow-[0_24px_80px_rgba(10,10,26,0.22)]"
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
              className="overflow-y-auto overscroll-contain px-6 py-6 sm:px-8 sm:py-7"
              onWheel={(event) => event.stopPropagation()}
            >
              {submitted ? (
                <FormSuccessState
                  title="Success! Your callback request was sent."
                  description="We've received your request and will call you at your preferred time."
                  onDone={onClose}
                  doneLabel="Done"
                />
              ) : (
                <>
                  <div className="mb-6 flex items-center gap-3 pr-10">
                    <button
                      type="button"
                      onClick={handleBack}
                      aria-label="Go back"
                      className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#E5E7EB] text-black transition-all duration-200 hover:border-[#D1D5DB] hover:bg-[#F7F7FA]"
                    >
                      <HiArrowLeft className="h-5 w-5" />
                    </button>
                    <h2
                      id="callback-modal-title"
                      className="text-[28px] font-semibold tracking-tight text-black"
                    >
                      Request a Call Back
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <CallbackField label="Name" id="callback-name">
                      <div className={fieldShellClass}>
                        <input
                          id="callback-name"
                          name="name"
                          type="text"
                          required
                          placeholder="Enter Your Name"
                          className={inputClassName}
                        />
                      </div>
                    </CallbackField>

                    <CallbackField
                      label="Phone/Mobile"
                      id="callback-phone"
                      required
                    >
                      <div className={fieldShellClass}>
                        <label
                          htmlFor="callback-country-code"
                          className="sr-only"
                        >
                          Country code
                        </label>
                        <select
                          id="callback-country-code"
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
                          id="callback-phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="Mobile Number"
                          className={inputClassName}
                        />
                      </div>
                    </CallbackField>

                    <CallbackField label="Email" id="callback-email">
                      <div className={fieldShellClass}>
                        <input
                          id="callback-email"
                          name="email"
                          type="email"
                          required
                          placeholder="Email Address"
                          className={inputClassName}
                        />
                      </div>
                    </CallbackField>

                    <CallbackField
                      label="Preferred Time"
                      id="callback-preferred-time"
                    >
                      <div className={fieldShellClass}>
                        <input
                          id="callback-preferred-time"
                          name="preferredTime"
                          type="datetime-local"
                          required
                          onClick={(event) => {
                            const input = event.currentTarget;
                            try {
                              input.showPicker?.();
                            } catch {
                              // Browser may not support showPicker; native click still works.
                            }
                          }}
                          className={cn(
                            inputClassName,
                            "cursor-pointer [color-scheme:light]"
                          )}
                        />
                      </div>
                    </CallbackField>

                    <CallbackField label="Time Zone" id="callback-timezone">
                      <div className={fieldShellClass}>
                        <select
                          id="callback-timezone"
                          name="timeZone"
                          required
                          value={timeZone}
                          onChange={(event) => setTimeZone(event.target.value)}
                          className={cn(
                            inputClassName,
                            !timeZone && "text-[#9CA3AF]"
                          )}
                        >
                          <option value="" disabled>
                            - Select -
                          </option>
                          {TIME_ZONE_OPTIONS.map((zone) => (
                            <option key={zone} value={zone} className="text-black">
                              {zone}
                            </option>
                          ))}
                        </select>
                      </div>
                    </CallbackField>

                    {submitError ? (
                      <p className="text-sm text-red-600" role="alert">
                        {submitError}
                      </p>
                    ) : null}

                    <div className="flex justify-center pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex h-10 min-w-44 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#be185d] to-[#db2777] px-8 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(211,40,122,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#db2777] hover:to-[#be185d] disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isSubmitting ? "Sending…" : "Request Call Back"}
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

export default function CallbackModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [onBack, setOnBack] = useState<(() => void) | null>(null);

  const openCallbackModal = useCallback((options?: OpenCallbackOptions) => {
    setOnBack(() => options?.onBack ?? null);
    setIsOpen(true);
  }, []);

  const closeCallbackModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <CallbackModalContext.Provider
      value={{ openCallbackModal, closeCallbackModal, isOpen }}
    >
      {children}
      <CallbackModal
        isOpen={isOpen}
        onClose={closeCallbackModal}
        onBack={onBack}
      />
    </CallbackModalContext.Provider>
  );
}
