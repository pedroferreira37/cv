import { ResumeForm } from "@/components/ResumeForm";

export default function Create({ params }) {
  const resumeId = params.resumeId;

  return (
    <div>
      <ResumeForm resumeId={resumeId} />
    </div>
  );
}
