"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import styles from "./InterviewQA.module.css";

type QA = { question: string; answer: string };

function cleanLearningText(value: string): string {
  return value.replace(/`/g, "");
}

const topics = [
  ["html", "HTML", "Markup & structure", "htmlQA.html"],
  ["css", "CSS", "Layouts & styling", "cssQA.html"],
  ["javascript", "JavaScript", "Language fundamentals", "javascriptQA.html"],
  ["react", "React JS", "Components & hooks", "reactJsQA.html"],
  ["java", "Java", "Core language concepts", "javaQA.html"],
] as const;

function parseQuestions(markup: string): QA[] {
  const document = new DOMParser().parseFromString(markup, "text/html");
  return Array.from(document.querySelectorAll(".qa"))
    .map((item) => ({
      question: cleanLearningText(
        item.querySelector(".question")?.textContent?.trim() || "",
      ),
      answer: cleanLearningText(
        item.querySelector(".answer")?.textContent?.trim() || "",
      ),
    }))
    .filter((item) => item.question && item.answer);
}

export default function InterviewQA() {
  const params = useSearchParams();
  const requested = params.get("tech")?.toLowerCase() || "html";
  const [topic, setTopic] = useState("html");
  const [questions, setQuestions] = useState<QA[]>([]);
  const [open, setOpen] = useState<number | null>(0);
  const [query, setQuery] = useState("");
  const [loadedTopic, setLoadedTopic] = useState("");
  const [showingAll, setShowingAll] = useState(false);
  const active = topics.find(([id]) => id === topic) || topics[0];

  useEffect(() => {
    setTopic(topics.some(([id]) => id === requested) ? requested : "html");
  }, [requested]);

  useEffect(() => {
    let activeRequest = true;
    fetch(`/reference-source/${active[3]}`)
      .then((response) => {
        if (!response.ok) throw new Error("Could not load questions");
        return response.text();
      })
      .then((html) => {
        if (!activeRequest) return;
        setQuestions(parseQuestions(html));
        setOpen(0);
        setQuery("");
        setShowingAll(false);
        setLoadedTopic(topic);
      })
      .catch(() => activeRequest && setLoadedTopic(topic));
    return () => {
      activeRequest = false;
    };
  }, [active, topic]);

  const loading = loadedTopic !== topic;
  const filtered = useMemo(
    () =>
      questions.filter((item) =>
        `${item.question} ${item.answer}`
          .toLowerCase()
          .includes(query.toLowerCase()),
      ),
    [questions, query],
  );
  const visible = showingAll ? filtered : filtered.slice(0, 12);

  return (
    <section className={styles.page} aria-labelledby="qa-title">
      <div className={styles.heroWrap}>
        <header className={styles.hero}>
          <div className={styles.crumb}>
            Resources <span>/</span> Interview preparation
          </div>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>Interview Q&amp;A</p>
              <h1 id="qa-title">Walk into your next interview prepared.</h1>
              <p className={styles.heroCopy}>
                Practical technical questions, clear answers, and the concepts
                recruiters expect you to explain with confidence.
              </p>
            </div>
            <div
              className={styles.heroStat}
              aria-label="Study resource information"
            >
              <span className={styles.statIcon}>✦</span>
              <strong>Focused learning</strong>
              <p>Search every answer and revise one topic at a time.</p>
            </div>
          </div>
        </header>
      </div>

      <div className={styles.workspace}>
        <aside className={styles.sidebar} aria-label="Interview topics">
          <div className={styles.sidebarHeading}>
            <span>Browse topics</span>
            <small>{topics.length} subjects</small>
          </div>
          <nav className={styles.topicNav}>
            {topics.map(([id, label, detail]) => (
              <Link
                key={id}
                href={`/interview-qa?tech=${id}`}
                className={topic === id ? styles.selected : ""}
              >
                <span className={styles.topicMark}>{label.slice(0, 1)}</span>
                <span>
                  <strong>{label}</strong>
                  <small>{detail}</small>
                </span>
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </nav>
          <div className={styles.tip}>
            <span>✦</span>
            <p>
              <strong>Study tip</strong> Read an answer, then try to explain it
              out loud in your own words.
            </p>
          </div>
        </aside>

        <main className={styles.content}>
          <div className={styles.contentTop}>
            <div>
              <p className={styles.eyebrow}>{active[1]} interview guide</p>
              <h2>
                {loading
                  ? "Loading questions..."
                  : `${filtered.length} questions to practise`}
              </h2>
            </div>
            <label className={styles.search}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="6" />
                <path d="m16 16 4 4" />
              </svg>
              <input
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setShowingAll(true);
                }}
                placeholder={`Search ${active[1]} questions`}
                aria-label={`Search ${active[1]} questions`}
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </label>
          </div>

          {loading ? (
            <div className={styles.loading}>
              <span />
              <span />
              <span />
            </div>
          ) : (
            <>
              <div className={styles.list}>
                {visible.map((item, index) => {
                  const itemIndex = questions.indexOf(item);
                  const expanded = open === itemIndex;
                  return (
                    <article
                      className={`${styles.item} ${expanded ? styles.expanded : ""}`}
                      key={item.question}
                    >
                      <button
                        className={styles.question}
                        type="button"
                        onClick={() => setOpen(expanded ? null : itemIndex)}
                        aria-expanded={expanded}
                      >
                        <span className={styles.number}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className={styles.questionText}>
                          {item.question}
                        </span>
                        <span className={styles.toggle} aria-hidden="true">
                          {expanded ? "−" : "+"}
                        </span>
                      </button>
                      {expanded && (
                        <div className={styles.answer}>
                          <span className={styles.answerLabel}>Answer</span>
                          <p>{item.answer}</p>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
              {!filtered.length && (
                <div className={styles.empty}>
                  <strong>No matches found</strong>
                  <p>Try a different keyword or clear your search.</p>
                  <button type="button" onClick={() => setQuery("")}>
                    Clear search
                  </button>
                </div>
              )}
              {filtered.length > 12 && !showingAll && (
                <button
                  type="button"
                  className={styles.showMore}
                  onClick={() => setShowingAll(true)}
                >
                  Show all {filtered.length} questions <span>↓</span>
                </button>
              )}
            </>
          )}
        </main>
      </div>
    </section>
  );
}
