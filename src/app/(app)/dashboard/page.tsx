import Link from "next/link";

import { DemoCTA } from "@/components/demo-cta";
import { KPIStatCard } from "@/components/kpi-stat-card";
import { LineChart } from "@/components/line-chart";
import { PageHeader } from "@/components/page-header";
import {
  dashboardStats,
  monthlyScores,
  pitchRecords,
  recentActivity,
} from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Overview"
        title="Sales pitch performance at a glance"
        description="Perfect Pitch brings recorded coaching sessions, score trends, and manager-ready feedback into one recruiter-friendly dashboard."
        action={{ href: "/sales-pitches/new", label: "New Pitch" }}
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <KPIStatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.5fr,0.85fr]">
        <LineChart data={monthlyScores} />

        <div className="surface-card rounded-2xl p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Recent Activity
          </p>
          <div className="mt-4 space-y-3">
            {recentActivity.map((activity) => (
              <div
                key={activity.label}
                className="surface-subtle rounded-2xl p-4"
              >
                <p className="font-semibold text-slate-900">{activity.label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {activity.detail}
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  {activity.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.2fr,0.8fr]">
        <div className="surface-card rounded-2xl p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Recent Pitches
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-950">
                Latest analyses in the demo library
              </h3>
            </div>
            <Link
              href="/sales-pitches"
              className="text-sm font-semibold text-[var(--color-accent)]"
            >
              View all
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {pitchRecords.slice(0, 4).map((pitch) => (
              <Link
                key={pitch.id}
                href={`/sales-pitches/${pitch.id}`}
                className="flex flex-col gap-3 rounded-2xl border border-[var(--color-line)] p-4 transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)]/30 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-semibold text-slate-950">{pitch.title}</p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    {pitch.category} · {pitch.date}
                  </p>
                </div>
                <div className="rounded-full bg-[var(--color-brand-soft)] px-3 py-1.5 text-sm font-semibold text-[var(--color-brand-strong)]">
                  Score {pitch.score}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <DemoCTA />
      </div>
    </div>
  );
}
