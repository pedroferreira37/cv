import { getCurrentUser } from "@/actions/getCurrentUser";
import { User } from "@prisma/client";
import { Avatar } from "@/components/Avatar";
import Link from "next/link";
import { FiArchive, FiFileText } from "react-icons/fi";

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  return (
    <div className="w-full h-full">
      <header className="w-full h-[60px] bg-dark-blue">
        <nav className="flex justify-between items-center px-4 h-full">
          <div className="w-full flex items-center justify-end z-1000">
            <Avatar user={user as User} />
          </div>
        </nav>
      </header>
      <div className="pt-8 flex container mx-auto  h-[calc(100vh_-_65px)] gap-8">
        <div className="w-1/4">
          <div className="flex flex-col  text-sm">
            <Link
              href="/user"
              className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded transition"
            >
              <FiFileText size={20} />
              Meus Curriculos
            </Link>
            <Link
              href="/user/modelos"
              className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded transition"
            >
              <FiArchive size={20} />
              Modelos
            </Link>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
