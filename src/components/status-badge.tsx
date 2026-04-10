import { PitchStatus } from "@/types";

const styles: Record<PitchStatus, string> = {
  completed: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  processing: "bg-amber-50 text-amber-700 ring-amber-600/20",
  on_hold: "bg-slate-100 text-slate-700 ring-slate-600/20",
};

export function StatusBadge({ status }: { status: PitchStatus }) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ring-1 ring-inset ${styles[status]}`}
    >
      {status.replace("_", " ")}
    </span>
  );
}
