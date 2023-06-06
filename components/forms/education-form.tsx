import { FiPlus, FiTrash } from "react-icons/fi";
import { Input } from "../ui/input";
import { Action, Education } from "@/lib/reducer";
import { Dispatch, useState } from "react";
import { Select } from "../ui/select";
import { months, years } from "@/lib/date";

type Props = {
  educations: Education[] | [];
  onChange: Dispatch<Action>;
};

export function EducationForm({ educations, onChange }: Props) {
  const isEducationEmpty = educations.length === 0;

  const setEducationInput =
    (id: string): React.ChangeEventHandler<HTMLInputElement> =>
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const { name, value: payload } = event.target;
      onChange({ type: "change_education", id, name, payload });
    };

  const setEducation = (): void => {
    onChange({ type: "add_education" });
  };

  const removeEducation =
    (id: string): React.MouseEventHandler<HTMLButtonElement> =>
    (): void => {
      onChange({ type: "remove_education", id });
    };

  const setDate = (
    event: React.ChangeEvent<HTMLSelectElement>,
    key: string,
    education: Education
  ) => {
    const { id, name, value } = event.target;

    onChange({
      type: "change_education",
      name,
      id: key,
      payload: { ...education[name], [id]: value },
    });
  };

  const setCurrentEndDate = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string,
    education: Education
  ) => {
    const { id, name } = event.target;

    onChange({
      type: "change_education",
      name,
      id: key,
      payload: { ...education[name], [id]: event.target.checked },
    });
  };

  return (
    <div>
      <div className="flex  justify-between group py-4">
        <h2 className="text-2xl">Formacao</h2>

        {isEducationEmpty && (
          <div>
            <button
              className="hover:rotate-90 transition"
              onClick={setEducation}
            >
              <FiPlus size={20} />
            </button>
          </div>
        )}
      </div>

      {educations.map((education, index) => {
        return (
          <div className="flex flex-col gap-2  mb-6" key={index}>
            <div className="w-full flex justify-between">
              <p className="text-sm">Formacao {index + 1} </p>
              <button
                onClick={removeEducation(education.id)}
                className="bg-red-200 rounded p-1 border-red-300 group hover:scale-[1.1] transition"
              >
                <FiTrash size={14} color=" #CD5C5C" className="" />
              </button>
            </div>
            <div className="gap-4 flex ">
              <Input
                label="Formacao"
                type="text"
                onChange={setEducationInput(education.id)}
                name="degree"
                id="degree"
              />
              <Input
                label="Instituicao"
                onChange={setEducationInput(education.id)}
                type="text"
                name="institution"
                id="institution"
              />
            </div>

            <div className="w-full grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-[14px] text-[#797979]"> Data Inicio </h2>
                <div className="grid grid-cols-2 gap-4">
                  <Select
                    options={years}
                    name="startDate"
                    id="year"
                    disabled={false}
                    label="Ano"
                    onChange={(e) => setDate(e, education.id, education)}
                  />
                  <Select
                    options={months}
                    name="startDate"
                    disabled={false}
                    id="month"
                    label="Mês"
                    onChange={(e) => setDate(e, education.id, education)}
                  />
                </div>
              </div>

              <div className="relative">
                <h2 className="text-[14px] text-[#797979]"> Data Final </h2>
                <div className="grid grid-cols-2 gap-4">
                  <Select
                    label="Ano"
                    options={years}
                    name="endDate"
                    disabled={education.endDate.current}
                    id="year"
                    onChange={(e) => setDate(e, education.id, education)}
                  />
                  <Select
                    label="Mês"
                    options={months}
                    name="endDate"
                    id="month"
                    disabled={education.endDate.current}
                    onChange={(e) => setDate(e, education.id, education)}
                  />
                  <div className="absolute top-0 right-0 flex items-center gap-4">
                    <span className="text-sm text-[#797979]">Atual</span>
                    <Input
                      defaultChecked={education.endDate.current}
                      type="checkbox"
                      name="endDate"
                      label=""
                      id="current"
                      onChange={(e) =>
                        setCurrentEndDate(e, education.id, education)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {!isEducationEmpty && (
        <div className="w-full flex justify-end group">
          <button
            className="text-sm flex gap-4 border rounded text-gray-800 py-1 px-2 hover:bg-default-gray transition"
            onClick={setEducation}
          >
            <FiPlus size={20} className="group-hover:rotate-90 transition" />
            Nova Formacao
          </button>
        </div>
      )}
    </div>
  );
}
