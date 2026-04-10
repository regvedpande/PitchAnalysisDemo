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

      <div className="grid gap-6 xl:grid-cols-[1.45fr,0.9fr]">
        <LineChart data={monthlyScores} />

        <div className="rounded-[28px] border border-white/80 bg-white p-6 shadow-[var(--shadow-soft)]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Recent Activity
          </p>
          <div className="mt-5 space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.label}
                className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface-muted)] p-4"
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

      <div className="grid gap-6 xl:grid-cols-[1.2fr,0.8fr]">
        <div className="rounded-[28px] border border-white/80 bg-white p-6 shadow-[var(--shadow-soft)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Recent Pitches
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-950">
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

          <div className="mt-6 space-y-4">
            {pitchRecords.slice(0, 4).map((pitch) => (
              <Link
                key={pitch.id}
                href={`/sales-pitches/${pitch.id}`}
                className="flex flex-col gap-3 rounded-3xl border border-[var(--color-line)] p-4 transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)]/30 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-semibold text-slate-950">{pitch.title}</p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    {pitch.category} · {pitch.date}
                  </p>
                </div>
                <div className="rounded-full bg-[var(--color-brand-soft)] px-4 py-2 text-sm font-semibold text-[var(--color-brand-strong)]">
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
