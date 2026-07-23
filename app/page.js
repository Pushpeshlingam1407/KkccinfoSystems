import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const ecosystem = [
  ["Courses & syllabus", "Explore structured learning tracks and their full module plans.", "/training", "01"],
  ["Interview Q&A", "Build confidence with technology-specific questions and answers.", "/interview-qa", "02"],
  ["Code snippets", "Review practical programs in C, Java, Python, and JavaScript.", "/code-snippets", "03"],
  ["Downloads", "Keep course outlines and learning resources close at hand.", "/downloads", "04"],
];

export default function Home() {
  return <main>
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>KKCC Info Systems · Ongole</p>
          <h1 className={styles.heroTitle}>Professional Software Training &amp; Development</h1>
          <p className={styles.heroDescription}>With over 20 years of experience, KKCC Info Systems provides comprehensive training in modern software engineering, from fundamentals to advanced full-stack development.</p>
          <div className={styles.heroActions}>
            <Link href="/training" className={styles.primaryButton}>Explore Training Programs</Link>
            <Link href="/contact" className={styles.secondaryButton}>Contact Us</Link>
          </div>
          <ul className={styles.trustList} aria-label="KKCC highlights"><li>20+ years of teaching experience</li><li>Practical software learning</li><li>Project guidance</li></ul>
        </div>
        <div className={styles.heroVisual}>
          <Image src="/images/InstituteImage.jpg" alt="KKCC Info Systems software training" fill priority sizes="(max-width: 900px) 100vw, 40vw" className={styles.heroImage}/>
        </div>
      </div>
    </section>

    <section className={styles.ecosystemSection}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>Learning ecosystem</p>
          <h2 className={styles.sectionTitle}>Everything needed to keep learning moving.</h2>
          <p className={styles.sectionDescription}>Courses, reference material, interview preparation, and practical code are connected in one place.</p>
        </div>
        <div className={styles.ecosystemGrid}>{ecosystem.map(([title, description, href, index]) => <Link href={href} key={href} className={styles.ecosystemCard}><span>{index}</span><h3>{title}</h3><p>{description}</p><strong>Explore <i aria-hidden="true">→</i></strong></Link>)}</div>
      </div>
    </section>

    <section className={styles.marketingSection}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>How we teach</p>
          <h2 className={styles.sectionTitle}>Our Expertise</h2>
          <p className={styles.sectionDescription}>We bridge the gap between academic learning and industry requirements through structured courses and real-world project development.</p>
        </div>
        <div className={styles.featuresGrid}>
          <article className={styles.featureCard}><svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18s-3.332.477-4.5 1.253" /></svg><h3 className={styles.featureTitle}>Software Training</h3><p className={styles.featureText}>Comprehensive instruction in C, Java, Python, and Full Stack Development. Our curriculum is designed to impart quality education and promote academic excellence.</p><Link href="/training" className={styles.featureLink}>View syllabus <span aria-hidden="true">→</span></Link></article>
          <article className={styles.featureCard}><svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg><h3 className={styles.featureTitle}>Skill Development</h3><p className={styles.featureText}>Practical, hands-on learning focused on modern web technologies including React, Node.js, and database management for aspiring software engineers.</p><Link href="/about" className={styles.featureLink}>Learn more <span aria-hidden="true">→</span></Link></article>
          <article className={styles.featureCard}><svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg><h3 className={styles.featureTitle}>Live Projects</h3><p className={styles.featureText}>We provide project-based training for engineering and degree students, guiding you from scratch to advanced deployment using industry-standard tools.</p><Link href="/about" className={styles.featureLink}>View details <span aria-hidden="true">→</span></Link></article>
        </div>
      </div>
    </section>

    <section className={styles.aboutSection}>
      <div className={styles.sectionContainer}><div className={styles.aboutGrid}><div className={styles.aboutContent}><p className={styles.sectionEyebrow}>Institute perspective</p><h2 className={styles.aboutTitle}>About KKCC Info Systems</h2><p className={styles.aboutText}>Established with a vision to deliver premium computer education, KKCC Info Systems has been a trusted institution for over two decades. We specialize in software training and development, offering courses that adapt to the rapidly changing technology landscape.</p><p className={styles.aboutText}>Our faculty brings deep industry experience to the classroom, ensuring that students not only learn the syntax of programming languages but also understand architectural patterns and best practices required in professional environments.</p><Link href="/about" className={styles.secondaryButton}>Read Our History</Link></div><div className={styles.aboutImageWrapper}><Image src="/images/slide2.jpg" alt="Students learning in a modern classroom environment" fill className={styles.aboutImage} sizes="(max-width: 1024px) 100vw, 50vw"/></div></div></div>
    </section>
  </main>;
}
