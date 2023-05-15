"use client";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { TemplateRenderer } from "./template-renderer";

const PdfRenderer = dynamic(
  () => import("./pdf-renderer").then((module) => module.PdfRenderer),
  { ssr: false }
);

export function TemplateLayout({ data }) {
  return (
    <div className="flex items-center justify-center bg-gray-200 w-full h-full">
      {data.map((prop) => (
        <div className="w-1/2  h-3/4">
          <PdfRenderer component={<TemplateRenderer {...prop} />} />
        </div>
      ))}
    </div>
  );
}
