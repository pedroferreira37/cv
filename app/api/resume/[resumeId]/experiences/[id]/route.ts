import { updateExperience } from "@/actions/actions";
import { Experience } from "@prisma/client";

type Context = { params: { resumeId: string, id: string}  } ;  

export const PUT = async (req: Request, context: Context) => {
    const body = await req.json();
    const { id } = context.params;
  
    const experience = await updateExperience(id, body as Experience);
  
    return new Response(JSON.stringify(experience));
  };
  