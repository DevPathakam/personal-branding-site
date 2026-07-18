"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  navLinks: NavLink[];
}

export const MobileNav = ({ navLinks }: MobileNavProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="block md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="p-2 hover:bg-brand-primary-highlight rounded text-white hover:cursor-pointer flex items-center justify-center"
        aria-label="Open Menu"
      >
        <Icon icon="radix-icons:hamburger-menu" className="text-[20px]" />
      </button>

      {/* Mobile Nav Slider/Drawer Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 z-50 transition-opacity duration-300"
          />

          {/* Drawer Slider */}
          <div className="fixed top-0 left-0 bottom-0 w-64 bg-brand-primary-deep-dark border-r border-brand-border z-55 flex flex-col p-5 gap-4 shadow-2xl transition-transform duration-300">
            {/* Drawer Header */}
            <div className="flex justify-between items-center pb-4 border-b border-brand-border">
              <span className="text-gray-200 font-bold tracking-wider text-xl">
                Aman Pathak
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 hover:bg-brand-primary-highlight rounded hover:cursor-pointer flex items-center justify-center"
                aria-label="Close Menu"
              >
                <Icon
                  icon="radix-icons:cross-2"
                  className="text-lg text-white"
                />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-2 text-center">
              {navLinks.map((nav, idx) => (
                <Link
                  key={`mobile-navlink-${idx}`}
                  href={nav.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:bg-brand-primary-highlight p-3 rounded text-sm text-gray-200 hover:text-white flex items-center gap-3 font-medium transition-colors"
                >
                  <span className="flex self-center">{nav.label}</span>
                </Link>
              ))}
            </div>

            {/* Drawer Footer/Extra branding */}
            <div className="mt-auto pt-4 border-t border-brand-border text-center text-gray-500 text-[10px]">
              <span>amanpathak.devwork</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
