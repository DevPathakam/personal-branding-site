"use client";

import { usePortfolioStore } from "@/stores/portfolioStore";
import { Icon } from "@iconify/react";

export const FooterFileType = () => {
  const currentFile = usePortfolioStore((state) => state.currentFile);
  return (
    currentFile && (
      <>
        <Icon icon="codicon:json" className="text-[18px]" />
        <span>{currentFile.type}</span>
      </>
    )
  );
};
