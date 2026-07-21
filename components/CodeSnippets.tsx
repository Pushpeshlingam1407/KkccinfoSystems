"use client";

import { useState } from "react";
import styles from "./CodeSnippets.module.css";

const categories = [
  { id: "all",        label: "All Snippets",   icon: "⚡" },
  { id: "html",       label: "HTML",            icon: "🌐" },
  { id: "css",        label: "CSS",             icon: "🎨" },
  { id: "javascript", label: "JavaScript",      icon: "🟡" },
  { id: "react",      label: "React JS",        icon: "⚛️" },
  { id: "python",     label: "Python",          icon: "🐍" },
  { id: "java",       label: "Java",            icon: "☕" },
  { id: "sql",        label: "MySQL / SQL",     icon: "🗄️" },
  { id: "clang",      label: "C Language",      icon: "⚙️" },
];

const snippets = [
  // HTML
  {
    id: "html-template",
    category: "html",
    language: "HTML5",
    title: "HTML5 Starter Boilerplate",
    code: (
      <>
        <span className={styles.keyword}>&lt;!DOCTYPE html&gt;</span><br/>
        &lt;<span className={styles.function}>html</span> <span className={styles.variable}>lang</span>=<span className={styles.string}>&quot;en&quot;</span>&gt;<br/>
        &nbsp;&nbsp;&lt;<span className={styles.function}>head</span>&gt;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.function}>meta</span> <span className={styles.variable}>charset</span>=<span className={styles.string}>&quot;UTF-8&quot;</span> /&gt;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.function}>meta</span> <span className={styles.variable}>name</span>=<span className={styles.string}>&quot;viewport&quot;</span> <span className={styles.variable}>content</span>=<span className={styles.string}>&quot;width=device-width, initial-scale=1.0&quot;</span> /&gt;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.function}>title</span>&gt;My Page&lt;/<span className={styles.function}>title</span>&gt;<br/>
        &nbsp;&nbsp;&lt;/<span className={styles.function}>head</span>&gt;<br/>
        &nbsp;&nbsp;&lt;<span className={styles.function}>body</span>&gt;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.function}>h1</span>&gt;Hello World&lt;/<span className={styles.function}>h1</span>&gt;<br/>
        &nbsp;&nbsp;&lt;/<span className={styles.function}>body</span>&gt;<br/>
        &lt;/<span className={styles.function}>html</span>&gt;
      </>
    ),
    rawCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`
  },
  {
    id: "html-form",
    category: "html",
    language: "HTML5",
    title: "Accessible Form Template",
    code: (
      <>
        &lt;<span className={styles.function}>form</span> <span className={styles.variable}>action</span>=<span className={styles.string}>&quot;/submit&quot;</span> <span className={styles.variable}>method</span>=<span className={styles.string}>&quot;POST&quot;</span>&gt;<br/>
        &nbsp;&nbsp;&lt;<span className={styles.function}>label</span> <span className={styles.variable}>for</span>=<span className={styles.string}>&quot;email&quot;</span>&gt;Email&lt;/<span className={styles.function}>label</span>&gt;<br/>
        &nbsp;&nbsp;&lt;<span className={styles.function}>input</span> <span className={styles.variable}>type</span>=<span className={styles.string}>&quot;email&quot;</span> <span className={styles.variable}>id</span>=<span className={styles.string}>&quot;email&quot;</span> <span className={styles.variable}>name</span>=<span className={styles.string}>&quot;email&quot;</span> <span className={styles.variable}>required</span> /&gt;<br/>
        &nbsp;&nbsp;&lt;<span className={styles.function}>button</span> <span className={styles.variable}>type</span>=<span className={styles.string}>&quot;submit&quot;</span>&gt;Submit&lt;/<span className={styles.function}>button</span>&gt;<br/>
        &lt;/<span className={styles.function}>form</span>&gt;
      </>
    ),
    rawCode: `<form action="/submit" method="POST">
  <label for="email">Email</label>
  <input type="email" id="email" name="email" required />
  <button type="submit">Submit</button>
</form>`
  },
  // CSS
  {
    id: "css-flex-center",
    category: "css",
    language: "CSS3",
    title: "Centering with Flexbox",
    code: (
      <>
        .<span className={styles.function}>centered</span> {"{"}<br/>
        &nbsp;&nbsp;<span className={styles.variable}>display</span>: <span className={styles.string}>flex</span>;<br/>
        &nbsp;&nbsp;<span className={styles.variable}>justify-content</span>: <span className={styles.string}>center</span>;<br/>
        &nbsp;&nbsp;<span className={styles.variable}>align-items</span>: <span className={styles.string}>center</span>;<br/>
        &nbsp;&nbsp;<span className={styles.variable}>min-height</span>: <span className={styles.string}>100vh</span>;<br/>
        {"}"}
      </>
    ),
    rawCode: `.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}`
  },
  {
    id: "css-variables",
    category: "css",
    language: "CSS3",
    title: "CSS Custom Properties (Variables)",
    code: (
      <>
        :<span className={styles.function}>root</span> {"{"}<br/>
        &nbsp;&nbsp;<span className={styles.variable}>--primary</span>: <span className={styles.string}>#6366f1</span>;<br/>
        &nbsp;&nbsp;<span className={styles.variable}>--bg</span>: <span className={styles.string}>#0f172a</span>;<br/>
        &nbsp;&nbsp;<span className={styles.variable}>--text</span>: <span className={styles.string}>#f8fafc</span>;<br/>
        {"}"}<br/><br/>
        .<span className={styles.function}>btn</span> {"{"}<br/>
        &nbsp;&nbsp;<span className={styles.variable}>background</span>: <span className={styles.function}>var</span>(<span className={styles.string}>--primary</span>);<br/>
        &nbsp;&nbsp;<span className={styles.variable}>color</span>: <span className={styles.function}>var</span>(<span className={styles.string}>--text</span>);<br/>
        {"}"}
      </>
    ),
    rawCode: `:root {
  --primary: #6366f1;
  --bg: #0f172a;
  --text: #f8fafc;
}
.btn {
  background: var(--primary);
  color: var(--text);
}`
  },
  // JavaScript
  {
    id: "js-fetch",
    category: "javascript",
    language: "JavaScript",
    title: "Fetch API Wrapper",
    code: (
      <>
        <span className={styles.keyword}>const</span> <span className={styles.function}>fetchData</span> <span className={styles.operator}>=</span> <span className={styles.keyword}>async</span> (<span className={styles.variable}>url</span>) <span className={styles.operator}>=&gt;</span> {"{"}<br/>
        &nbsp;&nbsp;<span className={styles.keyword}>try</span> {"{"}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.keyword}>const</span> <span className={styles.variable}>res</span> <span className={styles.operator}>=</span> <span className={styles.keyword}>await</span> <span className={styles.function}>fetch</span>(<span className={styles.variable}>url</span>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.keyword}>const</span> <span className={styles.variable}>data</span> <span className={styles.operator}>=</span> <span className={styles.keyword}>await</span> <span className={styles.variable}>res</span>.<span className={styles.function}>json</span>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.keyword}>return</span> <span className={styles.variable}>data</span>;<br/>
        &nbsp;&nbsp;{"}"} <span className={styles.keyword}>catch</span> (<span className={styles.variable}>err</span>) {"{"}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.variable}>console</span>.<span className={styles.function}>error</span>(<span className={styles.string}>&quot;Error:&quot;</span>, <span className={styles.variable}>err</span>);<br/>
        &nbsp;&nbsp;{"}"}<br/>
        {"}"};
      </>
    ),
    rawCode: `const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error:", err);
  }
};`
  },
  {
    id: "js-debounce",
    category: "javascript",
    language: "JavaScript",
    title: "Debounce Function",
    code: (
      <>
        <span className={styles.keyword}>function</span> <span className={styles.function}>debounce</span>(<span className={styles.variable}>fn</span>, <span className={styles.variable}>delay</span>) {"{"}<br/>
        &nbsp;&nbsp;<span className={styles.keyword}>let</span> <span className={styles.variable}>timer</span>;<br/>
        &nbsp;&nbsp;<span className={styles.keyword}>return</span> <span className={styles.keyword}>function</span>(...<span className={styles.variable}>args</span>) {"{"}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.function}>clearTimeout</span>(<span className={styles.variable}>timer</span>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.variable}>timer</span> <span className={styles.operator}>=</span> <span className={styles.function}>setTimeout</span>(() <span className={styles.operator}>=&gt;</span> <span className={styles.variable}>fn</span>.<span className={styles.function}>apply</span>(<span className={styles.keyword}>this</span>, <span className={styles.variable}>args</span>), <span className={styles.variable}>delay</span>);<br/>
        &nbsp;&nbsp;{"}"};<br/>
        {"}"}
      </>
    ),
    rawCode: `function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}`
  },
  // React
  {
    id: "react-counter",
    category: "react",
    language: "React",
    title: "useState Counter Hook",
    code: (
      <>
        <span className={styles.keyword}>import</span> {"{ "}<span className={styles.variable}>useState</span>{" }"} <span className={styles.keyword}>from</span> <span className={styles.string}>&quot;react&quot;</span>;<br/><br/>
        <span className={styles.keyword}>export default function</span> <span className={styles.function}>Counter</span>() {"{"}<br/>
        &nbsp;&nbsp;<span className={styles.keyword}>const</span> [<span className={styles.variable}>count</span>, <span className={styles.function}>setCount</span>] <span className={styles.operator}>=</span> <span className={styles.function}>useState</span>(<span className={styles.operator}>0</span>);<br/><br/>
        &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.function}>button</span> <span className={styles.variable}>onClick</span>={"{"}<span className={styles.operator}>{`() => setCount(c => c + 1)`}</span>{"}"}&gt;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Count: {"{"}<span className={styles.variable}>count</span>{"}"}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.function}>button</span>&gt;<br/>
        &nbsp;&nbsp;);<br/>
        {"}"}
      </>
    ),
    rawCode: `import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  );
}`
  },
  {
    id: "react-useeffect",
    category: "react",
    language: "React",
    title: "useEffect Data Fetch",
    code: (
      <>
        <span className={styles.keyword}>import</span> {"{ "}<span className={styles.variable}>useState</span>, <span className={styles.variable}>useEffect</span>{" }"} <span className={styles.keyword}>from</span> <span className={styles.string}>&quot;react&quot;</span>;<br/><br/>
        <span className={styles.keyword}>export default function</span> <span className={styles.function}>DataList</span>() {"{"}<br/>
        &nbsp;&nbsp;<span className={styles.keyword}>const</span> [<span className={styles.variable}>data</span>, <span className={styles.function}>setData</span>] <span className={styles.operator}>=</span> <span className={styles.function}>useState</span>([]);<br/><br/>
        &nbsp;&nbsp;<span className={styles.function}>useEffect</span>(() <span className={styles.operator}>=&gt;</span> {"{"}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.function}>fetch</span>(<span className={styles.string}>&quot;/api/data&quot;</span>).<span className={styles.function}>then</span>(<span className={styles.variable}>r</span> <span className={styles.operator}>=&gt;</span> <span className={styles.variable}>r</span>.<span className={styles.function}>json</span>()).<span className={styles.function}>then</span>(<span className={styles.function}>setData</span>);<br/>
        &nbsp;&nbsp;{"}"}, []);<br/><br/>
        &nbsp;&nbsp;<span className={styles.keyword}>return</span> &lt;<span className={styles.function}>ul</span>&gt;{"{"}<span className={styles.variable}>data</span>.<span className={styles.function}>map</span>((<span className={styles.variable}>item</span>, <span className={styles.variable}>i</span>) <span className={styles.operator}>=&gt;</span> &lt;<span className={styles.function}>li</span> <span className={styles.variable}>key</span>={"{"}<span className={styles.variable}>i</span>{"}"}&gt;{"{"}<span className={styles.variable}>item</span>{"}"}&lt;/<span className={styles.function}>li</span>&gt;){"}"}&lt;/<span className={styles.function}>ul</span>&gt;;<br/>
        {"}"}
      </>
    ),
    rawCode: `import { useState, useEffect } from "react";

export default function DataList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/data").then(r => r.json()).then(setData);
  }, []);

  return <ul>{data.map((item, i) => <li key={i}>{item}</li>)}</ul>;
}`
  },
  // Python
  {
    id: "python-list-comp",
    category: "python",
    language: "Python",
    title: "List Comprehension",
    code: (
      <>
        <span className={styles.comment}># Square even numbers in a list</span><br/>
        <span className={styles.variable}>numbers</span> <span className={styles.operator}>=</span> [<span className={styles.operator}>1</span>, <span className={styles.operator}>2</span>, <span className={styles.operator}>3</span>, <span className={styles.operator}>4</span>, <span className={styles.operator}>5</span>, <span className={styles.operator}>6</span>]<br/>
        <span className={styles.variable}>squared_evens</span> <span className={styles.operator}>=</span> [<span className={styles.variable}>x</span> ** <span className={styles.operator}>2</span> <span className={styles.keyword}>for</span> <span className={styles.variable}>x</span> <span className={styles.keyword}>in</span> <span className={styles.variable}>numbers</span> <span className={styles.keyword}>if</span> <span className={styles.variable}>x</span> % <span className={styles.operator}>2</span> == <span className={styles.operator}>0</span>]<br/>
        <span className={styles.function}>print</span>(<span className={styles.variable}>squared_evens</span>) <span className={styles.comment}># [4, 16, 36]</span>
      </>
    ),
    rawCode: `# Square even numbers in a list
numbers = [1, 2, 3, 4, 5, 6]
squared_evens = [x**2 for x in numbers if x % 2 == 0]
print(squared_evens) # [4, 16, 36]`
  },
  {
    id: "python-decorator",
    category: "python",
    language: "Python",
    title: "Simple Decorator",
    code: (
      <>
        <span className={styles.keyword}>def</span> <span className={styles.function}>logger</span>(<span className={styles.variable}>func</span>):<br/>
        &nbsp;&nbsp;<span className={styles.keyword}>def</span> <span className={styles.function}>wrapper</span>(*<span className={styles.variable}>args</span>, **<span className={styles.variable}>kwargs</span>):<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.function}>print</span>(<span className={styles.string}>f"Calling {"{"}{`{func.__name__}`}{"}"}"</span>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.keyword}>return</span> <span className={styles.function}>func</span>(*<span className={styles.variable}>args</span>, **<span className={styles.variable}>kwargs</span>)<br/>
        &nbsp;&nbsp;<span className={styles.keyword}>return</span> <span className={styles.variable}>wrapper</span><br/><br/>
        @<span className={styles.function}>logger</span><br/>
        <span className={styles.keyword}>def</span> <span className={styles.function}>greet</span>(<span className={styles.variable}>name</span>):<br/>
        &nbsp;&nbsp;<span className={styles.function}>print</span>(<span className={styles.string}>f"Hello, {"{"}{`{name}`}{"}"}"</span>)
      </>
    ),
    rawCode: `def logger(func):
  def wrapper(*args, **kwargs):
    print(f"Calling {func.__name__}")
    return func(*args, **kwargs)
  return wrapper

@logger
def greet(name):
  print(f"Hello, {name}")`
  },
  // Java
  {
    id: "java-singleton",
    category: "java",
    language: "Java",
    title: "Singleton Pattern (Thread-Safe)",
    code: (
      <>
        <span className={styles.keyword}>public class</span> <span className={styles.function}>Singleton</span> {"{"}<br/>
        &nbsp;&nbsp;<span className={styles.keyword}>private static volatile</span> <span className={styles.function}>Singleton</span> <span className={styles.variable}>instance</span>;<br/><br/>
        &nbsp;&nbsp;<span className={styles.keyword}>private</span> <span className={styles.function}>Singleton</span>() {"{}"}<br/><br/>
        &nbsp;&nbsp;<span className={styles.keyword}>public static</span> <span className={styles.function}>Singleton</span> <span className={styles.function}>getInstance</span>() {"{"}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.keyword}>if</span> (<span className={styles.variable}>instance</span> <span className={styles.operator}>==</span> <span className={styles.keyword}>null</span>) {"{"}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.keyword}>synchronized</span> (<span className={styles.function}>Singleton</span>.<span className={styles.keyword}>class</span>) {"{"}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.keyword}>if</span> (<span className={styles.variable}>instance</span> <span className={styles.operator}>==</span> <span className={styles.keyword}>null</span>) <span className={styles.variable}>instance</span> <span className={styles.operator">=</span> <span className={styles.keyword}>new</span> <span className={styles.function}>Singleton</span>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.keyword}>return</span> <span className={styles.variable}>instance</span>;<br/>
        &nbsp;&nbsp;{"}"}<br/>
        {"}"}
      </>
    ),
    rawCode: `public class Singleton {
  private static volatile Singleton instance;

  private Singleton() {}

  public static Singleton getInstance() {
    if (instance == null) {
      synchronized (Singleton.class) {
        if (instance == null) instance = new Singleton();
      }
    }
    return instance;
  }
}`
  },
  // SQL
  {
    id: "sql-join",
    category: "sql",
    language: "MySQL",
    title: "INNER JOIN Query",
    code: (
      <>
        <span className={styles.keyword}>SELECT</span> <span className={styles.variable}>u.id</span>, <span className={styles.variable}>u.name</span>, <span className={styles.variable}>o.total</span><br/>
        <span className={styles.keyword}>FROM</span> <span className={styles.function}>users</span> <span className={styles.variable}>u</span><br/>
        <span className={styles.keyword}>INNER JOIN</span> <span className={styles.function}>orders</span> <span className={styles.variable}>o</span> <span className={styles.keyword}>ON</span> <span className={styles.variable}>u.id</span> <span className={styles.operator}>=</span> <span className={styles.variable}>o.user_id</span><br/>
        <span className={styles.keyword}>WHERE</span> <span className={styles.variable}>o.status</span> <span className={styles.operator}>=</span> <span className={styles.string}>&apos;COMPLETED&apos;</span><br/>
        <span className={styles.keyword}>ORDER BY</span> <span className={styles.variable}>o.total</span> <span className={styles.keyword}>DESC</span>;
      </>
    ),
    rawCode: `SELECT u.id, u.name, o.total
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE o.status = 'COMPLETED'
ORDER BY o.total DESC;`
  },
  {
    id: "sql-stored-proc",
    category: "sql",
    language: "MySQL",
    title: "Stored Procedure",
    code: (
      <>
        <span className={styles.keyword}>DELIMITER</span> $$<br/>
        <span className={styles.keyword}>CREATE PROCEDURE</span> <span className={styles.function}>GetUserOrders</span>(<span className={styles.keyword}>IN</span> <span className={styles.variable}>userId</span> <span className={styles.string}>INT</span>)<br/>
        <span className={styles.keyword}>BEGIN</span><br/>
        &nbsp;&nbsp;<span className={styles.keyword}>SELECT</span> * <span className={styles.keyword}>FROM</span> <span className={styles.function}>orders</span><br/>
        &nbsp;&nbsp;<span className={styles.keyword}>WHERE</span> <span className={styles.variable}>user_id</span> <span className={styles.operator}>=</span> <span className={styles.variable}>userId</span>;<br/>
        <span className={styles.keyword}>END</span>$$<br/>
        <span className={styles.keyword}>DELIMITER</span> ;
      </>
    ),
    rawCode: `DELIMITER $$
CREATE PROCEDURE GetUserOrders(IN userId INT)
BEGIN
  SELECT * FROM orders
  WHERE user_id = userId;
END$$
DELIMITER ;`
  },
  // C Language
  {
    id: "clang-pointer",
    category: "clang",
    language: "C",
    title: "Pointer Basics",
    code: (
      <>
        <span className={styles.keyword}>#include</span> <span className={styles.string}>&lt;stdio.h&gt;</span><br/><br/>
        <span className={styles.keyword}>int</span> <span className={styles.function}>main</span>() {"{"}<br/>
        &nbsp;&nbsp;<span className={styles.keyword}>int</span> <span className={styles.variable}>x</span> <span className={styles.operator}>=</span> <span className={styles.operator}>10</span>;<br/>
        &nbsp;&nbsp;<span className={styles.keyword}>int</span> *<span className={styles.variable}>ptr</span> <span className={styles.operator}>=</span> &<span className={styles.variable}>x</span>;<br/><br/>
        &nbsp;&nbsp;<span className={styles.function}>printf</span>(<span className={styles.string}>"Value: %d\n"</span>, *<span className={styles.variable}>ptr</span>);<br/>
        &nbsp;&nbsp;<span className={styles.function}>printf</span>(<span className={styles.string}>"Address: %p\n"</span>, <span className={styles.variable}>ptr</span>);<br/>
        &nbsp;&nbsp;<span className={styles.keyword}>return</span> <span className={styles.operator}>0</span>;<br/>
        {"}"}
      </>
    ),
    rawCode: `#include <stdio.h>

int main() {
  int x = 10;
  int *ptr = &x;

  printf("Value: %d\\n", *ptr);
  printf("Address: %p\\n", ptr);
  return 0;
}`
  },
];

export default function CodeSnippets() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredSnippets =
    activeCategory === "all"
      ? snippets
      : snippets.filter((s) => s.category === activeCategory);

  const totalSnippets = snippets.length;

  return (
    <div className={styles.pageWrapper}>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroBadge}>
          <span className={styles.heroBadgeDot} />
          Production-Ready Snippets
        </div>
        <h1 className={styles.heroTitle}>
          Code{" "}
          <span className={styles.heroTitleGradient}>Snippets</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Copy-paste ready snippets for HTML, CSS, JavaScript, React, Python, Java, MySQL & C — all in one place.
        </p>
        <div className={styles.heroStats}>
          <div className={styles.heroStat}>
            <span className={styles.heroStatNumber}>{totalSnippets}+</span>
            <span className={styles.heroStatLabel}>Snippets</span>
          </div>
          <div className={styles.heroStat}>
            <span className={styles.heroStatNumber}>8</span>
            <span className={styles.heroStatLabel}>Languages</span>
          </div>
          <div className={styles.heroStat}>
            <span className={styles.heroStatNumber}>1-Click</span>
            <span className={styles.heroStatLabel}>Copy</span>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className={styles.filterBar}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`${styles.filterButton} ${
              activeCategory === cat.id ? styles.filterButtonActive : ""
            }`}
          >
            <span className={styles.filterIcon}>{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Snippets Grid */}
      <div className={styles.container}>
        <p className={styles.resultCount}>
          Showing <span className={styles.resultCountHighlight}>{filteredSnippets.length}</span> snippet{filteredSnippets.length !== 1 ? "s" : ""}
        </p>

        <div className={styles.grid}>
          {filteredSnippets.length === 0 ? (
            <div className={styles.emptyState}>
              <span className={styles.emptyStateIcon}>🔍</span>
              <p className={styles.emptyStateText}>No snippets found for this filter.</p>
            </div>
          ) : (
            filteredSnippets.map((snippet) => (
              <div key={snippet.id} className={styles.snippetCard}>
                {/* Card Header */}
                <div className={styles.snippetHeader}>
                  <div className={styles.snippetHeaderLeft}>
                    <div className={styles.terminalDots}>
                      <span className={`${styles.dot} ${styles.dotRed}`} />
                      <span className={`${styles.dot} ${styles.dotYellow}`} />
                      <span className={`${styles.dot} ${styles.dotGreen}`} />
                    </div>
                    <div className={styles.snippetMeta}>
                      <span className={styles.languageLabel}>{snippet.language}</span>
                      <span className={styles.snippetTitle}>{snippet.title}</span>
                    </div>
                  </div>
                  <div className={styles.snippetHeaderRight}>
                    <span className={styles.langBadge}>{snippet.language}</span>
                    <button
                      onClick={() => handleCopy(snippet.id, snippet.rawCode)}
                      className={`${styles.copyButton} ${copiedId === snippet.id ? styles.copyButtonCopied : ""}`}
                      aria-label="Copy code"
                    >
                      {copiedId === snippet.id ? (
                        <>
                          <svg className={styles.copyIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Copied!
                        </>
                      ) : (
                        <>
                          <svg className={styles.copyIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Code Body */}
                <div className={styles.snippetBody}>
                  <pre className={styles.codeBlock}>
                    <code>{snippet.code}</code>
                  </pre>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
