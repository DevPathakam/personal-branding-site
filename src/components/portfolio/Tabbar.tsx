"use client";

import { ScrollbarClasses } from "@/constants/portfolio";
import { usePortfolioStore } from "@/stores/portfolioStore";
import { Icon } from "@iconify/react";

export const Tabbar = () => {
  const activeTabClasses = "border-b border-b-brand-secondary bg-brand-primary";
  const inactiveTabClasses = "bg-brand-primary-dark";

  const openFiles = usePortfolioStore((state) => state.openFiles);
  const deactivateFile = usePortfolioStore((state) => state.removeActiveFile);

  return (
    openFiles.length > 0 && (
      <div
        className={`h-9 w-full bg-brand-primary-dark flex items-center overflow-x-auto border-b border-brand-primary-dark shadow-2xl ${ScrollbarClasses}`}
      >
        {openFiles.map((file, idx) => (
          <div
            key={`open-tab-${idx}`}
            className={`px-4 h-full flex items-center text-sm border-r border-r-brand-primary-deep-dark ${file.isActive ? activeTabClasses : inactiveTabClasses}`}
          >
            <span>
              {file.fileName}.{file.type === "JSON" ? "json" : "md"}
            </span>
            <Icon
              icon={"akar-icons:cross"}
              className="mx-1 mt-0.5 opacity-50 text-[12px] font-bold hover:cursor-pointer"
              onClick={() => deactivateFile(file.fileName, file.belongsTo)}
            />
          </div>
        ))}
      </div>
    )
  );
};
