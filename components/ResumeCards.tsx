"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { renderLayout } from "@/templates/render";

import { Resume } from "@prisma/client";
import { ReactElement, useState } from "react";

const PdfViewer = dynamic(
  () => import("./PdfViewer").then((module) => module.PdfViewer),
  { ssr: false }
);

export function ResumeCard({ resumes }: { resumes: Resume[] }) {
  return (
    <>
      {resumes.map((resume) => {
        return (
          <Link href={`/create/${resume.id}`}>
            <div className="w-[200px] h-[282px] thumb relative hover:scale-[1.05] transition">
              <PdfViewer
                data={resume}
                document={renderLayout(resume) as ReactElement}
              />
            </div>
          </Link>
        );
      })}
    </>
  );
}
