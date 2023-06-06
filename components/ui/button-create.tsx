"use client";
import axios from "axios";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

export const CreateButton = ({ id, user }) => {
  const createResume = async () => {
    axios
      .post(`http://localhost:3000/api/resume/${user.id}/`, {
        id,
      })
      .then((req) => console.log(req.data));
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
