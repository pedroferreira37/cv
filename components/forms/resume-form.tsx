"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ChangeEvent,
  ReactElement,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";
import { FiArrowLeft, FiDownload, FiPlus } from "react-icons/fi";
import { renderDocument } from "@/templates/render";
import { initialState, reducer } from "@/lib/reducer";
import { ExperienceForm } from "./experience-form";
import { DownloadButton } from "../ui/download-button";
import { EducationForm } from "./education-form";
import { ProfileForm } from "./profile-form";
import axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";

const ResumeRenderer = dynamic(
  () => import("../resume").then((module) => module.Resume),
  { ssr: false }
);

export function ResumeForm({ session, id }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const search = useSearchParams();

  const template = search?.get("template");

  const document = renderDocument({ template: "professional", state });

  return (
    <div className="grid  grid-cols-1 sm:grid-cols-1 2xl:grid-cols-[600px_1fr]  lg:grid-cols-[600px_1fr]">
      <div className="w-full sticky top-0 h-screen overflow-y-auto grid grid-rows-[60px_auto_60px]">
        <div className="sticky top-0">
          <div className="w-full flex justify-start  bg-white py-4 px-8 shadow z-[1000]">
            <Link className="p-2   bg-gray-200 rounded group" href="/user">
              <FiArrowLeft size={20} className="group-hover:animate-wiggle" />
            </Link>
          </div>
        </div>
        <div className="w-full py-2 px-8 flex flex-col gap-4">
          <ProfileForm profile={state.profile} onCange={dispatch} />
          <ExperienceForm experiences={state.experiences} onChange={dispatch} />
          <EducationForm educations={state.educations} onChange={dispatch} />
        </div>
        <div className="w-full pt-4 px-8 sticky bottom-0 bg-white shadow">
          <div className="flex justify-end">
            <PDFDownloadLink
              document={document as ReactElement}
              fileName="somename.pdf"
              className="bg-green hover:bg-light-green transition text-white text-sm px-4 py-2 rounded flex gap-2 items-center"
            >
              <FiDownload size={20} />
              Download
            </PDFDownloadLink>
          </div>
        </div>
      </div>

      <div className="flex  items-center justify-center bg-gray-200 p-8  ">
        <div className="w-[595px] h-[841px] relative">
          <ResumeRenderer document={document} data={{ name: "Pedro" }} />
        </div>
      </div>
    </div>
  );
}
