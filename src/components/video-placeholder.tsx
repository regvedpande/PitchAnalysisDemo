export function VideoPlaceholder({
  label,
  duration,
}: {
  label: string;
  duration: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-[linear-gradient(135deg,#0f4c81_0%,#15283d_55%,#f97316_140%)] p-6 text-white shadow-[var(--shadow-soft)]">
      <div className="absolute right-6 top-6 rounded-full bg-white/12 px-3 py-1 text-xs font-semibold backdrop-blur">
        Mock Player
      </div>
      <div className="flex min-h-[280px] flex-col justify-end">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-2xl shadow-lg backdrop-blur">
          ▶
        </div>
        <p className="text-sm uppercase tracking-[0.2em] text-blue-100/80">
          Video Preview
        </p>
        <h3 className="mt-2 text-2xl font-semibold">{label}</h3>
        <p className="mt-2 max-w-xl text-sm leading-6 text-blue-50/88">
          This recruiter demo uses a static preview surface instead of real video
          playback so the analysis workflow stays stable and deployment-safe.
        </p>
        <div className="mt-6 flex items-center justify-between rounded-2xl bg-black/20 px-4 py-3 text-sm backdrop-blur">
          <span>{duration}</span>
          <span>AI insight markers available</span>
        </div>
      </div>
    </div>
  );
}
