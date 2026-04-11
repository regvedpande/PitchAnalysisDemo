"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { PageHeader } from "@/components/page-header";
import { pitchCategories } from "@/lib/mock-data";

export default function NewPitchPage() {
  const [title, setTitle] = useState("Executive tax planning walkthrough");
  const [category, setCategory] = useState(pitchCategories[0]);
  const [captureMode, setCaptureMode] = useState<"record" | "upload" | "sample">(
    "sample",
  );
  const [recordingState, setRecordingState] = useState("Ready to simulate capture");
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(
      `/sales-pitches/pitch-103?source=${encodeURIComponent(captureMode)}&title=${encodeURIComponent(title)}`,
    );
  }

  function startRecordingDemo() {
    setCaptureMode("record");
    setRecordingState(
      "Recording simulation started. In the real product this is where camera capture would begin after explicit user consent.",
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="New Pitch"
        title="Create a new pitch analysis"
        description="This demo page communicates the intended capture workflow without any backend upload service or automatic media permission prompts."
      />

      <div className="grid gap-5 xl:grid-cols-[1.05fr,0.95fr]">
        <form
          onSubmit={handleSubmit}
          className="surface-card rounded-2xl p-5"
        >
          <div className="grid gap-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Pitch title
              </label>
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-surface-muted)] px-4 py-2.5 outline-none transition focus:border-[var(--color-accent)]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Category
              </label>
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value as typeof category)}
                className="w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-surface-muted)] px-4 py-2.5 outline-none transition focus:border-[var(--color-accent)]"
              >
                {pitchCategories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <p className="mb-3 text-sm font-medium text-slate-700">
                Capture option
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  {
                    id: "record",
                    title: "Start Recording",
                    body: "Simulate a live recording flow after explicit user action.",
                  },
                  {
                    id: "upload",
                    title: "Upload Demo Video",
                    body: "Represent a safe upload-first workflow with local UI only.",
                  },
                  {
                    id: "sample",
                    title: "Use Sample Pitch",
                    body: "Jump straight to a polished pre-analyzed example.",
                  },
                ].map((option) => {
                  const active = captureMode === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => {
                        setCaptureMode(option.id as typeof captureMode);
                        if (option.id !== "record") {
                          setRecordingState(
                            `${option.title} selected. No browser permissions required in this demo.`,
                          );
                        }
                      }}
                      className={`rounded-2xl border p-4 text-left transition ${
                        active
                          ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)]"
                          : "border-[var(--color-line)] bg-[var(--color-surface-muted)] hover:border-[var(--color-accent)]"
                      }`}
                    >
                      <p className="font-semibold text-slate-900">{option.title}</p>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                        {option.body}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-[var(--color-line)] bg-[var(--color-surface-muted)] p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-slate-900">Capture simulator</p>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--color-text-muted)]">
                    {recordingState}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={startRecordingDemo}
                  className="rounded-full bg-[var(--color-brand)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-brand-strong)]"
                >
                  Start Recording
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Analyze Pitch
            </button>
          </div>
        </form>

        <div className="space-y-6">
          <div className="surface-card rounded-2xl p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Pitch Guidance
            </p>
            <h3 className="mt-2.5 text-lg font-semibold text-slate-950">
              What a strong financial-sales pitch should communicate
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
              <li>Lead with the client outcome, not the tax rule.</li>
              <li>Use a simple planning framework the audience can repeat back.</li>
              <li>Connect every recommendation to timing and advisor value.</li>
              <li>Close with a concrete next step or review cadence.</li>
            </ul>
          </div>

          <div className="surface-card rounded-2xl p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-strong)]">
              Demo Notes
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              For Vercel-safe deployment, this page uses in-memory form state,
              sample routing, and a recording simulation instead of any real
              upload service, media pipeline, or browser access on load.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
