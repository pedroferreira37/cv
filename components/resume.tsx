"use client";
import dynamic from "next/dynamic";
import { Professional } from "./templates/professional-template";

const ResumeViewer = dynamic(
  () => import("./resume-viewer").then((module) => module.ResumeViewer),
  { ssr: false }
);

const render = (props) => {
  switch (props.type) {
    case "professional":
      return <Professional {...props} />;
    default:
      return null;
  }
};

export function Resume({ resumes }) {
  const layouts = resumes.map((prop) => render(prop));

  console.log(layouts);
  const resume = layouts.map((layout) => (
    <>
      <ResumeViewer layout={layout} />
    </>
  ));

  return <div className="w-full h-full">{resume}</div>;
}
