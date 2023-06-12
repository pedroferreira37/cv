import { db } from "@/lib/db";

type Context = { params: { id: string } };

export const GET = (req: Request, context: any) => {
  const { resumeId } = context.params;

  return new Response(resumeId);
};

export const POST = async (req: Request, context: any) => {
  const body = await req.json();
  const { resumeId } = context.params;

  try {
    const exp = await db.experience.create({
      data: {
        resumeId,
        ...body,
      },
    });

    return exp;
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
};
