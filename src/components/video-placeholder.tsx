export function VideoPlaceholder({
  label,
  duration,
}: {
  label: string;
  duration: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-950 text-white shadow-[var(--shadow-card)]">
      {/* Simulated video background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-1/3 h-32 w-32 rounded-full bg-[var(--color-accent)] blur-3xl" />
        <div className="absolute right-1/4 bottom-1/3 h-24 w-24 rounded-full bg-[var(--color-brand)] blur-2xl" />
      </div>

      <div className="relative flex min-h-[280px] flex-col justify-between p-6">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur-sm">
            Demo Preview
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
            {duration}
          </span>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 py-8 gap-4">
          <button
            type="button"
            aria-label="Play recording (demo only)"
            className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/30 hover:scale-105 border border-white/25 shadow-lg"
          >
            <svg className="h-7 w-7 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
          <p className="text-xs font-medium text-white/60">Click to play (demo simulation)</p>
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50">
            Recording Preview
          </p>
          <h3 className="mt-1.5 text-base font-semibold text-white">{label}</h3>
          <div className="mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-brand)]" />
              </div>
              <span className="text-xs font-medium text-white/60">{duration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
