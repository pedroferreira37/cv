import { db } from "@/lib/db";

type Data = { mail: string; name: string; id: string };

export async function createUser(data: Data) {
  const { mail, name, id } = data;
  const isUser = await db.user.findMany({
    where: {
      AND: [
        {
          mail,
        },
        {
          name,
        },
      ],
      OR: [
        {
          id,
        },
      ],
    },
  });

  if (isUser)
    return {
      status: 403,
      message: "User aexists!",
    };

  const create = await db.user.create({
    data: {
      mail,
      id,
      name,
    },
  });

  if (create) return 200;
}
