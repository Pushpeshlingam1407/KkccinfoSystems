"use client";

import { useState } from "react";
import HeroBanner from "./HeroBanner";
import styles from "./DownloadTemplate.module.css";

interface DownloadTemplateProps {
  title: string;
  totalPrograms?: number;
}

export default function DownloadTemplate({
  title,
  totalPrograms = 80,
}: DownloadTemplateProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Generate an array of programs based on the totalPrograms prop
  const programs = Array.from({ length: totalPrograms }, (_, i) => ({
    id: i + 1,
    title: `Collapsible Group Item #${i + 1}`,
    content: `Prog ${i + 1}`,
  }));

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div>
      <HeroBanner />

      <div className={styles.container}>
        <hr className={styles.divider} />

        <div className={styles.contentWrapper}>
          <h2 className={styles.pageTitle}>{title} Downloads</h2>

          <div className={styles.downloadSection}>
            <p className={styles.downloadSubtitle}>
              Download resources and materials for {title} here.
            </p>
            <button className={styles.downloadButton}>Download Syllabus</button>
          </div>

          <div className={styles.accordionContainer}>
            {programs.map((prog, index) => (
              <div key={prog.id} className={styles.accordionItem}>
                <button
                  onClick={() => toggleAccordion(index)}
                  className={styles.accordionHeader}
                  aria-expanded={openIndex === index}
                >
                  <span className={styles.accordionTitle}>{prog.title}</span>
                  <svg
                    className={
                      openIndex === index
                        ? styles.accordionIconRotated
                        : styles.accordionIcon
                    }
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className={styles.accordionContent}>{prog.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <hr className={styles.divider} />
      </div>
    </div>
  );
}
