"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState, usePara } from "react";

export function usePreLoader(time = 10) {
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [nestedLoading, setNestedLoading] = useState<boolean>(false);

  const pathname = usePathname();

  const params = useSearchParams();

  const paramsKeys = params?.keys().next().value;

  setTimeout(() => {
    setPageLoading(false);
  }, time);

  useEffect(() => {
    if (!paramsKeys) {
      setNestedLoading(true);

      setTimeout(() => {
        setNestedLoading(false);
      }, time);
    }
  }, [pathname]);

  return { pageLoading, nestedLoading };
}
