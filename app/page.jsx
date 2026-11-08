import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Rss } from "lucide-react";
import { styles } from "../lib/styles";
import { site, personLd, websiteLd } from "../lib/site";
import { getAllDeployments, getAllPosts } from "../lib/content";
import ProofTile from "../components/ProofTile";
import DeploymentCard from "../components/DeploymentCard";
import PostCard from "../components/PostCard";
import JsonLd from "../components/JsonLd";
import BookCall from "../components/BookCall";

// Who I am, what I achieved, what I'm doing. Everything else lives on its
// own page (About, Now, Contact) and is only linked from here.

const recognition = [
  {
    label: "Government ecosystem",
    value: "Integrated with India's NCS",
    href: "/deployments/ncs-job-matching-engine",
  },
  {
    label: "University pilots",
    value: "2 universities · 1,500+ students",
    href: "/deployments/zobique-career-platform",
  },
  {
    label: "Press",
    value: "Featured by India Today",
    href: site.indiaToday,
    external: true,
  },
  {
    label: "Press",
    value: "The Student Entrepreneur",
    href: "https://thestudententrepreneur.org/blog/?p=12090",
    external: true,
  },
];

const companies = [
  {
    kind: "Product",
    name: "Zobique Career Intelligence",
    line: "AI that maps skills to roles and builds personal learning paths for students.",
    href: "https://careerai.zobique.com",
    host: "careerai.zobique.com",
    logo: "/logos/careerai.jpg",
  },
  {
    kind: "Studio",
    name: "Zobique Labs",
    line: "AI agents, workflow automation and custom software, built around how a business actually runs.",
    href: site.org.labs,
    host: "labs.zobique.com",
    logo: "/logos/labs.svg",
  },
  {
    kind: "Product",
    name: "Voicenity",
    line: "Hinglish-first voice agents that call leads and capture qualification details.",
    href: "https://voicenity.zobique.com",
    host: "voicenity.zobique.com",
    logo: "/logos/voicenity.png",
  },
  {
    kind: "Co-founder & CTO",
    name: "doctorrating",
    line: "A healthcare transparency platform for verified doctor websites, built end to end.",
    href: "https://doctorrating.in",
    host: "doctorrating.in",
    logo: "/logos/doctorrating.svg",
  },
];

function SectionHead({ title, href, children }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <h2 className={styles.sectionHeadText}>{title}</h2>
      {href && (
        <Link
          href={href}
          className="shrink-0 text-[14px] font-medium text-accent hover:text-accent-dark"
        >
          {children} →
        </Link>
      )}
    </div>
  );
}

export default function HomePage() {
  const deployments = getAllDeployments()
    .filter((d) => d.frontmatter.featured)
    .slice(0, 3);
  const posts = getAllPosts()
    .filter((p) => !p.frontmatter.draft)
    .slice(0, 3);

  return (
    <div className={`${styles.container} py-16 sm:py-24`}>
      <JsonLd data={websiteLd} />
      <JsonLd data={personLd} />

      {/* Who I am */}
      <section className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-2xl">
          <p className={`${styles.sectionSubText} flex items-center gap-3`}>
            Rishab Chhetri
            <a
              href="/feed.xml"
              target="_blank"
              rel="noopener"
              aria-label="RSS feed"
              title="RSS feed"
              className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black text-accent transition-transform hover:scale-110"
            >
              <Rss size={11} strokeWidth={3} />
            </a>
          </p>
          <h1 className="mt-4 font-serif text-[34px] font-semibold leading-[1.1] text-black-100 xs:text-[40px] sm:text-[48px] md:text-[56px]">
            I turn complex business problems into{" "}
            <span className="text-accent">deployed technology systems.</span>
          </h1>
          <p className="mt-6 text-[15px] leading-[1.7] text-black-100/80 sm:text-[16px]">
            I work with founders and businesses to build AI systems, automation
            and digital products that solve real problems.
          </p>
          <p className="mt-3 text-[15px] leading-[1.7] text-black-100/80 sm:text-[16px]">
            From India&rsquo;s National Career Service to production systems for
            businesses, I focus on technology that works beyond the demo.
          </p>
          <p className="mt-5 text-[15px] font-medium text-black-100">
            Founder,{" "}
            <a
              href={site.org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-dark"
            >
              Zobique
            </a>{" "}
            · CTO,{" "}
            <a
              href="https://doctorrating.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-dark"
            >
              DoctorRating
            </a>
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <BookCall
              className="inline-flex w-full items-center justify-center gap-2 border border-transparent bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-dark sm:w-auto"
            >
              Schedule a consultation <ArrowUpRight size={16} />
            </BookCall>
            <Link
              href="/deployments"
              className="inline-flex w-full items-center justify-center gap-2 border border-black-100 px-6 py-3 font-medium text-black-100 transition-colors hover:bg-black-100 hover:text-white sm:w-auto"
            >
              View deployments <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="shrink-0 self-center">
          <Image
            src="/rishab-hero.jpg"
            alt="Rishab Chhetri"
            width={400}
            height={400}
            priority
            sizes="(min-width: 640px) 260px, 200px"
            className="h-[200px] w-[200px] rounded-full border border-black-100/10 object-cover object-[50%_25%] grayscale transition-[filter] duration-500 hover:grayscale-0 sm:h-[260px] sm:w-[260px]"
          />
        </div>
      </section>

      {/* What I achieved */}
      <section className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {recognition.map((p) => (
          <ProofTile key={p.value} {...p} />
        ))}
      </section>

      {/* What I'm building */}
      <section className="mt-24">
        <SectionHead title="What I'm building" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {companies.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col border border-black-100/10 bg-white p-6 transition-colors hover:border-accent"
            >
              <span className="flex items-center justify-between gap-3">
                <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-secondary">
                  {c.kind}
                </span>
                <Image
                  src={c.logo}
                  alt={`${c.name} logo`}
                  width={40}
                  height={40}
                  unoptimized={c.logo.endsWith(".svg")}
                  className="h-10 w-10 rounded-md border border-black-100/10 bg-white object-contain"
                />
              </span>
              <span className="mt-2 font-serif text-[22px] font-semibold text-black-100 group-hover:text-accent">
                {c.name}
              </span>
              <span className="mt-2 text-[15px] leading-[1.6] text-secondary">
                {c.line}
              </span>
              <span className="mt-auto pt-4 text-[14px] text-accent">{c.host}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Selected field work */}
      <section className="mt-24">
        <SectionHead title="Selected field work" href="/deployments">
          All deployments
        </SectionHead>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {deployments.map((d) => (
            <DeploymentCard key={d.slug} {...d} />
          ))}
        </div>
      </section>

      {/* Writing */}
      <section className="mt-24">
        <SectionHead title="Writing" href="/writing">
          All
        </SectionHead>
        <div>
          {posts.map((p) => (
            <PostCard key={p.slug} {...p} />
          ))}
        </div>
      </section>

      {/* Pointers only; the content lives on its own pages */}
      <section className="mt-24 border-t border-black-100/10 pt-10">
        <p className="text-[16px] leading-[1.8] text-black-100/75">
          More on{" "}
          <Link href="/about" className="font-medium text-accent hover:text-accent-dark">
            who I am
          </Link>
          , what I&rsquo;m{" "}
          <Link href="/now" className="font-medium text-accent hover:text-accent-dark">
            focused on now
          </Link>
          , or{" "}
          <Link href="/contact" className="font-medium text-accent hover:text-accent-dark">
            how to work with me
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
