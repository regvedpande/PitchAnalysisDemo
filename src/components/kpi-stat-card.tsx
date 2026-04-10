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
    <div className="rounded-3xl border border-white/80 bg-white p-5 shadow-[var(--shadow-soft)]">
      <div
        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${toneStyles[tone]}`}
      >
        {label}
      </div>
      <p className="mt-5 text-3xl font-semibold tracking-tight text-slate-950">
        {value}
      </p>
      <p className="mt-2 text-sm text-[var(--color-text-muted)]">{change}</p>
    </div>
  );
}
