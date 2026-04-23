import Link from "next/link";

import { DemoCTA } from "@/components/demo-cta";
import { KPIStatCard } from "@/components/kpi-stat-card";
import { LineChart } from "@/components/line-chart";
import { OnboardingGuide } from "@/components/onboarding-guide";
import { PageHeader } from "@/components/page-header";
import {
  dashboardStats,
  monthlyScores,
  pitchRecords,
  recentActivity,
} from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="section-container">
      <OnboardingGuide />

      <PageHeader
        eyebrow="Dashboard"
        title="Sales Performance Hub"
        description="Track team performance trends, review AI-generated insights, and monitor coaching progress across all recorded pitch sessions."
        action={{ href: "/sales-pitches/new", label: "Record New Pitch" }}
      />

      <div className="card-grid-4">
        {dashboardStats.map((stat) => (
          <KPIStatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.5fr,0.85fr]">
        <LineChart data={monthlyScores} />

        <div className="surface-card rounded-2xl p-6">
          <div className="flex items-center justify-between gap-4 pb-4 border-b border-[var(--color-line)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                Recent Activity
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-950">
                Latest Events
              </h3>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.label}
                className="surface-subtle rounded-xl p-4 hover:shadow-sm"
              >
                <p className="font-semibold text-slate-950">{activity.label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {activity.detail}
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-text-light)]">
                  {activity.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr,0.8fr]">
        <div className="surface-card rounded-2xl p-6">
          <div className="flex items-center justify-between gap-4 pb-4 border-b border-[var(--color-line)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                Recent Pitches
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-950">
                Latest Analyses
              </h3>
            </div>
            <Link
              href="/sales-pitches"
              className="link-accent text-sm font-semibold"
            >
              View all
            </Link>
          </div>

          <div className="mt-6 space-y-3">
            {pitchRecords.slice(0, 4).map((pitch) => (
              <Link
                key={pitch.id}
                href={`/sales-pitches/${pitch.id}`}
                className="group flex flex-col gap-3 rounded-xl border border-[var(--color-line)] p-4 transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)]/40 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-semibold text-slate-950 group-hover:text-[var(--color-accent)] transition">
                    {pitch.title}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    {pitch.category} · {pitch.date}
                  </p>
                </div>
                <div className="rounded-full bg-gradient-to-r from-[var(--color-brand-soft)] to-[#fff9f5] px-3 py-1.5 text-sm font-semibold text-[var(--color-brand-strong)] flex-shrink-0">
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
