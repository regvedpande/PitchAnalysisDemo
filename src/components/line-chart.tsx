import { MonthlyScorePoint } from "@/types";

export function LineChart({ data }: { data: MonthlyScorePoint[] }) {
  const width = 760;
  const height = 280;
  const padding = 32;
  const scores = data.map((point) => point.score);
  const min = Math.min(...scores) - 4;
  const max = Math.max(...scores) + 4;

  const points = data
    .map((point, index) => {
      const x =
        padding + (index * (width - padding * 2)) / Math.max(data.length - 1, 1);
      const y =
        height -
        padding -
        ((point.score - min) / Math.max(max - min, 1)) * (height - padding * 2);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="surface-card rounded-2xl p-4">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Score Trend
          </p>
          <h3 className="mt-2 text-lg font-semibold text-slate-950">
            Monthly pitch quality is trending upward
          </h3>
        </div>
        <div className="hidden rounded-full bg-[var(--color-brand-soft)] px-3 py-1 text-[11px] font-semibold text-[var(--color-brand-strong)] sm:block">
          +18 points YoY
        </div>
      </div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-64 w-full"
        role="img"
        aria-label="Mock monthly pitch scores"
      >
        <defs>
          <linearGradient id="scoreFill" x1="0%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map((line) => {
          const y = padding + (line * (height - padding * 2)) / 3;
          return (
            <line
              key={line}
              x1={padding}
              x2={width - padding}
              y1={y}
              y2={y}
              stroke="#d9e2ef"
              strokeDasharray="6 8"
            />
          );
        })}
        <polyline fill="none" stroke="#f07c2b" strokeWidth="3" points={points} />
        <polygon
          fill="url(#scoreFill)"
          points={`${padding},${height - padding} ${points} ${width - padding},${height - padding}`}
        />
        {data.map((point, index) => {
          const x =
            padding +
            (index * (width - padding * 2)) / Math.max(data.length - 1, 1);
          const y =
            height -
            padding -
            ((point.score - min) / Math.max(max - min, 1)) *
              (height - padding * 2);
          return (
            <g key={point.month}>
              <circle cx={x} cy={y} r="4" fill="#1e4f86" />
              <text
                x={x}
                y={height - 10}
                textAnchor="middle"
                fontSize="12"
                fill="#64748b"
              >
                {point.month}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
