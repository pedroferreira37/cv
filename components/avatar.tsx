"use client";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import { FiUser } from "react-icons/fi";

export const Avatar = ({ session }: { session: Session }) => {
  const [modal, setModal] = useState<boolean>(false);

  const user = session?.user;

  return (
    <div
      onClick={() => setModal((modal) => !modal)}
      className="relative cursor-pointer "
    >
      {user?.image ? (
        <Image
          width={28}
          height={28}
          src={session?.user?.image as string}
          className="rounded-full"
          alt="user_image"
        />
      ) : (
        <div className="border-2 rounded-full">
          <FiUser size={20} color="white" />
        </div>
      )}

      <div
        className={`absolute bg-white right-0 top-8   rounded-md border w-64 p-2 ${
          modal ? "animate-slide-up" : "animate-slide-down"
        }`}
      >
        <div className="text-sm p-2 text-gray-400 rounded">{user?.email}</div>
        <div
          className="text-sm p-2 hover:bg-gray-100 rounded"
          role="button"
          onClick={() => signOut()}
        >
          Sair
        </div>
      </div>
    </div>
  );
};
