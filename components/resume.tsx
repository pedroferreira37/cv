"use client";
import { Professional } from "./professional-template";
import { useResume } from "@/hooks/use-resume";
import { pdf } from "pdfmake.ts";

const renderResume = (props) => {
  switch (props.type) {
    case "professional":
      return <Professional {...props} />;
  }
};

export function Resume() {
  const props = {
    type: "professional",
  };

  const resume = renderResume(props);

  return (
    <div className="w-full h-full  flex flex-col  items-center justify-center  bg-gray-200">
      <div className="bg-white w-[595px] h-[842px]" id={props.type}>
        {resume}
      </div>
      <button onClick={(e) => pdfFile.download()}>Download</button>
    </div>
  );
}
