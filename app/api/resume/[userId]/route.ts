import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import {
  createResume,
  getResume,
  getResumes,
  updateResume,
} from "@/model/model";

type Context = { params: { id: string } };

export async function GET(req: Request, context: Context) {
  const { id } = context.params;
  const resumes = await getResume(id);
  return new Response(JSON.stringify(resumes));
}

export async function PUT(req: Request, context: Context) {
  const body = await req.json();

  const { id } = context.params;

  try {
    const resume = await updateResume(id, body);

    return new Response(JSON.stringify({ status: "ok", resume }));
  } catch (err) {
    throw new Error("Error");
  }
}
