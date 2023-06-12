import { db } from "@/lib/db";

type Context = { params: { id: string } };

export async function GET(req: Request, context: Context) {
  const { id } = context.params;
  const resumes = await db.resume.findUnique({
    where: { id },
  });
  return new Response(JSON.stringify(resumes));
}

export async function PUT(req: Request, context: Context) {
  const body = await req.json();

  const { id } = context.params;

  try {
    const resume = await db.resume.update({
      where: { id },
      data: body,
    });

    return new Response(JSON.stringify({ status: "ok", resume }));
  } catch (err) {
    throw new Error("Error");
  }
}
