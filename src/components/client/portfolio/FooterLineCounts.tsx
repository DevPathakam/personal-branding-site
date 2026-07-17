"use client";

import { usePortfolioStore } from "@/stores/portfolioStore";

export const FooterLineCounts = () => {
  const count = usePortfolioStore((state) => state.jsonFileLineCounts);
  return count && <span>Total Lines: {count}</span>;
};
