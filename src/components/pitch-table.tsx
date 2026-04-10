"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { PitchCategory, PitchRecord, PitchStatus } from "@/types";

import { StatusBadge } from "./status-badge";

interface PitchTableProps {
  pitches: PitchRecord[];
  categories: PitchCategory[];
}

export function PitchTable({ pitches, categories }: PitchTableProps) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"all" | PitchStatus>("all");
  const [category, setCategory] = useState<"all" | PitchCategory>("all");
  const [month, setMonth] = useState("all");
  const [dismissedIds, setDismissedIds] = useState<string[]>([]);
  const router = useRouter();

  const visiblePitches = useMemo(() => {
    return pitches.filter((pitch) => {
      if (dismissedIds.includes(pitch.id)) return false;
      if (
        search &&
        !`${pitch.title} ${pitch.presenter} ${pitch.clientLabel}`
          .toLowerCase()
          .includes(search.toLowerCase())
      ) {
        return false;
      }
      if (status !== "all" && pitch.status !== status) return false;
      if (category !== "all" && pitch.category !== category) return false;
      if (month !== "all" && !pitch.date.startsWith(month)) return false;
      return true;
    });
  }, [pitches, dismissedIds, search, status, category, month]);

  return (
    <div className="rounded-[28px] border border-white/80 bg-white p-6 shadow-[var(--shadow-soft)]">
      <div className="grid gap-3 lg:grid-cols-[2fr,1fr,1fr,1fr]">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by title, presenter, or audience"
          className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface-muted)] px-4 py-3 text-sm outline-none transition focus:border-[var(--color-accent)]"
        />
        <select
          value={category}
          onChange={(event) =>
            setCategory(event.target.value as "all" | PitchCategory)
          }
          className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface-muted)] px-4 py-3 text-sm outline-none transition focus:border-[var(--color-accent)]"
        >
          <option value="all">All Categories</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select
          value={status}
          onChange={(event) => setStatus(event.target.value as "all" | PitchStatus)}
          className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface-muted)] px-4 py-3 text-sm outline-none transition focus:border-[var(--color-accent)]"
        >
          <option value="all">All Statuses</option>
          <option value="completed">Completed</option>
          <option value="processing">Processing</option>
          <option value="on_hold">On Hold</option>
        </select>
        <select
          value={month}
          onChange={(event) => setMonth(event.target.value)}
          className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface-muted)] px-4 py-3 text-sm outline-none transition focus:border-[var(--color-accent)]"
        >
          <option value="all">All Dates</option>
          <option value="2026-04">April 2026</option>
          <option value="2026-03">March 2026</option>
        </select>
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl border border-[var(--color-line)]">
        <div className="hidden grid-cols-[2.4fr,1.5fr,1fr,1fr,1.2fr] gap-4 bg-slate-50 px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)] md:grid">
          <span>Pitch</span>
          <span>Category</span>
          <span>Date</span>
          <span>Score</span>
          <span>Status</span>
        </div>

        <div className="divide-y divide-[var(--color-line)]">
          {visiblePitches.map((pitch) => (
            <div
              key={pitch.id}
              role="button"
              tabIndex={0}
              onClick={() => router.push(`/sales-pitches/${pitch.id}`)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  router.push(`/sales-pitches/${pitch.id}`);
                }
              }}
              className="grid cursor-pointer gap-4 bg-white px-5 py-5 transition hover:bg-slate-50 md:grid-cols-[2.4fr,1.5fr,1fr,1fr,1.2fr]"
            >
              <div>
                <p className="text-base font-semibold text-slate-950">
                  {pitch.title}
                </p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {pitch.presenter} · {pitch.clientLabel}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link
                    href={`/sales-pitches/${pitch.id}`}
                    onClick={(event) => event.stopPropagation()}
                    className="rounded-full bg-[var(--color-accent)] px-3 py-1.5 text-xs font-semibold text-white transition hover:opacity-90"
                  >
                    View Analysis
                  </Link>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      window.alert("Clone is demo-only in this mock product.");
                    }}
                    className="rounded-full border border-[var(--color-line)] px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    Clone
                  </button>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      window.alert("Edit is demo-only in this recruiter build.");
                    }}
                    className="rounded-full border border-[var(--color-line)] px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setDismissedIds((current) => [...current, pitch.id]);
                    }}
                    className="rounded-full border border-[var(--color-line)] px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-rose-300 hover:text-rose-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="text-sm text-slate-700">{pitch.category}</div>
              <div className="text-sm text-slate-700">{pitch.date}</div>
              <div className="text-sm font-semibold text-slate-950">
                {pitch.score}
              </div>
              <div>
                <StatusBadge status={pitch.status} />
              </div>
            </div>
          ))}

          {visiblePitches.length === 0 ? (
            <div className="px-5 py-12 text-center">
              <p className="text-lg font-semibold text-slate-900">
                No pitches match these filters
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                Adjust the filters or clear the search to bring the demo library
                back into view.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
