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
  setExperiences: React.ChangeEventHandler<HTMLInputElement>;
  resumeId: string;
};

export const ExperienceForm = ({
  experiences,
  setExperiences,
  resumeId,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [created, setCreated] = useState(false);

  const createExperiences = () => {
    API.post(`/resume/${resumeId}/experiences`).then((req) => {
      if (!req.data && created) {
        return null;
      }

      setCreated(true);
    });
  };

  useEffect(() => {
    if (experiences.length > 0) setCreated(true);
  }, [experiences]);

  return (
    <div>
      <div className="flex justify-between items-center ">
        <h2>Experiencias</h2>
        <AddAndCollpaseButton
          created={created}
          active={open}
          onClick={createExperiences}
          onToggle={(e) => setOpen((prev) => !prev)}
        />
      </div>
      <div>
        <FormWrapper active={open} created={created}>
          {experiences.map((experience) => (
            <form>
              <div className="flex gap-4">
                <Input
                  label="Profissao"
                  name="role"
                  id="role"
                  placeholder="Ex: Programador"
                  value={experience?.role as string}
                />
                <Input
                  label="Empresa"
                  name="company"
                  id="company"
                  placeholder="Ex: Makrosystem"
                  value={experience?.company as string}
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
                value={experience?.description as string}
              />
              <div className="flex justify-end mt-4">
                <button
                  className="bg-green-field  text-white px-1 py-1  font-medium text-sm rounded flex items-center gap-2 group "
                  onClick={createExperiences}
                >
                  <FiPlus
                    size={20}
                    className="group-hover:rotate-90 transition"
                  />
                </button>
              </div>
            </form>
          ))}
        </FormWrapper>
      </div>
    </div>
  );
};
