import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { styles } from "../lib/styles";
import { site } from "../lib/site";
import { getAllDeployments, getAllPosts } from "../lib/content";
import ProofTile from "../components/ProofTile";
import DeploymentCard from "../components/DeploymentCard";
import PostCard from "../components/PostCard";

const proof = [
  {
    label: "Government ecosystem",
    value: "Integrated with India's NCS",
    href: "/deployments/ncs-job-matching-engine",
  },
  {
    label: "Revenue",
    value: "Zobique Labs at ₹1L+/month",
    href: "/now",
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
];

export default function HomePage() {
  const deployments = getAllDeployments()
    .filter((d) => d.frontmatter.featured)
    .slice(0, 3);
  const posts = getAllPosts()
    .filter((p) => !p.frontmatter.draft)
    .slice(0, 3);

  return (
    <div className={`${styles.container} py-16 sm:py-24`}>
      {/* Positioning */}
      <section className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-2xl">
          <h1 className={styles.heroHeadText}>
            Rishab <span className="text-accent">Chhetri</span>
          </h1>
          <p className={`${styles.heroSubText} mt-6`}>
            I build AI systems that get deployed. The job-matching and skill-gap
            engine I built is integrated with India&rsquo;s National Career
            Service (NCS). I run Zobique Labs, an AI automation studio doing
            ₹1L+/month, while finishing my B.Tech.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/deployments"
              className="inline-flex items-center gap-2 border border-transparent bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-dark"
            >
              See deployments <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="border border-black-100 px-6 py-3 font-medium text-black-100 transition-colors hover:bg-black-100 hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="shrink-0 self-center md:self-start">
          <Image
            src="/rishab.png"
            alt="Rishab Chhetri"
            width={200}
            height={200}
            priority
            className="h-[160px] w-[160px] rounded-full border border-black-100/10 object-cover grayscale sm:h-[200px] sm:w-[200px]"
          />
        </div>
      </section>

      {/* Proof tiles */}
      <section className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {proof.map((p) => (
          <ProofTile key={p.label} {...p} />
        ))}
      </section>

      {/* Featured deployments */}
      <section className="mt-24">
        <div className="mb-8 flex items-end justify-between">
          <h2 className={styles.sectionHeadText}>Deployments</h2>
          <Link
            href="/deployments"
            className="text-[14px] font-medium text-accent hover:text-accent-dark"
          >
            All →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {deployments.map((d) => (
            <DeploymentCard key={d.slug} {...d} />
          ))}
        </div>
      </section>

      {/* Featured writing */}
      <section className="mt-24">
        <div className="mb-4 flex items-end justify-between">
          <h2 className={styles.sectionHeadText}>Writing</h2>
          <Link
            href="/writing"
            className="text-[14px] font-medium text-accent hover:text-accent-dark"
          >
            All →
          </Link>
        </div>
        <div>
          {posts.map((p) => (
            <PostCard key={p.slug} {...p} />
          ))}
        </div>
      </section>

      {/* One contact line */}
      <section className="mt-24 border-t border-black-100/10 pt-10">
        <p className="text-[16px] leading-[1.8] text-black-100/75">
          Building something that needs to work in production, researching career
          technology, or running a program for early founders?{" "}
          <Link href="/contact" className="font-medium text-accent hover:text-accent-dark">
            Here&rsquo;s how to reach me
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
