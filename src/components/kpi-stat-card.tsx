const toneStyles = {
  orange:
    "bg-gradient-to-br from-[var(--color-brand-soft)] to-[#fff9f5] text-[var(--color-brand-strong)]",
  blue: "bg-gradient-to-br from-[var(--color-accent-soft)] to-[#f5f9ff] text-[var(--color-accent)]",
  slate: "bg-gradient-to-br from-slate-100 to-slate-50 text-slate-700",
};

export function KPIStatCard({
  label,
  value,
  change,
  tone,
}: {
  label: string;
  value: string;
  change: string;
  tone: keyof typeof toneStyles;
}) {
  return (
    <div className="surface-card rounded-2xl p-6">
      <div
        className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${toneStyles[tone]}`}
      >
        {label}
      </div>
      <p className="mt-6 text-3xl font-bold tracking-tight text-slate-950">
        {value}
      </p>
      <p className="mt-2 text-sm font-medium text-[var(--color-text-muted)]">
        {change}
      </p>
    </div>
  );
}
