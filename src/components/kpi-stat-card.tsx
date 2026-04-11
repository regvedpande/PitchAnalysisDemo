const toneStyles = {
  orange: "bg-[var(--color-brand-soft)] text-[var(--color-brand-strong)]",
  blue: "bg-[var(--color-accent-soft)] text-[var(--color-accent)]",
  slate: "bg-slate-100 text-slate-700",
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
    <div className="surface-card rounded-2xl p-4">
      <div
        className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${toneStyles[tone]}`}
      >
        {label}
      </div>
      <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
        {value}
      </p>
      <p className="mt-1.5 text-sm text-[var(--color-text-muted)]">{change}</p>
    </div>
  );
}
