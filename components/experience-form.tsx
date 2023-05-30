import { FiPlus, FiTrash } from "react-icons/fi";
import { Input } from "./input";
import { TextArea } from "./textarea";
import React from "react";
import { Experience } from "@/lib/reducer";

type Props = {
  experiences: Experience[] | [];
  onChangeExperience: React.ChangeEventHandler<HTMLInputElement>;
  onAddExperience: React.MouseEventHandler<HTMLButtonElement>;
  onRemoveExperience: (name: number) => void;
};

export function ExperienceForm({
  experiences,
  onChangeExperience,
  onAddExperience,
  onRemoveExperience,
}: Props) {
  const isExperiencesEmpty = experiences.length === 0;

  return (
    <div>
      <div className="flex flex-col gap-2 pt-4 border-top">
        <div className="flex justify-between group py-4">
          <p>Experiencias</p>
          {isExperiencesEmpty && (
            <div>
              <button
                className="hover:rotate-90 transition "
                onClick={onAddExperience}
              >
                <FiPlus size={20} />
              </button>
            </div>
          )}
        </div>

        {experiences.map((experience, index) => {
          return (
            <div>
              <div className="w-full flex justify-between">
                <p className="text-sm">Experiencia {index + 1} </p>
                <button
                  onClick={() => onRemoveExperience(index)}
                  className="bg-red-200 rounded p-1 border-red-300 group "
                >
                  <FiTrash
                    size={14}
                    color="red"
                    className="group-hover:animate-shake transition"
                  />
                </button>
              </div>
              <div className="flex gap-4">
                <Input
                  label="Funcao"
                  type="text"
                  name={index}
                  id="role"
                  onChange={onChangeExperience}
                />
                <Input
                  label="Empresa"
                  type="text"
                  name={index}
                  id="company"
                  onChange={onChangeExperience}
                />
              </div>
              <div className="flex gap-4">
                <Input
                  label="Data Inicio"
                  type="text"
                  name={index}
                  id="start-date"
                  onChange={onChangeExperience}
                />
                <Input
                  label="Data Final"
                  type="text"
                  name={index}
                  id="end-date"
                  onChange={onChangeExperience}
                />
              </div>
              <div>
                <TextArea
                  cols={20}
                  rows={6}
                  length={250}
                  label="Digite uma breve descricao"
                  onChange={onChangeExperience}
                />
              </div>
            </div>
          );
        })}
        {!isExperiencesEmpty && (
          <div className="w-full flex justify-end group">
            <button
              className="text-sm flex gap-4 border rounded text-gray-800 py-1 px-2 hover:bg-default-gray transition"
              onClick={onAddExperience}
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
