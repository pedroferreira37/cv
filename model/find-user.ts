import { db } from "@/lib/db";

type Data = { mail: string };

export async function getUser({ mail }: Data) {
  const user = await db.user.findMany({
    where: { mail },
  });

  return user;
}
