"use client";

import { useState } from "react";

import { PitchRecord } from "@/types";

import { TranscriptTimeline } from "./transcript-timeline";

const tabList = ["Feedback", "Transcript", "Model Guidance", "Admin Feedback"] as const;

type TabName = (typeof tabList)[number];

export function InsightTabs({ pitch }: { pitch: PitchRecord }) {
  const [activeTab, setActiveTab] = useState<TabName>("Feedback");

  return (
    <div className="surface-card rounded-2xl p-5">
      <div className="flex flex-wrap gap-2">
        {tabList.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
              activeTab === tab
                ? "bg-[var(--color-accent)] text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {activeTab === "Feedback" ? (
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="surface-subtle rounded-2xl p-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Summary
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {pitch.llmFeedback.summary}
              </p>
            </div>
            <div className="rounded-2xl bg-[var(--color-brand-soft)] p-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-strong)]">
                Strengths
              </h3>
              <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-700">
                {pitch.llmFeedback.strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-[var(--color-accent-soft)] p-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Opportunities
              </h3>
              <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-700">
                {pitch.llmFeedback.opportunities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="surface-card rounded-2xl p-4 lg:col-span-3">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900">
                Suggested Next Steps
              </h3>
              <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-700">
                {pitch.llmFeedback.nextSteps.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}

        {activeTab === "Transcript" ? (
          <TranscriptTimeline segments={pitch.transcriptSegments} />
        ) : null}

        {activeTab === "Model Guidance" ? (
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl bg-[var(--color-accent-soft)] p-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Stress These Points
              </h3>
              <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-700">
                {pitch.modelGuidance.emphasize.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-[var(--color-brand-soft)] p-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-strong)]">
                Avoid
              </h3>
              <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-700">
                {pitch.modelGuidance.avoid.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="surface-card rounded-2xl p-4 lg:col-span-2">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900">
                Coaching Note
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {pitch.modelGuidance.coachingNote}
              </p>
            </div>
          </div>
        ) : null}

        {activeTab === "Admin Feedback" ? (
          <div className="space-y-4">
            <div className="surface-subtle rounded-2xl p-4">
              <p className="text-sm font-semibold text-slate-900">
                Reviewer: {pitch.adminFeedback.reviewer}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {pitch.adminFeedback.note}
              </p>
            </div>
            <div className="surface-card rounded-2xl p-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900">
                Recommended Follow-Up
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {pitch.adminFeedback.recommendedFollowUp}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
