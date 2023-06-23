"use client";
import { API } from "@/lib/api";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { FiPlus } from "react-icons/fi";

export const CreateResumeButton = ({ userId }: { userId: string }) => {
  const router = useRouter();

  const createResume = async () => {
    try {
      const request = await API.post(`/resume`, {
        userId,
      });

      const resume = request.data;

      if (!resume.id) return null;

      router.push(`create/${resume.id}`);
    } catch (error) {}
  };

  return (
    <div>
      <button
        onClick={createResume}
        className="bg-green-field  hover:opacity-75 transition text-white px-2 py-2  text-sm rounded flex items-center gap-1 group"
      >
        <FiPlus size={18} className="group-hover:rotate-90 transition" />
        Novo Curriculo
      </button>
    </div>
  );
};
