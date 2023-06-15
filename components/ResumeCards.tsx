"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { renderLayout } from "@/templates/render";

import { ReactElement } from "react";
import { motion } from "framer-motion";
import { Resume } from "@/lib/reducer";

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
            <motion.div
              className="w-[200px] h-[282px] thumb relative hover:scale-[1.05] transition"
              animate={{ opacity: [0, 1] }}
            >
              <PdfViewer
                data={resume}
                document={renderLayout(resume) as ReactElement}
              />
            </motion.div>
          </Link>
        );
      })}
    </>
  );
}
