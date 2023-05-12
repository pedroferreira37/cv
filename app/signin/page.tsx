import { UserAuthForm } from "@/components/user-auth-form";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div>
      <div className="w-full bg-[#24292f] h-[60px] flex items-center fixed top-0">
        <div className="container mx-auto">
          <div className="w-full flex items-center justify-between">
            <Link href="/" className="text-white text-sm">
              Logo
            </Link>
          </div>
        </div>
      </div>
      <UserAuthForm />
    </div>
  );
}
