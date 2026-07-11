import { LineSegment } from "@/types/dummyEditor";
import { createRenderLines } from "@/utils/portfolio";

interface DummyEditorProps<T> {
  data: T[];
  schema?: unknown[];
}
export function DummyEditor<T>({ data, schema }: DummyEditorProps<T>) {
  const lines = createRenderLines(data, schema);

  const getCodeClasses = (segment: LineSegment) => {
    let classes = "";
    if (segment.type === "bracket") classes += "text-brand-secondary ";
    if (segment.type === "brace") classes += "text-pink-500 ";
    if (segment.type === "key") classes += "text-amber-300 ";
    if (segment.type === "value") classes += "text-amber-50 ";
    return classes;
  };

  const renderSegmentText = (segment: LineSegment) => {
    if (segment.type === "key") return `"${segment.text}": `;
    if (segment.type === "value") return `"${segment.text}",`;
    return segment.text;
  };

  return (
    <div className="flex font-jetbrains-mono text-sm">
      <div>
        {lines.map((ln, idx) => (
          <div
            key={`code-line-number${idx + 1}`}
            className="bg-[#163042] px-6 select-none h-fit text-right w-18"
          >
            <span>{idx + 1}</span>
          </div>
        ))}
      </div>

      <div>
        {lines.map((ln, lnIdx) => (
          <div
            key={`code-line-${lnIdx}`}
            style={{
              paddingLeft: `${ln.indent * 24}px`,
            }}
          >
            {ln.segments.map((segment, segmentIdx) => (
              <span
                className={getCodeClasses(segment)}
                key={`code-segment-${segmentIdx}`}
              >
                {renderSegmentText(segment)}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
