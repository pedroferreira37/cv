import { Resume } from "@/components/resume";
import Image from "next/image";

export default async function Create() {
  const props = [{ type: "professional", name: "assim deu certo" }];

  return (
    <div className="h-screen flex flex-col xl:flex-row">
      <div className="w-1/2">inputs</div>
      <Resume />
    </div>
  );
}
