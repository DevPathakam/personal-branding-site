import { ScrollbarClasses } from "@/constants/portfolio";
import { Icon } from "@iconify/react";

export const Tabbar = () => {
  const openTabs = [
    {
      name: "page.tsx",
      isActive: false,
    },
    {
      name: "page.tsx",
      isActive: false,
    },
    {
      name: "page.tsx",
      isActive: true,
    },
    {
      name: "page.tsx",
      isActive: false,
    },
    {
      name: "page.tsx",
      isActive: false,
    },
    {
      name: "page.tsx",
      isActive: false,
    },
    {
      name: "page.tsx",
      isActive: false,
    },
    {
      name: "page.tsx",
      isActive: false,
    },
    {
      name: "page.tsx",
      isActive: false,
    },
    {
      name: "page.tsx",
      isActive: false,
    },
    {
      name: "page.tsx",
      isActive: false,
    },
    {
      name: "page.tsx",
      isActive: false,
    },
    {
      name: "page.tsx",
      isActive: false,
    },
    {
      name: "page.tsx",
      isActive: false,
    },
    {
      name: "page.tsx",
      isActive: false,
    },
  ];

  const activeTabClasses = "border-b border-b-brand-secondary bg-brand-primary";
  const inactiveTabClasses = "bg-brand-primary-dark";

  return (
    <div
      className={`h-9 w-full bg-brand-primary-dark flex items-center overflow-x-auto border-b border-brand-primary-dark shadow-2xl ${ScrollbarClasses}`}
    >
      {openTabs.map((tab, idx) => (
        <div
          key={`open-tab-${idx}`}
          className={`px-4 h-full flex items-center text-sm border-r border-r-brand-primary-deep-dark ${tab.isActive ? activeTabClasses : inactiveTabClasses}`}
        >
          <span>{tab.name}</span>
          <Icon icon={"akar-icons:cross"} className="mx-1 mt-1 opacity-50" />
        </div>
      ))}
    </div>
  );
};
