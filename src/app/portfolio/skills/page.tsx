import { Skills, SkillSchema } from "@/constants/portfolio";
import { Skill } from "@/types/portfolio";

import { DummyEditor } from "@/components/client/portfolio/DummyEditor";

export default async function SkillsPage() {
  return (
    <section about="skills">
      <DummyEditor<Skill>
        data={Skills}
        schema={SkillSchema as unknown as unknown[]}
      />
    </section>
  );
}
