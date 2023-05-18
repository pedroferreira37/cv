import { PagePreLoader } from "@/components/page-pre-loader";
import Link from "next/link";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PagePreLoader>
      <div className="relative">
        <div className="w-full bg-[#24292f] h-[60px] flex items-center fixed top-0">
          <div className="container mx-auto">
            <div className="w-full flex items-center justify-between">
              <Link href="/" className="text-white text-sm">
                Logo
              </Link>
            </div>
          </div>
        </div>
      </div>
      {children}
    </PagePreLoader>
  );
}
