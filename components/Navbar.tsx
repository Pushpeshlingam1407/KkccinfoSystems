"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Close menu on resize if it goes back to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <nav className={styles.header}>
        <div className={styles.container}>
          <div className={styles.navContent}>
            {/* Logo */}
            <div className={styles.logoContainer}>
              <Link href="/" className={styles.logo}>
                KKCC Info Systems
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

              {/* Interview Q&A Dropdown */}
              <div className={styles.dropdownContainer}>
                <Link href="/interview-qa" className={styles.dropdownButton}>
                  Interview Q&A
                  <svg className={styles.dropdownIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className={styles.dropdownMenu}>
                  <div className={styles.dropdownMenuInner}>
                    <Link href="/interview-qa?tech=html" className={styles.dropdownItem}>HTML</Link>
                    <Link href="/interview-qa?tech=css" className={styles.dropdownItem}>CSS</Link>
                    <Link href="/interview-qa?tech=javascript" className={styles.dropdownItem}>JavaScript</Link>
                    <Link href="/interview-qa?tech=react" className={styles.dropdownItem}>React JS</Link>
                    <Link href="/interview-qa?tech=java" className={styles.dropdownItem}>Java</Link>
                  </div>
                </div>
              </div>

              {/* Code Snippets Dropdown */}
              <div className={styles.dropdownContainer}>
                <Link href="/code-snippets" className={styles.dropdownButton}>
                  Code Snippets
                  <svg className={styles.dropdownIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className={styles.dropdownMenu}>
                  <div className={styles.dropdownMenuInner}>
                    <Link href="/code-snippets?tech=java" className={styles.dropdownItem}>Java</Link>
                    <Link href="/code-snippets?tech=python" className={styles.dropdownItem}>Python</Link>
                    <Link href="/code-snippets?tech=javascript" className={styles.dropdownItem}>JavaScript</Link>
                    <Link href="/code-snippets?tech=c" className={styles.dropdownItem}>C Language</Link>
                  </div>
                </div>
              </div>

              <Link href="/about" className={styles.navLink}>
                About
              </Link>
              <Link href="/contact" className={styles.navLink}>
                Contact
              </Link>
            </div>

            {/* Desktop Actions */}
            <div className={styles.desktopActions}>
              <Link href="/training" className={styles.primaryButton}>
                Explore Courses
              </Link>
            </div>

            {/* Mobile toggle */}
            <div className={styles.mobileMenuContainer}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={styles.mobileMenuButton}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <svg className={styles.mobileMenuIcon} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
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
              <Link href="/" onClick={() => setIsOpen(false)} className={styles.mobileNavLink}>Home</Link>
              <Link href="/training" onClick={() => setIsOpen(false)} className={styles.mobileNavLink}>Training</Link>
              
              <div className={styles.mobileSection}>
                <span className={styles.mobileSectionTitle}>Resources</span>
                <Link href="/interview-qa" onClick={() => setIsOpen(false)} className={styles.mobileNavLink}>Interview Q&A</Link>
                <Link href="/code-snippets" onClick={() => setIsOpen(false)} className={styles.mobileNavLink}>Code Snippets</Link>
              </div>

              <Link href="/about" onClick={() => setIsOpen(false)} className={styles.mobileNavLink}>About</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className={styles.mobileNavLink}>Contact</Link>
              
              <div className="mt-4 pb-2 px-3">
                 <Link href="/training" onClick={() => setIsOpen(false)} className="w-full inline-flex justify-center items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-md text-base font-medium transition-colors">
                  Explore Courses
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
