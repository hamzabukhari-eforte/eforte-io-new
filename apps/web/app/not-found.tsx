import Link from "next/link";
import Container from "@/components/atoms/Container";

export const metadata = {
  title: "Page not found | eForte",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center bg-default text-white">
      <Container>
        <div className="mx-auto max-w-2xl py-24 text-center md:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-pink">
            404
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Page not found
          </h1>
          <p className="mt-5 text-base leading-relaxed text-desc md:text-lg">
            The page you requested doesn&apos;t exist or may have moved. Use the
            links below to get back on track.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex h-10 items-center justify-center rounded-full bg-primary-pink px-6 py-0 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Back to home
            </Link>
            <Link
              href="/sitemap"
              className="inline-flex h-10 items-center justify-center rounded-full border border-white/20 px-6 py-0 text-sm font-semibold text-white transition-colors hover:border-primary-pink hover:text-primary-pink"
            >
              View sitemap
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
