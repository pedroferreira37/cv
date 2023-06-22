import { createEducation, createExperience } from "@/actions/actions";

type Context = { params: { resumeId: string } };

export const POST = async (req: Request, context: Context) => {
  const { resumeId } = context.params;

  const experience = await createEducation(resumeId);

  return new Response(JSON.stringify(experience));
};
