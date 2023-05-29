import { ResumeThumb } from "@/components/resume-thumb";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

export default function User() {
  const props = [{ type: "professional", data: { name: "assim deu certo" } }];

  return (
    <div className="w-full flex flex-col  gap-12 ">
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
      <div className="flex flex-wrap  gap-10 w-full">
        {props.map((prop) => (
          <ResumeThumb props={prop} />
        ))}
      </div>
    </div>
  );
}
