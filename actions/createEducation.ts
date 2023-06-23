import { prisma } from "@/lib/prisma";
import { Experience } from "@/lib/reducer";

export const createEducation = async (resumeId: string) => {
  try {
    const createdEducation = await prisma.education.create({
      data: { resumeId, current: false },
    });

    return createdEducation;
  } catch (err: any) {
    return null;
  }
};
