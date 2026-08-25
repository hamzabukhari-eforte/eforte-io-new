"use client";

export default function FormSection() {
  return (
    <div className="w-full max-w-3xl px-6 py-10 lg:px-10">
      <h2 className="text-2xl lg:text-3xl font-semibold text-white text-center">
        Let’s build intelligence together
      </h2>
      <p className="mt-3 text-sm md:text-base text-white/70 text-center max-w-2xl mx-auto leading-relaxed">
        Share a few details and we’ll reach out with next steps.
      </p>

      <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col gap-2 text-sm text-white/80">
          Name
          <input
            className="h-11 rounded-[12px] bg-white/5 border border-white/10 px-4 outline-none focus:border-primary-pink/60"
            placeholder="Your name"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-white/80">
          Work Email
          <input
            className="h-11 rounded-[12px] bg-white/5 border border-white/10 px-4 outline-none focus:border-primary-pink/60"
            placeholder="you@company.com"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-white/80 md:col-span-2">
          Message
          <textarea
            className="min-h-[120px] rounded-[12px] bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-primary-pink/60"
            placeholder="Tell us about your project"
          />
        </label>

        <div className="md:col-span-2 flex justify-center md:justify-end">
          <button
            type="button"
            className="h-10 px-6 rounded-[12px] bg-primary-pink text-white font-semibold border border-primary-pink hover:bg-primary-pink/90 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

