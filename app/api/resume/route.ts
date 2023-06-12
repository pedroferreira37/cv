import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

import { getServerSession } from "next-auth";

type Context = { params: { id: string } };

export async function POST(req: Request, context: Context) {
  const body = await req.json();

  try {
    const resume = await db.resume.create({
      data: body,
    });

    if (body.experiences && body.experiences.length > 0) {
      db.resume.update({
        where: { id: body.id },
        data: {
          experiences: {
            create: [...body.experiences],
          },
        },
      });
    }
    return new Response(JSON.stringify({ status: "ok", resume }));
  } catch (err) {
    throw new Error("Error");
  }
}

export async function GET(req: Request, context: Context) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const resumes = await db.resume.findUnique({
    where: { id: user?.id },
  });
  return new Response(JSON.stringify(resumes));
}
