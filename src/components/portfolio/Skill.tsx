import { SkillCategory } from "@/types/portfolio";
import { Icon } from "@iconify/react";

export interface SkillProps {
  icon?: string;
  name: string;
  category: SkillCategory[];
  tags?: string[];
}
export const Skill = ({ icon, name, tags }: SkillProps) => {
  return (
    <div
      className="flex gap-2 border-2 border-dashed p-3 rounded-2xl"
      style={{ borderColor: "#ffc600" }}
    >
      {icon && (
        <span className="pt-1 text-2xl">
          <Icon icon={icon} />
        </span>
      )}
      <span className="text-2xl">{name}</span>
      {tags?.length &&
        tags.map((tag, idx) => (
          <span
            key={`skill-tag-${idx}`}
            className="border px-2 py-1 rounded-4xl"
          >
            {tag}
          </span>
        ))}
    </div>
  );
};
