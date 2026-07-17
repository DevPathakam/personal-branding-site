import { DummyEditor } from "@/components/client/portfolio/DummyEditor";
import { Skills, SkillSchema } from "@/constants/portfolio";
import { Skill, SkillCategory } from "@/types/portfolio";

interface SkillByCategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function SkillByCategoryPage({
  params,
}: SkillByCategoryPageProps) {
  const { category } = await params;
  const skillsByCategory = Skills.filter((skill) =>
    skill.category.includes(category as SkillCategory),
  );

  return (
    <section about="skill_by_category">
      <DummyEditor<Skill>
        data={skillsByCategory}
        schema={SkillSchema as unknown as unknown[]}
      />
    </section>
  );
}
