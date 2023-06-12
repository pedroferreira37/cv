"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { ChangeEvent, ReactElement, useReducer, useState } from "react";
import { FiArrowLeft, FiDownload, FiMinus, FiPlus } from "react-icons/fi";
import { renderDocument } from "@/templates/render";
import { initialState, reducer } from "@/lib/reducer";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { Input } from "../input";
import { months, years } from "@/lib/date";
import { Select } from "../select";
import { Session } from "inspector";
import { API } from "@/lib/api";
import { User } from "next-auth";

const ResumeRenderer = dynamic(
  () => import("../resume").then((module) => module.Resume),
  { ssr: false }
);

export function ResumeForm({ user, id }: { user: User; id: string }) {
  const params = useParams();

  const [state, dispatch] = useReducer(reducer, initialState);

  const [github, setGithub] = useState<boolean>(false);

  const [linkedin, setLinkedin] = useState<boolean>(false);

  const document = renderDocument({ template: "professional", state });

  const setResume = (event: ChangeEvent<HTMLInputElement>, id?: string) => {
    const { id: key, name, value: payload } = event.target;

    dispatch({ type: "changed", name, id: id as string, key, payload });
  };

  const setCurrent = (event: ChangeEvent<HTMLInputElement>, id: string) => {
    const { id: key, name, checked: payload } = event.target;

    dispatch({ type: "changed", name, id: id as string, key, payload });
  };

  const setYear = (event: any, id: string) => {
    const { id: key, name, value: payload } = event.target;

    dispatch({ type: "changed_date_year", name, id, key, payload });
  };

  const setMonth = (event: any, id: string) => {
    const { id: key, name, value: payload } = event.target;

    dispatch({ type: "changed_date_month", name, id, key, payload });
  };

  const remove = (event: any, id: string) => {
    const { name } = event.currentTarget;

    dispatch({ type: "removed", name, id });
  };

  const addExperience = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({ type: "added_experience" });
  };

  const addEducation = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({ type: "added_education" });
  };

  useEffect(() => {
    API.post(`/resume/${params?.id}/experience`, {
      userId: user.id,
      ...state.experiences,
    });
  }, [state.experiences]);

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
                value={state.name as string}
                id="name"
                type="text"
                placeholder="Your name here..."
                onChange={setResume}
              />
              <Input
                label="Profissao"
                value={state.role as string}
                name="role"
                id="role"
                type="text"
                onChange={setResume}
              />
            </div>
            <Input
              label="Email"
              value={state.mail as string}
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
                  className="absolute top-4 left-[60px] text-[10px] text-gray-400"
                  name="linkedin"
                  onClick={() => setLinkedin(false)}
                >
                  Remover
                </button>

                <Input
                  label="Linkedin"
                  name="linkedin"
                  value={state.linkedin as string}
                  id="linkedin"
                  type="text"
                  onChange={setResume}
                />
              </div>
            )}

            {github && (
              <div className="relative">
                <button
                  className="absolute top-4 left-[50px] text-[10px] text-gray-400"
                  name="github"
                  onClick={() => setGithub(false)}
                >
                  Remover
                </button>
                <Input
                  label="Github"
                  value={state.github as string}
                  name="github"
                  id="github"
                  type="text"
                  onChange={setResume}
                />
              </div>
            )}

            <label className="text-sm text-gray-400 font-medium">
              Conte um pouco sobre você
              <textarea
                cols={20}
                rows={6}
                name="about"
                className="w-full bg-[#f2f1ee99] p-3 outline-none rounded resize-none   text-[#353535] text-[14px]   hover:ring-[#6b98f8] hover:ring-[2px] focus:ring-[2px] focus:ring-[#6b98f8] transition"
                onChange={(e) =>
                  setResume(e as unknown as ChangeEvent<HTMLInputElement>, "")
                }
              />
            </label>
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

          <div className="flex flex-col gap-2 pt-4 border-top">
            <div className="flex justify-between group py-4 ">
              <h2 className="text-2xl">Experiencia</h2>
              {state.experiences.length === 0 && (
                <div>
                  <button
                    className="hover:rotate-90 transition "
                    onClick={addExperience}
                  >
                    <FiPlus size={20} />
                  </button>
                </div>
              )}
            </div>

            {state.experiences.map((experience, index) => {
              return (
                <div className="flex flex-col gap-2 mb-2 " key={index}>
                  <div className="w-full flex justify-between ">
                    <p className="text-sm">Experiencia {index + 1} </p>
                    <button
                      name="experiences"
                      onClick={(e) => remove(e, experience.id)}
                      className="bg-red-200 rounded p-1 border-red-300 group hover:scale-[1.1] transition"
                    >
                      <FiMinus size={14} color=" #CD5C5C" />
                    </button>
                  </div>
                  <div className="flex gap-4">
                    <Input
                      label="Funcao"
                      type="text"
                      name="experiences"
                      value={experience.role as string}
                      id="role"
                      onChange={(e) => setResume(e, experience.id)}
                    />
                    <Input
                      label="Empresa"
                      type="text"
                      value={experience.company as string}
                      name="experiences"
                      id="company"
                      onChange={(e) => setResume(e, experience.id)}
                    />
                  </div>

                  <div className="w-full grid grid-cols-2 gap-4">
                    <div>
                      <h2 className="text-[14px] text-[#797979]">
                        Data Inicio
                      </h2>

                      <Select
                        disabled={false}
                        years={years}
                        months={months}
                        name="experiences"
                        id="start_date"
                        yearValue={
                          experience.start_date
                            ?.getFullYear()
                            .toString() as string
                        }
                        monthValue={
                          experience.start_date?.getMonth as unknown as string
                        }
                        setYear={(e) => setYear(e, experience.id)}
                        setMonth={(e) => setMonth(e, experience.id)}
                      />
                    </div>
                    <div className="relative w-full">
                      <h2 className="text-[14px] text-[#797979]">Data Final</h2>

                      <Select
                        years={years}
                        months={months}
                        name="experiences"
                        id="end_date"
                        yearValue={
                          experience.end_date
                            ?.getFullYear()
                            .toString() as string
                        }
                        monthValue={
                          experience.end_date?.getMonth as unknown as string
                        }
                        setYear={(e) => setYear(e, experience.id)}
                        setMonth={(e) => setMonth(e, experience.id)}
                        disabled={experience.current}
                      />

                      <div className="absolute top-0 right-0 flex items-center gap-4">
                        <span className="text-sm text-[#797979]">Atual</span>

                        <input
                          type="checkbox"
                          defaultChecked={experience.current}
                          name="experiences"
                          id="current"
                          onChange={(e) => setCurrent(e, experience.id)}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 font-medium">
                      Conte um pouco sobre sua experiência
                      <textarea
                        cols={20}
                        rows={6}
                        name="experiences"
                        id="description"
                        className="w-full bg-[#f2f1ee99] p-3 outline-none rounded resize-none   text-[#353535] text-[14px]   hover:ring-[#6b98f8] hover:ring-[2px] focus:ring-[2px] focus:ring-[#6b98f8] transition"
                        onChange={(e) =>
                          setResume(
                            e as unknown as ChangeEvent<HTMLInputElement>,
                            experience.id
                          )
                        }
                      />
                    </label>
                  </div>
                </div>
              );
            })}

            {!(state.experiences.length === 0) && (
              <div className="w-full flex justify-end group">
                <button
                  className="text-sm flex gap-4 border rounded text-gray-800 py-1 px-2 hover:bg-default-gray transition"
                  onClick={addExperience}
                >
                  <FiPlus
                    size={20}
                    className="group-hover:rotate-90 transition"
                  />
                  Nova Experiência
                </button>
              </div>
            )}
          </div>

          <div>
            <div className="flex  justify-between group py-4">
              <h2 className="text-2xl">Formacao</h2>

              {state.educations.length === 0 && (
                <div>
                  <button
                    className="hover:rotate-90 transition"
                    onClick={addEducation}
                  >
                    <FiPlus size={20} />
                  </button>
                </div>
              )}
            </div>

            {state.educations.map((education, index) => {
              return (
                <div className="flex flex-col gap-2  mb-6" key={index}>
                  <div className="w-full flex justify-between">
                    <p className="text-sm">Formacao {index + 1} </p>
                    <button
                      name="educations"
                      onClick={(e) => remove(e, education.id)}
                      className="bg-red-200 rounded p-1 border-red-300 group hover:scale-[1.1] transition"
                    >
                      <FiMinus size={14} color=" #CD5C5C" className="" />
                    </button>
                  </div>
                  <div className="gap-4 flex ">
                    <Input
                      label="Formacao"
                      type="text"
                      value={education.degree as string}
                      onChange={(e) => setResume(e, education.id)}
                      name="educations"
                      id="degree"
                    />
                    <Input
                      label="Instituicao"
                      value={education.institution as string}
                      onChange={(e) => setResume(e, education.id)}
                      type="text"
                      name="educations"
                      id="institution"
                    />
                  </div>

                  <div className="w-full grid grid-cols-2 gap-4">
                    <div>
                      <h2 className="text-[14px] text-[#797979]">
                        Data Inicio
                      </h2>
                      <Select
                        disabled={false}
                        years={years}
                        months={months}
                        name="educations"
                        id="start_date"
                        yearValue={
                          education.end_date?.getFullYear().toString() as string
                        }
                        monthValue={
                          education.end_date?.getMonth as unknown as string
                        }
                        setYear={(e) => setYear(e, education.id)}
                        setMonth={(e) => setMonth(e, education.id)}
                      />
                    </div>

                    <div className="relative">
                      <h2 className="text-[14px] text-[#797979]">Data Final</h2>

                      <Select
                        years={years}
                        months={months}
                        name="educations"
                        id="end_date"
                        yearValue={
                          education.end_date?.getFullYear().toString() as string
                        }
                        monthValue={
                          education.end_date?.getMonth as unknown as string
                        }
                        setYear={(e) => setYear(e, education.id)}
                        setMonth={(e) => setMonth(e, education.id)}
                        disabled={education.current}
                      />

                      <div className="absolute top-0 right-0 flex items-center gap-4">
                        <span className="text-sm text-[#797979]">Atual</span>

                        <input
                          type="checkbox"
                          defaultChecked={education.current}
                          name="educations"
                          id="current"
                          onChange={(e) => setCurrent(e, education.id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {!(state.educations.length === 0) && (
              <div className="w-full flex justify-end group">
                <button
                  className="text-sm flex gap-4 border rounded text-gray-800 py-1 px-2 hover:bg-default-gray transition"
                  onClick={addEducation}
                >
                  <FiPlus
                    size={20}
                    className="group-hover:rotate-90 transition"
                  />
                  Nova Formacao
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="w-full pt-4 px-8 sticky bottom-0 bg-white shadow">
          <div className="flex justify-end">
            <PDFDownloadLink
              document={document as ReactElement}
              fileName="somename.pdf"
              className="bg-dark  hover:bg-light-green transition text-white text-sm px-4 py-2 rounded flex gap-2 items-center"
            >
              <FiDownload size={20} />
              Download
            </PDFDownloadLink>
          </div>
        </div>
      </div>

      <div className="flex  items-center justify-center bg-gray-200 p-8  ">
        <div className="w-[595px] h-[841px] relative">
          <ResumeRenderer document={document} resume={state} arrows={false} />
        </div>
      </div>
    </div>
  );
}
