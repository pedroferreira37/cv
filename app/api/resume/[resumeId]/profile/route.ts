import { updateProfile, createProfile } from "@/actions/updateResume";
import { Profile } from "@prisma/client";

type Context = { params: { resumeId: string } };

export const POST = async (req: Request, context: Context) => {
  const { resumeId } = context.params;

  const profile = await createProfile(resumeId);

  return new Response(JSON.stringify(profile));
};

export const PUT = async (req: Request, context: Context) => {
  const body = await req.json();
  const { resumeId } = context.params;

  const profile = await updateProfile(resumeId, body as Profile);

  return new Response(JSON.stringify(profile));
};
