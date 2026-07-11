interface SectionHeaderProps {
  text: string;
}

export const SectionHeader = ({ text }: SectionHeaderProps) => (
  <div>
    <h3 className="text-5xl py-3 font-bold">{text}</h3>
    <hr className="border-dashed border-2 mb-2" />
  </div>
);
