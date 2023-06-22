import { prisma } from "@/lib/prisma";
import { Experience } from "@/lib/reducer";

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

export const updateExperience = async (
  id: string,
  resumeId: string,
  experience: Experience
) => {
  console.log(experience);
  try {
    const updatedExperience = await prisma.experience.updateMany({
      where: { id, resumeId },
      data: {
        ...experience,
      },
    });

    return updatedExperience;
  } catch (err: any) {
    console.log(err);
    return null;
  }
};

export const removeExperience = async (id: string, resumeId: string) => {
  try {
    const updatedExperience = await prisma.experience.deleteMany({
      where: { id, resumeId },
    });

    return updatedExperience;
  } catch (err: any) {
    return null;
  }
};

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

export const updateEducation = async (
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
