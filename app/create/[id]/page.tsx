import { ResumeForm } from "@/components/forms/resume-form";
import { authOptions } from "@/lib/auth";
import { getUser } from "@/lib/session";
import { getServerSession } from "next-auth";

export default async function Create({ params }) {
  const user = await getUser();
  const { id } = params;

  return (
    <div className="">
      <ResumeForm user={user} id={id} />
    </div>
  );
}
