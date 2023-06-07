import { createResume } from "@/model/model";

type Context = { params: { id: string } };

export async function POST(req: Request, context: Context) {
  const body = await req.json();

  console.log(body);
  try {
    const resume = await createResume(body);
    return new Response(JSON.stringify({ status: "ok", resume }));
  } catch (err) {
    throw new Error("Error");
  }
}
