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

  const hasActiveFilters = search || status !== "all" || category !== "all" || month !== "all";

  function resetFilters() {
    setSearch("");
    setStatus("all");
    setCategory("all");
    setMonth("all");
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">Recordings</h3>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={resetFilters}
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition"
          >
            Clear filters
          </button>
        )}
      </div>

      <div className="mb-6 grid gap-3 lg:grid-cols-[2fr,1fr,1fr,1fr]">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by title, presenter, or audience"
          className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
        />
        <select
          value={category}
          onChange={(event) =>
            setCategory(event.target.value as "all" | PitchCategory)
          }
          className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
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
          className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
        >
          <option value="all">All Statuses</option>
          <option value="completed">Completed</option>
          <option value="processing">Processing</option>
          <option value="on_hold">On Hold</option>
        </select>
        <select
          value={month}
          onChange={(event) => setMonth(event.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
        >
          <option value="all">All Dates</option>
          <option value="2026-04">April 2026</option>
          <option value="2026-03">March 2026</option>
        </select>
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200">
        <div className="hidden grid-cols-[2.4fr,1.5fr,1fr,1fr,1.2fr] gap-4 bg-slate-50 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-600 md:grid">
          <span>Pitch</span>
          <span>Category</span>
          <span>Date</span>
          <span>Score</span>
          <span>Status</span>
        </div>

        <div className="divide-y divide-slate-200">
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
              className="grid cursor-pointer gap-4 bg-white px-5 py-4 transition hover:bg-slate-50 md:grid-cols-[2.4fr,1.5fr,1fr,1fr,1.2fr]"
            >
              <div>
                <p className="text-base font-semibold text-slate-900">
                  {pitch.title}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  {pitch.presenter} · {pitch.clientLabel}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link
                    href={`/sales-pitches/${pitch.id}`}
                    onClick={(event) => event.stopPropagation()}
                    className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-blue-700"
                  >
                    View Analysis
                  </Link>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      window.alert("Clone is demo-only in this mock product.");
                    }}
                    className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                  >
                    Clone
                  </button>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      window.alert("Edit features are coming soon in the platform.");
                    }}
                    className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setDismissedIds((current) => [...current, pitch.id]);
                    }}
                    className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-red-600 transition hover:border-red-300 hover:bg-red-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="text-sm text-slate-700">{pitch.category}</div>
              <div className="text-sm text-slate-700">{pitch.date}</div>
              <div className="text-sm font-semibold text-slate-900">
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
              <p className="mt-2 text-sm text-slate-600">
                Adjust the filters or clear the search to bring the demo library back into view.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
