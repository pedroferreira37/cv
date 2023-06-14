import { LoginForm } from "@/components/LoginForm";
import { Header } from "@/components/Header";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="h-[calc(100vh_-_65px)] flex justify-center items-center ">
      <LoginForm />
    </div>
  );
}
