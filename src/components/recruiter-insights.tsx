import { PitchRecord } from "@/types";

function toPercent(value: number) {
  return `${Math.round(value)}%`;
}

export function RecruiterInsights({ pitches }: { pitches: PitchRecord[] }) {
  const totalPitches = pitches.length;
  const completedPitches = pitches.filter((pitch) => pitch.status === "completed");
  const completedCount = completedPitches.length;
  const completionRate =
    totalPitches > 0 ? (completedCount / totalPitches) * 100 : 0;

  const averageScore =
    completedCount > 0
      ? completedPitches.reduce((sum, pitch) => sum + pitch.score, 0) /
        completedCount
      : 0;

  const categoryScores = Array.from(
    pitches.reduce((map, pitch) => {
      const bucket = map.get(pitch.category) ?? { total: 0, count: 0 };
      bucket.total += pitch.score;
      bucket.count += 1;
      map.set(pitch.category, bucket);
      return map;
    }, new Map<string, { total: number; count: number }>())
  )
    .map(([category, stats]) => ({
      category,
      avgScore: stats.total / Math.max(stats.count, 1),
    }))
    .sort((a, b) => b.avgScore - a.avgScore);

  const bestCategory = categoryScores[0];
  const scoreRange = {
    min: Math.min(...categoryScores.map((item) => item.avgScore), 0),
    max: Math.max(...categoryScores.map((item) => item.avgScore), 100),
  };
  const denominator = Math.max(scoreRange.max - scoreRange.min, 1);

  const presenterStats = Array.from(
    completedPitches.reduce((map, pitch) => {
      const bucket = map.get(pitch.presenter) ?? { total: 0, count: 0 };
      bucket.total += pitch.score;
      bucket.count += 1;
      map.set(pitch.presenter, bucket);
      return map;
    }, new Map<string, { total: number; count: number }>())
  ).map(([presenter, stats]) => ({
    presenter,
    average: stats.total / Math.max(stats.count, 1),
  }));

  const topPerformer = presenterStats.sort((a, b) => b.average - a.average)[0];

  return (
    <div className="grid gap-6 xl:grid-cols-[1.2fr,0.8fr]">
      <div className="surface-card rounded-2xl p-6">
        <div className="flex items-center justify-between gap-3 border-b border-[var(--color-line)] pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
              Recruiter Appeal
            </p>
            <h3 className="mt-2 text-lg font-bold text-slate-950">
              Category score distribution
            </h3>
          </div>
          <span className="badge badge-accent">Portfolio fit analytics</span>
        </div>

        <div className="mt-6 space-y-4">
          {categoryScores.map((item) => {
            const widthPercent =
              ((item.avgScore - scoreRange.min) / denominator) * 100;
            return (
              <div key={item.category} className="space-y-1.5">
                <div className="flex items-center justify-between text-sm">
                  <p className="font-medium text-slate-700">{item.category}</p>
                  <p className="font-semibold text-slate-950">
                    {item.avgScore.toFixed(1)}
                  </p>
                </div>
                <div className="h-2.5 rounded-full bg-slate-100">
                  <div
                    className="h-2.5 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-brand)]"
                    style={{ width: `${Math.max(widthPercent, 8)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="surface-card rounded-2xl p-6">
        <div className="border-b border-[var(--color-line)] pb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
            Talent Snapshot
          </p>
          <h3 className="mt-2 text-lg font-bold text-slate-950">
            Recruiter-ready statistics
          </h3>
        </div>

        <div className="mt-6 space-y-4 text-sm">
          <div className="surface-subtle rounded-xl p-4">
            <p className="text-[var(--color-text-muted)]">Completed analyses</p>
            <p className="mt-1 text-2xl font-bold text-slate-950">
              {completedCount}/{totalPitches}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-accent)]">
              {toPercent(completionRate)} completion rate
            </p>
          </div>

          <div className="surface-subtle rounded-xl p-4">
            <p className="text-[var(--color-text-muted)]">Average completed score</p>
            <p className="mt-1 text-2xl font-bold text-slate-950">
              {averageScore.toFixed(1)}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-accent)]">
              Benchmarked for recruiter screening
            </p>
          </div>

          <div className="surface-subtle rounded-xl p-4">
            <p className="text-[var(--color-text-muted)]">Top performer</p>
            <p className="mt-1 text-base font-bold text-slate-950">
              {topPerformer?.presenter ?? "TBD"}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-accent)]">
              {topPerformer ? `${topPerformer.average.toFixed(1)} avg score` : "No completed recordings yet"}
            </p>
          </div>

          <div className="surface-subtle rounded-xl p-4">
            <p className="text-[var(--color-text-muted)]">Highest-scoring category</p>
            <p className="mt-1 text-base font-bold text-slate-950">
              {bestCategory?.category ?? "No category data"}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-accent)]">
              {bestCategory ? `${bestCategory.avgScore.toFixed(1)} average` : "Awaiting more analyses"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
