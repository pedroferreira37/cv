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
