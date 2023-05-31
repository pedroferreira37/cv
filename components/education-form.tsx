import { FiPlus, FiTrash } from "react-icons/fi";
import { Input } from "./input";
import { Degrees } from "@/lib/reducer";
import { TextArea } from "./textarea";

type Props = {
  degrees: Degrees[] | [];
  setDegrees: React.Dispatch<React.SetStateAction<[] | Degrees[]>>;
};

export function EducationForm({ degrees, setDegrees }: Props) {
  const isDegreeEmpty = degrees.length === 0;

  const changeDegree = (
    { target: { name, value } }: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    setDegrees((previousDegrees) =>
      previousDegrees.map((experience, id) =>
        id === id ? { ...experience, [name]: value } : experience
      )
    );
  };

  const addDegree = () => {
    setDegrees((previousDegrees) => [
      ...previousDegrees,
      {
        role: "",
        institution: "",
        startDate: {
          year: "",
          month: "",
        },
        endDate: {
          year: "",
          month: "",
        },
      },
    ]);
  };

  const removeDegree = (id: number) => {
    setDegrees((previousDegrees) =>
      previousDegrees.filter((_, index) => index !== id)
    );
  };

  return (
    <div>
      <div className="flex flex-col gap-2 pt-4 border-top">
        <div className="flex justify-between group py-4">
          <p>Formação</p>
          {isDegreeEmpty && (
            <div>
              <button
                className="hover:rotate-90 transition "
                onClick={addDegree}
              >
                <FiPlus size={20} />
              </button>
            </div>
          )}
        </div>

        {degrees.map((degree, id) => {
          return (
            <div>
              <div className="w-full flex justify-between">
                <p className="text-sm">Formação {id + 1} </p>
                <button
                  onClick={() => removeDegree(id)}
                  className="bg-red-200 rounded p-1 border-red-300 group "
                >
                  <FiTrash size={14} color="red" className=" transition" />
                </button>
              </div>
              <div className="flex gap-4">
                <Input
                  label="Formação"
                  type="text"
                  name="degree"
                  id="degree"
                  onChange={(e) => changeDegree(e, id)}
                />
                <Input
                  label="Instituição"
                  type="text"
                  name="institution"
                  id="institution"
                  onChange={(e) => changeDegree(e, id)}
                />
              </div>
              <div className="flex gap-4">
                <Input
                  label="Data Inicio"
                  type="text"
                  name="startDate"
                  id="startDate"
                  onChange={(e) => changeDegree(e, id)}
                />
                <Input
                  label="Data Final"
                  type="text"
                  name="endDate"
                  id="endDate"
                  onChange={(e) => changeDegree(e, id)}
                />
              </div>
              <div>
                <TextArea
                  cols={20}
                  rows={6}
                  length={250}
                  label="Digite uma breve descricao"
                  onChange={changeDegree}
                />
              </div>
            </div>
          );
        })}
        {!isDegreeEmpty && (
          <div className="w-full flex justify-end group">
            <button
              className="text-sm flex gap-4 border rounded text-gray-800 py-1 px-2 hover:bg-default-gray transition"
              onClick={addDegree}
            >
              <FiPlus size={20} className="group-hover:rotate-90 transition" />
              Nova Formção
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
