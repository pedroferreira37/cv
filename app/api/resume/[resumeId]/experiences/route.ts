import { createExperience } from "@/actions/createExperience";

type Context = { params: { resumeId: string } };

export const POST = async (req: Request, context: Context) => {
  const { resumeId } = context.params;

  const experience = await createExperience(resumeId);

  return new Response(JSON.stringify(experience));
};
