"use client";
import { User } from "@prisma/client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export const Avatar = ({ user }: { user: User }) => {
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {}, []);

  return (
    <div
      onClick={() => setModal((modal) => !modal)}
      className="relative cursor-pointer "
    >
      {user?.image ? (
        <Image
          width={28}
          height={28}
          src={user?.image as string}
          className="rounded-full"
          alt="user_image"
        />
      ) : (
        <div className="border-2 rounded-full">
          <FiUser size={20} color="white" />
        </div>
      )}
      <AnimatePresence>
        {modal && (
          <motion.div
            className="absolute bg-white right-0 top-8   transition rounded-md border w-64 p-2"
            style={{
              backfaceVisibility: "hidden",
            }}
            initial={{
              opacity: 0,
              transitionDuration: "0.1s",
            }}
            animate={{
              scale: [1, 1.02, 1],
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
          >
            <div className="text-sm p-2 text-gray-400 rounded">
              {user?.email}
            </div>
            <div
              className="text-sm p-2 hover:bg-gray-100 rounded"
              role="button"
              onClick={() => signOut()}
            >
              Sair
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
