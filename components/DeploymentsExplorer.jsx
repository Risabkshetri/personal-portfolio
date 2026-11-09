"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const STATUS = { live: "Live", pilot: "Pilot" };

// Left: sticky list of deployment titles. Right: case summaries stacked
// down the page. The list highlights whichever one is in view.
export default function DeploymentsExplorer({ items }) {
  const [active, setActive] = useState(items[0]?.slug);
  const listRef = useRef(null);

  useEffect(() => {
    const els = items.map((d) => document.getElementById(d.slug)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  // Keep the active chip visible in the horizontal mobile bar.
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-slug="${active}"]`);
    if (el && listRef.current?.scrollWidth > listRef.current?.clientWidth) {
      el.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    }
  }, [active]);

  const go = (slug) => (e) => {
    e.preventDefault();
    setActive(slug);
    document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-12">
      {/* List */}
      <aside className="sticky top-[60px] z-20 -mx-6 border-b border-black-100/10 bg-primary/95 px-6 backdrop-blur-sm sm:-mx-16 sm:px-16 lg:top-[84px] lg:mx-0 lg:self-start lg:border-b-0 lg:bg-transparent lg:px-0 lg:backdrop-blur-none">
        <ul
          ref={listRef}
          className="flex gap-2 overflow-x-auto overscroll-x-contain py-3 [scrollbar-width:none] lg:flex-col lg:gap-1 lg:overflow-visible lg:border-l lg:border-black-100/10 lg:py-0"
        >
          {items.map((d) => {
            const on = d.slug === active;
            return (
              <li key={d.slug} className="shrink-0 lg:shrink">
                <a
                  href={`#${d.slug}`}
                  data-slug={d.slug}
                  onClick={go(d.slug)}
                  aria-current={on ? "true" : undefined}
                  className={`block border px-3 py-2 transition-colors lg:-ml-px lg:border-0 lg:border-l-2 lg:py-3 lg:pl-5 ${
                    on
                      ? "border-accent text-accent lg:border-accent"
                      : "border-black-100/15 text-secondary hover:text-black-100 lg:border-transparent"
                  }`}
                >
                  <span className="block whitespace-nowrap text-[14px] font-medium leading-snug lg:whitespace-normal lg:text-[15px]">
                    {d.frontmatter.title}
                  </span>
                  <span className="mt-0.5 hidden text-[12px] text-secondary lg:block">
                    {d.frontmatter.client}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Details */}
      <div className="mt-8 flex flex-col gap-10 lg:mt-0 lg:gap-16">
        {items.map((d) => {
          const f = d.frontmatter;
          return (
            <article
              key={d.slug}
              id={d.slug}
              className="scroll-mt-40 border border-black-100/10 bg-white p-6 sm:p-8 lg:scroll-mt-28"
            >
              <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] font-medium uppercase tracking-[0.14em] text-secondary">
                {f.status && (
                  <span className="text-accent">{STATUS[f.status] || f.status}</span>
                )}
                {f.period && <span>{f.period}</span>}
                {f.client && <span className="normal-case tracking-normal">{f.client}</span>}
              </p>
              <h2 className="mt-3 font-serif text-[24px] font-semibold leading-tight text-black-100 sm:text-[30px]">
                {f.title}
              </h2>

              {f.constraint && (
                <div className="mt-6">
                  <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-secondary">
                    Problem
                  </p>
                  <p className="mt-1 text-[15px] leading-[1.7] text-black-100/80">
                    {f.constraint}
                  </p>
                </div>
              )}
              {f.outcome && (
                <div className="mt-5">
                  <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-accent">
                    Outcome
                  </p>
                  <p className="mt-1 text-[16px] font-medium leading-[1.7] text-black-100">
                    {f.outcome}
                  </p>
                </div>
              )}

              {f.stack?.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {f.stack.map((s) => (
                    <li
                      key={s}
                      className="border border-black-100/10 px-2.5 py-1 text-[12px] text-secondary"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-black-100/10 pt-5">
                <Link
                  href={`/deployments/${d.slug}`}
                  className="group inline-flex items-center gap-2 text-[14px] font-medium text-accent hover:text-accent-dark"
                >
                  Read the case study
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
                {(f.links || []).map((l) =>
                  l.href.startsWith("http") ? (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[14px] text-secondary hover:text-accent"
                    >
                      {l.label} <ArrowUpRight size={13} />
                    </a>
                  ) : (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="text-[14px] text-secondary hover:text-accent"
                    >
                      {l.label}
                    </Link>
                  ),
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
