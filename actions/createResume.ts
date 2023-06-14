import { prisma } from "@/lib/db";

export const createResume = async (userId: string) => {
  try {
    const resume = await prisma.resume.create({
      data: {
        userId,
      },
    });

    return resume;
  } catch (err: any) {
    return null;
  }
};
