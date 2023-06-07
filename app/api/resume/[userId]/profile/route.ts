import { updateProfile } from "@/model/model";

type Context = { params: { userId: string } };

export async function PUT(req: Request, context: Context) {
  const { userId } = context.params;
  const data = await req.json();

  try {
    await updateProfile(userId, data);
  } catch (err) {
    console.log(err);
  }

  return new Response("ok");
}
