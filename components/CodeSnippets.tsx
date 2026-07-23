"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./CodeSnippets.module.css";

type Snippet = { section: string; code: string; language: string };

const categories = [
  { id: "c",          label: "C Language",   file: "c_programs.html",          color: "#A8B4FF" },
  { id: "java",       label: "Java",          file: "java_programs.html",       color: "#FFA07A" },
  { id: "python",     label: "Python",        file: "python_programs.html",     color: "#69D2A8" },
  { id: "javascript", label: "JavaScript",    file: "javascript_programs.html", color: "#FFD066" },
] as const;

type CategoryId = typeof categories[number]["id"];

function parseSnippets(markup: string): Snippet[] {
  const doc = new DOMParser().parseFromString(markup, "text/html");
  let section =
    doc.querySelector("main h1")?.textContent?.trim() || "Programs";
  const snippets: Snippet[] = [];
  doc.querySelectorAll("main h1, .code-window").forEach((el) => {
    if (el.tagName === "H1") section = el.textContent?.trim() || section;
    if (el.classList.contains("code-window")) {
      const code = el.querySelector("code")?.textContent?.trim();
      if (code)
        snippets.push({
          section,
          code,
          language:
            el.querySelector("code")?.className.replace("language-", "") ||
            "code",
        });
    }
  });
  return snippets;
}

/** Pull the first meaningful line as the card title */
function titleFromCode(code: string): string {
  for (const line of code.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    // strip comment markers
    const clean = trimmed.replace(/^\/\/\s?/, "").replace(/^#\s?/, "").trim();
    if (clean.length > 2) return clean;
  }
  return "Code Snippet";
}

export default function CodeSnippets() {
  const params = useSearchParams();
  const requested = (params.get("tech") || "c").toLowerCase() as CategoryId;
  const [categoryId, setCategoryId] = useState<CategoryId>(
    categories.some((c) => c.id === requested) ? requested : "c"
  );
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState<number | null>(null);
  const [loadedId, setLoadedId] = useState<string>("");

  const active = categories.find((c) => c.id === categoryId) || categories[0];

  useEffect(() => {
    let live = true;
    fetch(`/reference-source/${active.file}`)
      .then((r) => r.text())
      .then((html) => {
        if (live) {
          setSnippets(parseSnippets(html));
          setQuery("");
          setLoadedId(categoryId);
        }
      })
      .catch(() => live && setLoadedId(categoryId));
    return () => { live = false; };
  }, [active, categoryId]);

  const loading = loadedId !== categoryId;

  const results = useMemo(
    () =>
      snippets.filter((s) =>
        `${s.section} ${s.code}`.toLowerCase().includes(query.toLowerCase())
      ),
    [snippets, query]
  );

  async function copy(code: string, idx: number) {
    await navigator.clipboard.writeText(code);
    setCopied(idx);
    setTimeout(() => setCopied(null), 1600);
  }

  return (
    <section className={styles.page} aria-labelledby="cs-title">
      {/* ── Page Header ─────────────────────────────────── */}
      <header className={styles.hero}>
        <span className={styles.eyebrow}>Code Snippets · KKCC Info Systems</span>
        <h1 id="cs-title" className={styles.heroTitle}>
          Real Programs, Ready to Run
        </h1>
        <p className={styles.heroSub}>
          Curated code examples taught at KKCC Info Systems, Ongole — covering
          C Language, Java, Python and JavaScript from beginner to intermediate
          level. Click a snippet to copy it instantly.
        </p>
      </header>

      {/* ── Toolbar ─────────────────────────────────────── */}
      <div className={styles.toolbar}>
        <label className={styles.search} aria-label="Search snippets">
          <svg className={styles.searchIcon} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="9" r="6" />
            <path strokeLinecap="round" d="M15 15l3.5 3.5" />
          </svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programs and topics…"
          />
          {query && (
            <button className={styles.clearBtn} onClick={() => setQuery("")} aria-label="Clear">
              ×
            </button>
          )}
        </label>
        <span className={styles.count}>
          {loading ? "Loading…" : `${results.length} program${results.length !== 1 ? "s" : ""}`}
        </span>
      </div>

      {/* ── Language Filter Tabs ─────────────────────────── */}
      <nav className={styles.filters} aria-label="Language filter">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategoryId(cat.id)}
            className={`${styles.filterBtn} ${categoryId === cat.id ? styles.filterActive : ""}`}
            style={categoryId === cat.id ? { "--accent": cat.color } as React.CSSProperties : undefined}
          >
            <span
              className={styles.filterDot}
              style={{ background: cat.color }}
            />
            {cat.label}
          </button>
        ))}
      </nav>

      {/* ── Grid ─────────────────────────────────────────── */}
      {loading ? (
        <div className={styles.loadingGrid}>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={styles.skeletonCard}>
              <div className={styles.skeletonBar} />
              <div className={styles.skeletonTitle} />
              <div className={styles.skeletonCode} />
            </div>
          ))}
        </div>
      ) : results.length === 0 ? (
        <div className={styles.emptyState}>
          <svg className={styles.emptyIcon} viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="22" stroke="#CBD5E1" strokeWidth="2" />
            <path d="M16 24h16M24 16v16" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <p>No programs match <strong>&ldquo;{query}&rdquo;</strong></p>
          <button className={styles.clearLink} onClick={() => setQuery("")}>Clear search</button>
        </div>
      ) : (
        <div className={styles.grid}>
          {results.map((item, idx) => (
            <article key={`${item.section}-${idx}`} className={styles.card}>
              {/* ── macOS Window Chrome ── */}
              <div className={styles.windowBar}>
                <div className={styles.trafficLights}>
                  <span className={`${styles.dot} ${styles.dotRed}`} />
                  <span className={`${styles.dot} ${styles.dotYellow}`} />
                  <span className={`${styles.dot} ${styles.dotGreen}`} />
                </div>
                <span className={styles.windowTitle}>
                  {item.section}
                </span>
                <button
                  className={`${styles.copyBtn} ${copied === idx ? styles.copyBtnDone : ""}`}
                  onClick={() => copy(item.code, idx)}
                  aria-label="Copy code"
                >
                  {copied === idx ? (
                    <>
                      <svg viewBox="0 0 16 16" fill="currentColor" className={styles.copyIcon}>
                        <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                      </svg>
                      Copied
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 16 16" fill="currentColor" className={styles.copyIcon}>
                        <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z" />
                        <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z" />
                      </svg>
                      Copy
                    </>
                  )}
                </button>
              </div>

              {/* ── Card Title Strip ── */}
              <div className={styles.cardMeta}>
                <h2 className={styles.cardTitle}>
                  {titleFromCode(item.code)}
                </h2>
                <span className={styles.langTag}>{item.language || active.label}</span>
              </div>

              {/* ── Code Block ── */}
              <div className={styles.codePane}>
                <pre className={styles.pre}>
                  <code>{item.code}</code>
                </pre>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
