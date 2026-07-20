"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.text}>
            &copy; {new Date().getFullYear()} KKCC INFO SYSTEMS. &middot;{" "}
            <Link href="/privacy" className={styles.link}>Privacy Policy</Link> &middot;{" "}
            <a href="mailto:info@kkccinfo.com" className={styles.link}>info@kkccinfo.com</a>
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={styles.backToTop}
          >
            Back to top
            <svg className={styles.footerIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
