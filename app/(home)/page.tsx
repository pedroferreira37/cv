import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex flex-col  items-center justify-center gap-10 h-screen">
      <div>
        <h2 className="text-center text-[42px] font-bold">
          Um currículo sob medida
        </h2>
        <h2 className="text-center text-[42px] font-bold">
          Rápido e Profissional
        </h2>
      </div>
      <p className="text-center w-1/2 mb-4">
        Com o CV.io, você pode criar um currículo profissional e moderno em
        minutos. Escolha um modelo, insira suas informações e destaque suas
        habilidades e experiências de trabalho. Comece hoje mesmo e destaque-se
        dos demais candidatos.
      </p>
      <Link
        href="/signin"
        className="text-white bg-green-default py-4 px-6 rounded"
      >
        Criar meu currículo
      </Link>
    </div>
  );
}
