import { db } from "@/lib/db";

type Data = { mail: string };

export async function getUser({ mail }: Data) {
  try {
    const user = await db.user.findMany({
      where: { mail },
    });
    if (user.length === 0) return null;

    return user;
  } catch (e) {
    return null;
  }
}
