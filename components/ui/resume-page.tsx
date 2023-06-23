"use client";
import dynamic from "next/dynamic";
import { ReactElement } from "react";
import { Resume } from "@/lib/reducer";
import { getLayout } from "@/templates/get-resume-layout";

const ResumeViewer = dynamic(
  () => import("./resume-viewer").then((module) => module.ResumeViewer),
  { ssr: false }
);
export const ResumePage = ({ resume }: { resume: Resume }) => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center bg-[#eee]">
        <ResumeViewer
          arrows={true}
          document={getLayout({ ...resume }) as ReactElement}
          resume={resume}
        />
      </div>
    </>
  );
};
