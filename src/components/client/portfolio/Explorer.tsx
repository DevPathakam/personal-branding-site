"use client";
import {
  CategoryValues,
  Companies,
  Projects,
  ScrollbarClasses,
} from "@/constants/portfolio";
import { ExplorerAccordian } from "./ExplorerAccordian";
import { FakeFile } from "@/types/portfolio";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePortfolioStore } from "@/stores/portfolioStore";

type AccordianItem = {
  header: string;
  descendants: FakeFile[];
};
export const Explorer = () => {
  const getSkillDescendants = () => {
    const skillCategories = CategoryValues.map((category) =>
      category.toLowerCase(),
    );
    const list: FakeFile[] = [
      {
        href: `/portfolio/skills/`,
        fileName: "all",
        type: "JSON",
        isActive: false,
        belongsTo: "skills",
      },
      ...skillCategories.map(
        (category) =>
          ({
            href: `/portfolio/skills/${category}`,
            fileName: category,
            type: "JSON",
            belongsTo: "skills",
            isActive: false,
          }) as FakeFile,
      ),
    ];

    return list;
  };

  const getProjectDescendants = () => {
    const list: FakeFile[] = [
      {
        href: `/portfolio/projects/`,
        fileName: "all",
        type: "Markdown",
        belongsTo: "projects",
        isActive: false,
      },
      ...Projects.map(
        (project) =>
          ({
            href: `/portfolio/projects/${project.alias}`,
            fileName: project.alias,
            type: "Markdown",
            belongsTo: "projects",
            isActive: false,
          }) as FakeFile,
      ),
    ];

    return list;
  };

  const accordianItems: AccordianItem[] = [
    { header: "skills", descendants: getSkillDescendants() },
    { header: "projects", descendants: getProjectDescendants() },
  ];

  const showSidebar = usePortfolioStore((state) => state.showLeftSidebar);
  return (
    showSidebar && (
      <nav className="font-jetbrains-mono w-65 h-full bg-brand-primary-deep-dark flex justify-between flex-col border-r border-r-brand-border select-none absolute md:relative z-20 top-0 left-0">
        <div className={`mb-3 overflow-auto ${ScrollbarClasses}`}>
          <div className="p-2 text-xs uppercase tracking-wider opacity-60">
            Explorer
          </div>
          <div className="flex-1 px-2 text-sm">
            <>
              {accordianItems.map((item, idx) => (
                <ExplorerAccordian
                  key={`explorer-accordian-item-${idx}`}
                  header={item.header}
                  descendants={item.descendants}
                />
              ))}

              <Link
                key={`explorer-descendant-page-hello-user`}
                href={"/portfolio"}
                className="hover:bg-brand-primary-highlight flex gap-2"
              >
                <Icon icon="devicon:react" className="text-sm mt-1" />
                <span className="text-sm">hello_user.tsx</span>
              </Link>
            </>
          </div>
        </div>

        <div className={`mb-3 overflow-auto ${ScrollbarClasses} `}>
          <div className="p-2 text-xs uppercase tracking-wider opacity-60">
            Timeline
          </div>
          <div className="flex-1 px-2 text-sm">
            {Companies.map((item, idx) => (
              <div
                key={`timeline-company-${idx}`}
                className="flex gap-4 mb-2 border-l-2 border-l-brand-border pl-2"
              >
                <Icon icon="glyphs-poly:circle" className="mt-1" />
                <div className="flex flex-col">
                  <span>{item.name.slice(0, 20)}</span>
                  <small>
                    [{item.workFrom.month} {item.workFrom.year} -{" "}
                    {item.isCurrent
                      ? "Present"
                      : `${item.workTo?.month} ${item.workTo?.year}`}
                    ]
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>
    )
  );
};
