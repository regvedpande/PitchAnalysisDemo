const radius = 28;
const circumference = 2 * Math.PI * radius;

export function ScoreCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  const strokeColor =
    value >= 90
      ? "#10b981"
      : value >= 84
        ? "var(--color-accent)"
        : "var(--color-brand)";

  const textColor =
    value >= 90
      ? "text-emerald-600"
      : value >= 84
        ? "text-[var(--color-accent)]"
        : "text-[var(--color-brand-strong)]";

  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="surface-card group rounded-2xl p-5 transition-all hover:shadow-md">
      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
        {label}
      </p>
      <div className="mt-4 flex items-center justify-between gap-4">
        <p className={`text-3xl font-bold tracking-tight ${textColor}`}>
          {value}
          <span className="ml-0.5 text-base font-medium text-slate-400">/100</span>
        </p>
        <svg width="72" height="72" viewBox="0 0 72 72" className="-rotate-90">
          <circle
            cx="36"
            cy="36"
            r={radius}
            fill="none"
            stroke="#f1f5f9"
            strokeWidth="6"
          />
          <circle
            cx="36"
            cy="36"
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-700 ease-out"
          />
        </svg>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] transition-all duration-700"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
