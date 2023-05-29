"use client";
import { initialState, reducer } from "@/lib/reducer";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useReducer, useState } from "react";
import { FiArrowLeft, FiDownload, FiPlus } from "react-icons/fi";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { renderDocument } from "./render";
import { Input } from "./input";
import { TextArea } from "./textarea";

const ResumeRenderer = dynamic(
  () => import("./resume-renderer").then((module) => module.ResumeRenderer),
  { ssr: false }
);

export function ResumeForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [social, setSocial] = useState({ linkedin: false, github: false });

  const pdfDocument = renderDocument({ type: "professional" });

  const search = useSearchParams();

  function addSocialLinks(e) {
    e.preventDefault();
    const { name } = e.target;

    setSocial((social) => ({ ...social, [name]: true }));
  }

  function removeSocialLinks(e) {
    e.preventDefault();
    const { name } = e.target;

    setSocial((social) => ({ ...social, [name]: false }));
  }

  const template = search?.get("template");

  return (
    <div className="flex flex-1  flex-col lg:flex-row h-screen w-full relative ">
      <div className="bg-white max-w-[600px]  flex-1 h-screen px-8 py-4">
        <div
          className="w-full h-full sticky top-0  grid grid-rows-[40px_1fr]
         "
        >
          <div className="w-full flex justify-start sticky top-0">
            <Link className="p-2  bg-gray-200 rounded group" href="/user">
              <FiArrowLeft size={20} className="group-hover:animate-wiggle" />
            </Link>
          </div>
          <div className="w-full    overflow-auto">
            <div className="flex flex-col gap-2 pt-4">
              <p>Dados pessoais</p>
              <div className="gap-4 flex">
                <Input label="Nome" />
                <Input label="Profissao" />
              </div>
              <Input label="Email" />
              {social.linkedin && (
                <div className="relative">
                  <button
                    className="absolute top-2 left-[60px] text-[10px] text-gray-400"
                    name="linkedin"
                    onClick={removeSocialLinks}
                  >
                    Remover
                  </button>
                  <Input label="Linkedin" />
                </div>
              )}
              {social.github && (
                <div className="relative">
                  <button
                    className="absolute top-2 left-[50px] text-[10px] text-gray-400"
                    name="github"
                    onClick={removeSocialLinks}
                  >
                    Remover
                  </button>
                  <Input label="Github" />
                </div>
              )}
              <div>
                <TextArea
                  cols={20}
                  rows={6}
                  length={250}
                  label="Digite uma breve descricao"
                />
              </div>
              <div className="flex gap-2">
                {!social.linkedin && (
                  <button
                    className="flex gap-2 px-4 py-2 items-center justify-center border rounded"
                    name="linkedin"
                    onClick={addSocialLinks}
                  >
                    <FiPlus size={20} />
                    LinkedIn
                  </button>
                )}

                {!social.github && (
                  <button
                    className="flex gap-2 block px-4 py-2 items-center justify-center border rounded"
                    name="github"
                    onClick={addSocialLinks}
                  >
                    <FiPlus size={20} />
                    Github
                  </button>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-4">
              <p>Experiencia</p>
              <div className="gap-4 flex">
                <Input label="Funcao" />
              </div>
              <Input label="Empresa" />

              <Input label="Empresa" />

              <Input label="Empresa" />

              <Input label="Empresa" />

              <Input label="Empresa" />
              <div>
                <TextArea
                  cols={20}
                  rows={6}
                  length={250}
                  label="Digite uma breve descricao"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center px-8 pt-8  items-center bg-gray-200 thumb ">
        <div className=" max-w-[500px] max-h-[700px] min-w-[500px]  min-h-[700px] relative  items-center">
          <ResumeRenderer document={pdfDocument} data={{ name: "Pedro" }} />
        </div>
        <div className="flex justify-end max-w-[500px] w-full  py-4 ">
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
  );
}
