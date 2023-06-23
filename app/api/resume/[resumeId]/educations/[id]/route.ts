import { updateEducation } from "@/actions/updateEducation";
import { removeEducation } from "@/actions/removeEducation";
import { Experience } from "@prisma/client";

type Context = { params: { resumeId: string; id: string } };

export const PUT = async (req: Request, context: Context) => {
  const body = await req.json();
  const { id, resumeId } = context.params;
  const education = await updateEducation(id, resumeId, body[0] as Experience);

  return new Response(JSON.stringify(education));
};

export const REMOVE = async (req: Request, context: Context) => {
  const body = await req.json();
  const { id, resumeId } = context.params;
  const education = await removeEducation(id, resumeId, body[0] as Experience);

  return new Response(JSON.stringify(education));
};
