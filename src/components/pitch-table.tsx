"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { PitchCategory, PitchRecord, PitchStatus } from "@/types";

import { StatusBadge } from "./status-badge";

interface PitchTableProps {
  pitches: PitchRecord[];
  categories: PitchCategory[];
}

interface Toast {
  id: number;
  message: string;
}

export function PitchTable({ pitches, categories }: PitchTableProps) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"all" | PitchStatus>("all");
  const [category, setCategory] = useState<"all" | PitchCategory>("all");
  const [month, setMonth] = useState("all");
  const [dismissedIds, setDismissedIds] = useState<string[]>([]);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const router = useRouter();

  function showToast(message: string) {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }

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

  const hasActiveFilters = search || status !== "all" || category !== "all" || month !== "all";

  function resetFilters() {
    setSearch("");
    setStatus("all");
    setCategory("all");
    setMonth("all");
  }

  return (
    <div className="relative surface-card rounded-2xl p-6">
      {/* Toast notifications */}
      {toasts.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
          {toasts.map((toast) => (
            <div
              key={toast.id}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg ring-1 ring-black/5 animate-in slide-in-from-bottom-2"
            >
              <svg className="h-4 w-4 text-[var(--color-accent)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm font-medium text-slate-700">{toast.message}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-950">Recordings</h3>
          <p className="mt-0.5 text-sm text-slate-500">
            {visiblePitches.length} of {pitches.length} pitches
          </p>
        </div>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={resetFilters}
            className="flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] hover:text-blue-700 transition"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Clear filters
          </button>
        )}
      </div>

      <div className="mb-6 grid gap-3 lg:grid-cols-[2fr,1fr,1fr,1fr]">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by title, presenter, or audience"
            className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/10"
          />
        </div>
        <select
          value={category}
          onChange={(event) =>
            setCategory(event.target.value as "all" | PitchCategory)
          }
          className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/10"
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
          className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/10"
        >
          <option value="all">All Statuses</option>
          <option value="completed">Completed</option>
          <option value="processing">Processing</option>
          <option value="on_hold">On Hold</option>
        </select>
        <select
          value={month}
          onChange={(event) => setMonth(event.target.value)}
          className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/10"
        >
          <option value="all">All Dates</option>
          <option value="2026-04">April 2026</option>
          <option value="2026-03">March 2026</option>
        </select>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200">
        <div className="hidden grid-cols-[2.4fr,1.5fr,1fr,1fr,1.2fr] gap-4 bg-slate-50/80 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.08em] text-slate-500 md:grid border-b border-slate-200">
          <span>Pitch</span>
          <span>Category</span>
          <span>Date</span>
          <span>Score</span>
          <span>Status</span>
        </div>

        <div className="divide-y divide-slate-100">
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
              className="group grid cursor-pointer gap-4 bg-white px-6 py-5 transition-colors hover:bg-[var(--color-accent-soft)]/30 md:grid-cols-[2.4fr,1.5fr,1fr,1fr,1.2fr]"
            >
              <div>
                <p className="text-sm font-bold text-slate-950 group-hover:text-[var(--color-accent)] transition-colors">
                  {pitch.title}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {pitch.presenter} · {pitch.clientLabel}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <Link
                    href={`/sales-pitches/${pitch.id}`}
                    onClick={(event) => event.stopPropagation()}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-accent)] px-3 py-1.5 text-xs font-semibold text-white transition hover:brightness-90"
                  >
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Analysis
                  </Link>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      showToast("Clone will be available in the production release.");
                    }}
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50"
                  >
                    Clone
                  </button>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      showToast("Edit mode is coming in the next platform update.");
                    }}
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setDismissedIds((current) => [...current, pitch.id]);
                      showToast(`"${pitch.title}" removed from view.`);
                    }}
                    className="inline-flex items-center gap-1 rounded-lg border border-red-100 bg-white px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-50"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-xs font-medium text-slate-600 leading-relaxed">{pitch.category}</span>
              </div>
              <div className="flex items-center">
                <span className="text-xs font-medium text-slate-500">{pitch.date}</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl font-bold text-slate-950">{pitch.score}</span>
              </div>
              <div className="flex items-center">
                <StatusBadge status={pitch.status} />
              </div>
            </div>
          ))}

          {visiblePitches.length === 0 ? (
            <div className="flex flex-col items-center px-6 py-16 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                <svg className="h-6 w-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="mt-4 text-base font-bold text-slate-950">
                No pitches match these filters
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Try adjusting your search or clear the active filters.
              </p>
              <button
                onClick={resetFilters}
                className="mt-4 rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-90"
              >
                Clear all filters
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
