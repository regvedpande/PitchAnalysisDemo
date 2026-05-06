import Link from "next/link";

export function DemoCTA() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[var(--color-accent)]/20 bg-gradient-to-br from-[var(--color-accent-soft)] via-white to-[var(--color-brand-soft)] p-6 shadow-[var(--shadow-card)]">
      <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent blur-2xl" />

      <div className="relative flex flex-col gap-5">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-accent)]">
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Quick Start
          </div>
          <h3 className="mt-3 text-xl font-bold text-slate-950">
            Transform pitches into coaching insights
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            See real-time performance metrics, analyze pitch recordings, and discover how AI turns sales conversations into actionable guidance.
          </p>
        </div>

        <div className="grid gap-3 text-sm">
          {[
            { icon: "→", label: "View KPI dashboard & trends", href: "/dashboard" },
            { icon: "→", label: "Explore best pitch analysis", href: "/sales-pitches/pitch-101" },
            { icon: "→", label: "Try the new pitch workflow", href: "/sales-pitches/new" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2.5 rounded-xl border border-white/60 bg-white/70 px-4 py-2.5 font-semibold text-slate-700 backdrop-blur-sm transition hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)] hover:bg-white"
            >
              <span className="text-[var(--color-accent)]">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
