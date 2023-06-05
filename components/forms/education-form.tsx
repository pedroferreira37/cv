import { FiPlus, FiTrash } from "react-icons/fi";
import { Input } from "../ui/input";
import { Action, Education } from "@/lib/reducer";
import { Dispatch } from "react";

type Props = {
  educations: Education[] | [];
  onChange: Dispatch<Action>;
};

export function EducationForm({ educations, onChange }: Props) {
  const isEducationEmpty = educations.length === 0;

  const handleChangeInput =
    (id: string): React.ChangeEventHandler<HTMLInputElement> =>
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const { name, value: payload } = event.target;
      onChange({ type: "change_education", id, name, payload });
    };

  const handleAdd = (): void => {
    onChange({ type: "add_education" });
  };

  const handleRemove =
    (id: string): React.MouseEventHandler<HTMLButtonElement> =>
    (): void => {
      onChange({ type: "remove_education", id });
    };

  return (
    <div>
      <div className="flex  justify-between group py-4">
        <h2 className="text-2xl">Formacao</h2>

        {isEducationEmpty && (
          <div>
            <button className="hover:rotate-90 transition" onClick={handleAdd}>
              <FiPlus size={20} />
            </button>
          </div>
        )}
      </div>

      {educations.map((education, index) => {
        return (
          <div className="flex flex-col gap-2  mb-6">
            <div className="w-full flex justify-between">
              <p className="text-sm">Formacao {index + 1} </p>
              <button
                onClick={handleRemove(education.id)}
                className="bg-red-200 rounded p-1 border-red-300 group hover:scale-[1.1] transition"
              >
                <FiTrash size={14} color=" #CD5C5C" className="" />
              </button>
            </div>
            <div className="gap-4 flex ">
              <Input
                label="Formacao"
                type="text"
                onChange={handleChangeInput(education.id)}
                name="degree"
                id="degree"
              />
              <Input
                label="Instituicao"
                onChange={handleChangeInput(education.id)}
                type="text"
                name="institution"
                id="institution"
              />
            </div>

            <div className="flex gap-4">
              <Input
                label="Data Inicio"
                onChange={handleChangeInput(education.id)}
                type="text"
                name="startDate"
                id="startDate"
              />
              <Input
                label="Data Final"
                onChange={handleChangeInput(education.id)}
                type="text"
                name="endDate"
                id="endDate"
              />
            </div>
          </div>
        );
      })}

      {!isEducationEmpty && (
        <div className="w-full flex justify-end group">
          <button
            className="text-sm flex gap-4 border rounded text-gray-800 py-1 px-2 hover:bg-default-gray transition"
            onClick={handleAdd}
          >
            <FiPlus size={20} className="group-hover:rotate-90 transition" />
            Nova Formacao
          </button>
        </div>
      )}
    </div>
  );
}
