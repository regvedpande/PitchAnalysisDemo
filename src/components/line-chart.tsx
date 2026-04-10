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
    <div className="rounded-3xl border border-white/80 bg-white p-5 shadow-[var(--shadow-soft)]">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Score Trend
          </p>
          <h3 className="mt-2 text-xl font-semibold text-slate-950">
            Monthly pitch quality is trending upward
          </h3>
        </div>
        <div className="rounded-full bg-[var(--color-brand-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-brand-strong)]">
          +18 points YoY
        </div>
      </div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-72 w-full"
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
        <polyline fill="none" stroke="#f97316" strokeWidth="4" points={points} />
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
              <circle cx={x} cy={y} r="5" fill="#0f4c81" />
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
