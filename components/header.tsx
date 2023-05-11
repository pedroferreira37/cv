import React from "react";
import { Logo } from "./logo";
import Link from "next/link";
import { Container } from "./container";

export const Header = () => {
  return (
    <div className="w-full bg-[#24292f] h-[60px] flex items-center fixed top-0">
      <Container>
        <div className="w-full flex items-center justify-between">
          <Logo />
          <Link href="/login" className="text-white text-[14px]">
            Login
          </Link>
        </div>
      </Container>
    </div>
  );
};
