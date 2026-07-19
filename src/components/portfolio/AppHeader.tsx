import { ToggleSidebar } from "@/components/client/portfolio/ToggleSidebar";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { MobileNav } from "@/components/client/MobileNav";

export const AppHeader = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
  ];

  return (
    <header className="relative w-full bg-brand-primary-deep-dark top-0 flex justify-between items-center text-[12px] z-55">
      {/* Mobile Hamburger & Desktop Links Container */}
      <div className="flex items-center gap-1 px-4">
        {/* Mobile Hamburger Menu (Client component) */}
        <MobileNav navLinks={navLinks} />

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-1">
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
      </div>

      <div className="hidden md:flex border p-1 my-1 border-brand-border rounded-2xl gap-1 min-w-sm justify-center">
        <Icon icon={"iconamoon:search"} className="text-[16px]" />
        <span>amanpathak.devwork</span>
      </div>

      <div className="px-4 my-1 flex items-center gap-2">
        <ToggleSidebar />
      </div>
    </header>
  );
};
