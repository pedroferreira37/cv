import { prisma } from "@/lib/prisma";
import { Experience } from "@/lib/reducer";
export const updateExperience = async (
  id: string,
  resumeId: string,
  experience: Experience
) => {
  try {
    const updatedExperience = await prisma.experience.updateMany({
      where: { id, resumeId },
      data: {
        ...experience,
      },
    });

    return updatedExperience;
  } catch (err: any) {
    return null;
  }
};
