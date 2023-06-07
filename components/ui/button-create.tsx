"use client";
import { uuid } from "@/lib/uuid";
import axios from "axios";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

export const CreateButton = ({ user }) => {
  const id = uuid(10);
  console.log("user", user);
  const createResume = async () => {
    axios
      .post(`http://localhost:3000/api/resume`, {
        id,
        userId: user.id,
      })
      .then((req) => console.log("create", req.data));
  };

  return (
    <div>
      <Link
        href={`/create/${id}`}
        onClick={createResume}
        className="bg-green-default hover:bg-green-hover text-white text-sm px-4 py-2 rounded flex gap-2 items-center"
      >
        <FiPlus size={20} />
        Novo Curriculo
      </Link>
    </div>
  );
};
