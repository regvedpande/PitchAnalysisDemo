import { notFound } from "next/navigation";

import { InsightTabs } from "@/components/insight-tabs";
import { PageHeader } from "@/components/page-header";
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

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow={pitch.category}
        title={pitch.title}
        description={pitch.analysisSummary}
        action={{ href: "/sales-pitches/new", label: "Analyze Another Pitch" }}
      />

      <div className="grid gap-6 xl:grid-cols-[1.1fr,0.9fr]">
        <VideoPlaceholder label={pitch.thumbnailLabel} duration={pitch.duration} />

        <div className="rounded-[28px] border border-white/80 bg-white p-6 shadow-[var(--shadow-soft)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Analysis Overview
              </p>
              <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                Presenter: {pitch.presenter}
              </p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                Audience: {pitch.clientLabel}
              </p>
            </div>
            <StatusBadge status={pitch.status} />
          </div>

          <div className="mt-8 rounded-3xl bg-[linear-gradient(135deg,#fff7ed_0%,#eaf2fb_100%)] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-strong)]">
              Overall Score
            </p>
            <div className="mt-4 flex items-end gap-3">
              <span className="text-6xl font-semibold tracking-tight text-slate-950">
                {pitch.score}
              </span>
              <span className="pb-2 text-sm font-medium text-[var(--color-text-muted)]">
                out of 100
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              The demo score blends transcript clarity, delivery structure,
              client value articulation, and manager review.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <ScoreCard
          label="Tone & Sentiment"
          value={pitch.scoreBreakdown.toneAndSentiment}
        />
        <ScoreCard
          label="Structure & Flow"
          value={pitch.scoreBreakdown.structureAndFlow}
        />
        <ScoreCard
          label="Key Message"
          value={pitch.scoreBreakdown.keyMessage}
        />
        <ScoreCard
          label="Audience Engagement"
          value={pitch.scoreBreakdown.audienceEngagement}
        />
        <ScoreCard
          label="Transcript Quality"
          value={pitch.scoreBreakdown.transcriptQuality}
        />
        <ScoreCard
          label="Admin Review"
          value={pitch.scoreBreakdown.adminReview}
        />
      </div>

      <InsightTabs pitch={pitch} />
    </div>
  );
}
