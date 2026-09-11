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
import ProjectTypeSelect from "@/components/atoms/ProjectTypeSelect";
import FormSuccessState from "@/components/atoms/FormSuccessState";
import { useCallbackModal } from "@/components/providers/CallbackModalProvider";
import { useLenisControl } from "@/components/providers/SmoothScrollProvider";
import { lockBodyScroll } from "@/lib/lockBodyScroll";
import { cn } from "@/lib/utils";

type ContactModalContextValue = {
  openContactModal: () => void;
  closeContactModal: () => void;
  isOpen: boolean;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return context;
}

const fieldShellClass =
  "flex h-10 items-center rounded-xl border border-[#E5E7EB] bg-white px-3.5 transition-all duration-200 hover:border-[#C7CBD4] focus-within:border-primary-pink focus-within:shadow-[0_0_0_4px_rgba(211,40,122,0.16)]";

const inputClassName =
  "h-full w-full bg-transparent text-[15px] leading-normal text-black outline-none placeholder:text-[#9CA3AF]";

function ContactField({
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

function ContactModal({
  isOpen,
  onClose,
  onReopen,
}: {
  isOpen: boolean;
  onClose: () => void;
  onReopen: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [projectType, setProjectType] = useState("");
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
      setProjectType("");
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
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim() || undefined,
      projectType: projectType || undefined,
      description: String(formData.get("description") ?? "").trim() || undefined,
    };

    const apiBase = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");
    if (!apiBase) {
      setSubmitError("API URL is not configured. Please try again later.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${apiBase}/contact`, {
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
            className="absolute inset-0 bg-black/45 backdrop-blur-[6px]"
            aria-label="Close contact form"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="relative z-10 w-full max-w-3xl overflow-hidden rounded-[12px] border border-[#ECECF3] bg-white shadow-[0_24px_80px_rgba(10,10,26,0.22)]"
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
              className="max-h-[90vh] overflow-y-auto overscroll-contain px-6 py-5 sm:px-8 sm:py-6"
              onWheel={(event) => event.stopPropagation()}
            >
              {submitted ? (
                <FormSuccessState
                  title="Thank you for reaching out!"
                  description="We've received your message and will be in touch shortly."
                  onDone={onClose}
                  doneLabel="Done"
                />
              ) : (
                <>
                  <h2
                    id="contact-modal-title"
                    className="text-center text-[28px] font-semibold tracking-tight text-[#111827] sm:text-[32px]"
                  >
                    Contact Us
                  </h2>
                  <p className="mx-auto mt-1.5 max-w-xl text-center text-sm leading-relaxed text-[#6B7280]">
                    Our project consultant will call you in the next 24 hours to
                    discuss your project scope in detail.
                  </p>
                  <span className="mx-auto mt-2.5 block h-1 w-12 rounded-full bg-primary-pink" />

                  <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <ContactField label="Name" id="contact-name">
                        <div className={fieldShellClass}>
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            required
                            placeholder="Name"
                            className={inputClassName}
                          />
                        </div>
                      </ContactField>

                      <ContactField label="Email" id="contact-email">
                        <div className={fieldShellClass}>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            placeholder="Email"
                            className={inputClassName}
                          />
                        </div>
                      </ContactField>

                      <ContactField label="Phone" id="contact-phone">
                        <div className={fieldShellClass}>
                          <input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            placeholder="Phone Number"
                            className={inputClassName}
                          />
                        </div>
                      </ContactField>

                      <ContactField label="Project Type" id="contact-project-type">
                        <ProjectTypeSelect
                          id="contact-project-type"
                          value={projectType}
                          onChange={setProjectType}
                        />
                      </ContactField>
                    </div>

                    <ContactField label="Description" id="contact-description">
                      <div
                        className={cn(
                          fieldShellClass,
                          "h-auto items-start py-2"
                        )}
                      >
                        <textarea
                          id="contact-description"
                          name="description"
                          rows={3}
                          placeholder="Briefly explain your project"
                          className={cn(
                            inputClassName,
                            "min-h-[72px] resize-none leading-relaxed"
                          )}
                        />
                      </div>
                    </ContactField>

                    {submitError ? (
                      <p className="text-sm text-red-600" role="alert">
                        {submitError}
                      </p>
                    ) : null}

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
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

export default function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openContactModal = useCallback(() => setIsOpen(true), []);
  const closeContactModal = useCallback(() => setIsOpen(false), []);

  return (
    <ContactModalContext.Provider
      value={{ openContactModal, closeContactModal, isOpen }}
    >
      {children}
      <ContactModal
        isOpen={isOpen}
        onClose={closeContactModal}
        onReopen={openContactModal}
      />
    </ContactModalContext.Provider>
  );
}
