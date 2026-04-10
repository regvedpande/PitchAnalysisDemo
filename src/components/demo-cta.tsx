import Link from "next/link";

export function DemoCTA() {
  return (
    <div className="rounded-3xl border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
            Recruiter Demo Flow
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-950">
            See how Perfect Pitch turns a recorded talk track into guided
            coaching.
          </h3>
          <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
            Browse the dashboard, inspect a completed analysis, or start a mock
            new pitch. Every screen uses local demo data and deploys safely to
            Vercel without backend setup.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/sales-pitches/new"
            className="rounded-full bg-[var(--color-brand)] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[var(--color-brand-strong)]"
          >
            Start Demo Pitch
          </Link>
          <Link
            href="/sales-pitches/pitch-101"
            className="rounded-full border border-[var(--color-line)] px-5 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Open Best Analysis
          </Link>
        </div>
      </div>
    </div>
  );
}
