"use client";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { usePathname } from "next/navigation";

export const Header = () => {
  const isLoginPage = usePathname() === "/login";

  return (
    <header className="header">
      <nav className="nav">
        <Link href="/" className="text-white text-sm">
          Logo
        </Link>

        {!isLoginPage && (
          <Link
            href="/login"
            className="text-white text-sm flex items-center gap-1"
          >
            Login
            <FiLogIn size={20} />
          </Link>
        )}
      </nav>
    </header>
  );
};
