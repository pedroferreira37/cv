import { useEffect, useState } from "react";
import { FormWrapper } from "./FormWrapper";
import { AddAndCollpaseButton } from "./AddAndCollapseButton";
import { Input } from "./Input";
import { TextArea } from "./TextArea";
import { API } from "@/lib/api";
import { Experience } from "@/lib/reducer";
import exp from "constants";
import { FiPlus } from "react-icons/fi";
import { DatePicker } from "./DatePicker";

type Props = {
  experiences: Experience[];
  disptach: any;
  resumeId: string;
};

export const ExperienceForm = ({ experiences, disptach, resumeId }: Props) => {
  const [active, setActive] = useState(false);

  const create = () => {
    API.post(`/resume/${resumeId}/experiences`).then((req) => {
      if (!req.data) return;

      disptach({ type: "CREATE_EXPERIENCE", payload: req.data });
    });
  };

  return (
    <div className="pt-4">
      <div className="flex justify-between items-center ">
        <h2>Experiencias</h2>
        <AddAndCollpaseButton
          data={experiences.length}
          active={active}
          onDataRequest={create}
          onActive={(e) => setActive((active) => !active)}
        />
      </div>
      <div>
        {experiences.map(
          (experience, index) =>
            active && (
              <form key={experience.id}>
                <p className="text-sm text-gray-500 pt-4">
                  Experiencia {index + 1}
                </p>
                <div className="flex gap-4">
                  <Input
                    label="Profissao"
                    name="role"
                    id="role"
                    placeholder="Ex: Programador"
                    value={(experience?.role as string) || ""}
                  />
                  <Input
                    label="Empresa"
                    name="company"
                    id="company"
                    placeholder="Ex: Makrosystem"
                    value={(experience?.company as string) || ""}
                  />
                </div>
                <div>
                  <DatePicker />
                </div>
                <TextArea
                  label="Descricao"
                  name="description"
                  id="description"
                  placeholder="Ex: I working with frontend develop"
                  value={(experience?.description as string) || ""}
                />
              </form>
            )
        )}
        {active && (
          <div className="flex justify-end mt-4">
            <button
              className="bg-green-field  text-white px-1 py-1  font-medium text-sm rounded flex items-center gap-2 group "
              onClick={create}
            >
              <FiPlus size={20} className="group-hover:rotate-90 transition" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
