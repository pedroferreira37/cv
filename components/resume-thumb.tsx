"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { renderDocument } from "../templates/render";

const ResumeRenderer = dynamic(
  () => import("./resume-renderer").then((module) => module.ResumeRenderer),
  { ssr: false }
);

export function ResumeThumb({ props }) {
  const pdfDocument = renderDocument(props);

  return (
    <div>
      <Link href="/create">
        <div className="w-[200px] h-[282px] thumb relative">
          <ResumeRenderer
            template={props}
            data={props.data}
            document={pdfDocument}
          />
        </div>
      </Link>
    </div>
  );
}
