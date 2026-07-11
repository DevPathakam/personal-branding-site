import { Companies, Skills } from "@/constants/portfolio";
import { Line, LineOptions } from "@/types/dummyEditor";

export function getTechStack(stackSkills: string[]) {
  return Skills.filter(
    (skill) => skill.visible && stackSkills.includes(skill.alias.toLowerCase()),
  );
}

export function findCompanyByAlias(companyAlias: string) {
  return Companies.find((company) => company.alias === companyAlias);
}

export function createRenderLines<T>(items: T[], schema?: unknown[], lineOptions?: LineOptions) {
  const { indent, ignoreOpeningBracket } = lineOptions ?? { ignoreOpeningBracket: false };
  const lines: Line[] = [];

  if (!ignoreOpeningBracket) {
    lines.push({
      indent: indent ?? 0,
      segments: [{ text: "[", type: 'bracket', }]
    });
  }

  items.forEach((item) => {
    if (typeof item === "object") {
      lines.push({
        indent: indent ? indent + 1 : 1,
        segments: [{ text: "{", type: 'brace', }]
      });

      for (const [key, value] of Object.entries(
        item as Record<string, unknown>,
      )) {
        if (schema && !(schema as string[]).includes(key)) {
          continue;
        }

        if (Array.isArray(value) && value.length > 1) {
          lines.push({
            indent: indent ? indent + 2 : 2,
            segments: [
              { text: key, type: 'key' },
              { text: "[", type: 'bracket' }
            ]
          });

          lines.push(...createRenderLines(value, undefined, { indent: 3, ignoreOpeningBracket: true }));
        } else {
          lines.push({
            indent: indent ? indent + 2 : 2,
            segments: [{ text: key, type: "key" }, { text: String(value), type: "value" }]
          });
        }

      }
      lines.push({
        indent: indent ? indent + 1 : 1,
        segments: [{ text: "}", type: "brace" }]
      });
    } else {
      lines.push({
        indent: indent ? indent + 1 : 1,
        segments: [{ text: String(item), type: 'value' }]
      });
    }
  });

  lines.push({
    indent: indent ? indent - 1 : 0,
    segments: [{ text: "]", type: 'bracket' }]
  });

  return lines;
}
