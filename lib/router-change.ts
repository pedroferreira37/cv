import { usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export function useRouterChange(time?: number) {
  const [loading, setPageLoading] = useState<boolean>(false);

  const pathname = usePathname();

  const params = useSearchParams();

  const paramsKeys = params?.keys().next().value;

  useEffect(() => {
    if (!paramsKeys) {
      setPageLoading(true);

      setTimeout(() => {
        setPageLoading(false);
      }, time || 500);
    }
  }, [pathname]);

  return [loading];
}
