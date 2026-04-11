import { TranscriptSegment } from "@/types";

export function TranscriptTimeline({
  segments,
}: {
  segments: TranscriptSegment[];
}) {
  return (
    <div className="space-y-4">
      {segments.map((segment) => (
        <div key={segment.id} className="surface-card rounded-2xl p-4">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 font-semibold text-[var(--color-accent)]">
              {segment.timestamp}
            </span>
            <span className="font-semibold text-slate-900">{segment.speaker}</span>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700">{segment.text}</p>
        </div>
      ))}
    </div>
  );
}
