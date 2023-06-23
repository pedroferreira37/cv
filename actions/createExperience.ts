import { prisma } from "@/lib/prisma";

export const createExperience = async (resumeId: string) => {
  try {
    const createdExperience = await prisma.experience.create({
      data: { resumeId, current: false },
    });

    return createdExperience;
  } catch (err: any) {
    return null;
  }
};
