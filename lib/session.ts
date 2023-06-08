import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { User } from "@prisma/client";

export const getUser = async (): Promise<User> => {
  const session = await getServerSession(authOptions);

  return session?.user as User;
};
