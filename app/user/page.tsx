import { UserThumb } from "@/components/user-thumb";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function User() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div>
      <div className="w-full bg-[#24292f] h-[60px] flex items-center fixed top-0">
        <div className="container mx-auto">
          <div className="w-full flex items-center justify-end">
            <UserThumb session={session} />
          </div>
        </div>
      </div>
    </div>
  );
}
