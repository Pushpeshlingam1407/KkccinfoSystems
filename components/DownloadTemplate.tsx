"use client";

import { useState } from "react";
import HeroBanner from "./HeroBanner";
import styles from "./DownloadTemplate.module.css";
import { SYLLABUS_DATA } from "../app/training/syllabusData";

interface DownloadTemplateProps {
  title: string;
}

const keyMap: Record<string, string> = {
  "c language": "CLanguage",
  "core java": "Java",
  java: "Java",
  python: "Python",
  html: "WebDesigning",
  css: "WebDesigning",
  javascript: "WebDesigning",
  mysql: "MySql",
};

export default function DownloadTemplate({ title }: DownloadTemplateProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const syllabusKey = keyMap[title.toLowerCase()] || "CLanguage";
  const syllabus = SYLLABUS_DATA[syllabusKey];

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleDownload = () => {
    if (!syllabus) return;

    let content = `=========================================\n`;
    content += `${syllabus.name} Course Syllabus\n`;
    content += `KKCC Info Systems, Ongole\n`;
    content += `=========================================\n\n`;
    content += `Duration: ${syllabus.duration}\n`;
    content += `Prerequisites: ${syllabus.prerequisites}\n\n`;
    content += `Course Summary:\n${syllabus.overview}\n\n`;
    content += `-----------------------------------------\n`;
    content += `Syllabus Modules\n`;
    content += `-----------------------------------------\n\n`;

    syllabus.modules.forEach((mod, index) => {
      content += `Module ${index + 1}: ${mod.title}\n`;
      mod.topics.forEach((topic) => {
        content += `  - ${topic}\n`;
      });
      content += `\n`;
    });

    if (syllabus.projects && syllabus.projects.length > 0) {
      content += `-----------------------------------------\n`;
      content += `Hands-On Projects & Labs\n`;
      content += `-----------------------------------------\n`;
      syllabus.projects.forEach((proj, idx) => {
        content += `  ${idx + 1}. ${proj}\n`;
      });
    }

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${syllabus.name.replace(/\s+/g, "_")}_Syllabus.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!syllabus) {
    return (
      <div>
        <HeroBanner />
        <div className={styles.container}>
          <hr className={styles.divider} />
          <div className={styles.contentWrapper}>
            <h2 className={styles.pageTitle}>{title}</h2>
            <p className={styles.downloadSubtitle}>
              Technology information not found.
            </p>
          </div>
          <hr className={styles.divider} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <HeroBanner />

      <div className={styles.container}>
        <hr className={styles.divider} />

        <div className={styles.contentWrapper}>
          <h2 className={styles.pageTitle}>{syllabus.name} Curriculum</h2>

          <div className={styles.downloadSection}>
            <p className={styles.downloadSubtitle}>
              Get the complete printable learning path and offline resource
              materials for {syllabus.name}.
            </p>
            <button onClick={handleDownload} className={styles.downloadButton}>
              Download Official Syllabus
            </button>
          </div>

          <div className={styles.accordionContainer}>
            {syllabus.modules.map((mod, index) => (
              <div key={index} className={styles.accordionItem}>
                <button
                  onClick={() => toggleAccordion(index)}
                  className={styles.accordionHeader}
                  aria-expanded={openIndex === index}
                >
                  <span className={styles.accordionTitle}>{mod.title}</span>
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
                  <div className={styles.accordionContent}>
                    <ul className="list-disc pl-5 space-y-2">
                      {mod.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="text-slate-600 text-sm">
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
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
