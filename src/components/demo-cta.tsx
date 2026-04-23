import Link from "next/link";

export function DemoCTA() {
  return (
    <div className="surface-card rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent)]">
            Platform Walkthrough
          </p>
          <h3 className="mt-3 text-2xl font-bold text-slate-950">
            Transform recorded pitches into coaching insights
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Explore the complete workflow: view real-time performance metrics, analyze individual pitch recordings, and start a new session. See how AI transforms sales conversations into actionable coaching guidance.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row flex-shrink-0">
          <Link
            href="/sales-pitches/new"
            className="btn btn-primary rounded-full"
          >
            Start Demo Pitch
          </Link>
          <Link
            href="/sales-pitches/pitch-101"
            className="btn btn-secondary rounded-full"
          >
            Open Best Analysis
          </Link>
        </div>
      </div>
    </div>
  );
}
