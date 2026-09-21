import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { styles } from "../../../lib/styles";
import { site } from "../../../lib/site";
import { getAllDeployments, getDeployment } from "../../../lib/content";
import Mdx from "../../../components/Mdx";
import JsonLd from "../../../components/JsonLd";
import Breadcrumbs from "../../../components/Breadcrumbs";

export function generateStaticParams() {
  return getAllDeployments().map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const d = getDeployment(slug);
  if (!d) return {};
  const { title, constraint } = d.frontmatter;
  return {
    title,
    description: constraint,
    alternates: { canonical: `/deployments/${d.slug}` },
    openGraph: {
      type: "article",
      title,
      description: constraint,
      url: `${site.url}/deployments/${d.slug}`,
    },
  };
}

const statusLabel = { live: "Live", pilot: "Pilot", internal: "Internal" };

export default async function DeploymentPage({ params }) {
  const { slug } = await params;
  const d = getDeployment(slug);
  if (!d) notFound();

  const { title, client, period, status, constraint, outcome, stack, links } =
    d.frontmatter;

  const ld = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    abstract: constraint,
    author: { "@type": "Person", name: site.name, url: site.url },
    url: `${site.url}/deployments/${d.slug}`,
  };

  return (
    <article className={`${styles.container} py-16 sm:py-24`}>
      <JsonLd data={ld} />

      <Breadcrumbs
        items={[
          { label: "Deployments", href: "/deployments" },
          { label: title, href: `/deployments/${d.slug}` },
        ]}
      />

      <header className="mt-0 border-b border-black-100/10 pb-8">
        <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] uppercase tracking-[0.14em] text-secondary">
          {client && <span>{client}</span>}
          {period && <span className="text-black-100/30">·</span>}
          {period && <span>{period}</span>}
          {status && (
            <span className="border border-black-100/15 px-2 py-0.5 text-[11px] text-black-100/70">
              {statusLabel[status] || status}
            </span>
          )}
        </div>
        <h1 className="font-serif text-[32px] font-semibold leading-tight text-black-100 sm:text-[40px]">
          {title}
        </h1>
        {constraint && (
          <p className="mt-4 max-w-prose text-[17px] leading-[1.7] text-black-100/75">
            {constraint}
          </p>
        )}
        {stack?.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {stack.map((s) => (
              <li
                key={s}
                className="bg-white px-2.5 py-1 text-[12px] text-secondary ring-1 ring-black-100/10"
              >
                {s}
              </li>
            ))}
          </ul>
        )}
      </header>

      <div className="mt-10 max-w-prose">
        <Mdx source={d.body} />
      </div>

      {outcome && (
        <div className="mt-10 max-w-prose border-l-2 border-accent bg-white p-5">
          <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-accent">
            Outcome
          </span>
          <p className="mt-2 text-[15px] font-medium leading-[1.7] text-black-100">
            {outcome}
          </p>
        </div>
      )}

      {links?.length > 0 && (
        <div className="mt-10 max-w-prose">
          <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-secondary">
            Links
          </span>
          <ul className="mt-3 flex flex-col gap-2">
            {links.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[15px] text-accent hover:text-accent-dark"
                >
                  {p.label} <ArrowUpRight size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
