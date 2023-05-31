"use client";
import React, { useState } from "react";
import { Input } from "./input";
import { TextArea } from "./textarea";
import { FiPlus } from "react-icons/fi";
import { Profile } from "@/lib/reducer";

type Props = {
  profile: Profile;
  onProfileChangeRequest: React.ChangeEventHandler<HTMLInputElement>;
};

export function ProfileForm({ profile, onProfileChangeRequest }: Props) {
  const [linkedin, setLinkedin] = useState<boolean>(false);
  const [github, setGithub] = useState<boolean>(false);

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
            onChange={onProfileChangeRequest}
          />
          <Input
            label="Profissao"
            name="profession"
            id="name"
            type="text"
            onChange={onProfileChangeRequest}
          />
        </div>
        <Input
          label="Email"
          name="email"
          id="email"
          type="text"
          onChange={onProfileChangeRequest}
        />

        <div
          className={`relative transition ${
            linkedin ? "opacity-100 visible" : "opacity-0 hidden"
          }`}
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
            onChange={onProfileChangeRequest}
          />
        </div>

        <div
          className={`relative transition ${
            github ? "opacity-100 visible" : "opacity-0 hidden"
          }`}
        >
          <button
            className="absolute top-2 left-[60px] text-[10px] text-gray-400"
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
            onChange={onProfileChangeRequest}
          />
        </div>

        <div>
          <TextArea
            cols={20}
            rows={6}
            length={250}
            label="Digite uma breve descricao"
            name="description"
            onChange={onProfileChangeRequest}
          />
        </div>

        <div className="flex gap-2">
          <div
            className={`group ${
              !linkedin ? "opacity-100 visible" : "opacity-0 hidden"
            }`}
          >
            <button
              className="flex gap-2 px-4 py-2 items-center justify-center border rounded group-hover:bg-default-gray    transition"
              name="linkedin"
              onClick={() => setLinkedin(true)}
            >
              <FiPlus size={20} className="group-hover:rotate-90 transition" />
              LinkedIn
            </button>
          </div>

          <div
            className={`group ${
              !github ? "opacity-100 visible" : "opacity-0 hidden"
            }`}
          >
            <button
              className="flex gap-2  px-4 py-2 items-center justify-center border rounded group-hover:bg-default-gray  transition"
              name="github"
              onClick={() => setGithub(true)}
            >
              <FiPlus size={20} className="group-hover:rotate-90 transition" />
              Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
