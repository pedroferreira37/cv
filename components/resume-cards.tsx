"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { renderDocument } from "@/templates/render";
import { Basic } from "@/templates/basic-template";
import { profile } from "console";
import { type Resume } from "@/lib/reducer";

const Resume = dynamic(
  () => import("./resume").then((module) => module.Resume),
  { ssr: false }
);

export function ResumeCard({ resumes }: { resumes: Resume[] }) {
  const document = resumes.map((resume) =>
    Basic({
      profile: resume,
      experiences: resume.experiences,
      educations: resume.educations,
    })
  );

  return (
    <>
      {resumes.map((resume) => {
        return (
          <Link href={`/create/${resume.id}`}>
            <div className="w-[200px] h-[282px] thumb relative hover:scale-[1.05] transition">
              <Resume resume={resume} document={document} arrows={false} />
            </div>
          </Link>
        );
      })}
    </>
  );
}
