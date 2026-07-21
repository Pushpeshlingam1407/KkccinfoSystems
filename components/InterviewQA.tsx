"use client";

import { useState } from "react";
import styles from "./InterviewQA.module.css";

// Mock Data mimicking the teluguittutorials structure
const qaData = {
  html: [
    { q: "What is HTML?", a: "HTML stands for Hyper Text Markup Language. It is the standard markup language for creating Web pages." },
    { q: "What is the difference between HTML elements and tags?", a: "Elements represent structure and content (e.g. <p>Hello</p>), whereas tags are the markers that define the start and end of an element (e.g. <p> and </p>)." },
    { q: "What are HTML attributes?", a: "Attributes provide additional information about HTML elements. They are always specified in the start tag and usually come in name/value pairs like: name=\"value\"." }
  ],
  css: [
    { q: "What is CSS?", a: "CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on screen, paper, or in other media." },
    { q: "Explain the CSS Box Model.", a: "The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content." },
    { q: "What is the difference between relative and absolute positioning?", a: "Relative positioning moves an element relative to its normal position. Absolute positioning moves an element relative to its closest positioned ancestor." }
  ],
  javascript: [
    { q: "What is JavaScript?", a: "JavaScript is a lightweight, interpreted programming language primarily known as the scripting language for Web pages." },
    { q: "What are closures in JavaScript?", a: "A closure is a feature where an inner function has access to the outer (enclosing) function's variables—a scope chain." },
    { q: "Explain let, const, and var.", a: "'var' is function scoped and hoisted. 'let' and 'const' are block scoped. 'const' cannot be reassigned after declaration." }
  ],
  react: [
    { q: "What is React?", a: "React is an open-source front-end JavaScript library for building user interfaces or UI components, maintained by Facebook." },
    { q: "What is the Virtual DOM?", a: "The Virtual DOM is a lightweight copy of the actual DOM. React uses it to improve performance by only updating the real DOM where changes have occurred." },
    { q: "Explain React Hooks.", a: "Hooks are functions that let you 'hook into' React state and lifecycle features from function components." }
  ],
  python: [
    { q: "What is Python?", a: "Python is a high-level, interpreted, general-purpose programming language known for its simple syntax and high readability." },
    { q: "What is the difference between List and Tuple in Python?", a: "Lists are mutable (can be edited), defined with brackets []. Tuples are immutable (cannot be changed), defined with parentheses ()." },
    { q: "Explain PEP 8.", a: "PEP 8 is Python's official style guide, providing guidelines and best practices for writing readable Python code." }
  ],
  java: [
    { q: "What is Java?", a: "Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible (WORA - Write Once, Run Anywhere)." },
    { q: "What are OOPs concepts in Java?", a: "The four main OOP concepts in Java are Abstraction, Encapsulation, Inheritance, and Polymorphism." },
    { q: "What is JDK, JRE, and JVM?", a: "JVM executes bytecode. JRE contains JVM + core libraries to run apps. JDK contains JRE + development tools (compiler, etc.) to develop Java apps." }
  ],
  mysql: [
    { q: "What is MySQL?", a: "MySQL is an open-source relational database management system (RDBMS) based on Structured Query Language (SQL)." },
    { q: "What is the difference between Primary Key and Foreign Key?", a: "A Primary Key uniquely identifies a record in a table and cannot contain NULLs. A Foreign Key points to the Primary Key in another table to establish relationships." },
    { q: "What is a JOIN in SQL?", a: "A JOIN clause combines rows from two or more tables based on a related column between them (e.g. INNER JOIN, LEFT JOIN, RIGHT JOIN)." }
  ],
  clang: [
    { q: "What is C Language?", a: "C is a procedural, general-purpose programming language developed by Dennis Ritchie in 1972 at Bell Labs." },
    { q: "What is a pointer in C?", a: "A pointer is a variable that stores the memory address of another variable." },
    { q: "What is dynamic memory allocation in C?", a: "Dynamic memory allocation allows programs to request memory at runtime using functions like malloc(), calloc(), realloc(), and free()." }
  ]
};

const categories = [
  { id: "html", label: "HTML Q&A" },
  { id: "css", label: "CSS Q&A" },
  { id: "javascript", label: "JavaScript Q&A" },
  { id: "react", label: "React Js Q&A" },
  { id: "python", label: "Python Q&A" },
  { id: "java", label: "Java Q&A" },
  { id: "mysql", label: "MySQL Q&A" },
  { id: "clang", label: "C Language Q&A" },
];

export default function InterviewQA() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof qaData>("html");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryChange = (cat: keyof typeof qaData) => {
    setActiveCategory(cat);
    setOpenIndex(0); // Reset accordion to first item
  };

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <h1 className={styles.title}>Interview Q&A</h1>
        <p className={styles.subtitle}>Master your technical interviews with our comprehensive collection of frequently asked questions and expertly curated answers.</p>
      </div>

      <div className={styles.categoriesWrapper}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id as keyof typeof qaData)}
            className={`${styles.categoryButton} ${
              activeCategory === cat.id ? styles.categoryActive : styles.categoryInactive
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className={styles.qaSection}>
        <h2 className={styles.categoryTitle}>
          {categories.find((c) => c.id === activeCategory)?.label}
        </h2>

        <div className={styles.accordionContainer}>
          {qaData[activeCategory].map((qa, index) => (
            <div key={index} className={styles.accordionItem}>
              <button
                onClick={() => toggleAccordion(index)}
                className={styles.accordionHeader}
                aria-expanded={openIndex === index}
              >
                <span className={styles.questionText}>{qa.q}</span>
                <div className={openIndex === index ? styles.iconWrapperActive : styles.iconWrapper}>
                  <svg
                    className={openIndex === index ? styles.accordionIconRotated : styles.accordionIcon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className={styles.accordionContent}>
                  <p>{qa.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
