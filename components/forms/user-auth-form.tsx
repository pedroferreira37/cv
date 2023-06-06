"use client";

import React, { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { SpinLoader } from "../ui/spin-loader";
import { Input } from "../ui/input";
import { useSearchParams } from "next/navigation";

export const UserAuthForm = () => {
  const mailSent = useSearchParams()?.get("mail");

  const [googleLoading, setGoogleLoading] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string | null>(null);

  async function googleSubmit() {
    setGoogleLoading(true);
    await signIn("google");
  }

  async function emailSubmit() {
    setLoading(true);
    const res = await signIn("email", { email });
  }

  function onChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  return (
    <div className="w-full h-[calc(100vh_-_60px)] flex justify-center items-center ">
      <div className="w-[280px] ">
        <h2 className="text-center p-2 text-lg">Bem vindo</h2>
        <div>
          <button
            onClick={googleSubmit}
            className="w-full border py-[6px] flex items-center  justify-center text-[14px] rounded outline-none hover:bg-gray-100 transition disabled:opacity-50"
          >
            {googleLoading ? (
              <SpinLoader size={20} />
            ) : (
              <div className="flex gap-2">
                <Image
                  width={16}
                  height={16}
                  src="/google.svg"
                  alt="google_logo"
                />
                Continuar com google
              </div>
            )}
          </button>
          <div className="w-full border-b border-gray-200 my-4"></div>
          <Input
            label="Email"
            placeholder="Insira seu endereco de email..."
            onChange={onChangeEmail}
            id="email"
            name="email"
            type="email"
          />

          <button
            onClick={emailSubmit}
            className="w-full p-2 bg-green-default hover:bg-green-hover transition text-white text-sm rounded mt-4 disabled:opacity-50 flex items-center justify-center"
            disabled={loading || !email?.includes("@")}
          >
            {loading ? <SpinLoader size={20} /> : "Continuar com e-mail"}
          </button>
        </div>
        {mailSent && (
          <p className="w-full text-center mt-8 text-gray-500">
            Enviamos um email de acesso <br></br> Verifique sua caixa de entrada
          </p>
        )}
      </div>
    </div>
  );
};
