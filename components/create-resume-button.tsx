"use client";
import { API } from "@/lib/api";
import { uuid } from "@/lib/uuid";
import { User } from "@prisma/client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

export const CreateResumeButton = ({ user }: { user: User }) => {
  const router = useRouter();
  const produce = async () => {
    const userId = user.id;

    try {
      const request = await API.post(`/resume`, {
        userId,
      });
      const resume = request.data.resume;

      router.push(`/create/${resume.id}`);
    } catch (error) {}
  };

  return (
    <div>
      <button
        onClick={produce}
        className="btn-primary-md flex items-center gap-4 group"
      >
        <FiPlus size={20} className="group-hover:rotate-90 transition" />
        Novo Curriculo
      </button>
    </div>
  );
};
