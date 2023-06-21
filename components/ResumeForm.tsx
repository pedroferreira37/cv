"use client";
import { API } from "@/lib/api";
import { renderLayout } from "@/templates/render";
import dynamic from "next/dynamic";
import { useEffect, useReducer, useState } from "react";
import { initialState, reducer } from "@/lib/reducer";
import { ProfileForm } from "./ProfileForm";
import { ExperienceForm } from "./ExperienceForm";

const PdfViewer = dynamic(
  () => import("./PdfViewer").then((module) => module.PdfViewer),
  { ssr: false }
);

export const ResumeForm = ({ resumeId }: { resumeId: string }) => {
  const [resume, disptach] = useReducer(reducer, initialState);

  useEffect(() => {
    API.get(`/resume/${resumeId}`).then((req) => {
      disptach({ type: "INITILIAZE_RESUME", payload: req.data });
    });
  }, []);

  return (
    <div className="grid  grid-rows-[60px_1fr]">
      <div className="border-b-2 sticky top-0 bg-white"></div>
      <div
        className=" grid
        grid-cols-[600px_1fr]"
      >
        <div className="w-full h-[calc(100vh_-_60px)] sticky top-0 overflow-x-auto  border-l-1">
          <div className="px-8 py-6 space-y-4  divide-y-2 ">
            <ProfileForm
              profile={resume.profile}
              disptach={disptach}
              resumeId={resumeId}
            />
            <ExperienceForm
              experiences={resume.experiences}
              disptach={disptach}
              resumeId={resumeId}
            />
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center bg-[#eee]">
          <div>
            {/* <PdfViewer
              document={renderLayout({...}) as React.ReactElement}
              data={resume}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
