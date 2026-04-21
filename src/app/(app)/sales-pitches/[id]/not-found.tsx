import Link from "next/link";

export default function PitchNotFound() {
  return (
    <div className="rounded-[28px] border border-white/80 bg-white p-10 text-center shadow-[var(--shadow-soft)]">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
        Pitch Not Found
      </p>
      <h1 className="mt-4 text-3xl font-semibold text-slate-950">
        This demo analysis does not exist.
      </h1>
      <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
        Use one of the mock pitch records from the library to continue the
        This pitch is not available in this demo.
      </p>
      <Link
        href="/sales-pitches"
        className="mt-6 inline-flex rounded-full bg-[var(--color-brand)] px-5 py-3 text-sm font-semibold text-white"
      >
        Back to Sales Pitches
      </Link>
    </div>
  );
}
