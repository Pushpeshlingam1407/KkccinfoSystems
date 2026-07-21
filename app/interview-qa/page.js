import { Suspense } from "react";
import InterviewQA from "../../components/InterviewQA";

export const metadata = {
  title: "Interview Q&A | KKCC Info Systems",
  description: "Master your technical interviews with expert-curated Q&A for HTML, CSS, JavaScript, React, Python, Java, MySQL and C Language.",
};

export default function InterviewQAPage() {
  return <Suspense fallback={null}><InterviewQA /></Suspense>;
}
