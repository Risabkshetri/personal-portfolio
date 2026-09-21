import { styles } from "../../lib/styles";
import { site } from "../../lib/site";
import { getAllDeployments } from "../../lib/content";
import PageHeader from "../../components/PageHeader";
import DeploymentCard from "../../components/DeploymentCard";
import Breadcrumbs from "../../components/Breadcrumbs";

const title = "Deployments";
const description =
  "Deep case studies of AI systems built and deployed: the constraint, the architecture, the failure modes, the outcome, and the links to verify it.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/deployments" },
  openGraph: {
    type: "website",
    title: `${title} · ${site.name}`,
    description,
    url: `${site.url}/deployments`,
  },
};

export default function DeploymentsPage() {
  const deployments = getAllDeployments();

  return (
    <div className={`${styles.container} py-16 sm:py-24`}>
      <Breadcrumbs items={[{ label: "Deployments", href: "/deployments" }]} />
      <PageHeader kicker="Case studies" title="Deployments">
        <p>
          Systems that got built and shipped. Each one follows the same shape:
          the constraint in business terms, what I built, what broke, the
          outcome, and something you can verify.
        </p>
      </PageHeader>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {deployments.map((d) => (
          <DeploymentCard key={d.slug} {...d} />
        ))}
      </div>
    </div>
  );
}
