import { Header } from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="section">
        <div>
          <h2 className="text-center text-[42px] font-bold">
            Um currículo sob medida <br></br>
            Rápido e Profissional
          </h2>
        </div>
        <p className="text-center w-1/2 mb-4">
          Com o CV.io, você pode criar um currículo profissional e moderno em
          minutos. Escolha um modelo, insira suas informações e destaque suas
          habilidades e experiências de trabalho. Comece hoje mesmo e
          destaque-se dos demais candidatos.
        </p>
        <Link
          href="/login"
          className="w-[200px] p-2 bg-green hover:bg-light-green transition text-white text-sm rounded mt-4 disabled:opacity-50 flex items-center justify-center"
        >
          Criar meu currículo
        </Link>
      </section>
    </div>
  );
}
