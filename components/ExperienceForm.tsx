import { useState } from "react";
import { FormWrapper } from "./FormWrapper";
import { AddAndCollpaseButton } from "./AddAndCollapseButton";
import { Input } from "./Input";
import { TextArea } from "./TextArea";

export const ExperienceForm = ({ experiences, setExperiences, resumeId }) => {
  const [open, setOpen] = useState(true);
  const [created, setCreate] = useState(true);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2>Experiencias</h2>
        <AddAndCollpaseButton created={created} active={open} />
      </div>
      <div>
        <FormWrapper active={open} created={created}>
          <form>
            <div className="flex gap-4">
              <Input
                label="Profissao"
                name="role"
                id="role"
                placeholder="Ex: Programador"
                value={experiences.role}
              />
              <Input
                label="Empresa"
                name="company"
                id="company"
                placeholder="Ex: Makrosystem"
                value={experiences.company}
              />
            </div>
            <TextArea
              label="Descricao"
              name="description"
              id="description"
              placeholder="Ex: I working with frontend develop"
              value={experiences.description}
            />
          </form>
        </FormWrapper>
      </div>
    </div>
  );
};
