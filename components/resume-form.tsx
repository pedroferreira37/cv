"use client";
import { Resume } from "@/components/resume";
import { initialState, reducer } from "@/lib/reducer";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useReducer, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

export function ResumeForm() {
  const [step, setStep] = useState<number>(1);
  const search = useSearchParams();

  const template = search?.get("template");

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[600px_1fr]">
      <div className="bg-white sticky top-0 h-screen px-8 py-4">
        <div className="w-full h-full grid grid-rows-[40px_1fr_40px]">
          <div className="w-full flex justify-start">
            <Link className="p-2  bg-gray-200 rounded group" href="/user">
              <FiArrowLeft size={20} className="group-hover:animate-wiggle" />
            </Link>
          </div>
          <div className="w-full">
            <div className={step === 1 ? "opacity-100" : "opacity-0"}>1</div>
            <div className={step === 2 ? "opacity-100" : "opacity-0"}>2</div>
            <button onClick={() => setStep(step + 1)}>proximo</button>
          </div>
          <div className="flex justify-center">o o o o</div>
        </div>
      </div>
      <Resume {...{ type: "professional", name: "Pedro" }} />
    </div>
  );
}
