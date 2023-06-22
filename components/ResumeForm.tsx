"use client";
import { API } from "@/lib/api";
import { renderLayout } from "@/templates/render";
import dynamic from "next/dynamic";
import { useEffect, useReducer, useState } from "react";
import { initialState, reducer } from "@/lib/reducer";
import { ProfileForm } from "./ProfileForm";
import { ExperienceForm } from "./ExperienceForm";
import { EducationForm } from "./EducationForm";
import { FiArrowLeft, FiDownload } from "react-icons/fi";
import Link from "next/link";
import { Avatar } from "./Avatar";
import { User } from "@prisma/client";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { debounce } from "@/lib/debounce";

const PdfViewer = dynamic(
  () => import("./PdfViewer").then((module) => module.PdfViewer),
  { ssr: false }
);

export const ResumeForm = ({
  resumeId,
  user,
}: {
  resumeId: string;
  user: User;
}) => {
  const [resume, disptach] = useReducer(reducer, initialState);

  useEffect(() => {
    API.get(`/resume/${resumeId}`).then((req) => {
      console.log(req);
      disptach({ type: "INITILIAZE_RESUME", payload: req.data });
    });
  }, []);

  const updateResumeName = (e, resumeId: string) => {
    const textContent = document.getElementById("name")?.textContent;

    disptach({ type: "UPDATE_RESUME", payload: textContent as string });

    const updateName = debounce(API.put);
    updateName(`/resume/${resumeId}`, { name: textContent });
  };

  return (
    <div className="grid  grid-rows-[60px_1fr]">
      <div className="border-b-2 sticky top-0 bg-white px-4   flex justify-between  items-center ">
        <Link href="/user" className="p-2 bg-gray-200 rounded">
          <FiArrowLeft size={20} />
        </Link>
        <div
          contentEditable={true}
          id="name"
          className="outline-none focus:border p-2 min-w-[120px] max-w-[600px]"
          onBlur={(e) => updateResumeName(e, resumeId)}
        >
          {resume.name}
        </div>
        {resume.na}
        <PDFDownloadLink
          fileName={`${resume.name}.pdf`}
          document={renderLayout({ ...resume }) as React.ReactElement}
          className="bg-green-field text-white text-sm py-1 px-2 rounded flex items-center gap-2"
        >
          <FiDownload />
          Download
        </PDFDownloadLink>
      </div>
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
            <EducationForm
              educations={resume.educations}
              disptach={disptach}
              resumeId={resumeId}
            />
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center bg-[#eee]">
          <div>
            <PdfViewer
              document={renderLayout({ ...resume }) as React.ReactElement}
              data={resume}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
