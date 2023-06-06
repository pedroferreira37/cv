import { ResumeThumb } from "@/components/resume/resume-thumb";
import { CreateButton } from "@/components/ui/button-create";
import { authOptions } from "@/lib/auth";
import { uuid } from "@/lib/uuid";
import { getResumes } from "@/model/model";
import { User } from "@prisma/client";
import axios from "axios";
import { getServerSession } from "next-auth";

export default async function User() {
  const resumeId = uuid(10);
  const session = await getServerSession(authOptions);
  const user = session?.user as User;

  const resumes = await getResumes(user.id);

  return (
    <div className="w-full flex flex-col  gap-12 ">
      <div className="flex justify-between  items-center w-full ">
        <div>
          <h2 className="font-bold text-4xl mb-1">Meus curriculos</h2>
          <p className="text-gray-500">Crie e gerencie seus curriculos</p>
        </div>
        <CreateButton id={resumeId} user={user} />
      </div>
      <div className="flex flex-wrap  gap-10 w-full">
        {resumes.map((prop) => (
          <ResumeThumb props={prop} />
        ))}
      </div>
    </div>
  );
}
