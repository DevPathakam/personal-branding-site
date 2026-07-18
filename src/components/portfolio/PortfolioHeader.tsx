import { ToggleSidebar } from "@/components/client/portfolio/ToggleSidebar";
import { Icon } from "@iconify/react";
import Link from "next/link";

export const PortFolioHeader = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    //{ href: "/", label: "Maujiyat" },
  ];
  return (
    <header className="w-full bg-brand-primary-deep-dark top-0 flex justify-between text-[12px]">
      <div className="flex gap-1 px-4">
        {navLinks.map((nav, idx) => (
          <Link
            key={`navlink-${idx}`}
            href={nav.href}
            className="hover:bg-brand-primary-highlight p-2"
          >
            {nav.label}
          </Link>
        ))}
      </div>
      <div className="hidden md:flex border p-1 my-1 border-brand-border rounded-2xl gap-1 min-w-sm justify-center">
        <Icon icon={"iconamoon:search"} className="text-[16px]" />
        <span>amanpathak.devwork</span>
      </div>
      <div className="px-4 my-1">
        <ToggleSidebar />
      </div>
    </header>
  );
};
