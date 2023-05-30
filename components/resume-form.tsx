"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useReducer, useState } from "react";
import { FiArrowLeft, FiDownload, FiPlus } from "react-icons/fi";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { renderDocument } from "../templates/render";
import { Input } from "./input";
import { TextArea } from "./textarea";
import { type State, initialState, reducer } from "@/lib/reducer";
import { ExperienceForm } from "./experience-form";
import { ProfileForm } from "./profile-form";
import { EducationForm } from "./education-form";
import { DownloadButton } from "./download-button";

const ResumeRenderer = dynamic(
  () => import("./resume-renderer").then((module) => module.ResumeRenderer),
  { ssr: false }
);

type MouseEvent<T> = React.MouseEvent<T> & {
  target: {
    name: "profile" | "experience" | "education" | "skills";
    value: string;
  };
};

type InputEvent<T> = React.ChangeEvent<T> & {
  target: {
    name: "profile" | "experience" | "education" | "skills";
    value: string;
  };
};

export function ResumeForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const search = useSearchParams();

  const template = search?.get("template");

  const document = renderDocument({ template: "professional", state });

  const onProfileChangeRequest = ({
    target: { name, value },
  }: InputEvent<HTMLInputElement>) => {
    dispatch({ type: "UPDATE_USER", name, value });
  };

  const onExperienceRequest = ({
    target: { name, value },
  }: InputEvent<HTMLInputElement>) => {
    dispatch({ type: "UPDATE_EXPERIENCE", name, value });
  };

  const onAddExperience = () => {
    dispatch({ type: "ADD_EXPERIENCE" });
  };

  const onRemoveExperience = (id: number): void => {
    console.log(name);
    dispatch({ type: "REMOVE_EXPERIENCE", name: "experience", id });
  };

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
        <div className="w-full py-2 px-8">
          <ProfileForm
            profile={state.profile}
            onProfileChangeRequest={onProfileChangeRequest}
          />
          <ExperienceForm
            experiences={state.experience}
            onChangeExperience={onExperienceRequest}
            onAddExperience={onAddExperience}
            onRemoveExperience={onRemoveExperience}
          />

          <EducationForm />
        </div>
        <DownloadButton document={document} />
      </div>

      <div className="flex  items-center justify-center bg-gray-200 p-8  ">
        <div className="w-[595px] h-[841px] relative">
          <ResumeRenderer document={document} data={{ name: "Pedro" }} />
        </div>
      </div>
    </div>
  );
}
