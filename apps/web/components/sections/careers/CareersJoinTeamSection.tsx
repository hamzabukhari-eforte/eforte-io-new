"use client";

import { useRef, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { jobOpenings } from "@/data/careersJobs";
import { useInViewReplay } from "@/lib/useInViewReplay";
import { cn } from "@/lib/utils";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const fieldClassName =
  "h-12 w-full rounded-[12px] border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary-pink focus:ring-1 focus:ring-primary-pink";

export default function CareersJoinTeamSection() {
  const introRef = useRef<HTMLDivElement>(null);
  const introInView = useInViewReplay(introRef, {
    margin: "0px",
    amount: 0.25,
    once: true,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="join-our-team"
      className="scroll-mt-24 bg-[#f7f9fc] pt-16 pb-16 [color-scheme:light]"
    >
      <Container>
        <motion.div
          ref={introRef}
          initial={{ opacity: 0, y: 24 }}
          animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold text-black md:text-4xl lg:text-[48px]">
            Join Our Team
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-black md:text-lg">
            Tell us a bit about yourself, and we&apos;ll be in touch about
            opportunities that fit your skills and goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.55, delay: 0.1, ease }}
          className="mx-auto max-w-3xl rounded-[12px] border border-gray-200 bg-white p-6 shadow-sm md:p-10"
        >
          {submitted ? (
            <div className="rounded-[12px] border border-primary-pink/20 bg-primary-pink/5 px-6 py-12 text-center">
              <p className="text-lg font-medium text-black">
                Thanks for reaching out!
              </p>
              <p className="mt-2 text-sm text-gray-600">
                We&apos;ve received your details and will be in touch about
                roles that fit your skills and goals.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2"
            >
              <label className="flex flex-col gap-2 text-sm font-medium text-gray-900">
                First Name
                <input
                  name="firstName"
                  type="text"
                  required
                  placeholder="Jane"
                  className={fieldClassName}
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-gray-900">
                Last Name
                <input
                  name="lastName"
                  type="text"
                  required
                  placeholder="Doe"
                  className={fieldClassName}
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-gray-900">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className={fieldClassName}
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-gray-900">
                Phone
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  className={fieldClassName}
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-gray-900 sm:col-span-2">
                Position Interested In
                <select
                  name="position"
                  defaultValue=""
                  className={cn(fieldClassName, "appearance-none")}
                >
                  <option value="" disabled>
                    Select a role
                  </option>
                  {jobOpenings.map((job) => (
                    <option key={job.id} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                  <option value="other">Other / Not listed</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-gray-900 sm:col-span-2">
                Resume Upload
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  className="inline-flex w-full cursor-pointer items-center justify-center rounded-[12px] border border-dashed border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 outline-none transition-colors file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-gray-100 file:px-4 file:py-1 file:text-xs file:font-medium file:text-black hover:border-primary-pink/40 hover:file:bg-gray-200"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-gray-900 sm:col-span-2">
                Message
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Anything else you'd like us to know?"
                  className={cn(fieldClassName, "h-auto resize-none py-3")}
                />
              </label>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full cursor-pointer inline-flex items-center justify-center h-10 rounded-full leading-none bg-linear-to-r from-[#be185d] to-[#db2777] px-8 py-0 text-sm font-semibold text-white shadow-[0_4px_14px_0_rgba(219,39,119,0.39)] transition-all hover:-translate-y-0.5 hover:from-[#db2777] hover:to-[#be185d] sm:w-auto"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
