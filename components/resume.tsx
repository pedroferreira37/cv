"use client";
import { useState } from "react";
import { jsPDF } from "jspdf";
import dynamic from "next/dynamic";
import { useAsync } from "react-use";
// import { ResumeRender } from "./resume-render";

const ResumeRender = dynamic(
  () =>
    import("../components/resume-render")
      .then((module) => module.ResumeRender)
      .catch(),
  { ssr: false }
);

export function Resume() {
  const [text, setText] = useState<string>("");
  const doc = new jsPDF();

  doc.text(text, 50, 50);
  doc.setFillColor("##FF0000");
  doc.setDrawColor("##FF0000");
  doc.setFillColor("##FF0000");
  doc.rect(10, 60, 150, 160, "F");

  const render = useAsync(async () => {
    const url = doc.output("blob");
    return url;
  }, [text]);

  return (
    <div>
      <label>input</label>
      <input onChange={(e) => setText(e.target.value)} />
      <div className="w-1/2 h-2/3">
        <ResumeRender {...{ url: render.value }} />
      </div>
      <button onClick={() => doc.save("mypdf.pdf")}>Download</button>
    </div>
  );
}
