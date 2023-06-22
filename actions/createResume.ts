import { prisma } from "@/lib/prisma";

export const createResume = async (userId: string) => {
  try {
    const resume = await prisma.resume.create({
      data: {
        userId,
        template: "professional",
        name: "Professional",
      },
    });

    return resume;
  } catch (err: any) {
    console.log(err);
    return null;
  }
};
