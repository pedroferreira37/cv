import { prisma } from "@/lib/prisma";
import { Resume } from "@/lib/reducer";

export const getResumes = async (userId: string): Promise<Resume[] | null> => {
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
