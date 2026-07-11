"use client";

import { ExplorerDecendent } from "@/types/portfolio";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { ReactNode, useState } from "react";

interface ExplorerAccordianProps {
  header: ReactNode | string;
  descendants: ExplorerDecendent[];
}
export const ExplorerAccordian = ({
  header,
  descendants,
}: ExplorerAccordianProps) => {
  const [showDescendants, setShowDescendants] = useState(true);

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
                {descendant.pageName}
                {descendant.type === "JSON" ? ".json" : ".md"}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
