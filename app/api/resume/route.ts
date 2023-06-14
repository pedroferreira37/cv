import { createResume } from "@/actions/createResume";

export const POST = async (req: Request) => {
  const body = await req.json();

  const resume = await createResume(body.userId as string);

  if (!resume) return new Response(JSON.stringify({ id: null }));

  return new Response(JSON.stringify({ id: resume?.id as string }));
};
