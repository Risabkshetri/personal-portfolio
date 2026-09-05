import { styles } from "../../lib/styles";
import { getAllDeployments } from "../../lib/content";
import PageHeader from "../../components/PageHeader";
import DeploymentCard from "../../components/DeploymentCard";

export const metadata = {
  title: "Deployments",
  description:
    "Deep case studies of AI systems built and deployed: the constraint, the architecture, the failure modes, the outcome, and the links to verify it.",
  alternates: { canonical: "/deployments" },
};

export default function DeploymentsPage() {
  const deployments = getAllDeployments();

  return (
    <div className={`${styles.container} py-16 sm:py-24`}>
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
