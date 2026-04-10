import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(15,76,129,0.12),transparent_26%)]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl gap-8 lg:grid-cols-[1.2fr,0.8fr]">
        <section className="flex flex-col justify-between rounded-[36px] border border-white/70 bg-[linear-gradient(160deg,#0f4c81_0%,#173f68_52%,#f97316_180%)] p-8 text-white shadow-2xl sm:p-10">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-orange-300" />
              Recruiter-facing product demo
            </div>
            <h1 className="mt-8 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Perfect Pitch helps sales teams practice, review, and improve
              client-facing messaging.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50/88">
              Explore a polished mock platform for AI-assisted sales pitch
              coaching. Recruiters can follow the full journey from dashboard
              metrics to transcript-level guidance in under a minute.
            </p>
          </div>

          <div className="grid gap-4 pt-10 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/12 bg-white/10 p-4 backdrop-blur">
              <p className="text-sm text-blue-100/80">Analysis Coverage</p>
              <p className="mt-2 text-2xl font-semibold">128 pitches</p>
            </div>
            <div className="rounded-3xl border border-white/12 bg-white/10 p-4 backdrop-blur">
              <p className="text-sm text-blue-100/80">Average Score Lift</p>
              <p className="mt-2 text-2xl font-semibold">+18%</p>
            </div>
            <div className="rounded-3xl border border-white/12 bg-white/10 p-4 backdrop-blur">
              <p className="text-sm text-blue-100/80">Review Turnaround</p>
              <p className="mt-2 text-2xl font-semibold">Under 1 day</p>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-between gap-6 rounded-[36px] border border-white/80 bg-white/92 p-8 shadow-[var(--shadow-soft)] backdrop-blur sm:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              Enter The Demo
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Log in to the mock workspace
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
              This is a static product walkthrough. No real authentication,
              backend services, or uploads are required.
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Work email
              </label>
              <input
                type="email"
                defaultValue="recruiter@demo-preview.com"
                className="w-full rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface-muted)] px-4 py-3 outline-none transition focus:border-[var(--color-accent)]"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                type="password"
                defaultValue="perfect-pitch-demo"
                className="w-full rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface-muted)] px-4 py-3 outline-none transition focus:border-[var(--color-accent)]"
              />
            </div>
            <Link
              href="/dashboard"
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-brand)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-brand-strong)]"
            >
              Enter Demo
            </Link>
          </form>

          <div className="rounded-3xl bg-[var(--color-accent-soft)] p-5">
            <p className="text-sm font-semibold text-[var(--color-accent)]">
              Request a demo
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              In a production product this would route to sales. In this mock
              version it simply highlights the buyer story: AI review, transcript
              coaching, and manager feedback in one workspace.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
