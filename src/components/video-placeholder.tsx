export function VideoPlaceholder({
  label,
  duration,
}: {
  label: string;
  duration: string;
}) {
  return (
    <div className="surface-card relative overflow-hidden rounded-2xl p-5 text-slate-900">
      <div className="absolute right-5 top-5 rounded-full bg-[var(--color-surface-muted)] px-3 py-1 text-[11px] font-semibold text-[var(--color-accent)]">
        Video Player
      </div>
      <div className="flex min-h-[260px] flex-col justify-between">
        <div className="surface-subtle flex h-14 w-14 items-center justify-center rounded-2xl text-xl text-[var(--color-accent)]">
          ▶
        </div>
        <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
          Recording Preview
        </p>
        <h3 className="mt-2 text-xl font-semibold">{label}</h3>
        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
          Video playback is simulated in this demo. In production, advisors can watch the full recording with AI-marked coaching points.
        </p>
        <div className="mt-6 flex items-center justify-between rounded-xl border border-[var(--color-line)] bg-[var(--color-surface-muted)] px-4 py-3 text-sm text-slate-600">
          <span>{duration}</span>
          <span>Analysis available</span>
        </div>
      </div>
    </div>
  );
}
