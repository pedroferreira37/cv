"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";

const ResumeRenderer = dynamic(
  () => import("./resume-renderer").then((module) => module.ResumeRenderer),
  { ssr: false }
);

export function ResumeThumb({ props }) {
  const [url, setUrlChange] = useState(null);

  console.log(url);

  return (
    <div>
      <Link href="/create">
        <div className="w-[200px] h-[282px] thumb">
          <ResumeRenderer props={...props} onUrlChange={setUrlChange} />
        </div>
      </Link>
    </div>
  );
}
