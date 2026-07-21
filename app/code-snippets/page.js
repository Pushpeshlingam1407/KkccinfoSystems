import { Suspense } from "react";
import CodeSnippets from "../../components/CodeSnippets";

export const metadata = {
  title: "Code Snippets | KKCC Info Systems",
  description: "Copy-paste production-ready code snippets for HTML, CSS, JavaScript, React JS, Python, Java, MySQL and C Language.",
};

export default function CodeSnippetsPage() {
  return <Suspense fallback={null}><CodeSnippets /></Suspense>;
}
