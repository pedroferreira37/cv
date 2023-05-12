"use client";
import React, { useState, useEffect, useRef } from "react";
import { SpinLoader } from "./spin-loader";
import { usePathname } from "next/navigation";

function usePreviousRoute<T>(path: T) {
  const ref = useRef<T>(path);

  useEffect(() => {
    ref.current = path;
  }, []);

  return ref.current;
}

export function PageLoader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const previousRoute = usePreviousRoute<string | null>(pathname);

  const [pageLoading, setPageLoading] = useState<boolean>();

  useEffect(() => {
    if (!pathname?.includes(previousRoute || "")) {
      setPageLoading(true);
    }
  }, [pathname]);

  setTimeout(() => {
    setPageLoading(false);
  }, 500);

  if (pageLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <SpinLoader size={20} color="gray" />
      </div>
    );
  }

  return <div>{children}</div>;
}
