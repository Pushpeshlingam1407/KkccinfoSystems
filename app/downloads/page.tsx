import Link from "next/link";
import styles from "./downloads.module.css";

const downloads = [
  {
    id: "java",
    title: "Java",
    path: "/java",
    colorClass: styles.cardJava,
    icon: "☕",
  },
  {
    id: "python",
    title: "Python",
    path: "/python",
    colorClass: styles.cardPython,
    icon: "🐍",
  },
  {
    id: "html",
    title: "HTML",
    path: "/html",
    colorClass: styles.cardHtml,
    icon: "🌐",
  },
  {
    id: "css",
    title: "CSS",
    path: "/css",
    colorClass: styles.cardCss,
    icon: "🎨",
  },
  {
    id: "mysql",
    title: "MySQL",
    path: "/mysql",
    colorClass: styles.cardMysql,
    icon: "🗄️",
  },
  {
    id: "clang",
    title: "C Lang",
    path: "/clang",
    colorClass: styles.cardClang,
    icon: "⚙️",
  },
  {
    id: "javascript",
    title: "JavaScript",
    path: "/javascript",
    colorClass: styles.cardJavascript,
    icon: "⚡",
  },
];

export default function DownloadsPage() {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.heroSection}>
        <div className={styles.badge}></div>
        <h1 className={styles.heroTitle}>
          Download <span className={styles.titleGradient}>Resources</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Learn faster with curated, production-ready materials. Everything you
          need to master your tech stack in one place.
        </p>
      </section>

      {/* Grid of Circular Cards */}
      <section className={styles.gridSection}>
        <div className={styles.cardsGrid}>
          {downloads.map((item) => (
            <Link key={item.id} href={item.path} className={styles.cardLink}>
              <div className={styles.circularCard}>
                <div className={styles.cardIcon}>{item.icon}</div>
                <span className={styles.cardTitle}>{item.title}</span>
                <div className={`${styles.cardGlow} ${item.colorClass}`}></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className={styles.featuresContainer}>
          <div className={styles.featuresHeader}>
            <h2 className={styles.featuresTitle}>Why Choose These Resources</h2>
            <p className={styles.featuresSubtitle}>
              Meticulously crafted for developers at every stage of their
              journey.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIconBlue}>
                <svg
                  className={styles.featureIconSvg}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className={styles.featureCardTitle}>Beginner Friendly</h3>
              <p className={styles.featureCardText}>
                Structured learning paths designed to take you from absolute
                beginner to production-ready developer smoothly.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIconTeal}>
                <svg
                  className={styles.featureIconSvg}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className={styles.featureCardTitle}>Regularly Updated</h3>
              <p className={styles.featureCardText}>
                Content is continually refreshed to ensure it aligns with the
                latest industry standards and framework versions.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIconPurple}>
                <svg
                  className={styles.featureIconSvg}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className={styles.featureCardTitle}>Cross Platform</h3>
              <p className={styles.featureCardText}>
                Universal materials that work seamlessly whether you&apos;re
                building for web, mobile, or desktop environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Trusted by students worldwide</h2>
          <p className={styles.ctaSubtitle}>
            Join thousands of developers preparing for technical interviews and
            top-tier placements.
          </p>
          <Link href="/training" className={styles.ctaButton}>
            Explore Training
          </Link>
        </div>
      </section>
    </div>
  );
}
