import { prisma } from "@/lib/db";
import { getCurrentSession } from "./getCurrentSession";

export const getCurrentUser = async () => {
  try {
    const session = await getCurrentSession();

    if (!session?.user?.email) return null;

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!user) return null;

    return user;
  } catch (err: any) {
    return null;
  }
};
