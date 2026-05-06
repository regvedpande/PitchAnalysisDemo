import { TranscriptSegment } from "@/types";

export function TranscriptTimeline({
  segments,
}: {
  segments: TranscriptSegment[];
}) {
  return (
    <div className="relative space-y-0">
      {/* Vertical timeline line */}
      <div className="absolute left-[1.375rem] top-4 bottom-4 w-px bg-slate-200" />

      {segments.map((segment, index) => (
        <div key={segment.id} className="relative flex gap-5 pb-5 last:pb-0">
          {/* Timeline dot */}
          <div className="relative z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-accent)]/20 bg-[var(--color-accent-soft)] text-[10px] font-bold text-[var(--color-accent)]">
            {index + 1}
          </div>

          <div className="flex-1 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[var(--shadow-xs)]">
            <div className="flex flex-wrap items-center gap-2.5 text-sm">
              <span className="rounded-full bg-[var(--color-accent-soft)] px-2.5 py-0.5 text-xs font-bold text-[var(--color-accent)]">
                {segment.timestamp}
              </span>
              <span className="font-semibold text-slate-900">{segment.speaker}</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-600">{segment.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
