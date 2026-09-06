import Link from "next/link";
import { styles } from "../lib/styles";

export default function NotFound() {
  return (
    <div className={`${styles.container} py-32 text-center`}>
      <p className={styles.sectionSubText}>404</p>
      <h1 className="mt-3 font-serif text-[32px] font-semibold text-black-100">
        Not found
      </h1>
      <p className="mt-3 text-secondary">
        That page doesn&rsquo;t exist.{" "}
        <Link href="/" className="text-accent hover:text-accent-dark">
          Go home
        </Link>
        .
      </p>
    </div>
  );
}
