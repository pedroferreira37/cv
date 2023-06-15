import { getResume } from "@/actions/getResume";

type Context = { params: { resumeId: string } };

export const GET = async (req: Request, context: Context) => {
  const { resumeId } = context.params;

  const resume = await getResume(resumeId);

  return new Response(JSON.stringify(resume));
};
