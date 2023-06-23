import { prisma } from "@/lib/prisma";
import { Experience } from "@/lib/reducer";

export const removeEducation = async (
  id: string,
  resumeId: string,
  experience: Experience
) => {
  try {
    const updateEducation = await prisma.education.updateMany({
      where: { id, resumeId },
      data: {
        ...experience,
      },
    });

    return updateEducation;
  } catch (err: any) {
    return null;
  }
};
