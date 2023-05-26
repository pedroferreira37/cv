"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { FiDownload } from "react-icons/fi";

const ResumeRenderer = dynamic(
  () => import("./resume-renderer").then((module) => module.ResumeRenderer),
  { ssr: false }
);

export function Resume(props) {
  const [url, setUrl] = useState(null);

  return (
    <div className=" flex flex-1 h-screen  px-8 pt-8  ">
      <div className="flex-col relative flex">
        <ResumeRenderer props={props} onUrlChange={setUrl} />

        <div className="flex items-center h-full w-full justify-end">
          <Link
            href={url || ""}
            target="_blank"
            className="bg-green-default hover:bg-green-hover text-white text-sm px-4 py-2 rounded flex gap-2 items-center"
          >
            <FiDownload size={20} />
            Download
          </Link>
        </div>
      </div>
    </div>
  );
}
