"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [qaDropdownOpen, setQaDropdownOpen] = useState(false);
  const qaDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (qaDropdownRef.current && !qaDropdownRef.current.contains(event.target as Node)) {
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
            <div className={styles.logoContainer}>
              <Link href="/" className={styles.logo}>
                KKCC
              </Link>
            </div>
            
            <div className={styles.desktopMenu}>
              <Link href="/" className={styles.navLink}>Home</Link>
              <Link href="/training" className={styles.navLink}>Training</Link>
              <Link href="/downloads" className={styles.navLink}>Downloads</Link>
              
              {/* Dropdown for Interview Q&A */}
              <div 
                className={styles.dropdownContainer} 
                ref={qaDropdownRef}
                onMouseEnter={() => setQaDropdownOpen(true)}
                onMouseLeave={() => setQaDropdownOpen(false)}
              >
                <button 
                  className={styles.dropdownButton}
                  aria-expanded={qaDropdownOpen}
                >
                  Interview Q&A
                  <svg className={styles.dropdownIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {qaDropdownOpen && (
                  <div className={styles.dropdownMenu}>
                    <div className="py-1">
                      <a href="https://teluguittutorials.com/htmlQA.html" target="_blank" rel="noopener noreferrer" className={styles.dropdownItem}>HTML</a>
                      <a href="https://teluguittutorials.com/cssQA.html" target="_blank" rel="noopener noreferrer" className={styles.dropdownItem}>CSS</a>
                      <a href="https://teluguittutorials.com/javascriptQA.html" target="_blank" rel="noopener noreferrer" className={styles.dropdownItem}>JavaScript</a>
                      <a href="https://teluguittutorials.com/reactJsQA.html" target="_blank" rel="noopener noreferrer" className={styles.dropdownItem}>ReactJs</a>
                      <a href="https://teluguittutorials.com/javaQA.html" target="_blank" rel="noopener noreferrer" className={styles.dropdownItem}>Java</a>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Dropdown for Code Snippets */}
              <div 
                className={styles.dropdownContainer} 
                ref={dropdownRef}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button 
                  className={styles.dropdownButton}
                  aria-expanded={dropdownOpen}
                >
                  Code Snippets
                  <svg className={styles.dropdownIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className={styles.dropdownMenu}>
                    <div className="py-1">
                      <a href="https://teluguittutorials.com/c_programs.html" target="_blank" rel="noopener noreferrer" className={styles.dropdownItem}>C Language</a>
                      <a href="https://teluguittutorials.com/java_programs.html" target="_blank" rel="noopener noreferrer" className={styles.dropdownItem}>Java</a>
                      <a href="https://teluguittutorials.com/python_programs.html" target="_blank" rel="noopener noreferrer" className={styles.dropdownItem}>Python</a>
                      <a href="https://teluguittutorials.com/javascript_programs.html" target="_blank" rel="noopener noreferrer" className={styles.dropdownItem}>JavaScript</a>
                    </div>
                  </div>
                )}
              </div>

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
              
              <div className="border-t border-slate-700 pt-2 pb-2 mt-2">
                <span className="block px-3 py-2 text-sm font-semibold text-slate-400 uppercase tracking-wider">Interview Q&A</span>
                <a href="https://teluguittutorials.com/htmlQA.html" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className={styles.mobileNavLink}>- HTML</a>
                <a href="https://teluguittutorials.com/cssQA.html" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className={styles.mobileNavLink}>- CSS</a>
                <a href="https://teluguittutorials.com/javascriptQA.html" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className={styles.mobileNavLink}>- JavaScript</a>
                <a href="https://teluguittutorials.com/reactJsQA.html" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className={styles.mobileNavLink}>- ReactJs</a>
                <a href="https://teluguittutorials.com/javaQA.html" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className={styles.mobileNavLink}>- Java</a>
              </div>
              
              <div className="border-t border-slate-700 pt-2 pb-2 mt-2">
                <span className="block px-3 py-2 text-sm font-semibold text-slate-400 uppercase tracking-wider">Code Snippets</span>
                <a href="https://teluguittutorials.com/c_programs.html" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className={styles.mobileNavLink}>- C Language</a>
                <a href="https://teluguittutorials.com/java_programs.html" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className={styles.mobileNavLink}>- Java</a>
                <a href="https://teluguittutorials.com/python_programs.html" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className={styles.mobileNavLink}>- Python</a>
                <a href="https://teluguittutorials.com/javascript_programs.html" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className={styles.mobileNavLink}>- JavaScript</a>
              </div>

              <Link href="/about" onClick={() => setIsOpen(false)} className={styles.mobileNavLink}>About</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className={styles.mobileNavLink}>Contact</Link>
              <a href="https://telugututorial.in/" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className={styles.mobileNavLink}>Quizz Login</a>
              <a href="https://telugututorial.in/admin-register" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className={styles.mobileNavLink}>Register</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
