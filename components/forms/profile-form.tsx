"use client";
import { Input } from "../ui/input";
import { TextArea } from "../ui/text-area";
import { useEffect, useState } from "react";
import { Action, Profile } from "@/lib/reducer";
import { debounce } from "@/lib/debounce";
import { API } from "@/lib/api";
import { FormHandlerButton } from "../ui/add-form-button";

type Props = {
  profile: Profile | null;
  disptach: React.Dispatch<Action>;
  resumeId: string;
};

export const ProfileForm = ({ profile, disptach, resumeId }: Props) => {
  const [active, setActive] = useState<boolean>(false);

  const create = () => {
    API.post(`/resume/${resumeId}/profile`).then((req) => {
      if (!req.data) return;
      disptach({ type: "CREATE_PROFILE", payload: req.data });
    });
  };

  const update = (e: any) => {
    disptach({
      type: "UPDATE_PROFILE",
      name: e.target.name,
      payload: e.target.value,
    });
  };

  useEffect(() => {
    const updateRequest = debounce(API.put, 1000);

    if (profile?.id) {
      updateRequest(`/resume/${resumeId}/profile`, profile);
    }
  }, [profile]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2>Perfil</h2>
        <FormHandlerButton
          data={profile}
          collapse={active}
          onClick={create}
          onCollapse={(e: any) => setActive((active) => !active)}
        />
      </div>
      {profile
        ? active && (
            <>
              <div className="flex gap-4">
                <Input
                  label="Nome"
                  name="name"
                  id="name"
                  value={profile?.name as string}
                  placeholder="Ex: Pedro"
                  onChange={update}
                />
                <Input
                  label="Profissao"
                  name="role"
                  id="role"
                  value={profile?.role as string}
                  placeholder="Ex: Programador"
                  onChange={update}
                />
              </div>
              <Input
                label="Email"
                name="mail"
                id="mail"
                value={profile?.mail as string}
                placeholder="Ex: usuario@email.com"
                onChange={update}
              />
              <Input
                label="Linkedin"
                placeholder="Ex: https://www.linkedin.com/in/pedro-ferreira-993873214/"
                name="linkedin"
                value={profile?.linkedin as string}
                id="linkedin"
                onChange={update}
              />
              <Input
                label="Github"
                name="github"
                id="github"
                value={profile?.github as string}
                placeholder="https://github.com/pedroferreira37"
                onChange={update}
              />
              <TextArea
                label="Sobre"
                placeholder="Digite uma pequena descricacao sobre voce"
                name="about"
                id="about"
                value={profile?.about as string}
                onChange={
                  update as unknown as React.ChangeEventHandler<HTMLTextAreaElement>
                }
              />
            </>
          )
        : null}
    </div>
  );
};
