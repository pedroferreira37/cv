import Link from "next/link";
import { FiLogIn } from "react-icons/fi";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="w-full bg-[#24292f] h-[60px] flex items-center fixed top-0">
        <div className="container mx-auto">
          <div className="w-full flex items-center justify-between">
            <Link href="/" className="text-white text-sm">
              Logo
            </Link>

            <Link
              href="/signin"
              className="text-white text-sm flex items-center gap-1"
            >
              Login
              <FiLogIn size={20} />
            </Link>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
