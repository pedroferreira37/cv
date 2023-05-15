"use client";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { TemplateRenderer } from "./template-renderer";

const PdfRenderer = dynamic(
  () => import("./pdf-renderer").then((module) => module.PdfRenderer),
  { ssr: false }
);

export function TemplateCard({ templates }) {
  return (
    <div className="flex  gap-10 h-full">
      {templates.map((template) => (
        <div>
          <h2 className="mb-2 font-medium">{template.name}</h2>
          <Link href={`/resume/${2}`}>
            <div className="w-[280px] h-[320px]">
              <PdfRenderer component={<TemplateRenderer {...template} />} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
