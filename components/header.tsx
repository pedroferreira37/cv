"use client";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { usePathname } from "next/navigation";

export const Header = () => {
  const isLoginPage = usePathname() === "/login";

  return (
    <header className="w-full h-[60px] bg-dark-blue  ">
      <nav className="flex justify-between items-center px-4 h-full">
        <Link
          href="/"
          className="text-dark text-sm text-white hover:text-gray-400 transition"
        >
          Logo
        </Link>

        {!isLoginPage && (
          <Link
            href="/login"
            className="text-white bg-dark py-2 px-6 border-none  rounded text-sm flex items-center gap-1 font-medium hover:text-gray-400 transition"
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};
