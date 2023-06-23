import { createEducation } from "@/actions/createEducation";

type Context = { params: { resumeId: string } };

export const POST = async (req: Request, context: Context) => {
  const { resumeId } = context.params;

  const education = await createEducation(resumeId);

  return new Response(JSON.stringify(education));
};
