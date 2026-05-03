import Link from "next/link";

import { AuthPanel } from "@/components/auth-panel";

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-7xl gap-6 lg:grid-cols-[1.15fr,0.85fr]">
        <section className="surface-card flex flex-col justify-between rounded-2xl p-8 sm:p-10 shadow-[var(--shadow-sm)]">
          <div>
            <div className="inline-flex items-center gap-3 rounded-lg bg-[var(--color-brand-soft)] px-4 py-2 text-sm font-medium text-[var(--color-brand-strong)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-brand)]" />
              Professional Demo
            </div>
            <h1 className="mt-8 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Perfect Pitch: AI-Powered Sales Coaching Platform
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-text-muted)]">
              Explore how wealth management professionals perfect their client pitches with AI-driven coaching, real-time analysis, and actionable insights. Experience the complete platform from KPI dashboards to detailed transcript-level guidance in under 60 seconds.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/dashboard" className="btn btn-primary">
                Explore Dashboard
              </Link>
              <Link href="/sales-pitches" className="btn btn-secondary">
                Browse Demo Library
              </Link>
            </div>
          </div>

          <div className="grid gap-4 pt-8 sm:grid-cols-3">
            <div className="surface-subtle rounded-lg p-4">
              <p className="text-sm text-[var(--color-text-muted)]">Active Pitches</p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">128 Analyzed</p>
            </div>
            <div className="surface-subtle rounded-lg p-4">
              <p className="text-sm text-[var(--color-text-muted)]">Score Improvement</p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">+18 pts avg</p>
            </div>
            <div className="surface-subtle rounded-lg p-4">
              <p className="text-sm text-[var(--color-text-muted)]">AI Analysis Speed</p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">Under 1 min</p>
            </div>
          </div>
        </section>

        <AuthPanel />
      </div>
    </main>
  );
}
