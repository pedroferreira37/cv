"use client";

import React, { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { Loader } from "./loader";

export const LoginForm = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const submit = async () => {
    setLoading(true);
    await signIn("google");
  };

  return (
    <form className="w-[280px]">
      <h2 className="text-center py-4 text-2xl">Bem vindo na cv.io</h2>
      <button
        onClick={submit}
        className="w-full border py-2 flex items-center  justify-center text-sm rounded outline-none hover:bg-gray-100 transition disabled:opacity-50 gap-2"
      >
        {loading ? (
          <Loader size={20} />
        ) : (
          <>
            <Image width={16} height={16} src="/google.svg" alt="google_logo" />
            Continuar com google
          </>
        )}
      </button>
    </form>
  );
};
