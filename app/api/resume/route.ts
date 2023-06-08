import { authOptions } from "@/lib/auth";
import { createResume, getResumes } from "@/model/model";
import { getServerSession } from "next-auth";

type Context = { params: { id: string } };

export async function POST(req: Request, context: Context) {
  const body = await req.json();

  try {
    const resume = await createResume(body);

    return new Response(JSON.stringify({ status: "ok", resume }));
  } catch (err) {
    throw new Error("Error");
  }
}

export async function GET(req: Request, context: Context) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const resumes = await getResumes(user?.id);
  return new Response(JSON.stringify(resumes));
}
