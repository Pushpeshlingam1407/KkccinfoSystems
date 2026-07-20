import Link from "next/link";
import HeroBanner from "../../components/HeroBanner";
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
    <div>
      <HeroBanner />
      <div className={styles.marketingContainer}>
        <hr className={styles.divider} />
        
        <div className={styles.headerSection}>
          <h2 className={styles.pageTitle}>Download Resources</h2>
          <p className={styles.pageSubtitle}>
            Learn faster with curated, production-ready materials.
          </p>
        </div>

        <div className={styles.gridSection}>
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
        </div>

        <hr className={styles.divider} />
      </div>
    </div>
  );
}
