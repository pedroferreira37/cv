"use client";

import React, { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { SpinLoader } from "./spin-loader";

export const UserAuthForm = () => {
  const [googleLoading, setGoogleLoading] = useState<boolean>(false);

  async function googleSubmit() {
    setGoogleLoading(true);
    signIn("google");
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
        </div>
      </div>
    </div>
  );
};
