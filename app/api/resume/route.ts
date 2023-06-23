import { createResume } from "@/actions/createResume";

export const POST = async (req: Request) => {
  const { userId }: { userId: string } = await req.json();

  const resume = await createResume(userId);

  if (!resume) return new Response(JSON.stringify({ id: null }));

  return new Response(JSON.stringify({ id: resume?.id as string }));
};
