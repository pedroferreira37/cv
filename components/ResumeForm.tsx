"use client";
import { API } from "@/lib/api";
import { renderLayout } from "@/templates/render";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Input } from "./Input";

const PdfViewer = dynamic(
  () => import("./PdfViewer").then((module) => module.PdfViewer),
  { ssr: false }
);

// name: string | null;
// role: string | null;
// mail: string | null;
// linkedin: string | null;
// github: string | null;
//
export const ResumeForm = ({ id }: { id: string }) => {
  const [resume, setResume] = useState({
    name: null,
    role: null,
    mail: null,
    github: null,
    linkedin: null,
    about: null,
    experiences: [],
    educations: [],
  });

  useEffect(() => {
    API.get(`/resume/${id}`).then((req) => setResume(req.data));
  }, []);

  if (!resume) return <div>Carregando...</div>;

  return (
    <div className="grid  grid-rows-[60px_1fr]">
      <div className="border-b-2 sticky top-0 bg-white">oi</div>
      <div
        className=" grid
        grid-cols-[600px_1fr]"
      >
        <div className="w-full h-[calc(100vh_-_60px)] sticky top-0  border-l-1">
          <div className="p-8">
            <form>
              <h2>Perfil</h2>
              <div className="flex gap-4">
                <Input label="Nome" />
                <Input label="Profissao" />
              </div>
              <Input label="Email" />
              <Input label="Linkedin" />
              <Input label="Github" />
            </form>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center bg-[#eee]">
          {JSON.stringify(resume)}
          <div>
            <PdfViewer
              document={renderLayout(resume) as React.ReactElement}
              data={resume}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
