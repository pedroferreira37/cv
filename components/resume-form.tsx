"use client";
import { Resume } from "@/components/resume";
import { initialState, reducer } from "@/lib/reducer";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useReducer, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

const ResumeRenderer = dynamic(
  () => import("./resume-renderer").then((module) => module.ResumeRenderer),
  { ssr: false }
);

export function ResumeForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [step, setStep] = useState<number>(1);

  const search = useSearchParams();

  const template = search?.get("template");

  return (
    <div className="flex flex-1 flex-col lg:flex-row h-screen w-full relative bg-gray-200">
      <div className="bg-red-200  flex-1 h-screen px-8 py-4">
        <div
          className="w-full h-full sticky top-0  grid grid-rows-[40px_1fr_40px]
         "
        >
          <div className="w-full flex justify-start sticky top-0">
            <Link className="p-2  bg-gray-200 rounded group" href="/user">
              <FiArrowLeft size={20} className="group-hover:animate-wiggle" />
            </Link>
          </div>
          <div className="w-full">
            <div className={step === 1 ? "opacity-100" : "opacity-0"}>1</div>
            <div className={step === 2 ? "opacity-100" : "opacity-0"}>2</div>
            <button onClick={() => setStep(step + 1)}>proximo</button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center bg-white thumb ">
        <div className="w-2/3 h-3/4">
          <ResumeRenderer props={{ type: "professional" }} />
        </div>
      </div>
    </div>
  );
}
