import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Avatar } from "@/components/avatar";
import Link from "next/link";
import { FiArchive, FiFileText, FiSettings } from "react-icons/fi";
import { Session } from "next-auth";

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-full h-full">
      <header className="h-[60px]">
        <nav className="p-4">
          <div className="w-full flex items-center justify-end">
            <Avatar session={session as Session} />
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
