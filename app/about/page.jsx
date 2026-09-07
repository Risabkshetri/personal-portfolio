import { styles } from "../../lib/styles";
import { site } from "../../lib/site";
import PageHeader from "../../components/PageHeader";

export const metadata = {
  title: "About",
  description:
    "Rishab Chhetri: from a village in Nepal to building a job-matching engine integrated with India's National Career Service, and running an AI automation studio while finishing a B.Tech.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className={`${styles.container} py-16 sm:py-24`}>
      <PageHeader kicker="The longer version" title="About" />

      <div className="prose-body max-w-prose">
        <p>
          I&rsquo;m a technical founder. I built a job-matching and skill-gap
          engine that is integrated with India&rsquo;s National Career Service
          (NCS), piloted a career-intelligence platform across two universities
          and 1,500+ students, and shipped automation systems for real
          businesses. I run Zobique Labs, an AI automation studio whose agents
          run in production inside real businesses. I&rsquo;m 20, from Nepal, and I did
          all of this while finishing my
          B.Tech in Computer Science at Manav Rachna in India.
        </p>

        <h2>Where this starts</h2>
        <p>
          {/* TODO(rishab): confirm the specifics from the India Today piece. It
          isn't machine-fetchable, so this is drafted from your own outline. */}
          I grew up in a small village of a handful of houses, where getting to
          school meant a long walk each way. The path out was not obvious and
          nobody around me had walked it. So the moves were incremental: a bigger
          town, then a city, then another, each step bought with whatever the
          last one made possible.
        </p>

        <h2>How Zobique started</h2>
        <p>
          It started with friends asking me career questions. What should I
          learn, is this internship worth it, why do my applications go nowhere.
          I kept answering the same things, and it was clear the problem
          wasn&rsquo;t effort. The gap between what people were studying and what
          jobs actually needed was invisible until it was too late to act on.
        </p>
        <p>
          I built a retrieval-augmented system to answer those questions
          properly, grounded in real postings and outcomes rather than generic
          advice. That became Zobique: an AI career-intelligence platform. The
          matching and skill-gap work matured to the point that it was integrated
          with the NCS ecosystem, which is about as far from a classroom project
          as it gets.
        </p>

        <h2>The other half: Zobique Labs</h2>
        <p>
          Alongside the platform, I kept running into a different problem.
          Businesses, especially smaller Indian ones, needed automation, but
          their processes were undocumented, person-dependent, and spread across
          WhatsApp and spreadsheets. The hard part was never &ldquo;which
          model.&rdquo; It was understanding how the business actually worked
          before designing anything.
        </p>
        <p>
          Zobique Labs is where that happens now: real businesses, real
          operational problems, systems that have to hold up in production. It
          funds the work, and it&rsquo;s where the next products come from.
        </p>

        <h2>What I&rsquo;m trying to do</h2>
        <p>
          Build a globally relevant AI company, and get into the rooms where the
          people building at that level actually are. I&rsquo;m early: early
          revenue, small team, a lot still riding on me personally. I&rsquo;m not
          pretending otherwise. But the trajectory is real and it&rsquo;s been
          built one verifiable step at a time.
        </p>

        <p>
          Featured by India Today in a{" "}
          <a href={site.indiaToday} target="_blank" rel="noopener noreferrer">
            founder story
          </a>{" "}
          about building Zobique while pursuing a B.Tech.
        </p>
      </div>
    </div>
  );
}
