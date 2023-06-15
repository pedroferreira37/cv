import { ResumeCard } from "@/components/ResumeCards";
import { CreateResumeButton } from "@/components/CreateResumeButton";
import { getResumes } from "@/actions/getResumes";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { User } from "@prisma/client";

export default async function User() {
  const user = await getCurrentUser();

  //const resumes = await getResumes(user?.id as string);
  console.log(user);
  // if (!resumes) return null;

  return (
    <div className="w-full  flex flex-col  gap-2 ">
      <div className="flex justify-between  items-center w-full ">
        <div>
          <h2 className="font-bold text-4xl mb-1">Meus curriculos</h2>
          <p className="text-gray-500 font-medium">
            Crie e gerencie seus curriculos
          </p>
        </div>

        <CreateResumeButton user={user as User} />
      </div>
      <div className="flex  flex-wrap  gap-10 w-full py-6">
        {/* <ResumeCard resumes={resumes} /> */}
      </div>
    </div>
  );
}
