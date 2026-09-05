import { styles } from "../../lib/styles";
import { site } from "../../lib/site";
import PageHeader from "../../components/PageHeader";

export const metadata = {
  title: "Contact",
  description:
    "How to reach Rishab Chhetri, routed by whether you're a researcher, a potential customer, or an investor or program.",
  alternates: { canonical: "/contact" },
};

const segments = [
  {
    heading: "Researchers",
    body: "Career technology, job-matching, skill-gap modelling, benchmarks and datasets. If there's something worth co-investigating, especially with real deployment data behind it, I'd like to talk.",
    action: { label: site.email, href: `mailto:${site.email}?subject=Research` },
  },
  {
    heading: "Potential customers",
    body: "You need automation for a process that mostly lives in people's heads, WhatsApp, and spreadsheets. That's the work Zobique Labs does. Start with a call or a note about the process you want to fix.",
    actions: [
      { label: "Book a discovery call", href: site.discoveryCall, external: true },
      { label: "Zobique Labs", href: site.org.labs, external: true },
    ],
  },
  {
    heading: "Investors & programs",
    body: "I'm an early-revenue, pre-seed technical founder: government-integrated technology, ₹1L+/month from the studio, university pilots, all built while finishing a B.Tech. Interested in fellowships, accelerators, and programs that get me closer to founders and researchers building at a larger scale, particularly in the US.",
    action: { label: site.email, href: `mailto:${site.email}?subject=Programs` },
  },
];

export default function ContactPage() {
  return (
    <div className={`${styles.container} py-16 sm:py-24`}>
      <PageHeader kicker="Different asks, different framing" title="Contact">
        <p>Pick the row that fits. Direct email is always fine: {" "}
          <a href={`mailto:${site.email}`} className="text-accent hover:text-accent-dark">
            {site.email}
          </a>
          .
        </p>
      </PageHeader>

      <div className="flex flex-col gap-4">
        {segments.map((s) => (
          <div
            key={s.heading}
            className="border border-black-100/10 bg-white p-6 sm:p-8"
          >
            <h2 className="font-serif text-[20px] font-semibold text-black-100">
              {s.heading}
            </h2>
            <p className="mt-2 max-w-prose text-[15px] leading-[1.7] text-secondary">
              {s.body}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {(s.actions || [s.action]).map((a) => (
                <a
                  key={a.href}
                  href={a.href}
                  {...(a.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex items-center border border-black-100/15 px-4 py-2 text-[14px] font-medium text-black-100 transition-colors hover:border-accent hover:text-accent"
                >
                  {a.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
