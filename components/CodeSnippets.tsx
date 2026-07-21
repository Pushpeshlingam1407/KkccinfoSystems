"use client";

import { useState } from "react";
import styles from "./CodeSnippets.module.css";

const categories = [
  { id: "all", label: "All Snippets" },
  { id: "html", label: "HTML" },
  { id: "css", label: "CSS" },
  { id: "javascript", label: "JavaScript" },
  { id: "react", label: "React JS" },
  { id: "python", label: "Python" },
  { id: "java", label: "Java" },
  { id: "sql", label: "MySQL / SQL" },
];

const snippets = [
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
    id: "css-flex-center",
    category: "css",
    language: "CSS",
    title: "Centering with Flexbox",
    code: (
      <>
        .<span className={styles.function}>centered-container</span> {"{"}<br/>
        &nbsp;&nbsp;<span className={styles.variable}>display</span>: <span className={styles.string}>flex</span>;<br/>
        &nbsp;&nbsp;<span className={styles.variable}>justify-content</span>: <span className={styles.string}>center</span>;<br/>
        &nbsp;&nbsp;<span className={styles.variable}>align-items</span>: <span className={styles.string}>center</span>;<br/>
        &nbsp;&nbsp;<span className={styles.variable}>min-height</span>: <span className={styles.string}>100vh</span>;<br/>
        {"}"}
      </>
    ),
    rawCode: `.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}`
  },
  {
    id: "js-fetch",
    category: "javascript",
    language: "JavaScript",
    title: "Fetch API Wrapper",
    code: (
      <>
        <span className={styles.keyword}>const</span> <span className={styles.function}>fetchData</span> <span className={styles.operator}>=</span> <span className={styles.keyword}>async</span> (<span className={styles.variable}>url</span>) <span className={styles.operator}>=&gt;</span> {"{"}<br/>
        &nbsp;&nbsp;<span className={styles.keyword}>try</span> {"{"}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.keyword}>const</span> <span className={styles.variable}>response</span> <span className={styles.operator}>=</span> <span className={styles.keyword}>await</span> <span className={styles.function}>fetch</span>(<span className={styles.variable}>url</span>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.keyword}>const</span> <span className={styles.variable}>data</span> <span className={styles.operator}>=</span> <span className={styles.keyword}>await</span> <span className={styles.variable}>response</span>.<span className={styles.function}>json</span>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.keyword}>return</span> <span className={styles.variable}>data</span>;<br/>
        &nbsp;&nbsp;{"}"} <span className={styles.keyword}>catch</span> (<span className={styles.variable}>error</span>) {"{"}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.variable}>console</span>.<span className={styles.function}>error</span>(<span className={styles.string}>&quot;Error fetching data:&quot;</span>, <span className={styles.variable}>error</span>);<br/>
        &nbsp;&nbsp;{"}"}<br/>
        {"}"};
      </>
    ),
    rawCode: `const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};`
  },
  {
    id: "react-counter",
    category: "react",
    language: "React",
    title: "useState Counter",
    code: (
      <>
        <span className={styles.keyword}>import</span> {"{ "} <span className={styles.variable}>useState</span> {" }"} <span className={styles.keyword}>from</span> <span className={styles.string}>&quot;react&quot;</span>;<br/><br/>
        <span className={styles.keyword}>export</span> <span className={styles.keyword}>default</span> <span className={styles.keyword}>function</span> <span className={styles.function}>Counter</span>() {"{"}<br/>
        &nbsp;&nbsp;<span className={styles.keyword}>const</span> [<span className={styles.variable}>count</span>, <span className={styles.function}>setCount</span>] <span className={styles.operator}>=</span> <span className={styles.function}>useState</span>(<span className={styles.operator}>0</span>);<br/><br/>
        &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.function}>button</span> <span className={styles.variable}>onClick</span>=<span className={styles.operator}>{"{"}</span>() <span className={styles.operator}>=&gt;</span> <span className={styles.function}>setCount</span>(<span className={styles.variable}>count</span> <span className={styles.operator}>+</span> <span className={styles.operator}>1</span>)<span className={styles.operator}>{"}"}</span>&gt;<br/>
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
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`
  },
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
        <span className={styles.function}>print</span>(<span className={styles.variable}>squared_evens</span>) <span className={styles.comment}># Output: [4, 16, 36]</span>
      </>
    ),
    rawCode: `# Square even numbers in a list
numbers = [1, 2, 3, 4, 5, 6]
squared_evens = [x**2 for x in numbers if x % 2 == 0]
print(squared_evens) # Output: [4, 16, 36]`
  },
  {
    id: "java-singleton",
    category: "java",
    language: "Java",
    title: "Singleton Pattern (Thread-Safe)",
    code: (
      <>
        <span className={styles.keyword}>public</span> <span className={styles.keyword}>class</span> <span className={styles.function}>Singleton</span> {"{"}<br/>
        &nbsp;&nbsp;<span className={styles.keyword}>private</span> <span className={styles.keyword}>static</span> <span className={styles.keyword}>volatile</span> <span className={styles.function}>Singleton</span> <span className={styles.variable}>instance</span>;<br/><br/>
        &nbsp;&nbsp;<span className={styles.keyword}>private</span> <span className={styles.function}>Singleton</span>() {"{}"}<br/><br/>
        &nbsp;&nbsp;<span className={styles.keyword}>public</span> <span className={styles.keyword}>static</span> <span className={styles.function}>Singleton</span> <span className={styles.function}>getInstance</span>() {"{"}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.keyword}>if</span> (<span className={styles.variable}>instance</span> <span className={styles.operator}>==</span> <span className={styles.keyword}>null</span>) {"{"}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.keyword}>synchronized</span> (<span className={styles.function}>Singleton</span>.<span className={styles.keyword}>class</span>) {"{"}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.keyword}>if</span> (<span className={styles.variable}>instance</span> <span className={styles.operator}>==</span> <span className={styles.keyword}>null</span>) <span className={styles.variable}>instance</span> <span className={styles.operator}>=</span> <span className={styles.keyword}>new</span> <span className={styles.function}>Singleton</span>();<br/>
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
  {
    id: "sql-join",
    category: "sql",
    language: "MySQL",
    title: "INNER JOIN Query",
    code: (
      <>
        <span className={styles.keyword}>SELECT</span> <span className={styles.variable}>users.id</span>, <span className={styles.variable}>users.name</span>, <span className={styles.variable}>orders.total</span><br/>
        <span className={styles.keyword}>FROM</span> <span className={styles.function}>users</span><br/>
        <span className={styles.keyword}>INNER JOIN</span> <span className={styles.function}>orders</span> <span className={styles.keyword}>ON</span> <span className={styles.variable}>users.id</span> <span className={styles.operator}>=</span> <span className={styles.variable}>orders.user_id</span><br/>
        <span className={styles.keyword}>WHERE</span> <span className={styles.variable}>orders.status</span> <span className={styles.operator}>=</span> <span className={styles.string}>&apos;COMPLETED&apos;</span>;
      </>
    ),
    rawCode: `SELECT users.id, users.name, orders.total
FROM users
INNER JOIN orders ON users.id = orders.user_id
WHERE orders.status = 'COMPLETED';`
  }
];

export default function CodeSnippets() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredSnippets = activeCategory === "all" 
    ? snippets 
    : snippets.filter(s => s.category === activeCategory);

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <h1 className={styles.title}>Code Snippets</h1>
        <p className={styles.subtitle}>Copy and paste these production-ready code snippets to accelerate your development workflow.</p>
      </div>

      <div className={styles.categoriesWrapper}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`${styles.categoryButton} ${
              activeCategory === cat.id ? styles.categoryActive : styles.categoryInactive
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredSnippets.map((snippet) => (
          <div key={snippet.id} className={styles.snippetCard}>
            <div className={styles.snippetHeader}>
              <div>
                <span className={styles.languageLabel}>{snippet.language}</span>
                <span className={styles.snippetTitle}>{snippet.title}</span>
              </div>
              <button
                onClick={() => handleCopy(snippet.id, snippet.rawCode)}
                className={styles.copyButton}
                aria-label="Copy code"
              >
                {copiedId === snippet.id ? (
                  <>
                    <svg className={styles.copyIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className={styles.copyIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    Copy
                  </>
                )}
              </button>
            </div>
            <div className={styles.snippetBody}>
              <pre className={styles.codeBlock}>
                <code>{snippet.code}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

