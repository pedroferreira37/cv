import { TemplateCard } from "@/components/template-card";
import { TemplateLayout } from "@/components/template-layout";

export default async function Create() {
  const props = [{ type: "professional", name: "assim deu certo" }];

  return (
    <div className="h-screen flex flex-col xl:flex-row">
      <div className="w-1/2">inputs</div>
      <TemplateLayout data={props} />
    </div>
  );
}
