import { prisma } from "@/lib/db";

export const getResumes = async (userId: string) => {
  try {
    const resumes = await prisma.resume.findMany({
      where: {
        userId,
      },
      include: {
        experiences: true,
        educations: true,
      },
    });

    return resumes;
  } catch (err: any) {
    return null;
  }
};
