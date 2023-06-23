import { prisma } from "@/lib/prisma";

export const removeExperience = async (id: string, resumeId: string) => {
  try {
    const updatedExperience = await prisma.experience.deleteMany({
      where: { id, resumeId },
    });

    return updatedExperience;
  } catch (err: any) {
    return null;
  }
};
