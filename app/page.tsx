import { Header } from "@/components/ui/header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Header />
      <main className="container min-h-screen relative ">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex  flex-col items-center text-center max-w-[64rem] gap-4">
            <h2 className=" text-6xl leading-tight font-bold text-dark-blue ">
              Um currículo sob medida <br></br>
              Rápido e Profissional
            </h2>

            <p className=" text-gray-500  mb-2 font-medium">
              Com o CV.io, você pode criar um currículo profissional e moderno
              em minutos. Escolha um modelo, insira suas informações e destaque
              suas habilidades e experiências de trabalho. Comece hoje mesmo e
              destaque-se dos demais candidatos.
            </p>
            <Link
              href="/login"
              className="px-3 py-2 font-medium  bg-green-field hover:opacity-75 hover:bg-light-green transition text-white text-sm rounded mt-4 disabled:opacity-50 flex items-center justify-center"
            >
              Criar meu currículo
            </Link>
          </div>
        </section>
        <section className="container  bg-gray-200 px-2 py-8 space-x-8 flex justify-center ">
          <Image
            src="/premium-template.svg"
            width={300}
            height={300}
            className="max-w-full"
            alt="curriculum"
          />
          <Image
            src="/block-template.svg"
            width={300}
            height={300}
            className="max-w-full"
            alt="curriculum"
          />
        </section>
      </main>
    </div>
  );
}
