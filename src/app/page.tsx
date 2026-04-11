import { AuthPanel } from "@/components/auth-panel";

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-7xl gap-6 lg:grid-cols-[1.15fr,0.85fr]">
        <section className="surface-card flex flex-col justify-between rounded-3xl p-8 sm:p-10">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-[var(--color-brand-soft)] px-4 py-2 text-sm font-medium text-[var(--color-brand-strong)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-brand)]" />
              Recruiter-facing product demo
            </div>
            <h1 className="mt-8 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Perfect Pitch helps sales teams practice, review, and improve
              client-facing messaging.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-text-muted)]">
              Explore a polished mock platform for AI-assisted sales pitch
              coaching. Recruiters can follow the full journey from dashboard
              metrics to transcript-level guidance in under a minute.
            </p>
          </div>

          <div className="grid gap-4 pt-8 sm:grid-cols-3">
            <div className="surface-subtle rounded-2xl p-4">
              <p className="text-sm text-[var(--color-text-muted)]">Analysis Coverage</p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">128 pitches</p>
            </div>
            <div className="surface-subtle rounded-2xl p-4">
              <p className="text-sm text-[var(--color-text-muted)]">Average Score Lift</p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">+18%</p>
            </div>
            <div className="surface-subtle rounded-2xl p-4">
              <p className="text-sm text-[var(--color-text-muted)]">Review Turnaround</p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">Under 1 day</p>
            </div>
          </div>
        </section>

        <AuthPanel />
      </div>
    </main>
  );
}
