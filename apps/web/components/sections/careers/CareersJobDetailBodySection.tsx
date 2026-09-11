import Link from "next/link";
import Container from "@/components/atoms/Container";
import {
  CAREER_CONTACT_EMAILS,
  type JobOpening,
} from "@/data/careersJobs";

type CareersJobDetailBodySectionProps = {
  job: JobOpening;
};

export default function CareersJobDetailBodySection({
  job,
}: CareersJobDetailBodySectionProps) {
  return (
    <section className="bg-black pb-20">
      <Container>
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:gap-14">
          <div>
            <h2 className="text-2xl font-semibold text-white">About the role</h2>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              {job.about}
            </p>

            <h2 className="mt-10 text-2xl font-semibold text-white">
              What you&apos;ll do
            </h2>
            <ul className="mt-4 space-y-3">
              {job.responsibilities.map((item) => (
                <li key={item} className="flex gap-3 text-white/75">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-pink" />
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl font-semibold text-white">
              What we&apos;re looking for
            </h2>
            <ul className="mt-4 space-y-3">
              {job.requirements.map((item) => (
                <li key={item} className="flex gap-3 text-white/75">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-pink" />
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-[16px] border border-white/10 bg-[#0A0A1A] p-6">
            <h2 className="text-lg font-semibold text-white">Apply for this role</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Send your resume to our hiring team, or use the application form
              on the careers page.
            </p>
            <div className="mt-5 space-y-2">
              {CAREER_CONTACT_EMAILS.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                  className="block text-sm font-medium text-primary-pink transition-colors hover:text-white"
                >
                  {email}
                </a>
              ))}
            </div>
            <Link
              href={`/careers?role=${job.id}#join-our-team`}
              className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-full bg-gradient-to-r from-[#be185d] to-[#db2777] px-6 text-sm font-medium text-white transition-all hover:from-[#db2777] hover:to-[#be185d]"
            >
              Apply now
            </Link>
          </aside>
        </div>
      </Container>
    </section>
  );
}
