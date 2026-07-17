"use client";

import { usePortfolioStore } from "@/stores/portfolioStore";
import { FakeFile } from "@/types/portfolio";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { ReactNode, useState } from "react";

interface ExplorerAccordianProps {
  header: ReactNode | string;
  descendants: FakeFile[];
}
export const ExplorerAccordian = ({
  header,
  descendants,
}: ExplorerAccordianProps) => {
  const [showDescendants, setShowDescendants] = useState(true);

  const activateFile =  usePortfolioStore((state) => state.addActiveFile)

  return (
    <div>
      <button
        className="hover:bg-brand-primary-highlight hover:cursor-pointer w-full text-start"
        onClick={() => setShowDescendants((prev) => !prev)}
      >
        {showDescendants ? "📂" : "📁"} {header}
      </button>
      {showDescendants && (
        <div className="flex flex-col pl-4">
          {descendants.map((descendant, idx) => (
            <Link
              key={`explorer-descendant-page-${idx}`}
              href={descendant.href}
              className="hover:bg-brand-primary-highlight flex gap-2"
              onClick={() => activateFile(descendant)}
            >
              <Icon
                icon={
                  descendant.type === "JSON"
                    ? "material-icon-theme:json"
                    : "material-icon-theme:markdown"
                }
                className="text-xl"
              />
              <span className="text-sm">
                {descendant.fileName}
                {descendant.type === "JSON" ? ".json" : ".md"}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
