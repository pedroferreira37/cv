import { getResume } from "@/actions/getResume";

type Context = { params: { userId: string } };

export const GET = async (req: Request, context: Context) => {
  const { userId } = context.params;

  const resume = await getResume(userId);

  return new Response(JSON.stringify(resume));
};
