import { prisma } from "@/lib/prisma";

export const getResume = async (id: string) => {
  try {
    const resume = await prisma.resume.findFirst({
      where: {
        id,
      },
      include: {
        profile: true,
        experiences: true,
        educations: true,
      },
    });

    return resume;
  } catch (err: any) {
    return null;
  }
};

export const updateResume = async (id: string, data: any) => {
  try {
    const resume = await prisma.resume.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });

    return resume;
  } catch (err: any) {
    return null;
  }
};
