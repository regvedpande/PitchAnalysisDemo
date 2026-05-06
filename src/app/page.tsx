import Link from "next/link";

import { AuthPanel } from "@/components/auth-panel";

const features = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    label: "KPI Dashboards",
    description: "Real-time performance metrics and team leaderboards",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    label: "AI Coaching",
    description: "Transcript-level feedback with actionable improvements",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.82V15.18a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    label: "Pitch Recording",
    description: "Capture and analyze live or uploaded pitch sessions",
  },
];

const stats = [
  { label: "Pitches Analyzed", value: "128" },
  { label: "Score Improvement", value: "+18 pts" },
  { label: "Analysis Time", value: "<1 min" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-7xl gap-6 lg:grid-cols-[1.15fr,0.85fr]">
        <section className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[var(--shadow-card)] sm:p-10">
          {/* Decorative background gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-white to-[var(--color-accent-soft)]/40" />
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gradient-to-br from-[var(--color-brand-soft)] to-transparent opacity-60 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand)]/20 bg-[var(--color-brand-soft)] px-4 py-1.5 text-sm font-semibold text-[var(--color-brand-strong)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-brand)]" />
              AI-Powered Demo · Wealth Management
            </div>

            <h1 className="mt-7 max-w-2xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-[3.25rem]">
              Perfect Pitch
              <span className="mt-1 block bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-brand)] bg-clip-text text-transparent">
                Sales Coaching Platform
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Explore how wealth management professionals perfect their client pitches with AI-driven coaching, real-time score analysis, and transcript-level feedback — all in under 60 seconds.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-[var(--color-accent)] to-[#0d47a1] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Explore Dashboard
              </Link>
              <Link
                href="/sales-pitches"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                Browse Demo Library
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-5">
              {features.map((f) => (
                <div key={f.label} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{f.label}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-8 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-100 bg-slate-50/80 p-4 text-center"
              >
                <p className="text-2xl font-extrabold tracking-tight text-slate-950">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <AuthPanel />
      </div>
    </main>
  );
}
