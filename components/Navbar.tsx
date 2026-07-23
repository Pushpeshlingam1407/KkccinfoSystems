"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [qaDropdownOpen, setQaDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const qaDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
      if (
        qaDropdownRef.current &&
        !qaDropdownRef.current.contains(event.target as Node)
      ) {
        setQaDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header>
      <nav className={styles.header}>
        <div className={styles.container}>
          <div className={styles.navContent}>
            {/* Logo */}
            <div className={styles.logoContainer}>
              <Link href="/" className={styles.logo}>
                KKCC
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className={styles.desktopMenu}>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
              <Link href="/training" className={styles.navLink}>
                Training
              </Link>
              <Link href="/downloads" className={styles.navLink}>
                Downloads
              </Link>

              {/* ── Interview Q&A Dropdown ── */}
              <div className={styles.dropdownContainer} ref={qaDropdownRef}>
                <button
                  onClick={() => {
                    setQaDropdownOpen((v) => !v);
                    setDropdownOpen(false);
                  }}
                  className={styles.dropdownButton}
                  aria-expanded={qaDropdownOpen}
                >
                  Interview Q&A
                  <svg
                    className={`${styles.dropdownIcon} ${qaDropdownOpen ? styles.dropdownIconOpen : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {qaDropdownOpen && (
                  <div className={styles.dropdownMenu}>
                    <div className={styles.dropdownMenuInner}>
                      {[
                        ["html", "HTML"],
                        ["css", "CSS"],
                        ["javascript", "JavaScript"],
                        ["react", "React JS"],
                        ["java", "Java"],
                      ].map(([tech, label]) => (
                        <Link
                          key={tech}
                          href={`/interview-qa?tech=${tech}`}
                          onClick={() => setQaDropdownOpen(false)}
                          className={styles.dropdownItem}
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* ── Code Snippets Dropdown ── */}
              <div className={styles.dropdownContainer} ref={dropdownRef}>
                <button
                  onClick={() => {
                    setDropdownOpen((v) => !v);
                    setQaDropdownOpen(false);
                  }}
                  className={styles.dropdownButton}
                  aria-expanded={dropdownOpen}
                >
                  Code Snippets
                  <svg
                    className={`${styles.dropdownIcon} ${dropdownOpen ? styles.dropdownIconOpen : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className={styles.dropdownMenu}>
                    <div className={styles.dropdownMenuInner}>
                      {[
                        ["c", "C Language"],
                        ["java", "Java"],
                        ["python", "Python"],
                        ["javascript", "JavaScript"],
                      ].map(([tech, label]) => (
                        <Link
                          key={tech}
                          href={`/code-snippets?tech=${tech}`}
                          onClick={() => setDropdownOpen(false)}
                          className={styles.dropdownItem}
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/about" className={styles.navLink}>
                About
              </Link>
              <Link href="/contact" className={styles.navLink}>
                Contact
              </Link>
            </div>

            {/* Mobile toggle */}
            <div className={styles.mobileMenuContainer}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={styles.mobileMenuButton}
                aria-label="Toggle menu"
              >
                <svg
                  className={styles.mobileMenuIcon}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className={styles.mobileDropdown}>
            <div className={styles.mobileDropdownInner}>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={styles.mobileNavLink}
              >
                Home
              </Link>
              <Link
                href="/training"
                onClick={() => setIsOpen(false)}
                className={styles.mobileNavLink}
              >
                Training
              </Link>
              <Link
                href="/downloads"
                onClick={() => setIsOpen(false)}
                className={styles.mobileNavLink}
              >
                Downloads
              </Link>

              {/* Interview Q&A section */}
              <div className={styles.mobileSection}>
                <span className={styles.mobileSectionTitle}>Interview Q&A</span>
                <Link
                  href="/interview-qa?tech=html"
                  onClick={() => setIsOpen(false)}
                  className={styles.mobileNavLink}
                >
                  ― HTML
                </Link>
                <Link
                  href="/interview-qa?tech=css"
                  onClick={() => setIsOpen(false)}
                  className={styles.mobileNavLink}
                >
                  ― CSS
                </Link>
                <Link
                  href="/interview-qa?tech=javascript"
                  onClick={() => setIsOpen(false)}
                  className={styles.mobileNavLink}
                >
                  ― JavaScript
                </Link>
                <Link
                  href="/interview-qa?tech=react"
                  onClick={() => setIsOpen(false)}
                  className={styles.mobileNavLink}
                >
                  ― React JS
                </Link>
                <Link
                  href="/interview-qa?tech=java"
                  onClick={() => setIsOpen(false)}
                  className={styles.mobileNavLink}
                >
                  ― Java
                </Link>
                <Link
                  href="/interview-qa?tech=python"
                  onClick={() => setIsOpen(false)}
                  className={styles.mobileNavLink}
                >
                  ― Python
                </Link>
                <Link
                  href="/interview-qa?tech=mysql"
                  onClick={() => setIsOpen(false)}
                  className={styles.mobileNavLink}
                >
                  ― MySQL
                </Link>
                <Link
                  href="/interview-qa?tech=clang"
                  onClick={() => setIsOpen(false)}
                  className={styles.mobileNavLink}
                >
                  ― C Language
                </Link>
              </div>

              {/* Code Snippets section */}
              <div className={styles.mobileSection}>
                <span className={styles.mobileSectionTitle}>Code Snippets</span>
                <Link
                  href="/code-snippets?tech=html"
                  onClick={() => setIsOpen(false)}
                  className={styles.mobileNavLink}
                >
                  ― HTML
                </Link>
                <Link
                  href="/code-snippets?tech=css"
                  onClick={() => setIsOpen(false)}
                  className={styles.mobileNavLink}
                >
                  ― CSS
                </Link>
                <Link
                  href="/code-snippets?tech=javascript"
                  onClick={() => setIsOpen(false)}
                  className={styles.mobileNavLink}
                >
                  ― JavaScript
                </Link>
                <Link
                  href="/code-snippets?tech=react"
                  onClick={() => setIsOpen(false)}
                  className={styles.mobileNavLink}
                >
                  ― React JS
                </Link>
                <Link
                  href="/code-snippets?tech=clang"
                  onClick={() => setIsOpen(false)}
                  className={styles.mobileNavLink}
                >
                  ― C Language
                </Link>
                <Link
                  href="/code-snippets?tech=java"
                  onClick={() => setIsOpen(false)}
                  className={styles.mobileNavLink}
                >
                  ― Java
                </Link>
                <Link
                  href="/code-snippets?tech=python"
                  onClick={() => setIsOpen(false)}
                  className={styles.mobileNavLink}
                >
                  ― Python
                </Link>
                <Link
                  href="/code-snippets?tech=sql"
                  onClick={() => setIsOpen(false)}
                  className={styles.mobileNavLink}
                >
                  ― MySQL / SQL
                </Link>
              </div>

              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className={styles.mobileNavLink}
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={styles.mobileNavLink}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
