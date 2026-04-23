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
    <div className="surface-card rounded-2xl p-6">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent)]">
            Score Trend
          </p>
          <h3 className="mt-2.5 text-lg font-bold text-slate-950">
            Monthly pitch quality is trending upward
          </h3>
        </div>
        <div className="hidden rounded-full bg-gradient-to-r from-[var(--color-brand-soft)] to-[#fff9f5] px-3.5 py-1.5 text-xs font-bold text-[var(--color-brand-strong)] sm:block shadow-sm">
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
            <stop offset="0%" stopColor="#f07c2b" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#f07c2b" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient id="scoreLine" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="#f07c2b" />
            <stop offset="100%" stopColor="#d96616" />
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
              stroke="#f0f4f8"
              strokeDasharray="6 8"
              strokeWidth="1"
            />
          );
        })}
        <polyline fill="none" stroke="url(#scoreLine)" strokeWidth="3.5" points={points} strokeLinecap="round" strokeLinejoin="round" />
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
              <circle cx={x} cy={y} r="5" fill="white" stroke="#f07c2b" strokeWidth="2.5" />
              <text
                x={x}
                y={height - 8}
                textAnchor="middle"
                fontSize="12"
                fontWeight="600"
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
