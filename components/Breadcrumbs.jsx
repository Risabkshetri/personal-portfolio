import Link from "next/link";
import { site } from "../lib/site";
import JsonLd from "./JsonLd";

// Visible trail + matching BreadcrumbList JSON-LD. `items` excludes Home,
// which is always prepended.
export default function Breadcrumbs({ items }) {
  const trail = [{ label: "Home", href: "/" }, ...items];

  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${site.url}${item.href === "/" ? "" : item.href}`,
    })),
  };

  return (
    <>
      <JsonLd data={ld} />
      <nav
        aria-label="Breadcrumb"
        className="mb-6 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[13px] text-secondary"
      >
        {trail.map((item, i) => (
          <span key={item.href} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-black-100/30">/</span>}
            {i === trail.length - 1 ? (
              <span className="text-black-100/70">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-accent">
                {item.label}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
