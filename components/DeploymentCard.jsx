import Link from "next/link";
import { ArrowRight } from "lucide-react";

const statusLabel = {
  live: "Live",
  pilot: "Pilot",
  internal: "Internal",
};

export default function DeploymentCard({ slug, frontmatter }) {
  const { title, client, period, status, constraint, outcome } = frontmatter;
  return (
    <Link
      href={`/deployments/${slug}`}
      className="group flex h-full flex-col border border-black-100/10 bg-white p-8 transition-colors hover:border-accent"
    >
      <div className="mb-4 flex-wrap text-start items-start gap-x-3 gap-y-1 text-[12px] uppercase tracking-[0.14em] text-secondary">
        {client && <span>{client}</span>}
        {period && <span className="text-black-100/30">·</span>}
        {period && <span className="text-black-100/70">{period}</span>}
        {status && (
          <span className="border border-black-100/15 px-2 py-0.5 text-[11px] text-black-100/70">
            {statusLabel[status] || status}
          </span>
        )}
      </div>

      <h3 className="font-serif text-[24px] font-semibold text-black-100 group-hover:text-accent">
        {title}
      </h3>

      {constraint && (
        <p className="mt-3 text-[15px] leading-[1.7] text-secondary">
          {constraint}
        </p>
      )}
      {outcome && (
        <p className="mt-4 text-[15px] font-medium leading-[1.7] text-black-100">
          {outcome}
        </p>
      )}

      <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[14px] font-medium text-accent">
        Read the case study
        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
