import { getCurrentUser } from "@/actions/getCurrentUser";
import { ResumeForm } from "@/components/ResumeForm";

export default async function Create({ params }) {
  const { resumeId } = params;

  return (
    <div className="w-full h-full">
      <ResumeForm id={resumeId} />
    </div>
  );
}
