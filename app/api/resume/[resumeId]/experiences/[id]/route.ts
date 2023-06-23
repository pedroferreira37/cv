import { removeExperience } from "@/actions/removeExperience";
import { updateExperience } from "@/actions/updateExperience";
import { Experience } from "@prisma/client";

type Context = { params: { resumeId: string; id: string } };

export const PUT = async (req: Request, context: Context) => {
  const body = await req.json();
  const { id, resumeId } = context.params;
  const experience = await updateExperience(
    id,
    resumeId,
    body[0] as Experience
  );

  return new Response(JSON.stringify(experience));
};

export const DELETE = async (req: Request, context: Context) => {
  const { id, resumeId } = context.params;
  const experience = await removeExperience(id, resumeId);

  return new Response(JSON.stringify(experience));
};
