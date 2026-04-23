import { PitchStatus } from "@/types";

const styles: Record<PitchStatus, string> = {
  completed: "bg-emerald-50 text-emerald-700 ring-emerald-600/25 font-semibold",
  processing: "bg-amber-50 text-amber-700 ring-amber-600/25 font-semibold",
  on_hold: "bg-slate-100 text-slate-700 ring-slate-600/25 font-semibold",
};

export function StatusBadge({ status }: { status: PitchStatus }) {
  return (
    <span
      className={`inline-flex rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.05em] capitalize ring-1 ring-inset ${styles[status]}`}
    >
      {status.replace("_", " ")}
    </span>
  );
}
