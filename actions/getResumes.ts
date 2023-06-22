import { prisma } from "@/lib/prisma";

export const getResumes = async (userId: string) => {
  try {
    const resumes = await prisma.resume.findMany({
      where: {
        userId,
      },
      include: {
        profile: true,
        experiences: true,
        educations: true,
      },
    });

    return resumes;
  } catch (err: any) {
    return null;
  }
};
