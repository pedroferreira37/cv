import { db } from "@/lib/db";
import { State } from "@/lib/reducer";

export const getResumes = async (id: string) => {
  try {
    const resumes = await db.resume.findMany({
      include: {
        experiences: true,
        educations: true,
      },
      where: {
        userId: id,
      },
    });

    return resumes;
  } catch (err) {
    return new Response("Erro");
  }
};

export const getResume = async (id: string) => {
  try {
    const resumes = await db.resume.findUnique({
      include: {
        experiences: true,
        educations: true,
      },
      where: {
        id,
      },
    });

    return resumes;
  } catch (err) {
    return new Response("Erro");
  }
};

export const updateProfile = async (id: string, data: State) => {
  try {
    const resumes = await db.resume.updateMany({
      data: {
        ...data.profile,
      },
      where: {
        id,
      },
    });

    return resumes;
  } catch (err) {
    console.log(err);
    return new Response("Erro");
  }
};

export const createResume = async (data: any) => {
  try {
    const resume = await db.resume.create({
      data: {
        ...data,
      },
    });

    return resume;
  } catch (err) {
    console.log(err);
    return new Response("Erro");
  }
};
