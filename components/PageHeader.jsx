import { styles } from "../lib/styles";

// Consistent page title + optional standfirst for interior routes.
export default function PageHeader({ kicker, title, children }) {
  return (
    <header className="mb-14">
      {kicker && <p className={`${styles.sectionSubText} mb-3`}>{kicker}</p>}
      <h1 className={styles.sectionHeadText}>{title}</h1>
      {children && (
        <div className="mt-5 max-w-prose text-[16px] leading-[1.8] text-black-100/75">
          {children}
        </div>
      )}
    </header>
  );
}
