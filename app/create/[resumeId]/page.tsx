import { getCurrentUser } from "@/actions/getCurrentUser";
import { ResumeForm } from "@/components/forms/resume-form";
import { User } from "@prisma/client";

export default async function Create({
  params,
}: {
  params: { resumeId: string };
}) {
  const user = await getCurrentUser();
  const resumeId = params.resumeId;

  return (
    <div>
      <ResumeForm resumeId={resumeId} user={user as User} />
    </div>
  );
}
