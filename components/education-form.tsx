import { FiPlus, FiTrash } from "react-icons/fi";
import { Input } from "./input";
import { Education } from "@/lib/reducer";

type Props = {
  education: Education[] | [];
  onChangeEducation: React.ChangeEventHandler<HTMLInputElement>;
  onAddEducation: React.MouseEventHandler<HTMLButtonElement>;
  onRemoveEducation: (name: number) => void;
};

export function EducationForm({
  education,
  onChangeEducation,
  onAddEducation,
  onRemoveEducation,
}: Props) {
  const isEducationEmpty = education.length === 0;

  return (
    <div>
      <div>
        <div className="flex justify-between group py-4">
          <h2 className="text-2xl">Formacao</h2>

          {isEducationEmpty && (
            <div>
              <button
                className="hover:rotate-90 transition"
                onClick={onAddEducation}
              >
                <FiPlus size={20} />
              </button>
            </div>
          )}
        </div>

        {education.map((item, index) => {
          return (
            <div className="flex flex-col gap-2 mt-2">
              <div className="w-full flex justify-between">
                <p className="text-sm text-gray-400">Formacao {index + 1} </p>
                <button
                  onClick={() => onRemoveEducation(index)}
                  className="bg-red-200 rounded p-1 border-red-300 group hover:scale-[1.1] transition"
                >
                  <FiTrash size={14} color=" #CD5C5C" className="" />
                </button>
              </div>
              <div className="gap-4 flex">
                <Input
                  label="Formacao"
                  type="text"
                  onChange={onChangeEducation}
                  name="degree"
                  id="degree"
                />
                <Input
                  label="Instituicao"
                  onChange={onChangeEducation}
                  type="text"
                  name="institution"
                  id="institution"
                />
              </div>

              <div className="flex gap-4">
                <Input
                  label="Data Inicio"
                  onChange={onChangeEducation}
                  type="text"
                  name="startDate"
                  id="startDate"
                />
                <Input
                  label="Data Final"
                  onChange={onChangeEducation}
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
              onClick={onAddEducation}
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
