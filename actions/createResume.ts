import { prisma } from "@/lib/prisma";

export const createResume = async (userId: string) => {
  try {
    const resume = await prisma.resume.create({
      data: {
        userId,
        template: "professional",
      },
    });

    return resume;
  } catch (err: any) {
    return null;
  }
};
