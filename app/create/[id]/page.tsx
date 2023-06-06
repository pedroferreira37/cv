import { ResumeForm } from "@/components/forms/resume-form";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Create({ params }) {
  const { id } = params;
  const session = await getServerSession(authOptions);
  return (
    <div className="">
      <ResumeForm session={session} id={id} />
    </div>
  );
}
