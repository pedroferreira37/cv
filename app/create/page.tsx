import { Resume } from "@/components/resume";

export default async function Create() {
  const props = [{ type: "professional", name: "assim deu certo" }];

  return (
    <div className="h-screen flex flex-col xl:flex-row">
      <div className="w-1/2">inputs</div>
      <div className="w-full h-full flex justify-center items-center bg-gray-200">
        <div className="w-1/2 h-3/4">
          <Resume resumes={props} />
        </div>
      </div>
    </div>
  );
}
