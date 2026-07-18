interface NpmPillProps {
  label: string;
  value: string;
  labelClasses?: string;
  valueClasses?: string;
}

export const NpmPill = ({
  label,
  value,
  labelClasses,
  valueClasses,
}: NpmPillProps) => (
  <small>
    <span className={`bg-brand-border p-1 rounded-l-lg ${labelClasses}`}>
      {label}
    </span>
    <span className={`p-1 font-bold rounded-r-lg ${valueClasses}`}>{value}</span>
  </small>
);
