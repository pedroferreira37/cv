import { Professional } from "@/components/templates/professional-template";
import { TemplateCard } from "@/components/template-card";
import { RenderTemplate } from "@/components/template-renderer";
import { Template } from "@/components/templates/templates";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

export default async function User() {
  const props = [
    { type: "professional", name: "assim deu certo" },
    { type: "professional", name: "esse tambem" },
  ];

  return (
    <div className="flex flex-col  gap-12 ">
      <div className="flex justify-between  items-center w-full ">
        <div>
          <h2 className="font-bold text-4xl mb-1">Meus curriculos</h2>
          <p className="text-gray-500">Crie e gerencie seus curriculos</p>
        </div>
        <Link
          href="/create"
          className="bg-green-default hover:bg-green-hover text-white text-sm px-4 py-2 rounded flex gap-2 items-center"
        >
          <FiPlus size={20} />
          Novo Curriculo
        </Link>
      </div>
      <TemplateCard templates={props} />
    </div>
  );
}
