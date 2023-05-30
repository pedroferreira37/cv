"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useReducer, useState } from "react";
import { FiArrowLeft, FiDownload, FiPlus } from "react-icons/fi";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { renderDocument } from "./render";
import { Input } from "./input";
import { TextArea } from "./textarea";
import { type State, initialState, reducer } from "@/lib/reducer";

const ResumeRenderer = dynamic(
  () => import("./resume-renderer").then((module) => module.ResumeRenderer),
  { ssr: false }
);

export function ResumeForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [social, toggleSocial] = useState({ linkedin: false, github: false });

  const search = useSearchParams();
  const template = search?.get("template");

  const pdfDocument = renderDocument({ template: "professional", state });

  function toggleSocialLinks(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const { name } = e.target;
    toggleSocial((social) => ({ ...social, [name]: !social[name] }));
  }

  function updateUser(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_USER", name, value });
  }

  function changeState({
    type,
    name,
    value,
  }: {
    type: string;
    name: string;
    value: string;
  }) {
    dispatch({ type, name, value });
  }

  function updateExperience(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_EXPERIENCE", name, value });
  }

  return (
    <div className="grid  grid-cols-1 sm:grid-cols-1 2xl:grid-cols-[600px_1fr]  lg:grid-cols-[600px_1fr]">
      <div className="w-full sticky top-0 h-screen overflow-y-scroll">
        <div className="w-full flex justify-start sticky top-0  bg-white py-4 px-4 shadow z-[1000]">
          <Link className="p-2   bg-gray-200 rounded group" href="/user">
            <FiArrowLeft size={20} className="group-hover:animate-wiggle" />
          </Link>
        </div>
        <div
          className="p-12  flex justify-center items-center 
         "
        >
          <div className="w-full">
            <div className="flex flex-col gap-2 pt-4">
              <p>Dados pessoais</p>
              <div className="gap-4 flex">
                <Input
                  label="Nome"
                  name="name"
                  id="name"
                  type="text"
                  onChange={({ target: { name, value } }) =>
                    changeState({ type: "UPDATE_USER", name, value })
                  }
                  //  I find that way better to write, and fast, so ill keep it
                />
                <Input
                  label="Profissao"
                  name="profession"
                  id="name"
                  type="text"
                  onChange={updateUser}
                />
              </div>
              <Input
                label="Email"
                name="email"
                id="email"
                type="text"
                onChange={updateUser}
              />
              {social.linkedin && (
                <div className="relative">
                  <button
                    className="absolute top-2 left-[60px] text-[10px] text-gray-400"
                    name="linkedin"
                    onClick={toggleSocialLinks}
                  >
                    Remover
                  </button>
                  <Input
                    label="Linkedin"
                    name="linkedin"
                    id="linkedin"
                    type="text"
                    onChange={updateUser}
                  />
                </div>
              )}
              {social.github && (
                <div className="relative">
                  <button
                    className="absolute top-2 left-[50px] text-[10px] text-gray-400"
                    name="github"
                    onClick={toggleSocialLinks}
                  >
                    Remover
                  </button>
                  <Input
                    label="Github"
                    name="github"
                    id="github"
                    type="text"
                    onChange={updateUser}
                  />
                </div>
              )}
              <div>
                <TextArea
                  cols={20}
                  rows={6}
                  length={250}
                  label="Digite uma breve descricao"
                  name="description"
                  onChange={updateUser}
                />
              </div>

              <div className="flex gap-2">
                {!social.linkedin && (
                  <button
                    className="flex gap-2 px-4 py-2 items-center justify-center border rounded"
                    name="linkedin"
                    onClick={toggleSocialLinks}
                  >
                    <FiPlus size={20} />
                    LinkedIn
                  </button>
                )}

                {!social.github && (
                  <button
                    className="flex gap-2 block px-4 py-2 items-center justify-center border rounded"
                    name="github"
                    onClick={toggleSocialLinks}
                  >
                    <FiPlus size={20} />
                    Github
                  </button>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-4">
              <p>Experiencia</p>
              {state.experience.map((item, index) => {
                return (
                  <div>
                    <div className="flex gap-4">
                      <Input
                        label="Funcao"
                        type="text"
                        name={index}
                        id="role"
                        onChange={updateExperience}
                      />
                      <Input
                        label="Empresa"
                        type="text"
                        name={index}
                        id="company"
                        onChange={updateExperience}
                      />
                    </div>
                    <div className="flex gap-4">
                      <Input
                        label="Data Inicio"
                        type="text"
                        name={index}
                        id="start-date"
                        onChange={updateExperience}
                      />
                      <Input
                        label="Data Final"
                        type="text"
                        name={index}
                        id="end-date"
                        onChange={updateExperience}
                      />
                    </div>
                    <div>
                      <TextArea
                        cols={20}
                        rows={6}
                        length={250}
                        label="Digite uma breve descricao"
                      />
                    </div>
                  </div>
                );
              })}

              <div>
                <h2>Educacao</h2>
                <div className="gap-4 flex">
                  <Input label="Curso" />
                  <Input label="Instituicao" />
                </div>

                <div className="flex gap-4">
                  <Input label="Data Inicio" />
                  <Input label="Data Final" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center pb-6">
          <div className="flex justify-end  items-center w-3/4 px-6">
            <PDFDownloadLink
              document={pdfDocument}
              fileName="somename.pdf"
              className="bg-green-default hover:bg-green-hover text-white text-sm px-4 py-2 rounded flex gap-2 items-center"
            >
              <FiDownload size={20} />
              Download
            </PDFDownloadLink>
          </div>
        </div>
      </div>
      <div className="flex  items-center justify-center bg-gray-200 p-8  ">
        <div className="w-[595px] h-[841px] relative">
          <ResumeRenderer document={pdfDocument} data={{ name: "Pedro" }} />
        </div>
      </div>
    </div>
  );
}
