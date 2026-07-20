"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className={styles.header}>
        <div className={styles.container}>
          <div className={styles.navContent}>
            <div className={styles.logoContainer}>
              <Link href="/" className={styles.logo}>
                KKCC
              </Link>
            </div>
            
            <div className={styles.desktopMenu}>
              <Link href="/" className={styles.navLink}>Home</Link>
              <Link href="/training" className={styles.navLink}>Training</Link>
              <Link href="/downloads" className={styles.navLink}>Downloads</Link>
              <Link href="/about" className={styles.navLink}>About</Link>
              <Link href="/contact" className={styles.navLink}>Contact</Link>
            </div>

            <div className={styles.desktopActions}>
              <a href="https://telugututorial.in/" target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>Quizz Login</a>
              <a href="https://telugututorial.in/admin-register" target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>Register</a>
            </div>

            <div className={styles.mobileMenuContainer}>
              <button onClick={() => setIsOpen(!isOpen)} className={styles.mobileMenuButton}>
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

        {isOpen && (
          <div className={styles.mobileDropdown}>
            <div className={styles.mobileDropdownInner}>
              <Link href="/" onClick={() => setIsOpen(false)} className={styles.mobileNavLink}>Home</Link>
              <Link href="/training" onClick={() => setIsOpen(false)} className={styles.mobileNavLink}>Training</Link>
              <Link href="/downloads" onClick={() => setIsOpen(false)} className={styles.mobileNavLink}>Downloads</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className={styles.mobileNavLink}>About</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className={styles.mobileNavLink}>Contact</Link>
              <a href="https://telugututorial.in/" target="_blank" rel="noopener noreferrer" className={styles.mobileNavLink}>Quizz Login</a>
              <a href="https://telugututorial.in/admin-register" target="_blank" rel="noopener noreferrer" className={styles.mobileNavLink}>Register</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
