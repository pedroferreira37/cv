"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { getLayout } from "@/templates/get-resume-layout";
import { ReactElement } from "react";
import { Resume } from "@/lib/reducer";

const ResumeViewer = dynamic(
  () => import("./resume-viewer").then((module) => module.ResumeViewer),
  { ssr: false }
);

export function ResumeCard({ resumes }: { resumes: Resume[] }) {
  return (
    <>
      {resumes.map((resume) => {
        return (
          <Link href={`/create/${resume.id}`} key={resume.id}>
            <div className="w-[200px] h-[282px] thumb relative hover:scale-[1.05] transition">
              <ResumeViewer
                resume={resume}
                document={getLayout(resume) as ReactElement}
              />
            </div>
          </Link>
        );
      })}
    </>
  );
}
