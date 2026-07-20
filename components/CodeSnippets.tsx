"use client";

import { useState } from "react";
import styles from "./CodeSnippets.module.css";

const snippets = [
  {
    id: "js-fetch",
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
  }
];

export default function CodeSnippets() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <h1 className={styles.title}>Code Snippets</h1>
        <p className={styles.subtitle}>Copy and paste these production-ready code snippets to accelerate your development workflow.</p>
      </div>

      <div className={styles.grid}>
        {snippets.map((snippet) => (
          <div key={snippet.id} className={styles.snippetCard}>
            <div className={styles.snippetHeader}>
              <span className={styles.languageLabel}>{snippet.language}</span>
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
