"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import { FiUser } from "react-icons/fi";

export const UserThumb = ({ session }) => {
  const [isOption, setOptions] = useState<boolean>(false);
  const user = session?.user;

  function toogleOptions() {
    setOptions((isOption) => !isOption);
  }
  return (
    <div onClick={toogleOptions} className="relative">
      {user?.image ? (
        <Image
          width={28}
          height={28}
          src={session?.user?.image}
          className="rounded-full"
          alt="user_image"
        />
      ) : (
        <div className="border-2 rounded-full">
          <FiUser size={20} color="white" />
        </div>
      )}
      {isOption && (
        <div className="absolute bg-white right-0 top-8  rounded-md border w-64 p-2 ">
          <div className="text-sm p-2 text-gray-400 rounded">{user?.email}</div>
          <div
            className="text-sm p-2 hover:bg-gray-100 rounded"
            role="button"
            onClick={() => signOut()}
          >
            Sair
          </div>
        </div>
      )}
    </div>
  );
};
