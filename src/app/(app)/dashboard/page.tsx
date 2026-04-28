import Link from "next/link";

import { DemoCTA } from "@/components/demo-cta";
import { KPIStatCard } from "@/components/kpi-stat-card";
import { LineChart } from "@/components/line-chart";
import { OnboardingGuide } from "@/components/onboarding-guide";
import { PageHeader } from "@/components/page-header";
import { RecruiterInsights } from "@/components/recruiter-insights";
import {
  coachingQueue,
  dashboardStats,
  demoPlaybook,
  monthlyScores,
  pitchRecords,
  pipelineStatus,
  recentActivity,
} from "@/lib/mock-data";

export default function DashboardPage() {
  const completedPitches = pitchRecords.filter(
    (pitch) => pitch.status === "completed",
  );
  const averageScore =
    completedPitches.reduce((total, pitch) => total + pitch.score, 0) /
    Math.max(completedPitches.length, 1);
  const strongestPitch = [...pitchRecords].sort((a, b) => b.score - a.score)[0];
  const revisionPitches = pitchRecords.filter(
    (pitch) => pitch.status !== "completed",
  );

  return (
    <div className="section-container dashboard-canvas">
      <div className="grid gap-4 xl:grid-cols-[1fr,360px]">
        <div className="dashboard-hero">
          <PageHeader
            eyebrow="Dashboard"
            title="Sales Performance Hub"
            description="A populated demo workspace for exploring pitch quality, coaching workload, performance trends, and transcript-level AI feedback."
            action={{ href: "/sales-pitches/new", label: "Record New Pitch" }}
          />

          <div className="grid gap-3 md:grid-cols-3">
            <div className="dashboard-mini-stat">
              <span>Completed</span>
              <strong>{completedPitches.length}</strong>
            </div>
            <div className="dashboard-mini-stat">
              <span>Average Score</span>
              <strong>{averageScore.toFixed(1)}</strong>
            </div>
            <div className="dashboard-mini-stat">
              <span>Top Pitch</span>
              <strong>{strongestPitch.score}</strong>
            </div>
          </div>
        </div>

        <div className="surface-card rounded-lg p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
            Demo Workspace
          </p>
          <h2 className="mt-2 text-xl font-bold text-slate-950">
            Ready-to-use sample data
          </h2>
          <div className="mt-5 space-y-3">
            {demoPlaybook.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg bg-slate-50 p-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand)]" />
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <OnboardingGuide />

      <div className="card-grid-4">
        {dashboardStats.map((stat) => (
          <KPIStatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.45fr,0.9fr]">
        <LineChart data={monthlyScores} />

        <div className="surface-card rounded-lg p-6">
          <div className="flex items-center justify-between gap-4 pb-4 border-b border-[var(--color-line)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                Pipeline Health
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-950">
                Review status by stage
              </h3>
            </div>
          </div>

          <div className="mt-6 space-y-5">
            {pipelineStatus.map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <p className="font-semibold text-slate-800">{item.label}</p>
                  <p className="font-bold text-slate-950">{item.count}</p>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div
                    className={`h-2 rounded-full ${item.color}`}
                    style={{ width: `${Math.max((item.count / 7) * 100, 10)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-[var(--color-line)] bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-950">
              Coaching attention needed
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {revisionPitches.length} sample pitches are still processing or on
              hold, so visitors can test status filters and review queues.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.95fr,1.05fr]">
        <div className="surface-card rounded-lg p-6">
          <div className="border-b border-[var(--color-line)] pb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
              Coaching Queue
            </p>
            <h3 className="mt-2 text-lg font-bold text-slate-950">
              Manager follow-up tasks
            </h3>
          </div>
          <div className="mt-5 space-y-3">
            {coachingQueue.map((task) => (
              <div
                key={`${task.owner}-${task.focus}`}
                className="grid gap-3 rounded-lg border border-slate-200 bg-white p-4 sm:grid-cols-[1fr,auto]"
              >
                <div>
                  <p className="font-semibold text-slate-950">{task.focus}</p>
                  <p className="mt-1 text-sm text-slate-600">{task.owner}</p>
                </div>
                <div className="flex items-center gap-2 sm:flex-col sm:items-end">
                  <span className="badge badge-accent">{task.priority}</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">
                    {task.due}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card rounded-lg p-6">
          <div className="flex items-center justify-between gap-4 pb-4 border-b border-[var(--color-line)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                Recent Activity
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-950">
                Latest workspace events
              </h3>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.label}
                className="rounded-lg border border-slate-200 bg-white p-4"
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
        <div className="surface-card rounded-lg p-6">
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
                className="group flex flex-col gap-3 rounded-lg border border-[var(--color-line)] p-4 transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)]/40 sm:flex-row sm:items-center sm:justify-between"
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

      <RecruiterInsights pitches={pitchRecords} />
    </div>
  );
}
