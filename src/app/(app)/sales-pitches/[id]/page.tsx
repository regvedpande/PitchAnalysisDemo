import Link from "next/link";
import { notFound } from "next/navigation";

import { InsightTabs } from "@/components/insight-tabs";
import { ScoreCard } from "@/components/score-card";
import { StatusBadge } from "@/components/status-badge";
import { VideoPlaceholder } from "@/components/video-placeholder";
import { getPitchById } from "@/lib/mock-data";

export default async function PitchDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pitch = getPitchById(id);

  if (!pitch) {
    notFound();
  }

  const scoreColor =
    pitch.score >= 90
      ? "from-emerald-500 to-emerald-600"
      : pitch.score >= 84
        ? "from-[var(--color-accent)] to-[#0d47a1]"
        : "from-[var(--color-brand)] to-[var(--color-brand-strong)]";

  return (
    <div className="space-y-6">
      {/* Breadcrumb + back */}
      <div className="flex items-center gap-3">
        <Link
          href="/sales-pitches"
          className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition hover:text-[var(--color-accent)]"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Pitch Library
        </Link>
        <span className="text-slate-300">/</span>
        <span className="text-sm font-medium text-slate-700 truncate max-w-xs">{pitch.title}</span>
      </div>

      {/* Hero header */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-white to-[var(--color-accent-soft)]/30" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-accent)]">
              {pitch.category}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {pitch.title}
            </h1>
            <p className="mt-3 text-base leading-7 text-slate-600">
              {pitch.analysisSummary}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <StatusBadge status={pitch.status} />
              <span className="text-sm text-slate-500">{pitch.presenter}</span>
              <span className="text-slate-300">·</span>
              <span className="text-sm text-slate-500">{pitch.clientLabel}</span>
              <span className="text-slate-300">·</span>
              <span className="text-sm text-slate-500">{pitch.duration}</span>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className={`relative inline-flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br ${scoreColor} shadow-md`}>
              <div className="text-center">
                <p className="text-3xl font-extrabold leading-none text-white">{pitch.score}</p>
                <p className="mt-0.5 text-xs font-semibold text-white/80">/ 100</p>
              </div>
            </div>
            <p className="mt-2 text-center text-xs font-medium text-slate-500">Overall Score</p>
          </div>
        </div>

        <div className="relative mt-6 flex gap-3">
          <Link
            href="/sales-pitches/new"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Analyze Another Pitch
          </Link>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.1fr,0.9fr]">
        <VideoPlaceholder label={pitch.thumbnailLabel} duration={pitch.duration} />

        <div className="surface-card rounded-2xl p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Score Breakdown
          </p>
          <p className="mt-1.5 text-sm text-slate-500">
            Six dimensions evaluated by AI and manager review.
          </p>
          <div className="mt-5 space-y-3">
            {(
              [
                ["Tone & Sentiment", pitch.scoreBreakdown.toneAndSentiment],
                ["Structure & Flow", pitch.scoreBreakdown.structureAndFlow],
                ["Key Message", pitch.scoreBreakdown.keyMessage],
                ["Audience Engagement", pitch.scoreBreakdown.audienceEngagement],
                ["Transcript Quality", pitch.scoreBreakdown.transcriptQuality],
                ["Admin Review", pitch.scoreBreakdown.adminReview],
              ] as const
            ).map(([label, value]) => (
              <div key={label}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">{label}</span>
                  <span className="font-bold text-slate-950">{value}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)]"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <ScoreCard label="Tone & Sentiment" value={pitch.scoreBreakdown.toneAndSentiment} />
        <ScoreCard label="Structure & Flow" value={pitch.scoreBreakdown.structureAndFlow} />
        <ScoreCard label="Key Message" value={pitch.scoreBreakdown.keyMessage} />
        <ScoreCard label="Audience Engagement" value={pitch.scoreBreakdown.audienceEngagement} />
        <ScoreCard label="Transcript Quality" value={pitch.scoreBreakdown.transcriptQuality} />
        <ScoreCard label="Admin Review" value={pitch.scoreBreakdown.adminReview} />
      </div>

      <InsightTabs pitch={pitch} />
    </div>
  );
}
