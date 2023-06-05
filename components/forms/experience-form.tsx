import { FiPlus, FiTrash } from "react-icons/fi";
import { Input } from "../ui/input";
import { TextArea } from "../ui/textarea";
import { Action, Experience } from "@/lib/reducer";
import { Dispatch } from "react";

type Props = {
  experiences: Experience[] | [];
  onChange: Dispatch<Action>;
};

export function ExperienceForm({ experiences, onChange }: Props) {
  const isExperiencesEmpty = experiences.length === 0;

  const handleChangeInput =
    (id: string): React.ChangeEventHandler<HTMLInputElement> =>
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const { name, value: payload } = event.target;
      onChange({ type: "change_experience", id, name, payload });
    };

  const handleChangeTextArea =
    (id: string): React.ChangeEventHandler<HTMLTextAreaElement> =>
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value: payload } = event.target;

      onChange({ type: "change_experience", id, name, payload });
    };

  const handleAdd = (): void => {
    onChange({ type: "add_experience" });
  };

  const handleRemove =
    (id: string): React.MouseEventHandler<HTMLButtonElement> =>
    (): void => {
      onChange({ type: "remove_experience", id });
    };

  return (
    <div>
      <div className="flex flex-col gap-2 pt-4 border-top">
        <div className="flex justify-between group py-4 ">
          <h2 className="text-2xl">Experiencia</h2>
          {isExperiencesEmpty && (
            <div>
              <button
                className="hover:rotate-90 transition "
                onClick={handleAdd}
              >
                <FiPlus size={20} />
              </button>
            </div>
          )}
        </div>

        {experiences.map((experience, id) => {
          return (
            <div className="mb-4">
              <div className="w-full flex justify-between">
                <p className="text-sm">Experiencia {id + 1} </p>
                <button
                  onClick={handleRemove(experience.id)}
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
                  onChange={handleChangeInput(experience.id)}
                />
                <Input
                  label="Empresa"
                  type="text"
                  name="company"
                  id="company"
                  onChange={handleChangeInput(experience.id)}
                />
              </div>
              <div>
                <TextArea
                  cols={20}
                  rows={6}
                  length={250}
                  name="description"
                  label="Digite uma breve descricao"
                  onChange={handleChangeTextArea(experience.id)}
                />
              </div>
            </div>
          );
        })}
        {!isExperiencesEmpty && (
          <div className="w-full flex justify-end group">
            <button
              className="text-sm flex gap-4 border rounded text-gray-800 py-1 px-2 hover:bg-default-gray transition"
              onClick={handleAdd}
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
