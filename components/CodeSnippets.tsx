"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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

function cleanLearningText(value: string): string {
  return value.replace(/`/g, "");
}

function formatCode(code: string, language: string): string {
  // Keep the source's relative indentation intact. Reconstructing indentation
  // from braces/colons breaks valid nested Python and multiline statements.
  const sourceLines = code.replace(/\r\n/g, "\n").split("\n");
  while (!sourceLines[0]?.trim()) sourceLines.shift();
  while (!sourceLines.at(-1)?.trim()) sourceLines.pop();

  if (sourceLines.length) {
    const nonBlankLines = sourceLines.filter((line) => line.trim());
    const sharedIndent = Math.min(
      ...nonBlankLines.map((line) => line.match(/^[\t ]*/)?.[0].length || 0),
    );

    return sourceLines
      .map((line) =>
        line
          .slice(sharedIndent)
          .replace(/\t/g, "  ")
          .replace(/[ \t]+$/g, ""),
      )
      .reduce<string[]>((formatted, line) => {
        if (line || formatted.at(-1) !== "") formatted.push(line);
        return formatted;
      }, [])
      .join("\n");
  }

  const lines = code.split("\n");
  let indentLevel = 0;
  const indentStr = "  "; // 2 spaces is standard and fits better on mobile/web layouts
  const formattedLines: string[] = [];
  const langLower = language.toLowerCase();

  const isCurlyBraceLanguage = ["c", "java", "javascript"].includes(langLower);

  if (isCurlyBraceLanguage) {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) {
        if (
          formattedLines.length > 0 &&
          formattedLines[formattedLines.length - 1] !== ""
        ) {
          formattedLines.push("");
        }
        continue;
      }

      // Strip comments and strings to count braces accurately
      const stripped = line
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .replace(/\/\/.*/g, "")
        .replace(/"(\\.|[^"\\])*"/g, '""')
        .replace(/'(\\.|[^'\\])*'/g, "''");

      const openCount = (stripped.match(/\{/g) || []).length;
      const closeCount = (stripped.match(/\}/g) || []).length;
      const netBraces = openCount - closeCount;

      if (line.startsWith("}")) {
        indentLevel = Math.max(0, indentLevel - 1);
        formattedLines.push(indentStr.repeat(indentLevel) + line);
        if (openCount > 0) {
          indentLevel += openCount;
        }
      } else {
        if (netBraces < 0) {
          indentLevel = Math.max(0, indentLevel + netBraces);
        }
        formattedLines.push(indentStr.repeat(indentLevel) + line);
        if (netBraces > 0) {
          indentLevel += netBraces;
        }
      }
    }
  } else if (langLower === "python") {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) {
        if (
          formattedLines.length > 0 &&
          formattedLines[formattedLines.length - 1] !== ""
        ) {
          formattedLines.push("");
        }
        continue;
      }

      const stripped = line
        .replace(/#.*/g, "")
        .replace(/"""[\s\S]*?"""/g, "")
        .replace(/'''[\s\S]*?'''/g, "")
        .replace(/"(\\.|[^"\\])*"/g, '""')
        .replace(/'(\\.|[^'\\])*'/g, "''");

      const endsWithColon = stripped.trim().endsWith(":");
      const isDedentWord = /^(elif|else|except|finally)\b/.test(line);

      if (isDedentWord) {
        indentLevel = Math.max(0, indentLevel - 1);
      }

      formattedLines.push(indentStr.repeat(indentLevel) + line);

      if (endsWithColon) {
        indentLevel++;
      }
    }
  } else {
    // For HTML, CSS or unknown languages, return clean trimmed/minimal formatting
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (
        !line &&
        formattedLines.length > 0 &&
        formattedLines[formattedLines.length - 1] === ""
      ) {
        continue;
      }
      formattedLines.push(line);
    }
    return formattedLines.join("\n");
  }

  // Remove leading/trailing empty lines
  while (formattedLines.length > 0 && formattedLines[0] === "") {
    formattedLines.shift();
  }
  while (
    formattedLines.length > 0 &&
    formattedLines[formattedLines.length - 1] === ""
  ) {
    formattedLines.pop();
  }

  return formattedLines.join("\n");
}

function cleanCodeLines(code: string): string[] {
  const lines = code.replace(/\r\n/g, "\n").split("\n");
  while (!lines[0]?.trim()) lines.shift();
  while (!lines.at(-1)?.trim()) lines.pop();

  return lines.reduce<string[]>((result, line) => {
    const cleaned = line.replace(/[\t ]+$/g, "");
    if (cleaned.trim() || result.at(-1) !== "") result.push(cleaned);
    return result;
  }, []);
}

function codeWithoutStringsAndComments(line: string): string {
  return line
    .replace(/\/\/.*$/g, "")
    .replace(/\/\*.*?\*\//g, "")
    .replace(/"(?:\\.|[^"\\])*"/g, '""')
    .replace(/'(?:\\.|[^'\\])*'/g, "''");
}

function prettifyCurlyCode(code: string): string {
  let indentation = 0;
  const indent = "    ";

  return cleanCodeLines(code)
    .map((raw) => {
      const line = raw.trim();
      if (!line) return "";

      const structural = codeWithoutStringsAndComments(line);
      const opens = (structural.match(/\{/g) || []).length;
      const closes = (structural.match(/\}/g) || []).length;
      const closesFirst = line.startsWith("}");

      if (closesFirst) indentation = Math.max(0, indentation - 1);
      const formatted = `${indent.repeat(indentation)}${line}`;
      indentation = Math.max(
        0,
        indentation + opens - closes + (closesFirst ? 1 : 0),
      );
      return formatted;
    })
    .join("\n");
}

function prettifyPythonCode(code: string): string {
  const lines = cleanCodeLines(code);
  const nonBlank = lines.filter((line) => line.trim());
  const commonIndent = Math.min(
    ...nonBlank.map((line) => line.match(/^[\t ]*/)?.[0].length || 0),
  );

  return lines
    .map((line) => {
      if (!line.trim()) return "";
      const leading = line.match(/^[\t ]*/)?.[0] || "";
      const normalizedIndent = leading.slice(commonIndent).replace(/\t/g, "    ");
      return `${normalizedIndent}${line.trim()}`;
    })
    .join("\n");
}

function prettifyCode(code: string, language: string): string {
  return ["c", "java", "javascript"].includes(language.toLowerCase())
    ? prettifyCurlyCode(code)
    : prettifyPythonCode(code);
}

function parseSnippets(markup: string): Snippet[] {
  const doc = new DOMParser().parseFromString(markup, "text/html");
  let section = cleanLearningText(
    doc.querySelector("main h1")?.textContent?.trim() || "Programs",
  );
  const snippets: Snippet[] = [];
  doc.querySelectorAll("main h1, .code-window").forEach((el) => {
    if (el.tagName === "H1") {
      section = cleanLearningText(el.textContent?.trim() || section);
    }
    if (el.classList.contains("code-window")) {
      const code = el.querySelector("code")?.textContent?.trim();
      if (code) {
        const language =
          el.querySelector("code")?.className.replace("language-", "") ||
          "code";
        snippets.push({
          section,
          code: prettifyCode(code, language),
          language,
        });
      }
    }
  });
  return snippets;
}

function sourceHeadingFromCode(code: string): string {
  for (const raw of code.split("\n")) {
    const line = raw.trim();
    if (/^#(?:include|define|pragma)\b/.test(line)) continue;

    const heading = line
      .match(
        /^(?:\/\/|#|\/\*+|\*)\s*(?:\d+\s*[.)-]?\s*)?(.*?)(?:\s*\*\/)?$/,
      )?.[1]
      ?.trim();

    if (heading && heading.length > 3 && !/^(or|start|end)$/i.test(heading)) {
      return cleanLearningText(
        heading.replace(/\s+/g, " ").replace(/[.]+$/, ""),
      );
    }
  }
  return "";
}

function titleFromCode(code: string): string {
  const heading = sourceHeadingFromCode(code);
  if (heading) return heading;

  return cleanLearningText(
    code
      .split("\n")
      .map((line) => line.trim())
      .find(
        (line) =>
          line &&
          !line.startsWith("#include") &&
          !line.startsWith("import ") &&
          !line.startsWith("from "),
      ) || "Code example",
  );
}

function summaryFromCode(
  code: string,
  section: string,
  language: string,
): string {
  const heading = sourceHeadingFromCode(code);
  if (heading) {
    return `Demonstrates ${heading.charAt(0).toLowerCase()}${heading.slice(1)}.`;
  }

  const statement = cleanLearningText(titleFromCode(code));
  return statement !== "Code example"
    ? `Runs the statement: ${statement.slice(0, 72)}${statement.length > 72 ? "…" : ""}`
    : `${language} example from ${section}.`;
}

/* Add line numbers to code */
function withLineNumbers(code: string): { num: number; text: string }[] {
  return code.split("\n").map((text, i) => ({ num: i + 1, text }));
}

export default function CodeSnippets() {
  const router = useRouter();
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
    if (categories.some((category) => category.id === requested)) {
      setCategoryId(requested);
    }
  }, [requested]);

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
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = code;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
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
            onClick={() =>
              router.replace(`/code-snippets?tech=${cat.id}`, { scroll: false })
            }
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
                      const title = titleFromCode(item.code);
                      const summary = summaryFromCode(
                        item.code,
                        item.section,
                        item.language || active.label,
                      );
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
                              <p className={styles.cardBrief}>
                                <span className={styles.briefLabel}>
                                  What it does
                                </span>
                                <span>{summary}</span>
                              </p>
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
