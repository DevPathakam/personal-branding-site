"use client";

import { usePortfolioStore } from "@/stores/portfolioStore";
import { Icon } from "@iconify/react";

export const ToggleSidebar = () => {
  const toggle = usePortfolioStore((state) => state.toggleLeftSidebar);
  return (
    <button
      className="bg-transparent hover:cursor-pointer hover:opacity-50"
      onClick={toggle}
    >
      <Icon icon={"ph:sidebar-simple-fill"} className="text-[23px]" />
    </button>
  );
};
