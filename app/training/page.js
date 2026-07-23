"use client";

import { useState } from "react";
import Image from "next/image";
import HeroBanner from "../../components/HeroBanner";
import styles from "./training.module.css";
import { SYLLABUS_DATA } from "./syllabusData";

export default function Training() {
  const [activeTab, setActiveTab] = useState("CLanguage");

  const courses = [
    { id: "CLanguage", name: "C Language", tag: "Foundational" },
    { id: "CPP", name: "C++", tag: "OOP & DSA" },
    { id: "Java", name: "Java", tag: "Enterprise" },
    { id: "Python", name: "Python", tag: "Full Stack" },
    { id: "PHP", name: "PHP", tag: "Web Backend" },
    { id: "Laravel", name: "Laravel", tag: "Framework" },
    { id: "DotNet", name: ".NET Core", tag: "C# Enterprise" },
    { id: "WebDesigning", name: "Web Design", tag: "UI/UX & React" },
    { id: "MySql", name: "MySQL", tag: "Database" },
    { id: "MsSql", name: "MS SQL", tag: "SQL Server" },
    { id: "Oracle", name: "Oracle DB", tag: "PL/SQL" },
    { id: "MSOffice", name: "MS Office", tag: "Productivity" },
    { id: "DTP", name: "DTP", tag: "Graphic Design" },
    { id: "LiveProjects", name: "Live Projects", tag: "Internship" },
  ];

  const currentSyllabus = SYLLABUS_DATA[activeTab];

  return (
    <div className={styles.pageWrapper}>
      <HeroBanner />

      <div className={styles.marketingContainer}>
        {/* Course Header Banner */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroHeaderTag}>
              Professional Training Programs
            </div>
            <h2 className={styles.heroTitle}>
              Master Industry Skills with Real-World Projects
            </h2>
            <p className={styles.heroText}>
              Designed by veteran engineers with 20+ years of software industry
              experience. Our curriculum blends essential theory with practical,
              hands-on lab sessions to make you job-ready.
            </p>
            <a
              href="/basiccontrols.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroLink}
            >
              Interactive Practice Lab{" "}
              <svg
                className={styles.trainingIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
          <div className={styles.heroImageContainer}>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/training.jpg"
                alt="Software Training"
                fill
                className={styles.imageCover}
              />
            </div>
          </div>
        </div>

        {/* Syllabus Section */}
        <div className={styles.coursesSection}>
          <div className={styles.sectionHeaderGroup}>
            <h3 className={styles.coursesTitle}>
              Courses & Curriculum Roadmap
            </h3>
            <p className={styles.coursesSubtitle}>
              Select a track below to explore module details, prerequisites, and
              practical projects.
            </p>
          </div>

          <div className={styles.coursesGrid}>
            {/* Custom Tab Navigation Bar */}
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
                    <span className={styles.tabName}>{course.name}</span>
                    <span className={styles.tabSubTag}>{course.tag}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Syllabus Viewer Area */}
            <div className={styles.contentContainer}>
              {currentSyllabus ? (
                <div className={styles.syllabusMainView}>
                  {/* Top Info Banner */}
                  <div className={styles.syllabusHeader}>
                    <div>
                      <div className={styles.badgeRow}>
                        <span className={styles.syllabusBadge}>
                          {currentSyllabus.badge || "Core Track"}
                        </span>
                        <span className={styles.durationPill}>
                          ⏱️ {currentSyllabus.duration}
                        </span>
                      </div>
                      <h2 className={styles.courseHeader}>
                        {currentSyllabus.name}
                      </h2>
                      <p className={styles.courseDescription}>
                        {currentSyllabus.description}
                      </p>
                    </div>

                    <div className={styles.prereqBox}>
                      <span className={styles.prereqTitle}>
                        Prerequisite Knowledge
                      </span>
                      <span className={styles.prereqValue}>
                        {currentSyllabus.prerequisites}
                      </span>
                    </div>
                  </div>

                  {/* Syllabus Overview */}
                  <div className={styles.overviewBox}>
                    <h4 className={styles.overviewHeader}>Course Summary</h4>
                    <p className={styles.overviewText}>
                      {currentSyllabus.overview}
                    </p>
                  </div>

                  {/* Modules Display */}
                  <div className={styles.modulesSection}>
                    <div className={styles.moduleSectionHeader}>
                      <h3 className={styles.sectionTitle}>
                        Course Syllabus & Learning Modules
                      </h3>
                      <span className={styles.moduleCountTag}>
                        {currentSyllabus.modules.length} Modules Included
                      </span>
                    </div>

                    <div className={styles.modulesGrid}>
                      {currentSyllabus.modules.map((mod, idx) => (
                        <div key={idx} className={styles.moduleCard}>
                          <div className={styles.moduleHeaderBar}>
                            <span className={styles.moduleIndex}>
                              Module {idx + 1}
                            </span>
                          </div>
                          <h4 className={styles.moduleTitle}>{mod.title}</h4>
                          <ul className={styles.topicsList}>
                            {mod.topics.map((topic, tIdx) => (
                              <li key={tIdx} className={styles.topicItem}>
                                <svg
                                  className={styles.checkIcon}
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Practical Assignments / Projects */}
                  {currentSyllabus.projects &&
                    currentSyllabus.projects.length > 0 && (
                      <div className={styles.projectsSection}>
                        <div className={styles.projectSectionHeader}>
                          <h3 className={styles.sectionTitle}>
                            Hands-On Projects & Labs
                          </h3>
                          <p className={styles.projectSectionDesc}>
                            Gain actual industry experience by building these
                            real-world applications under mentor supervision:
                          </p>
                        </div>
                        <div className={styles.projectsGrid}>
                          {currentSyllabus.projects.map((project, pIdx) => (
                            <div key={pIdx} className={styles.projectCard}>
                              <div className={styles.projectBadge}>
                                Project #{pIdx + 1}
                              </div>
                              <h5 className={styles.projectText}>{project}</h5>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              ) : (
                <div className={styles.courseHeader}>{activeTab}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
