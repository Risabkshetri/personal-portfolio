import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// A hard proof point that links to something verifiable. Numbers people
// can't click on read as decoration, so every tile here is a link.
export default function ProofTile({ label, value, href, external }) {
  const inner = (
    <>
      <span className="text-[13px] font-medium uppercase tracking-[0.14em] text-secondary">
        {label}
      </span>
      <span className="mt-2 flex items-start justify-between gap-2 font-serif text-[19px] font-semibold leading-tight text-black-100 group-hover:text-accent">
        {value}
        <ArrowUpRight
          size={16}
          className="mt-1 shrink-0 text-secondary transition-colors group-hover:text-accent"
        />
      </span>
    </>
  );

  const cls =
    "group flex h-full flex-col border border-black-100/10 bg-white p-5 transition-colors hover:border-accent";

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
