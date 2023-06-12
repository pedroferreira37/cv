"use client";
import { FiPlus, FiTrash } from "react-icons/fi";
import { Input } from "../input";
import { TextArea } from "../ui/textarea";
import { Action, Experience } from "@/lib/reducer";
import { Dispatch } from "react";
import { Select } from "../select";
import { months, years } from "@/lib/date";

type Props = {
  experiences: Experience[] | [];
  onChange: Dispatch<Action>;
};

export function ExperienceForm({ experiences, onChange }: Props) {
  const isExperiencesEmpty = experiences.length === 0;

  const setExperienceInput =
    (id: string): React.ChangeEventHandler<HTMLInputElement> =>
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const { name, value: payload } = event.target;
      onChange({ type: "change_experience", id, name, payload });
    };

  const setExperienceTextArea =
    (id: string): React.ChangeEventHandler<HTMLTextAreaElement> =>
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value: payload } = event.target;

      onChange({ type: "change_experience", id, name, payload });
    };

  const setExperience = (): void => {
    onChange({ type: "add_experience" });
  };

  const removeExperience =
    (id: string): React.MouseEventHandler<HTMLButtonElement> =>
    (): void => {
      onChange({ type: "remove_experience", id });
    };

  const setDate = (
    event: React.ChangeEvent<HTMLSelectElement>,
    key: string,
    experience: Experience
  ) => {
    const { id, name, value } = event.target;

    onChange({
      type: "change_experience",
      name,
      id: key,
      payload: { ...experience[name], [id]: value },
    });
  };

  const setCurrentEndDate = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string,
    experience: Experience
  ) => {
    const { id, name } = event.target;

    onChange({
      type: "change_experience",
      name,
      id: key,
      payload: { ...experience[name], [id]: event.target.checked },
    });
  };

  console.log(experiences);
  return (
    <div>
      <div className="flex flex-col gap-2 pt-4 border-top">
        <div className="flex justify-between group py-4 ">
          <h2 className="text-2xl">Experiencia</h2>
          {isExperiencesEmpty && (
            <div>
              <button
                className="hover:rotate-90 transition "
                onClick={setExperience}
              >
                <FiPlus size={20} />
              </button>
            </div>
          )}
        </div>

        {experiences.map((experience, index) => {
          return (
            <div className="flex flex-col gap-2 mb-2 " key={index}>
              <div className="w-full flex justify-between ">
                <p className="text-sm">Experiencia {index + 1} </p>
                <button
                  onClick={removeExperience(experience.id)}
                  className="bg-red-200 rounded p-1 border-red-300 group hover:scale-[1.1] transition"
                >
                  <FiTrash size={14} color=" #CD5C5C" className="" />
                </button>
              </div>
              <div className="flex gap-4">
                <Input
                  label="Funcao"
                  type="text"
                  name="role"
                  id="role"
                  onChange={setExperienceInput(experience.id)}
                />
                <Input
                  label="Empresa"
                  type="text"
                  name="company"
                  id="company"
                  onChange={setExperienceInput(experience.id)}
                />
              </div>

              <div className="w-full grid grid-cols-2 gap-4">
                <div>
                  <h2 className="text-[14px] text-[#797979]"> Data Inicio </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <Select
                      years={years}
                      months={months}
                      name="start_date"
                      disabled={experience.current}
                    />
                    <select
                      className="
w-full  bg-[#f2f1ee99] p-3   outline-none rounded text-[#353535] text-[14px] disabled:opacity-50 hover:ring-[#6b98f8] hover:ring-[2px] focus:ring-[2px] focus:ring-[#6b98f8] transition
                      "
                    >
                      {years.map((year) => (
                        <option value={year}>{year}</option>
                      ))}
                    </select>
                    <select
                      className="
w-full  bg-[#f2f1ee99] p-3   outline-none rounded text-[#353535] text-[14px] disabled:opacity-50 hover:ring-[#6b98f8] hover:ring-[2px] focus:ring-[2px] focus:ring-[#6b98f8] transition
                      "
                    >
                      {Object.entries(months).map(([index, month]) => (
                        <option value={index}>{month}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="relative">
                  <h2 className="text-[14px] text-[#797979]"> Data Final </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <Select
                      label="Ano"
                      options={years}
                      name="endDate"
                      disabled={experience.current}
                      id="year"
                      onChange={(e) => setDate(e, experience.id, experience)}
                    />

                    <select>
                      {Object.keys(months).map((month) => {
                        return <option>{month}</option>;
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <TextArea
                  cols={20}
                  rows={6}
                  length={250}
                  name="description"
                  label="Digite uma breve descricao"
                  onChange={setExperienceTextArea(experience.id)}
                />
              </div>
            </div>
          );
        })}

        {!isExperiencesEmpty && (
          <div className="w-full flex justify-end group">
            <button
              className="text-sm flex gap-4 border rounded text-gray-800 py-1 px-2 hover:bg-default-gray transition"
              onClick={setExperience}
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
