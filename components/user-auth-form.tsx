"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Input } from "./input";
import { signIn } from "next-auth/react";
import { Error } from "./error";
import { getErrorMessage } from "@/lib/error";
import { useSearchParams, useRouter } from "next/navigation";
import { FiLoader } from "react-icons/fi";
import Link from "next/link";
import { SpinLoader } from "./spin-loader";

export const UserAuthForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [googleLoading, setGoogleLoading] = useState<boolean>(false);
  const [mail, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const search = useSearchParams();

  const errorCode = search?.get("error");

  const errorMessage = getErrorMessage(errorCode);

  function changeMail(event: React.ChangeEvent<HTMLInputElement>) {
    setMail(event.target.value);
  }

  function changePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function onSubmit() {
    setLoading(true);
    await signIn("credentials", {
      mail,
      password,
    });
  }

  async function googleSubmit() {
    setGoogleLoading(true);
    signIn("google");
  }

  return (
    <div className="w-full h-[calc(100vh_-_60px)] flex justify-center items-center ">
      <div className="w-[280px] ">
        <div>
          <button
            onClick={googleSubmit}
            className="w-full border py-[6px] flex items-center  justify-center text-[14px] rounded outline-none hover:bg-gray-100 transition disabled:opacity-50"
          >
            {googleLoading ? (
              <SpinLoader size={20} color="gray" />
            ) : (
              <div className="flex gap-2">
                <Image
                  width={20}
                  height={20}
                  src="/google.svg"
                  alt="google_logo"
                />
                Continuar com google
              </div>
            )}
          </button>
          <div className="w-full border-b p-2"></div>
        </div>
        <form className="mt-2 mb-2">
          <Input
            label="Email"
            placeholder="Insira seu endereço de email..."
            id="email"
            name="email"
            onChange={changeMail}
            type="email"
          />
          <Input
            label="Senha"
            placeholder="********"
            onChange={changePassword}
            id="password"
            name="password"
            type="password"
          />

          <div className="w-full mt-4">
            <button
              className="text-[14px] text-white bg-green-default hover:bg-green-hover w-full py-[6px] rounded transition disabled:opacity-50"
              disabled={loading}
              onClick={onSubmit}
            >
              {loading ? <SpinLoader size={20} /> : "Entrar"}
            </button>
          </div>

          <div className="text-center mt-2">
            <Error message={errorMessage} />
            <Link href="/register" className="underline text-gray-400 text-sm">
              Não tem uma conta? Crie aqui
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
