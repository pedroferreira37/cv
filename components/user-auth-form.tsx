"use client";
import React from "react";

import Image from "next/image";
import { Input } from "./input";
import { signIn } from "next-auth/react";

export const UserAuthForm = () => {
  return (
    <div className="w-full h-[calc(100vh_-_60px)] flex justify-center items-center">
      <div className="w-[340px]">
        <div>
          <button
            onClick={() => signIn("google")}
            className="w-full border py-[6px] flex items-center gap-2 justify-center text-[14px] rounded outline-none hover:bg-gray-100 transition "
          >
            <Image
              width={20}
              height={20}
              src="/google.svg"
              alt="google_logo"
              className=""
            />
            Continuar com google
          </button>
        </div>
        <Input label="Email" placeholder="usuario@gmail.com" />
        <div className="w-full mt-4">
          <button className="text-[14px] text-white bg-green-default w-full py-[6px] rounded">
            Continuar com email
          </button>
        </div>
      </div>
    </div>
  );
};
