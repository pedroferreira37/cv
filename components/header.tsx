"use client";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { usePathname } from "next/navigation";

export const Header = () => {
  const isLoginPage = usePathname() === "/login";

  return (
    <header className="w-full h-[60px]">
      <nav className="flex justify-between p-4">
        <Link href="/" className="text-dark text-sm">
          Logo
        </Link>

        {!isLoginPage && (
          <Link
            href="/login"
            className="text-white bg-dark py-2 px-6 border-none  rounded text-sm flex items-center gap-1 font-medium"
          >
            Login
            <FiLogIn size={20} />
          </Link>
        )}
      </nav>
    </header>
  );
};
