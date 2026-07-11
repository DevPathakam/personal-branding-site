import { Icon } from "@iconify/react";
import Link from "next/link";

export interface SocialLinkProps {
  href: string;
  icon?: string;
  text?: string;
}
export const SocialLink = ({ href, icon, text }: SocialLinkProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="border border-brand-border rounded-sm p-2 hover:border-brand-secondary hover:scale-105 hover:text-amber-50"
    >
      <div className="flex gap-2">
        {icon && (
          <span className="pt-1">
            <Icon icon={icon} />
          </span>
        )}
        <span>{text ?? href}</span>
      </div>
    </Link>
  );
};
