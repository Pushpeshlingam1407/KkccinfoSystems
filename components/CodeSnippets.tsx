"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./CodeSnippets.module.css";

type Snippet = { section: string; code: string; language: string };

const categories = [
  { id: "c", label: "C Language", file: "c_programs.html", color: "#A8B4FF" },
  { id: "java", label: "Java", file: "java_programs.html", color: "#FFA07A" },
  {
    id: "python",
    label: "Python",
    file: "python_programs.html",
    color: "#69D2A8",
  },
  {
    id: "javascript",
    label: "JavaScript",
    file: "javascript_programs.html",
    color: "#FFD066",
  },
] as const;

type CategoryId = (typeof categories)[number]["id"];

function parseSnippets(markup: string): Snippet[] {
  const doc = new DOMParser().parseFromString(markup, "text/html");
  let section = doc.querySelector("main h1")?.textContent?.trim() || "Programs";
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

/** Extract the first comment line as a short description */
function briefFromCode(code: string): string {
  for (const raw of code.split("\n")) {
    const line = raw.trim();
    // Match //1. Foo, //2 Bar, # comment, /* comment */
    const match =
      line.match(/^\/\/\d*[\.\s]*(.*)/)?.[1]?.trim() ||
      line.match(/^#\s+(.*)/)?.[1]?.trim() ||
      line.match(/^\/\*+\s*(.*?)\s*\*+\//)?.[1]?.trim();
    if (match && match.length > 3) return match;
  }
  return "";
}

/** Strip the leading number + comment from the first line of code */
function titleFromCode(code: string): string {
  const brief = briefFromCode(code);
  if (brief) return brief;
  for (const raw of code.split("\n")) {
    const line = raw.trim();
    if (line && !line.startsWith("//") && !line.startsWith("#")) return line;
  }
  return "Code Snippet";
}

/* Add line numbers to code */
function withLineNumbers(code: string): { num: number; text: string }[] {
  return code.split("\n").map((text, i) => ({ num: i + 1, text }));
}

export default function CodeSnippets() {
  const params = useSearchParams();
  const requested = (params.get("tech") || "c").toLowerCase() as CategoryId;
  const [categoryId, setCategoryId] = useState<CategoryId>(
    categories.some((c) => c.id === requested) ? requested : "c",
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
    return () => {
      live = false;
    };
  }, [active, categoryId]);

  const loading = loadedId !== categoryId;

  const results = useMemo(
    () =>
      snippets.filter((s) =>
        `${s.section} ${s.code}`.toLowerCase().includes(query.toLowerCase()),
      ),
    [snippets, query],
  );

  async function copy(code: string, idx: number) {
    await navigator.clipboard.writeText(code);
    setCopied(idx);
    setTimeout(() => setCopied(null), 1600);
  }

  return (
    <section className={styles.page} aria-labelledby="cs-title">
      <header className={styles.hero}>
        <span className={styles.eyebrow}>
          Code Snippets · KKCC Info Systems
        </span>
        <h1 id="cs-title" className={styles.heroTitle}>
          Real Programs, Ready to Run
        </h1>
        <p className={styles.heroSub}>
          Curated code examples taught at KKCC Info Systems, Ongole — covering C
          Language, Java, Python and JavaScript from beginner to intermediate
          level. Click a snippet to copy it instantly.
        </p>
      </header>

      <div className={styles.toolbar}>
        <label className={styles.search} aria-label="Search snippets">
          <svg
            className={styles.searchIcon}
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="9" cy="9" r="6" />
            <path strokeLinecap="round" d="M15 15l3.5 3.5" />
          </svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programs and topics…"
          />
          {query && (
            <button
              className={styles.clearBtn}
              onClick={() => setQuery("")}
              aria-label="Clear"
            >
              ×
            </button>
          )}
        </label>
        <span className={styles.count}>
          {loading
            ? "Loading…"
            : `${results.length} program${results.length !== 1 ? "s" : ""}`}
        </span>
      </div>

      <nav className={styles.filters} aria-label="Language filter">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategoryId(cat.id)}
            className={`${styles.filterBtn} ${categoryId === cat.id ? styles.filterActive : ""}`}
            style={
              categoryId === cat.id
                ? ({ "--accent": cat.color } as React.CSSProperties)
                : undefined
            }
          >
            <span
              className={styles.filterDot}
              style={{ background: cat.color }}
            />
            {cat.label}
          </button>
        ))}
      </nav>

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
            <path
              d="M16 24h16M24 16v16"
              stroke="#CBD5E1"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <p>
            No programs match <strong>&ldquo;{query}&rdquo;</strong>
          </p>
          <button className={styles.clearLink} onClick={() => setQuery("")}>
            Clear search
          </button>
        </div>
      ) : (
        (() => {
          // Group results by their section/concept
          const grouped: { section: string; items: typeof results }[] = [];
          results.forEach((item) => {
            const last = grouped[grouped.length - 1];
            if (last && last.section === item.section) {
              last.items.push(item);
            } else {
              grouped.push({ section: item.section, items: [item] });
            }
          });

          // Global index for copy state tracking across groups
          let globalIdx = 0;

          return (
            <div className={styles.sectionsWrapper}>
              {grouped.map((group) => (
                <div key={group.section} className={styles.conceptSection}>
                  {/* Concept Section Divider */}
                  <div className={styles.sectionDivider}>
                    <div className={styles.sectionDividerLine} />
                    <div className={styles.sectionDividerLabel}>
                      <svg
                        className={styles.sectionIcon}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className={styles.sectionName}>
                        {group.section}
                      </span>
                      <span className={styles.sectionCount}>
                        {group.items.length} program
                        {group.items.length !== 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className={styles.sectionDividerLine} />
                  </div>

                  {/* Cards for this section */}
                  <div className={styles.grid}>
                    {group.items.map((item) => {
                      const idx = globalIdx++;
                      const brief = briefFromCode(item.code);
                      const title = titleFromCode(item.code);
                      const lines = withLineNumbers(item.code);
                      return (
                        <article
                          key={`${item.section}-${idx}`}
                          className={styles.card}
                        >
                          <div className={styles.windowBar}>
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
                                  <svg
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className={styles.copyIcon}
                                  >
                                    <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                                  </svg>
                                  Copied
                                </>
                              ) : (
                                <>
                                  <svg
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className={styles.copyIcon}
                                  >
                                    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z" />
                                    <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z" />
                                  </svg>
                                  Copy
                                </>
                              )}
                            </button>
                          </div>

                          <div className={styles.cardMeta}>
                            <div className={styles.cardMetaLeft}>
                              <h2 className={styles.cardTitle}>{title}</h2>
                              {brief && (
                                <p className={styles.cardBrief}>
                                  <span className={styles.briefDot} />
                                  {brief}
                                </p>
                              )}
                            </div>
                            <span className={styles.langTag}>
                              {item.language || active.label}
                            </span>
                          </div>

                          <div className={styles.codePane}>
                            <pre className={styles.pre}>
                              <table className={styles.codeTable}>
                                <tbody>
                                  {lines.map(({ num, text }) => (
                                    <tr key={num} className={styles.codeLine}>
                                      <td className={styles.lineNum}>{num}</td>
                                      <td className={styles.lineCode}>
                                        {text || " "}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </pre>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          );
        })()
      )}
    </section>
  );
}
