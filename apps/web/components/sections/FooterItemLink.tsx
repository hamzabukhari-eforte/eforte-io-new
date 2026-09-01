import Link from "next/link";

type FooterItemLinkProps = {
  href: string;
  label: string;
};

export default function FooterItemLink({ href, label }: FooterItemLinkProps) {
  return (
    <Link
      href={href}
      className="group relative inline-block text-sm text-white"
    >
      {label}
      <span
        className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-primary-pink transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100"
        aria-hidden="true"
      />
    </Link>
  );
}
