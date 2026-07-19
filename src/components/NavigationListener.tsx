"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAppStore } from "@/stores/appStore";
import { getPageNameFromPath } from "@/utils/getPageNameFromPath";

export function NavigationListener() {
  const pathname = usePathname();
  const updateCurrentPage = useAppStore((state) => state.updateCurrentPage);

  useEffect(() => {
    if (!pathname) return;
    const pageName = getPageNameFromPath(pathname);
    updateCurrentPage(pageName);
  }, [pathname, updateCurrentPage]);

  return null;
}
