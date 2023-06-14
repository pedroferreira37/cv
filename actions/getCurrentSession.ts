import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export const getCurrentSession = async () => {
  const session = await getServerSession(authOptions);

  console.log();

  return session;
};
