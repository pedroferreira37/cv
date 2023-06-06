"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { renderDocument } from "@/templates/render";
import { Basic } from "@/templates/basic-template";
import { profile } from "console";

const ResumeRenderer = dynamic(
  () => import("./resume-renderer").then((module) => module.ResumeRenderer),
  { ssr: false }
);

export function ResumeThumb({ props }) {
  const pdfDocument = Basic({
    profile: props,
    experiences: props.experiences,
    educations: props.educations,
  });

  return (
    <div>
      <Link href={`/create/${props.id}`}>
        <div className="w-[200px] h-[282px] thumb relative">
          <ResumeRenderer data={props} document={pdfDocument} arrows={false} />
        </div>
      </Link>
    </div>
  );
}
