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
import ProjectTypeSelect from "@/components/atoms/ProjectTypeSelect";
import { useLenisControl } from "@/components/providers/SmoothScrollProvider";
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

const inputClassName =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary-pink focus:ring-1 focus:ring-primary-pink";

function ContactField({
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

function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [projectType, setProjectType] = useState("");
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
      setProjectType("");
    }
  }, [isOpen]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            aria-label="Close contact form"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
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
              className="max-h-[90vh] overflow-y-auto overscroll-contain px-6 py-8 sm:px-10 sm:py-10"
              onWheel={(event) => event.stopPropagation()}
            >
              <h2
                id="contact-modal-title"
                className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl"
              >
                Contact Us
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-gray-500 sm:text-base">
                Our project consultant will call you in the next 24 hours to discuss
                your project scope in detail.
              </p>

              {submitted ? (
                <div className="mt-10 rounded-2xl border border-primary-pink/20 bg-primary-pink/5 px-6 py-10 text-center">
                  <p className="text-lg font-medium text-gray-900">
                    Thank you for reaching out!
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    We&apos;ve received your message and will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <ContactField label="Name" id="contact-name">
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Name"
                        className={inputClassName}
                      />
                    </ContactField>

                    <ContactField label="Email" id="contact-email">
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="Email"
                        className={inputClassName}
                      />
                    </ContactField>

                    <ContactField label="Phone" id="contact-phone">
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        placeholder="Phone Number"
                        className={inputClassName}
                      />
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
                    <textarea
                      id="contact-description"
                      name="description"
                      rows={5}
                      placeholder="Briefly explain your project"
                      className={cn(inputClassName, "resize-none")}
                    />
                  </ContactField>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full cursor-pointer rounded-full border-2 border-primary-pink bg-white px-8 py-3.5 text-sm font-semibold text-primary-pink transition-all duration-200 hover:bg-primary-pink hover:text-white"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
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
      <ContactModal isOpen={isOpen} onClose={closeContactModal} />
    </ContactModalContext.Provider>
  );
}
