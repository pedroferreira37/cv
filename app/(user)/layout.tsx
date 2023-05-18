import { PagePreLoader } from "@/components/page-pre-loader";
import { UserThumb } from "@/components/user-thumb";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { FiArchive, FiFileText, FiSettings } from "react-icons/fi";

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <PagePreLoader {...{ type: "page" }}>
      <div className="w-full bg-[#24292f] h-[60px] flex items-center fixed top-0">
        <div className="container mx-auto">
          <div className="w-full flex items-center justify-end">
            <UserThumb session={session} />
          </div>
        </div>
      </div>
      <div className="mt-[60px] flex container mx-auto  h-[calc(100vh_-_60px)] gap-8 pt-8">
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
            <Link
              href="/modelos"
              className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded transition"
            >
              {" "}
              <FiSettings size={20} />
              Configuracao
            </Link>
          </div>
        </div>
        <PagePreLoader>{children} </PagePreLoader>
      </div>
    </PagePreLoader>
  );
}
