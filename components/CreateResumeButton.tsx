"use client";
import { API } from "@/lib/api";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { FiPlus } from "react-icons/fi";

export const CreateResumeButton = ({
  user: { id: userId },
}: {
  user: User;
}) => {
  const router = useRouter();

  const createResume = async () => {
    try {
      const request = await API.post(`/resume/create`, {
        userId,
      });

      const resume = request.data;

      if (!resume.id) return null;

      router.push(`resume/create/${resume.id}`);
    } catch (error) {}
  };

  return (
    <div>
      <button
        onClick={createResume}
        className="bg-dark  text-white px-4 py-2  font-medium text-sm rounded flex items-center gap-2 group"
      >
        <FiPlus size={20} className="group-hover:rotate-90 transition" />
        Novo Curriculo
      </button>
    </div>
  );
};
