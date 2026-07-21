"use client";

import { useState } from "react";
import styles from "./InterviewQA.module.css";

const qaData = {
  html: [
    { q: "What is HTML?", a: "HTML stands for Hyper Text Markup Language. It is the standard markup language for creating Web pages and is the backbone of every website on the internet." },
    { q: "What is the difference between HTML elements and tags?", a: "Elements represent structure and content (e.g. <p>Hello</p>), whereas tags are the markers that define the start and end of an element (e.g. <p> and </p>)." },
    { q: "What are HTML attributes?", a: "Attributes provide additional information about HTML elements. They are always specified in the start tag and usually come in name/value pairs like: name=\"value\"." },
    { q: "What is the purpose of the DOCTYPE declaration?", a: "The <!DOCTYPE html> declaration tells the browser which version of HTML the page is using. It must be the very first line in an HTML document, before the <html> tag." },
    { q: "What is the difference between <div> and <span>?", a: "<div> is a block-level element used to group larger sections of content. <span> is an inline element used to group smaller pieces of text or inline content within a block." },
    { q: "What are semantic HTML elements?", a: "Semantic elements clearly describe their meaning to both the browser and the developer. Examples include <header>, <footer>, <article>, <section>, <nav>, and <main>." },
  ],
  css: [
    { q: "What is CSS?", a: "CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on screen, paper, or in other media." },
    { q: "Explain the CSS Box Model.", a: "The CSS box model is essentially a box that wraps around every HTML element. It consists of: content, padding, borders, and margins - from inside to outside." },
    { q: "What is the difference between relative and absolute positioning?", a: "Relative positioning moves an element relative to its normal position without removing it from the document flow. Absolute positioning removes it from flow and positions it relative to its closest positioned ancestor." },
    { q: "What is Flexbox?", a: "Flexbox is a CSS layout model that provides an efficient way to lay out, align and distribute space among items in a container, even when their size is unknown." },
    { q: "What is the difference between display: none and visibility: hidden?", a: "display: none removes the element from the document flow entirely (no space taken). visibility: hidden hides the element but it still takes up its space in the layout." },
    { q: "What is CSS specificity?", a: "CSS specificity is the algorithm browsers use to determine which CSS rule takes precedence. Inline styles > IDs > Classes/Attributes/Pseudo-classes > Elements/Pseudo-elements." },
  ],
  javascript: [
    { q: "What is JavaScript?", a: "JavaScript is a lightweight, interpreted programming language primarily known as the scripting language for Web pages. It supports event-driven, functional, and imperative programming styles." },
    { q: "What are closures in JavaScript?", a: "A closure is a feature where an inner function has access to the outer (enclosing) function's variables even after the outer function has returned. It forms a scope chain." },
    { q: "Explain let, const, and var.", a: "'var' is function-scoped and hoisted. 'let' and 'const' are block-scoped. 'const' cannot be reassigned after declaration. 'let' can be reassigned but not redeclared in the same scope." },
    { q: "What is the difference between == and ===?", a: "== compares values with type coercion (e.g., '5' == 5 is true). === compares both value and type without coercion (e.g., '5' === 5 is false). Always prefer ===." },
    { q: "What is the Event Loop?", a: "The Event Loop is what allows JavaScript to perform non-blocking operations. It continuously checks the call stack and, when it's empty, pushes callbacks from the task queue onto the stack." },
    { q: "What are Promises in JavaScript?", a: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected." },
  ],
  react: [
    { q: "What is React?", a: "React is an open-source front-end JavaScript library for building user interfaces or UI components. It's maintained by Meta (Facebook) and a large community of developers." },
    { q: "What is the Virtual DOM?", a: "The Virtual DOM is a lightweight copy of the actual DOM. React uses it to improve performance by only updating the real DOM where actual changes have occurred, using a diffing algorithm." },
    { q: "Explain React Hooks.", a: "Hooks are functions that let you 'hook into' React state and lifecycle features from function components. Common hooks include useState, useEffect, useContext, and useRef." },
    { q: "What is the difference between state and props?", a: "Props are read-only inputs passed from parent to child components. State is internal data managed within a component that can change over time and trigger re-renders when updated." },
    { q: "What is useEffect used for?", a: "useEffect is a Hook that lets you perform side effects in function components such as data fetching, subscriptions, or manually changing the DOM after each render." },
    { q: "What is React Context?", a: "React Context provides a way to pass data through the component tree without having to pass props manually at every level. It's designed for sharing 'global' data like theme, locale, or auth." },
  ],
  python: [
    { q: "What is Python?", a: "Python is a high-level, interpreted, general-purpose programming language known for its simple, readable syntax and a philosophy emphasizing code readability (PEP 20)." },
    { q: "What is the difference between List and Tuple in Python?", a: "Lists are mutable (can be edited) and defined with square brackets []. Tuples are immutable (cannot be changed after creation) and defined with parentheses ()." },
    { q: "Explain PEP 8.", a: "PEP 8 is Python's official style guide, providing guidelines and best practices for writing clean, readable Python code including indentation (4 spaces), naming conventions, and line length." },
    { q: "What are Python decorators?", a: "A decorator is a design pattern in Python that allows a user to add new functionality to an existing object without modifying its structure. They are represented by the @ symbol." },
    { q: "What is a lambda function?", a: "A lambda function is a small anonymous function defined with the 'lambda' keyword. It can take any number of arguments but can only have one expression. E.g., lambda x: x + 1." },
    { q: "What is the difference between append() and extend()?", a: "append() adds a single element to the end of a list. extend() adds all elements of an iterable (list, tuple, etc.) to the end of the list." },
  ],
  java: [
    { q: "What is Java?", a: "Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible. Its WORA (Write Once, Run Anywhere) philosophy makes it platform-independent." },
    { q: "What are OOPs concepts in Java?", a: "The four core OOP concepts in Java are: Abstraction (hiding complexity), Encapsulation (bundling data/methods), Inheritance (acquiring parent properties), and Polymorphism (many forms)." },
    { q: "What is JDK, JRE, and JVM?", a: "JVM executes Java bytecode. JRE = JVM + core libraries needed to run Java applications. JDK = JRE + development tools like compiler (javac) needed to build Java applications." },
    { q: "What is the difference between an interface and an abstract class?", a: "An abstract class can have both abstract and concrete methods and state. An interface can only have abstract methods (pre-Java 8) and constants. A class can implement multiple interfaces but extend only one class." },
    { q: "What is Exception Handling in Java?", a: "Exception handling is a mechanism to handle runtime errors so the normal flow isn't disrupted. It uses try-catch-finally blocks. Exceptions are objects that extend java.lang.Throwable." },
    { q: "What is the difference between ArrayList and LinkedList?", a: "ArrayList uses a dynamic array for storage, providing O(1) access but O(n) insertion/deletion. LinkedList uses a doubly linked list, providing O(1) insertion/deletion but O(n) access." },
  ],
  mysql: [
    { q: "What is MySQL?", a: "MySQL is an open-source relational database management system (RDBMS) based on Structured Query Language (SQL). It's one of the most widely used databases powering many web applications." },
    { q: "What is the difference between Primary Key and Foreign Key?", a: "A Primary Key uniquely identifies a record in a table and cannot contain NULLs. A Foreign Key is a field in one table that refers to the Primary Key in another table to establish a relationship." },
    { q: "What is a JOIN in SQL?", a: "A JOIN clause combines rows from two or more tables based on a related column between them. Types include INNER JOIN (matching rows), LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN." },
    { q: "What is the difference between WHERE and HAVING?", a: "WHERE filters rows before grouping (used with SELECT, UPDATE, DELETE). HAVING filters groups after GROUP BY has been applied. You can use HAVING with aggregate functions like COUNT, SUM." },
    { q: "What is database normalization?", a: "Normalization is the process of organizing database data to reduce redundancy and improve data integrity. Common normal forms are 1NF, 2NF, 3NF and BCNF." },
    { q: "What are indexes in MySQL?", a: "An index is a data structure that improves the speed of data retrieval. It works like a book's index — instead of scanning all rows, MySQL can jump directly to the relevant rows." },
  ],
  clang: [
    { q: "What is C Language?", a: "C is a general-purpose, procedural programming language developed by Dennis Ritchie in 1972 at Bell Labs. It is foundational to many modern languages including C++, Java, and C#." },
    { q: "What is a pointer in C?", a: "A pointer is a variable that stores the memory address of another variable. Pointers are declared with * and dereferenced with * to access the value at the stored address." },
    { q: "What is dynamic memory allocation in C?", a: "Dynamic memory allocation allows programs to request memory at runtime. Key functions are malloc() (allocate), calloc() (allocate + zero-initialize), realloc() (resize), and free() (release)." },
    { q: "What is the difference between struct and union?", a: "In a struct, each member has its own memory location and the total size is the sum of all members. In a union, all members share the same memory location and the size equals the largest member." },
    { q: "What are header files in C?", a: "Header files (.h) contain declarations of functions, macros, and data types. They are included with #include directive to allow code reuse across multiple files. E.g., #include <stdio.h>." },
    { q: "What is the difference between call by value and call by reference?", a: "Call by value passes a copy of the argument; changes do not affect the original. Call by reference passes the address of the argument; changes affect the original variable." },
  ],
};

const categories = [
  { id: "html",       label: "HTML",        icon: "🌐", color: "#f97316" },
  { id: "css",        label: "CSS",         icon: "🎨", color: "#3b82f6" },
  { id: "javascript", label: "JavaScript",  icon: "⚡", color: "#eab308" },
  { id: "react",      label: "React JS",    icon: "⚛️", color: "#06b6d4" },
  { id: "python",     label: "Python",      icon: "🐍", color: "#22c55e" },
  { id: "java",       label: "Java",        icon: "☕", color: "#ef4444" },
  { id: "mysql",      label: "MySQL",       icon: "🗄️", color: "#a855f7" },
  { id: "clang",      label: "C Language",  icon: "⚙️", color: "#64748b" },
];

export default function InterviewQA() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof qaData>("html");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryChange = (cat: keyof typeof qaData) => {
    setActiveCategory(cat);
    setOpenIndex(0);
  };

  const currentQA = qaData[activeCategory];
  const currentCat = categories.find((c) => c.id === activeCategory);
  const totalQ = Object.values(qaData).reduce((acc, arr) => acc + arr.length, 0);

  return (
    <div className={styles.pageWrapper}>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroBadge}>
          <span className={styles.heroBadgeDot} />
          Interview Preparation Hub
        </div>
        <h1 className={styles.heroTitle}>
          Crack Your{" "}
          <span className={styles.heroTitleGradient}>Tech Interview</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Master the most frequently asked interview questions with expert answers across 8 programming domains.
        </p>
        <div className={styles.heroStats}>
          <div className={styles.heroStat}>
            <span className={styles.heroStatNumber}>{totalQ}+</span>
            <span className={styles.heroStatLabel}>Questions</span>
          </div>
          <div className={styles.heroStat}>
            <span className={styles.heroStatNumber}>8</span>
            <span className={styles.heroStatLabel}>Topics</span>
          </div>
          <div className={styles.heroStat}>
            <span className={styles.heroStatNumber}>100%</span>
            <span className={styles.heroStatLabel}>Free</span>
          </div>
        </div>
      </section>

      {/* Mobile Tabs */}
      <div className={styles.mobileTabs}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id as keyof typeof qaData)}
            className={`${styles.mobileTab} ${activeCategory === cat.id ? styles.mobileTabActive : ""}`}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      {/* Main Layout */}
      <div className={styles.mainLayout}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <p className={styles.sidebarTitle}>Topics</p>
            <nav className={styles.sidebarNav}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id as keyof typeof qaData)}
                  className={`${styles.sidebarButton} ${activeCategory === cat.id ? styles.sidebarButtonActive : ""}`}
                >
                  <span className={styles.sidebarIcon}>{cat.icon}</span>
                  {cat.label}
                  <span className={styles.sidebarButtonCount}>
                    {qaData[cat.id as keyof typeof qaData].length}
                  </span>
                </button>
              ))}
            </nav>
            <div className={styles.progressSection}>
              <p className={styles.progressLabel}>Coverage</p>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: "100%" }} />
              </div>
            </div>
          </div>
        </aside>

        {/* Q&A Content */}
        <main className={styles.qaContent}>
          <div className={styles.qaContentHeader}>
            <h2 className={styles.qaContentTitle}>
              {currentCat?.icon} {currentCat?.label} Interview Q&A
            </h2>
            <span className={styles.qaContentBadge}>{currentQA.length} Questions</span>
          </div>

          <div className={styles.accordionList}>
            {currentQA.map((qa, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ""}`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={styles.accordionHeader}
                    aria-expanded={isOpen}
                  >
                    <span className={`${styles.accordionNumber} ${isOpen ? styles.accordionNumberActive : ""}`}>
                      {index + 1}
                    </span>
                    <span className={`${styles.questionText} ${isOpen ? styles.questionTextActive : ""}`}>
                      {qa.q}
                    </span>
                    <svg
                      className={`${styles.accordionArrow} ${isOpen ? styles.accordionArrowOpen : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className={styles.accordionBody}>
                      <p className={styles.answerText}>{qa.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
