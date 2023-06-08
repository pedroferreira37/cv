import { ResumeCard } from "@/components/resume-cards";
import { CreateResumeButton } from "@/components/create-resume-button";
import { authOptions } from "@/lib/auth";
import { uuid } from "@/lib/uuid";
import { getResumes } from "@/model/model";
import { getServerSession } from "next-auth";
import { getUser } from "@/lib/session";

export default async function User() {
  const session = await getServerSession(authOptions);

  const user = await getUser();

  const resumes = await getResumes(user.id);

  return (
    <div className="w-full  flex flex-col  gap-2 ">
      <div className="flex justify-between  items-center w-full ">
        <div>
          <h2 className="font-bold text-4xl mb-1">Meus curriculos</h2>
          <p className="text-gray-500">Crie e gerencie seus curriculos</p>
        </div>

        <CreateResumeButton user={user} />
      </div>
      <div className="flex  flex-wrap  gap-10 w-full py-6">
        <ResumeCard resumes={resumes} />
      </div>
    </div>
  );
}
