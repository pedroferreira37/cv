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
    <div className=" flex items-center justify-center px-8 pt-8">
      <div className="grid grid-cols-1 grid-rows-[1fr_100px] h-full ">
        <div className="flex justify-center pt-6">
          <div className="bg-white   w-1/2 h-4/5 ">
            <ResumeRenderer props={props} onUrlChange={setUrl} />
          </div>
        </div>
        <div className="flex items-center h-full  justify-end">
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
