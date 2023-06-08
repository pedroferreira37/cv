"use client";
import React, { ChangeEventHandler, Dispatch, useState } from "react";
import { Input } from "../input";
import { TextArea } from "../ui/textarea";
import { FiPlus } from "react-icons/fi";
import { Action, Profile } from "@/lib/reducer";

type Props = {
  profile: Profile;
  onCange: Dispatch<Action>;
};

export function ProfileForm({ profile, onCange }: Props) {
  const [linkedin, setLinkedin] = useState<boolean>(false);
  const [github, setGithub] = useState<boolean>(false);

  const setProfile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onCange({ type: "change_profile", name, value });
  };

  const setProfileTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    onCange({ type: "change_profile", name, value });
  };

  return (
    <div>
      <div className="flex flex-col gap-2 pt-4">
        <h2 className="text-2xl">Perfil</h2>
        <div className="gap-4 flex">
          <Input
            label="Nome"
            name="name"
            id="name"
            type="text"
            onChange={setProfile}
          />
          <Input
            label="Profissao"
            name="role"
            id="name"
            type="text"
            onChange={setProfile}
          />
        </div>
        <Input
          label="Email"
          name="mail"
          id="mail"
          type="text"
          onChange={setProfile}
        />

        {linkedin && (
          <div
            className="relative 
          "
          >
            <button
              className="absolute top-2 left-[60px] text-[10px] text-gray-400"
              name="linkedin"
              onClick={() => setLinkedin(false)}
            >
              Remover
            </button>

            <Input
              label="Linkedin"
              name="linkedin"
              id="linkedin"
              type="text"
              onChange={setProfile}
            />
          </div>
        )}

        {github && (
          <div className="relative">
            <button
              className="absolute top-2 left-[50px] text-[10px] text-gray-400"
              name="github"
              onClick={() => setGithub(false)}
            >
              Remover
            </button>
            <Input
              label="Github"
              name="github"
              id="github"
              type="text"
              onChange={setProfile}
            />
          </div>
        )}
        <div>
          <TextArea
            cols={20}
            rows={6}
            length={250}
            label="Digite uma breve descricao"
            name="about"
            onChange={setProfileTextArea}
          />
        </div>

        <div className="flex gap-2">
          {!linkedin && (
            <div className="group">
              <button
                className="flex gap-2 px-4 py-2 items-center justify-center border rounded group-hover:bg-default-gray    transition"
                name="linkedin"
                onClick={() => setLinkedin(true)}
              >
                <FiPlus
                  size={20}
                  className="group-hover:rotate-90 transition"
                />
                LinkedIn
              </button>
            </div>
          )}

          {!github && (
            <div className="group">
              <button
                className="flex gap-2  px-4 py-2 items-center justify-center border rounded group-hover:bg-default-gray  transition"
                name="github"
                onClick={() => setGithub(true)}
              >
                <FiPlus
                  size={20}
                  className="group-hover:rotate-90 transition"
                />
                Github
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
