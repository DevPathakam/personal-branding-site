import type { PageName } from "@/types/app.types";

export function getPageNameFromPath(pathname: string): PageName {
  const normalized = pathname.replace(/\/+$/, "");

  if (normalized === "" || normalized === "/") {
    return "home";
  }

  if (normalized.startsWith("/about")) {
    return "about";
  }

  if (normalized.startsWith("/portfolio")) {
    return "portfolio";
  }

  return "home";
}
