"use client";
import { Resume } from "@/components/resume";
import { initialState, reducer } from "@/lib/reducer";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useReducer } from "react";
import { FiArrowLeft } from "react-icons/fi";

export function ResumeForm() {
  const search = useSearchParams();

  const template = search?.get("template");

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[600px_1fr]">
      <div className="bg-white sticky top-0 h-screen px-8 py-4">
        <div className="w-full flex justify-start">
          <Link className="p-2  bg-gray-200 rounded group" href="/user">
            <FiArrowLeft size={20} className="group-hover:animate-wiggle" />
          </Link>
        </div>
        <div>inputs</div>
        <div>o o o o</div>
      </div>
      <Resume {...{ type: "professional", name: "Pedro" }} />
    </div>
  );
}
