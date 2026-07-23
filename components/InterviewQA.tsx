"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./InterviewQA.module.css";

type QA = { question: string; answer: string };
const topics = [
  ["html", "HTML", "htmlQA.html"],
  ["css", "CSS", "cssQA.html"],
  ["javascript", "JavaScript", "javascriptQA.html"],
  ["react", "React JS", "reactJsQA.html"],
  ["java", "Java", "javaQA.html"],
] as const;

function parseQuestions(markup: string): QA[] {
  const document = new DOMParser().parseFromString(markup, "text/html");
  return Array.from(document.querySelectorAll(".qa"))
    .map((item) => ({
      question: item.querySelector(".question")?.textContent?.trim() || "",
      answer: item.querySelector(".answer")?.textContent?.trim() || "",
    }))
    .filter((item) => item.question && item.answer);
}

export default function InterviewQA() {
  const params = useSearchParams();
  const requested = params.get("tech")?.toLowerCase() || "html";
  const [topic, setTopic] = useState(
    topics.some(([id]) => id === requested) ? requested : "html",
  );
  const [questions, setQuestions] = useState<QA[]>([]);
  const [open, setOpen] = useState(0);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const active = topics.find(([id]) => id === topic) || topics[0];

  useEffect(() => {
    let current = true;
    setLoading(true);
    fetch(`/reference-source/${active[2]}`)
      .then((response) => response.text())
      .then((html) => {
        if (current) {
          setQuestions(parseQuestions(html));
          setOpen(0);
          setQuery("");
          setLoading(false);
        }
      })
      .catch(() => current && setLoading(false));
    return () => {
      current = false;
    };
  }, [active]);
  const filtered = useMemo(
    () =>
      questions.filter((item) =>
        `${item.question} ${item.answer}`
          .toLowerCase()
          .includes(query.toLowerCase()),
      ),
    [questions, query],
  );
  function chooseTopic(next: string) {
    setTopic(next);
  }

  return (
    <section className={styles.page} aria-labelledby="qa-title">
      <header className={styles.hero}>
        <p className={styles.eyebrow}>Interview Q&A</p>
        <h1 id="qa-title">Interview questions and answers.</h1>
        <p>
          The original Telugu IT Tutorials reference material, presented in a
          faster, easier-to-scan workspace.
        </p>
      </header>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <p>Topics</p>
          <nav>
            {topics.map(([id, label]) => (
              <button
                key={id}
                className={topic === id ? styles.selected : ""}
                onClick={() => chooseTopic(id)}
              >
                <span>{label}</span>
              </button>
            ))}
          </nav>
          <div className={styles.sidebarNote}>
            Use the topic list to switch references. Search filters the current
            set of questions immediately.
          </div>
        </aside>
        <main>
          <div className={styles.contentHead}>
            <div>
              <p className={styles.eyebrow}>{active[1]}</p>
              <h2>
                {loading ? "Loading questions" : `${filtered.length} questions`}
              </h2>
            </div>
            <label className={styles.search}>
              <span aria-hidden="true">⌕</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Filter questions"
                aria-label="Filter questions"
              />
              {query && (
                <button onClick={() => setQuery("")} aria-label="Clear filter">
                  ×
                </button>
              )}
            </label>
          </div>
          {loading ? (
            <div className={styles.empty}>
              <strong>Loading reference material…</strong>
            </div>
          ) : (
            <div className={styles.list}>
              {filtered.map((item, index) => {
                const expanded = open === index;
                return (
                  <article
                    className={`${styles.item} ${expanded ? styles.expanded : ""}`}
                    key={item.question}
                  >
                    <button
                      className={styles.question}
                      onClick={() => setOpen(expanded ? -1 : index)}
                      aria-expanded={expanded}
                    >
                      <span className={styles.number}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <strong>{item.question}</strong>
                      </span>
                      <i aria-hidden="true">⌄</i>
                    </button>
                    {expanded && (
                      <div className={styles.answer}>
                        <section>
                          <h3>Answer</h3>
                          <p>{item.answer}</p>
                        </section>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          )}
          {!loading && !filtered.length && (
            <div className={styles.empty}>
              <strong>No question matches that filter.</strong>
              <button onClick={() => setQuery("")}>Clear filter</button>
            </div>
          )}
        </main>
      </div>
    </section>
  );
}
