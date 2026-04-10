export function ScoreCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  const tone =
    value >= 90
      ? "text-emerald-600"
      : value >= 84
        ? "text-[var(--color-accent)]"
        : "text-[var(--color-brand-strong)]";

  return (
    <div className="rounded-3xl border border-[var(--color-line)] bg-white p-5">
      <p className="text-sm font-medium text-[var(--color-text-muted)]">{label}</p>
      <div className="mt-4 flex items-end justify-between">
        <p className={`text-3xl font-semibold ${tone}`}>{value}</p>
        <div className="h-2.5 w-20 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)]"
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    </div>
  );
}
