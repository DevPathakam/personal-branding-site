"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ScrollbarClasses } from "@/constants/portfolio";
import { usePortfolioStore } from "@/stores/portfolioStore";
import { Icon } from "@iconify/react";

export const Tabbar = () => {
  const activeTabClasses = "border-b border-b-brand-secondary bg-brand-primary";
  const inactiveTabClasses = "bg-brand-primary-dark";

  const router = useRouter();
  const openFiles = usePortfolioStore((state) => state.openFiles);
  const deactivateFile = usePortfolioStore((state) => state.removeActiveFile);
  const currentFile = usePortfolioStore((state) => state.currentFile);
  const activateFile = usePortfolioStore((state) => state.addActiveFile);

  useEffect(() => {
    // Navigate to the current file's href when it changes, or to the portfolio root when none active
    if (currentFile) {
      router.push(currentFile.href);
    } else {
      router.push("/portfolio");
    }
  }, [currentFile, router]);

  return (
    openFiles.length > 0 && (
      <div
        className={`h-9 w-full bg-brand-primary-dark flex items-center overflow-x-auto border-b border-brand-primary-dark shadow-2xl ${ScrollbarClasses}`}
      >
        {openFiles.map((file, idx) => (
          <div
            key={`open-tab-${idx}`}
            onClick={() => activateFile(file)}
            className={`px-4 h-full flex items-center text-sm border-r border-r-brand-primary-deep-dark ${file.isActive ? activeTabClasses : inactiveTabClasses} hover:cursor-pointer`}
          >
            <span>
              {file.fileName}.{file.type === "JSON" ? "json" : "md"}
            </span>
            <Icon
              icon={"akar-icons:cross"}
              className="mx-1 mt-0.5 opacity-50 text-[12px] font-bold hover:cursor-pointer hover:scale-135 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                deactivateFile(file.fileName, file.belongsTo);
              }}
            />
          </div>
        ))}
      </div>
    )
  );
};
