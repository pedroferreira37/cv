import { prisma } from "@/lib/prisma";

export const getResume = async (id: string) => {
  try {
    const resume = await prisma.resume.findFirst({
      where: {
        id,
      },
      select: {
        name: true,
        role: true,
        mail: true,
        github: true,
        linkedin: true,
        about: true,
        experiences: true,
        educations: true,
      },
    });

    return resume;
  } catch (err: any) {
    return null;
  }
};
