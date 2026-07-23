"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./CodeSnippets.module.css";

type Snippet = { section: string; code: string; language: string };
const categories = [
  ["c", "C Language", "c_programs.html"],
  ["java", "Java", "java_programs.html"],
  ["python", "Python", "python_programs.html"],
  ["javascript", "JavaScript", "javascript_programs.html"],
] as const;
function parseSnippets(markup: string): Snippet[] {
  const document = new DOMParser().parseFromString(markup, "text/html");
  let section =
    document.querySelector("main h1")?.textContent?.trim() || "Programs";
  const snippets: Snippet[] = [];
  document.querySelectorAll("main h1, .code-window").forEach((item) => {
    if (item.tagName === "H1") section = item.textContent?.trim() || section;
    if (item.classList.contains("code-window")) {
      const code = item.querySelector("code")?.textContent?.trim();
      if (code)
        snippets.push({
          section,
          code,
          language:
            item.querySelector("code")?.className.replace("language-", "") ||
            "code",
        });
    }
  });
  return snippets;
}

export default function CodeSnippets() {
  const params = useSearchParams();
  const requested = params.get("tech")?.toLowerCase() || "c";
  const [category, setCategory] = useState(
    categories.some(([id]) => id === requested) ? requested : "c",
  );
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState<number | null>(null);
  const [loadedCategory, setLoadedCategory] = useState("");
  const active = categories.find(([id]) => id === category) || categories[0];
  useEffect(() => {
    let current = true;
    fetch(`/reference-source/${active[2]}`)
      .then((response) => response.text())
      .then((html) => {
        if (current) {
          setSnippets(parseSnippets(html));
          setQuery("");
          setLoadedCategory(category);
        }
      })
      .catch(() => current && setLoadedCategory(category));
    return () => {
      current = false;
    };
  }, [active]);
  const loading = loadedCategory !== category;
  const results = useMemo(
    () =>
      snippets.filter((item) =>
        `${item.section} ${item.code}`
          .toLowerCase()
          .includes(query.toLowerCase()),
      ),
    [snippets, query],
  );
  async function copy(code: string, index: number) {
    await navigator.clipboard.writeText(code);
    setCopied(index);
    window.setTimeout(() => setCopied(null), 1400);
  }
  return (
    <section className={styles.page} aria-labelledby="snippets-title">
      <header className={styles.hero}>
        <p className={styles.eyebrow}>Code snippets</p>
        <h1 id="snippets-title">Programs, ready to inspect.</h1>
        <p>
          The original Telugu IT Tutorials program collection in a focused code
          reference.
        </p>
      </header>
      <div className={styles.toolbar}>
        <label className={styles.search}>
          <span aria-hidden="true">⌕</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search code and sections"
            aria-label="Search snippets"
          />
          {query && (
            <button onClick={() => setQuery("")} aria-label="Clear search">
              ×
            </button>
          )}
        </label>
        <span className={styles.count}>
          {loading ? "Loading" : `${results.length} programs`}
        </span>
      </div>
      <nav className={styles.filters} aria-label="Program languages">
        {categories.map(([id, label]) => (
          <button
            key={id}
            onClick={() => setCategory(id)}
            aria-pressed={category === id}
            className={category === id ? styles.activeFilter : ""}
          >
            {label}
          </button>
        ))}
      </nav>
      {loading ? (
        <div className={styles.empty}>
          <strong>Loading program collection…</strong>
        </div>
      ) : (
        <div className={styles.grid}>
          {results.map((item, index) => (
            <article key={`${item.section}-${index}`} className={styles.card}>
              <div className={styles.cardTop}>
                <span>{item.language}</span>
                <span className={styles.filename}>{item.section}</span>
              </div>
              <h2>
                {item.code
                  .split("\n")
                  .find((line) => line.trim())
                  ?.replace(/^\/\/\s?/, "") || "Code Snippet"}
              </h2>
              <pre>
                <code>{item.code}</code>
              </pre>
              <div className={styles.cardActions}>
                <button
                  className={styles.copy}
                  onClick={() => copy(item.code, index)}
                >
                  {copied === index ? "Copied" : "Copy code"}
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
      {!loading && !results.length && (
        <div className={styles.empty}>
          <strong>No matching program.</strong>
          <button onClick={() => setQuery("")}>Clear search</button>
        </div>
      )}
    </section>
  );
}
