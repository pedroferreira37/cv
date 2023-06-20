import { prisma } from "@/lib/prisma";
import { Experience} from "@/lib/reducer";

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

export const updateExperience = async (id: string, profile: Experience) => {
  try {
    const updatedExperience = await prisma.experience.update({
      where: { id },
      data: {
        ...profile,
      },
    });

    return updatedExperience;
  } catch (err: any) {
    return null;
  }
};
