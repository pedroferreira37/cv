import { Input } from "./Input";
import { TextArea } from "./TextArea";
import { useEffect, useState } from "react";
import { Profile } from "@/lib/reducer";
import { debounce } from "@/lib/debounce";
import { API } from "@/lib/api";
import { FiArrowLeft, FiArrowUp, FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";
import { FormWrapper } from "./FormWrapper";
import { AddAndCollpaseButton } from "./AddAndCollapseButton";

type Props = {
  profile: Profile;
  setResume: React.ChangeEventHandler<HTMLInputElement>;
  resumeId: string;
};

export const ProfileForm = ({ profile, setResume, resumeId }: Props) => {
  const [created, setCreated] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(true);

  useEffect(() => {
    const saveOnChange = debounce(
      () => API.put(`/resume/${resumeId}/profile`, profile),
      1000
    );

    saveOnChange();
  }, [profile]);

  useEffect(() => {
    if (profile) {
      setCreated(true);
    }
  }, []);

  const createProfile = () => {
    API.post(`/resume/${resumeId}/profile`).then((req) => {
      if (!req.data && created) {
        return null;
      }

      return setCreated(true);
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2>Perfil</h2>
        <AddAndCollpaseButton
          created={created}
          active={open}
          onToggle={(e) => setOpen((prev) => !prev)}
          onClick={createProfile}
        />
      </div>
      <FormWrapper created={created} active={open}>
        <div className="flex gap-4">
          <Input
            label="Nome"
            name="name"
            id="name"
            value={profile.name as string}
            placeholder="Ex: Pedro"
            onChange={setResume}
          />
          <Input
            label="Profissao"
            name="role"
            id="role"
            value={profile.role as string}
            placeholder="Ex: Programador"
            onChange={setResume}
          />
        </div>
        <Input
          label="Email"
          name="mail"
          id="mail"
          value={profile.mail as string}
          placeholder="Ex: usuario@email.com"
          onChange={setResume}
        />
        <Input
          label="Linkedin"
          placeholder="Ex: https://www.linkedin.com/in/pedro-ferreira-993873214/"
          name="linkedin"
          value={profile.linkedin as string}
          id="linkedin"
          onChange={setResume}
        />
        <Input
          label="Github"
          name="github"
          id="github"
          value={profile.github as string}
          placeholder="https://github.com/pedroferreira37"
          onChange={setResume}
        />
        <TextArea
          label="Sobre"
          placeholder="Digite uma pequena descricacao sobre voce"
          name="about"
          id="about"
          value={profile.about as string}
          onChange={
            setResume as unknown as React.ChangeEventHandler<HTMLTextAreaElement>
          }
        />
      </FormWrapper>
    </div>
  );
};
