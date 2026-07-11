import { Icon } from "@iconify/react";
import Link from "next/link";
import { ViewResumeButton } from "../client/portfolio/ViewResumeButton";

export const PortfolioFooter = () => {
  return (
    <footer className="w-full absolute bottom-0 text-gray-400 px-1 bg-brand-primary-deep-dark text-[12px] border-t border-brand-border flex gap-3 justify-between">
      {/* Left side */}
      <div className="flex gap-1">
        <Link
          href={"https://github.com/DevPathakam/personal-branding-site/tree/main"}
          target="_blank"
          className="flex gap-1 hover:bg-brand-primary-highlight hover:cursor-pointer p-1"
        >
          <Icon icon="fluent:branch-16-regular" className="text-[18px]" />
          <span>main*</span>
        </Link>

        <ViewResumeButton />
      </div>

      {/* Right side */}
      <div className="flex gap-3">
        <div className="flex gap-1 p-1">
          <Icon icon="material-symbols:mail" className="text-[18px]" />
          <span>amanpathak.devwork@gmail.com</span>
        </div>

        <div className="flex gap-1 p-1">
          <Icon icon="codicon:json" className="text-[18px]" />
          <span>Markdown</span>
        </div>

        <Link
          href={"https://nextjs.org/"}
          target="_blank"
          className="flex gap-1 hover:bg-brand-primary-highlight hover:cursor-pointer p-1"
        >
          <Icon icon="lineicons:nextjs" className="text-[18px]" />
          <span>Powered by Next.js</span>
        </Link>
      </div>
    </footer>
  );
};
