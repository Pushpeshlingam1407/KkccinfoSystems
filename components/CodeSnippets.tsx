"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./CodeSnippets.module.css";

type Snippet = {
  id: string; category: string; language: string; filename: string; title: string;
  context: string; code: string; explanation: string; production: string;
  mistakes: string; performance?: string; related: string[];
};

const categories = [
  ["all", "All"], ["javascript", "JavaScript"], ["typescript", "TypeScript"],
  ["react", "React"], ["next", "Next.js"], ["api", "API"], ["css", "CSS"], ["git", "Git"],
] as const;

const snippets: Snippet[] = [
  { id: "fetch", category: "javascript", language: "JavaScript", filename: "request.js", title: "Fetch JSON without hiding failures", context: "A small boundary for browser requests. It distinguishes an HTTP failure from a successful response with an error-shaped body, which is where many client bugs start.", code: `export async function request(path, options) {
  const response = await fetch(path, {
    headers: { Accept: "application/json", ...options?.headers },
    ...options,
  });

  if (!response.ok) {
    throw new Error(\`Request failed: \${response.status}\`);
  }

  return response.json();
}` , explanation: "Use this when callers should handle a rejected promise for non-2xx responses. Native fetch only rejects for network failures.", production: "Add an AbortSignal for navigations and map known status codes to product-level errors at the edge of the UI.", mistakes: "Calling response.json() before checking response.ok makes error handling inconsistent.", related: ["AbortController", "Response.ok", "HTTP status codes"] },
  { id: "result", category: "typescript", language: "TypeScript", filename: "result.ts", title: "Return an explicit result from a fallible boundary", context: "Useful when failure is expected and local: parsing input, validating a token, or reading optional configuration. The caller can’t accidentally ignore the unhappy path.", code: `type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

export function parsePort(value: string): Result<number> {
  const port = Number(value);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    return { ok: false, error: "Port must be 1–65535" };
  }
  return { ok: true, value: port };
}` , explanation: "A discriminated union narrows cleanly on ok. It is more honest than returning NaN or throwing for ordinary invalid input.", production: "Keep the error payload structured if the result crosses a service boundary. Don’t use Result for truly exceptional failures that should halt the request.", mistakes: "Adding optional value and error fields loses the compiler’s narrowing help.", related: ["Discriminated unions", "Type guards"] },
  { id: "effect", category: "react", language: "TSX", filename: "use-user.ts", title: "Cancel stale work in an effect", context: "Effects that fetch can finish after the user has moved on. Abort the request during cleanup so old work doesn’t update a new screen.", code: `useEffect(() => {
  const controller = new AbortController();

  loadUser(id, { signal: controller.signal })
    .then(setUser)
    .catch((error) => {
      if (error.name !== "AbortError") setError(error);
    });

  return () => controller.abort();
}, [id]);` , explanation: "The cleanup runs before the dependency changes and when the component unmounts. That makes the lifetime of the request match the lifetime of the view.", production: "For shared server state, prefer the cache/data layer your app already uses. This pattern is for a focused local effect.", mistakes: "Marking the effect callback async prevents React from receiving the cleanup function.", related: ["useEffect", "AbortController", "Race conditions"] },
  { id: "params", category: "next", language: "TypeScript", filename: "app/products/page.tsx", title: "Validate search params at the route boundary", context: "URL input is user input. Parse it once at the page boundary instead of letting stringly typed values leak through the component tree.", code: `export default async function Page({ searchParams }: PageProps<"/products">) {
  const { page = "1" } = await searchParams;
  const currentPage = Math.max(1, Number.parseInt(page as string, 10) || 1);

  const products = await getProducts({ page: currentPage });
  return <ProductList products={products} page={currentPage} />;
}` , explanation: "This keeps URL semantics in the server page and leaves the list component with a real number.", production: "Set an upper page limit and preserve filter state in pagination links. Dynamic input should never be forwarded directly to a database query.", mistakes: "Assuming search params are always strings; repeated keys can be arrays.", related: ["PageProps", "Server Components", "URLSearchParams"] },
  { id: "handler", category: "api", language: "TypeScript", filename: "app/api/health/route.ts", title: "Return a deliberate health response", context: "A health endpoint should prove only what your load balancer needs it to prove. It is not a public status dashboard and should not leak dependency details.", code: `import { NextResponse } from "next/server";

export async function GET() {
  const healthy = await canReachDatabase();
  return NextResponse.json(
    { status: healthy ? "ok" : "unavailable" },
    { status: healthy ? 200 : 503, headers: { "Cache-Control": "no-store" } }
  );
}` , explanation: "A 503 lets infrastructure remove an unhealthy instance. no-store prevents an intermediary from serving a stale success.", production: "Use separate readiness and liveness checks when startup and dependency health have different meanings.", mistakes: "Returning 200 with an error field makes automated checks useless.", related: ["Route Handlers", "HTTP 503", "Caching"] },
  { id: "focus", category: "css", language: "CSS", filename: "controls.css", title: "A focus ring that works on light surfaces", context: "Keyboard focus is part of the control, not an optional decoration. This ring remains visible beside subtle borders without changing layout.", code: `.control:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 3px;
}

.control:focus:not(:focus-visible) {
  outline: none;
}` , explanation: "focus-visible avoids showing a ring for every pointer click while preserving it for keyboard users.", production: "Use one focus color across the product and test it against every surface, including disabled-looking controls.", mistakes: "Removing outlines globally without replacing them.", related: [":focus-visible", "Keyboard navigation"] },
  { id: "rebase", category: "git", language: "Shell", filename: "terminal", title: "Rebase a feature branch before review", context: "Rebasing onto the current target branch reveals integration conflicts while the change is still yours to reason about.", code: `git fetch origin
git rebase origin/main

# resolve conflicts, then
git add <resolved-files>
git rebase --continue` , explanation: "A clean rebase gives reviewers a diff against current main. Use it only on branches you own or after coordinating with collaborators.", production: "Run the relevant test suite after each meaningful conflict resolution. Force-push with --force-with-lease, never bare --force.", mistakes: "Resolving conflicts by choosing one side without understanding both changes.", related: ["git rebase", "git rerere", "force-with-lease"] },
];

function highlight(text: string, query: string) {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "ig"));
  return parts.map((part, index) => part.toLowerCase() === query.toLowerCase() ? <mark key={index}>{part}</mark> : part);
}

export default function CodeSnippets() {
  const params = useSearchParams();
  const requested = params.get("tech")?.toLowerCase() || "all";
  const [category, setCategory] = useState(categories.some(([id]) => id === requested) ? requested : "all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Snippet | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => { if (selected) closeRef.current?.focus(); }, [selected]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey);
  }, []);
  const results = useMemo(() => snippets.filter((item) => (category === "all" || item.category === category) && `${item.title} ${item.context} ${item.language}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
  async function copy(snippet: Snippet) { await navigator.clipboard.writeText(snippet.code); setCopied(snippet.id); window.setTimeout(() => setCopied(null), 1600); }

  return <section className={styles.page} aria-labelledby="snippets-title">
    <header className={styles.hero}><p className={styles.eyebrow}>Engineering reference</p><h1 id="snippets-title">Patterns worth keeping close.</h1><p>Small, production-minded examples for the moments where a familiar API has an unfamiliar edge.</p></header>
    <div className={styles.toolbar}><label className={styles.search}><span aria-hidden="true">⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search patterns, APIs, and notes" aria-label="Search snippets" />{query && <button onClick={() => setQuery("")} aria-label="Clear search">×</button>}</label><span className={styles.count}>{results.length} references</span></div>
    <nav className={styles.filters} aria-label="Snippet categories">{categories.map(([id, label]) => <button key={id} onClick={() => setCategory(id)} aria-pressed={category === id} className={category === id ? styles.activeFilter : ""}>{label}</button>)}</nav>
    <div className={styles.grid}>{results.map((item) => <article key={item.id} className={styles.card}><div className={styles.cardTop}><span>{item.language}</span><span className={styles.filename}>{item.filename}</span></div><h2>{highlight(item.title, query)}</h2><p>{highlight(item.context, query)}</p><pre><code>{item.code}</code></pre><div className={styles.cardActions}><button className={styles.copy} onClick={() => copy(item)}>{copied === item.id ? "Copied" : "Copy code"}</button><button className={styles.inspect} onClick={() => setSelected(item)}>Read notes <span>→</span></button></div></article>)}</div>
    {!results.length && <div className={styles.empty}><strong>No matching reference.</strong><span>Try a broader term or reset the category filter.</span><button onClick={() => { setCategory("all"); setQuery(""); }}>Reset filters</button></div>}
    {selected && <div className={styles.backdrop} onMouseDown={(e) => e.currentTarget === e.target && setSelected(null)} role="presentation"><section className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="snippet-notes"><button ref={closeRef} className={styles.close} onClick={() => setSelected(null)} aria-label="Close notes">×</button><p className={styles.eyebrow}>{selected.language} · {selected.filename}</p><h2 id="snippet-notes">{selected.title}</h2><div className={styles.notes}><div><h3>Why use it</h3><p>{selected.explanation}</p></div><div><h3>Production note</h3><p>{selected.production}</p></div><div><h3>Common mistake</h3><p>{selected.mistakes}</p></div>{selected.performance && <div><h3>Performance</h3><p>{selected.performance}</p></div>}</div><footer><span>Related: {selected.related.join(" · ")}</span><button className={styles.copy} onClick={() => copy(selected)}>{copied === selected.id ? "Copied" : "Copy code"}</button></footer></section></div>}
  </section>;
}
