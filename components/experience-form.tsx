"use client";
import { FiPlus, FiTrash } from "react-icons/fi";
import { Input } from "./input";
import { TextArea } from "./textarea";
import React from "react";
import { Experience } from "@/lib/reducer";
import { InputEvent } from "@/types/inputs";
import { DropDown } from "./dropdown";

type Props = {
  experiences: Experience[] | [];
  setExperiences: React.Dispatch<React.SetStateAction<[] | Experience[]>>;
};

export function ExperienceForm({ experiences, setExperiences }: Props) {
  const isExperiencesEmpty = experiences.length === 0;

  const changeExperience = (
    { target: { name, value } }: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    setExperiences((previousExperiences) =>
      previousExperiences.map((experience, index) => {
        if (
          id === index &&
          (experience[name as keyof Experience] as object).hasOwnProperty(name)
        ) {
          return { ...experience, [name]: value };
        }
        return experience;
      })
    );
  };

  const addExperience = () => {
    setExperiences((previousExperiences) => [
      ...previousExperiences,
      {
        role: "",
        company: "",
        startDate: {
          year: "",
          month: "",
        },
        endDate: {
          year: "",
          month: "",
        },
        description: "",
      },
    ]);
  };

  const removeExperience = (id: number) => {
    setExperiences((previousExperiences) =>
      previousExperiences.filter((_, index) => index !== id)
    );
  };

  return (
    <div>
      <div className="flex flex-col gap-2 pt-4 border-top">
        <div className="flex justify-between group py-4">
          <p>Experiencias</p>
          {isExperiencesEmpty && (
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

        {experiences.map((experience, id) => {
          return (
            <div className="flex flex-col gap-2">
              <div className="w-full flex justify-between">
                <p className="text-sm">Experiencia {id + 1} </p>
                <button
                  onClick={() => removeExperience(id)}
                  className="bg-red-200 rounded p-1 border-red-300 group "
                >
                  <FiTrash size={14} color="red" className="transition" />
                </button>
              </div>
              <div className="flex gap-4">
                <Input
                  label="Função"
                  type="text"
                  name="role"
                  id="role"
                  onChange={(e) => changeExperience(e, id)}
                />
                <Input
                  label="Empresa"
                  type="text"
                  name="company"
                  id="company"
                  onChange={(e) => changeExperience(e, id)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <DropDown
                  label="Data de Início"
                  type="text"
                  name="startDate"
                  id="startDate"
                  onChange={(e) => changeExperience(e, id)}
                />
                <DropDown
                  label="Data de Término"
                  type="text"
                  name="startDate"
                  id="startDate"
                  onChange={(e) => changeExperience(e, id)}
                />
              </div>
              <div>
                <TextArea
                  cols={20}
                  rows={6}
                  length={250}
                  label="Digite uma breve descricao"
                  onChange={changeExperience}
                />
              </div>
            </div>
          );
        })}
        {!isExperiencesEmpty && (
          <div className="w-full flex justify-end group">
            <button
              className="text-sm flex gap-4 border rounded text-gray-800 py-1 px-2 hover:bg-default-gray transition"
              onClick={addExperience}
            >
              <FiPlus size={20} className="group-hover:rotate-90 transition" />
              Nova Experiência
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
