import { FiPlus } from "react-icons/fi";
import { Input } from "./input";

export function EducationForm() {
  return (
    <div>
      <div>
        <div className="flex justify-between group py-4">
          <p>Educacao</p>
          <button className="hover:rotate-90 transition">
            <FiPlus size={20} />
          </button>
        </div>
        <h2>Educacao</h2>
        <div className="gap-4 flex">
          <Input label="Curso" />
          <Input label="Instituicao" />
        </div>

        <div className="flex gap-4">
          <Input label="Data Inicio" />
          <Input label="Data Final" />
        </div>
      </div>
    </div>
  );
}
