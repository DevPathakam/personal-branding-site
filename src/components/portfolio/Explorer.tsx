import {
  CategoryValues,
  Companies,
  Projects,
  ScrollbarClasses,
} from "@/constants/portfolio";
import { ExplorerAccordian } from "../client/portfolio/ExplorerAccordian";
import { ExplorerDecendent } from "@/types/portfolio";
import { Icon } from "@iconify/react";
import Link from "next/link";

type AccordianItem = {
  header: string;
  descendants: ExplorerDecendent[];
};
export const Explorer = () => {
  const getSkillDescendants = () => {
    const skillCategories = CategoryValues.map((category) =>
      category.toLowerCase(),
    );
    const list: ExplorerDecendent[] = [
      {
        href: `/portfolio/skills/`,
        pageName: "all",
        type: "JSON",
      },
      ...skillCategories.map(
        (category) =>
          ({
            href: `/portfolio/skills/${category}`,
            pageName: category,
            type: "JSON",
          }) as ExplorerDecendent,
      ),
    ];

    return list;
  };

  const getProjectDescendants = () => {
    const list: ExplorerDecendent[] = [
      {
        href: `/portfolio/projects/`,
        pageName: "all",
        type: "Markdown",
      },
      ...Projects.map(
        (project) =>
          ({
            href: `/portfolio/projects/${project.alias}`,
            pageName: project.alias,
            type: "Markdown",
          }) as ExplorerDecendent,
      ),
    ];

    return list;
  };

  const accordianItems: AccordianItem[] = [
    { header: "skills", descendants: getSkillDescendants() },
    { header: "projects", descendants: getProjectDescendants() },
  ];
  return (
    <nav className="font-jetbrains-mono w-65 h-full bg-brand-primary-deep-dark flex justify-between flex-col border-r border-r-brand-border select-none">
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
  );
};
