import { styles } from "../../lib/styles";
import PageHeader from "../../components/PageHeader";

export const metadata = {
  title: "Now",
  description: "What Rishab Chhetri is building and focused on this quarter.",
  alternates: { canonical: "/now" },
};

// A /now page (nownownow.com convention): what's true right now, kept short.
const LAST_UPDATED = "September 2026";

export default function NowPage() {
  return (
    <div className={`${styles.container} py-16 sm:py-24`}>
      <PageHeader kicker={`Updated ${LAST_UPDATED}`} title="Now">
        <p>What I&rsquo;m actually working on this quarter.</p>
      </PageHeader>

      <div className="prose-body max-w-prose">
        <h2>Zobique Labs</h2>
        <p>
          Growing the AI automation studio. It&rsquo;s at ₹1L+/month and the
          current focus is making delivery repeatable: turning the recurring
          engagements (lead qualification, telecalling, internal knowledge
          systems) into a tighter delivery process instead of bespoke every time.
          {/* TODO(rishab): confirm the exact revenue framing. Is it recurring? If
          not, keep it as "₹1L+/month", not "MRR". */}
        </p>

        <h2>Turning services into products</h2>
        <p>
          The engagements keep surfacing the same two or three problems. This
          quarter I&rsquo;m picking one and building it as an actual product
          rather than a repeated custom build.
          {/* TODO(rishab): name it once you're ready to. */}
        </p>

        <h2>The career platform</h2>
        <p>
          Zobique&rsquo;s university side continues on the existing pilots, and
          the NCS integration is live. I&rsquo;m being deliberate about not
          overextending here while Labs is the growth engine.
        </p>

        <h2>Team and the founder-dependency problem</h2>
        <p>
          Small team: one full-time and two interns. The honest constraint is
          that too much still runs through me. Reducing that is a real objective,
          not a line on a slide.
        </p>

        <h2>Looking outward</h2>
        <p>
          Actively trying to connect with people building at a larger scale:
          founders, researchers, and programs, especially in the US ecosystem.
          If that&rsquo;s you, the{" "}
          <a href="/contact">contact page</a> routes by what you&rsquo;re
          reaching out about.
        </p>
      </div>
    </div>
  );
}
