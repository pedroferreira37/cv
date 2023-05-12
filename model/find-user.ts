import { db } from "@/lib/db";

type Data = { mail: string };

export async function getUser({ mail }: Data) {
  const user = db.user.findMany({
    where: { mail },
  });

  return user;
}
