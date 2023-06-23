"use client";
import { useState } from "react";
import Image from "next/image";
import { Loader } from "./spin-loader";
import { signIn } from "next-auth/react";

export const OAuthSignInButton = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const logIn = () => {
    setLoading(true);
    signIn("google");
  };
  return (
    <button
      onClick={logIn}
      className="w-full  font-medium border py-2 flex items-center  justify-center text-sm rounded outline-none hover:bg-gray-100 transition disabled:opacity-50 gap-2"
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
  );
};
