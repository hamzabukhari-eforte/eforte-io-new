const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://eforte.io";

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalized === "/" ? "" : normalized}`;
}

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "eForte Solutions",
    url: siteUrl,
    logo: absoluteUrl("/favicon.svg"),
    description:
      "eForte is an AI transformation partner that builds production AI-augmented software and agentic workflows on a governed data layer.",
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "eForte Solutions",
    url: siteUrl,
    publisher: {
      "@type": "Organization",
      name: "eForte Solutions",
      url: siteUrl,
    },
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: absoluteUrl(path),
    url: absoluteUrl(path),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified || datePublished
      ? { dateModified: dateModified ?? datePublished }
      : {}),
    author: {
      "@type": "Organization",
      name: "eForte Solutions",
    },
    publisher: {
      "@type": "Organization",
      name: "eForte Solutions",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/favicon.svg"),
      },
    },
  };
}

export type JobOpeningInput = {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  summary?: string;
  workMode?: string;
};

export function jobPostingsJsonLd(jobs: JobOpeningInput[]) {
  return jobs.map((job) => {
    const isRemote =
      /remote/i.test(job.location) || /remote/i.test(job.workMode ?? "");
    const description =
      job.summary ??
      `${job.title} — ${job.department}. ${job.type}. Location: ${job.location}.`;

    return {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: job.title,
      description,
      identifier: {
        "@type": "PropertyValue",
        name: "eForte Solutions",
        value: job.id,
      },
      datePosted: new Date().toISOString().slice(0, 10),
      employmentType: job.type.toUpperCase().includes("FULL")
        ? "FULL_TIME"
        : job.type,
      hiringOrganization: {
        "@type": "Organization",
        name: "eForte Solutions",
        sameAs: siteUrl,
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: job.location.split("·")[0]?.trim() ?? job.location,
          addressCountry: "PK",
        },
      },
      ...(isRemote ? { jobLocationType: "TELECOMMUTE" } : {}),
      url: absoluteUrl(`/careers/${job.id}`),
    };
  });
}
