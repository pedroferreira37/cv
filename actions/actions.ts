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

export const updateExperience = async (id: string, resumeId: string, experience: Experience) => {
  console.log(experience)
  try {
    const updatedExperience = await prisma.experience.updateMany({
      where: { id, resumeId},
      data: {
        ...experience,
      },
    
    });

    return updatedExperience;
  } catch (err: any) {
    console.log(err)
    return null;
  }
};
