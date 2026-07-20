"use client";

import { useState } from "react";
import Image from "next/image";
import HeroBanner from "../../components/HeroBanner";
import styles from "./training.module.css";

export default function Training() {
  const [activeTab, setActiveTab] = useState("CLanguage");

  const courses = [
    { id: "CLanguage", name: "C Language" },
    { id: "CPP", name: "CPP" },
    { id: "Java", name: "Java" },
    { id: "Python", name: "Python" },
    { id: "PHP", name: "PHP" },
    { id: "Laravel", name: "Laravel" },
    { id: "DotNet", name: "Dot Net" },
    { id: "WebDesigning", name: "Web Designing" },
    { id: "MySql", name: "My Sql" },
    { id: "MsSql", name: "Ms Sql" },
    { id: "Oracle", name: "Oracle(SQL, PLSQL)" },
    { id: "MSOffice", name: "MS-Office" },
    { id: "DTP", name: "DTP" },
    { id: "LiveProjects", name: "Live Projects" },
  ];

  return (
    <div>
      <HeroBanner />

      <div className={styles.marketingContainer}>
        <hr className={styles.divider} />

        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h2 className={styles.heroTitle}>Training</h2>
            <p className={styles.heroText}>
              KKCC INFO SYSTEMS Training the all types of Languages and packages. KKCC trained students ready to use the corporate organizations. The training style always follows to corporte level. Students involves directly in live projects.KKCC provides Network administration both Windows,Linux full fledged training.
            </p>
            <a href="/basiccontrols.html" target="_blank" rel="noopener noreferrer" className={styles.heroLink}>
              Testing Practice <svg className={styles.trainingIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
          <div className={styles.heroImageContainer}>
            <div className={styles.heroImageWrapper}>
              <Image src="/images/training.jpg" alt="Training" fill className={styles.imageCover} />
            </div>
          </div>
        </div>

        <div className={styles.coursesSection}>
          <h4 className={styles.coursesTitle}>Courses Offered</h4>
          <div className={styles.coursesGrid}>
            <div className={styles.tabsContainer}>
              <div className={styles.tabsList}>
                {courses.map((course) => (
                  <button
                    key={course.id}
                    onClick={() => setActiveTab(course.id)}
                    className={`${styles.tabButton} ${
                      activeTab === course.id
                        ? styles.tabActive
                        : styles.tabInactive
                    }`}
                  >
                    {course.name}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.contentContainer}>
              {activeTab === "CLanguage" && <div className={styles.courseHeader}>Introuduction of C</div>}
              {activeTab === "CPP" && <div className={styles.courseHeader}>C++</div>}
              {activeTab === "Java" && <div className={styles.courseHeader}>Java</div>}
              {activeTab === "Python" && (
                <div>
                  <h3 className={styles.courseHeader}>Python Basic Programs Questions</h3>
                  <div className={styles.questionList}>
                    <div className={styles.questionItem}>
                      <p className={styles.questionText}>1) Write a program that take a word W as input and prints &quot;Hello&quot; followed by the given word W</p>
                      <div className={styles.codeBlock}>
                        <span className={styles.comment}># Write a program that take a word W as input and prints &quot;Hello&quot; followed by the given word W</span>
                        W = input()<br/>
                        print(&quot;Hello &quot; + W)
                      </div>
                    </div>
                    <div className={styles.questionItem}>
                      <p className={styles.questionText}>2) Write a program that reads a single line of input and print the given input</p>
                      <div className={styles.codeBlock}>
                        s = input()<br/>
                        print(s)
                      </div>
                    </div>
                    <div className={styles.questionItem}>
                      <p className={styles.questionText}>3) For this problem, you need to write code to read a single line of input and print the line after the message &quot;Given Input:&quot;</p>
                      <div className={styles.codeBlock}>
                        s = input()<br/>
                        print(&quot;Given input: &quot; + s)
                      </div>
                    </div>
                    <div className={styles.questionItem}>
                      <p className={styles.questionText}>4) For this problem, you need to write code to read two lines of input and print the second line of input</p>
                      <div className={styles.codeBlock}>
                        d = input()<br/>
                        d = input()<br/>
                        print(d)
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "PHP" && <div className={styles.courseHeader}>PHP</div>}
              {activeTab === "Laravel" && <div className={styles.courseHeader}>Laravel</div>}
              {activeTab === "DotNet" && <div className={styles.courseHeader}>Dot Net</div>}
              {activeTab === "WebDesigning" && <div className={styles.courseHeader}>Web Designing</div>}
              {activeTab === "MySql" && <div className={styles.courseHeader}>My Sql</div>}
              {activeTab === "MsSql" && <div className={styles.courseHeader}>Ms Sql</div>}
              {activeTab === "Oracle" && <div className={styles.courseHeader}>Oracle(SQL, PLSQL)</div>}
              {activeTab === "MSOffice" && <div className={styles.courseHeader}>MS-Office</div>}
              {activeTab === "DTP" && <div className={styles.courseHeader}>DTP</div>}
              {activeTab === "LiveProjects" && <div className={styles.courseHeader}>Live Projects</div>}
            </div>
          </div>
        </div>

        <hr className={styles.divider} />
      </div>
    </div>
  );
}
