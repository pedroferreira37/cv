"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, ReactElement, useReducer, useState } from "react";
import { FiArrowLeft, FiDownload, FiPlus } from "react-icons/fi";
import { renderDocument } from "@/templates/render";
import { initialState, reducer } from "@/lib/reducer";
import { ExperienceForm } from "./experience-form";
import { EducationForm } from "./education-form";
import { ProfileForm } from "./profile-form";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Input } from "../input";

const ResumeRenderer = dynamic(
  () => import("../resume").then((module) => module.Resume),
  { ssr: false }
);

export function ResumeForm({ session, id }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [github, setGithub] = useState<boolean>(false);

  const [linkedin, setLinkedin] = useState<boolean>(false);

  const search = useSearchParams();

  const document = renderDocument({ template: "professional", state });

  const setResume = (event: ChangeEvent<HTMLInputElement>, id?: string) => {
    const { id: key, name, value: payload } = event.target;

    console.log(state);
    dispatch({ type: "changed", name, id: id as string, key, payload });
  };

  const setYear = (event: any, id: string) => {
    const { id: key, name, value: payload } = event.target;

    dispatch({ type: "changed", name, id, key, payload });
  };

  const setMonth = (event: any, id: string) => {
    const { id: key, name, value: payload } = event.target;

    dispatch({ type: "changed_date_month", name, id, key, payload });
  };

  const remove = (event: any, id: string) => {
    const { id: key, name, value: payload } = event.target;

    dispatch({ type: "removed", name, id });
  };

  const addExperience = (event: any, id: string) => {
    dispatch({ type: "added_experience", id });
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
        <div className="w-full py-2 px-8 flex flex-col gap-4">
          <form className="flex flex-col gap-2 pt-4">
            <h2 className="text-2xl">Perfil</h2>
            <div className="gap-4 flex">
              <Input
                label="Nome"
                name="name"
                id="name"
                type="text"
                placeholder="Your name here..."
                onChange={setResume}
              />
              <Input
                label="Profissao"
                name="role"
                id="role"
                type="text"
                onChange={setResume}
              />
            </div>
            <Input
              label="Email"
              name="mail"
              id="mail"
              type="text"
              onChange={setResume}
            />

            {linkedin && (
              <div
                className="relative 
          "
              >
                <button
                  className="absolute top-2 left-[60px] text-[10px] text-gray-400"
                  name="linkedin"
                  onClick={() => setLinkedin(false)}
                >
                  Remover
                </button>

                <Input
                  label="Linkedin"
                  name="linkedin"
                  id="linkedin"
                  type="text"
                  onChange={setResume}
                />
              </div>
            )}

            {github && (
              <div className="relative">
                <button
                  className="absolute top-2 left-[50px] text-[10px] text-gray-400"
                  name="github"
                  onClick={() => setGithub(false)}
                >
                  Remover
                </button>
                <Input
                  label="Github"
                  name="github"
                  id="github"
                  type="text"
                  onChange={setResume}
                />
              </div>
            )}
            {/*
          <TextArea
            cols={20}
            rows={6}
            length={250}
            label="Digite uma breve descricao"
            name="about"
            onChange={setProfileTextArea}
          />
        </div> */}

            <div className="flex gap-2">
              {!linkedin && (
                <div className="group">
                  <button
                    className="flex gap-2 px-4 py-2 items-center justify-center border rounded group-hover:bg-default-gray    transition"
                    name="linkedin"
                    onClick={() => setLinkedin(true)}
                  >
                    <FiPlus
                      size={20}
                      className="group-hover:rotate-90 transition"
                    />
                    LinkedIn
                  </button>
                </div>
              )}

              {!github && (
                <div className="group">
                  <button
                    className="flex gap-2  px-4 py-2 items-center justify-center border rounded group-hover:bg-default-gray  transition"
                    name="github"
                    onClick={() => setGithub(true)}
                  >
                    <FiPlus
                      size={20}
                      className="group-hover:rotate-90 transition"
                    />
                    Github
                  </button>
                </div>
              )}
            </div>
          </form>

          <ExperienceForm experiences={state.experiences} />
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
          <ResumeRenderer document={document} resume={state} />
        </div>
      </div>
    </div>
  );
}
