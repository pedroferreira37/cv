import { Header } from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Header />
      <section className="h-[calc(100vh_-_60px)] flex flex-col gap-4 items-center justify-center relative">
        <div>
          <h2 className="text-center text-[42px] font-bold">
            Um currículo sob medida <br></br>
            Rápido e Profissional
          </h2>
        </div>
        <p className="text-center text-gray-400 w-1/2 mb-4 font-medium">
          Com o CV.io, você pode criar um currículo profissional e moderno em
          minutos. Escolha um modelo, insira suas informações e destaque suas
          habilidades e experiências de trabalho. Comece hoje mesmo e
          destaque-se dos demais candidatos.
        </p>
        <Link
          href="/login"
          className="w-[200px] font-medium p-2 bg-dark hover:bg-light-green transition text-white text-sm rounded mt-4 disabled:opacity-50 flex items-center justify-center"
        >
          Criar meu currículo
        </Link>
      </section>
    </div>
  );
}
