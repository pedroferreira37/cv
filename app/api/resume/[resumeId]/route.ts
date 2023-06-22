import { getResume, updateResume } from "@/actions/getResume";

type Context = { params: { resumeId: string } };

export const GET = async (req: Request, context: Context) => {
  const { resumeId } = context.params;

  const resume = await getResume(resumeId);

  return new Response(JSON.stringify(resume));
};

export const PUT = async (req: Request, context: Context) => {
  const body = await req.json();

  const { resumeId } = context.params;

  const resume = await updateResume(resumeId, body);

  return new Response(JSON.stringify(resume));
};
