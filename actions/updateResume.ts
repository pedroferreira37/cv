import { prisma } from "@/lib/prisma";
import { Profile, Resume } from "@/lib/reducer";

export const createProfile = async (resumeId: string) => {
  try {
    const createdResume = await prisma.profile.create({
      data: { resumeId },
    });

    return createdResume;
  } catch (err: any) {
    return null;
  }
};

export const updateProfile = async (resumeId: string, profile: Profile) => {
  try {
    const updatedReusme = await prisma.profile.update({
      where: { resumeId },
      data: {
        ...profile,
      },
    });

    return updatedReusme;
  } catch (err: any) {
    return null;
  }
};
