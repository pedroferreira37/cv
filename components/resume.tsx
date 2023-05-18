"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useResume } from "@/hooks/templates/use-resume";

const ResumeRender = dynamic(
  () =>
    import("../components/resume-render")
      .then((module) => module.ResumeRender)
      .catch(),
  { ssr: false }
);

export function Resume() {
  const [state, setState] = useState({
    template: "professional",
    name: "Hello World",
  });

  const resume = useResume(state);

  function updateState(e) {
    setState((state) => ({ ...state, name: e.target.value }));
  }
  return (
    <div className="w-full h-full  flex items-center justify-center  bg-gray-200">
      <div className="bg-white w-1/2 h-4/5">
        <ResumeRender {...{ url: resume.value }} />
      </div>
    </div>
  );
}
