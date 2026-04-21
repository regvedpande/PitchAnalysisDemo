import Link from "next/link";

export function DemoCTA() {
  return (
    <div className="surface-card rounded-2xl p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Platform Walkthrough
          </p>
          <h3 className="mt-2 text-xl font-semibold text-slate-950">
            Transform recorded pitches into coaching insights
          </h3>
          <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
            Explore the complete workflow: view real-time performance metrics, analyze individual pitch recordings, and start a new session. See how AI transforms sales conversations into actionable coaching guidance.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/sales-pitches/new"
            className="rounded-full bg-[var(--color-brand)] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[var(--color-brand-strong)]"
          >
            Start Demo Pitch
          </Link>
          <Link
            href="/sales-pitches/pitch-101"
            className="rounded-full border border-[var(--color-line)] px-4 py-2.5 text-center text-sm font-semibold text-slate-700 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Open Best Analysis
          </Link>
        </div>
      </div>
    </div>
  );
}
