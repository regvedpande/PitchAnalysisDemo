import { PageHeader } from "@/components/page-header";
import { demoUser } from "@/lib/mock-data";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Settings"
        title="Demo workspace preferences"
        description="A lightweight settings page makes the product feel complete while staying intentionally simple for recruiter review."
      />

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="rounded-[28px] border border-white/80 bg-white p-6 shadow-[var(--shadow-soft)]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Profile
          </p>
          <h3 className="mt-3 text-xl font-semibold text-slate-950">
            {demoUser.name}
          </h3>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            {demoUser.role}
          </p>
          <p className="mt-5 text-sm leading-7 text-slate-700">
            {demoUser.email}
            <br />
            {demoUser.company}
          </p>
        </div>

        <div className="rounded-[28px] border border-white/80 bg-white p-6 shadow-[var(--shadow-soft)]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Company Preferences
          </p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
            <li>Industry lens: Financial advisory and wealth planning</li>
            <li>Default review mode: AI + manager feedback</li>
            <li>Pitch scoring rubric: Client clarity and advisor value</li>
          </ul>
        </div>

        <div className="rounded-[28px] border border-white/80 bg-white p-6 shadow-[var(--shadow-soft)]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Demo Preferences
          </p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
            <li>No live integrations or backend dependencies</li>
            <li>Mock recordings route to local analysis data</li>
            <li>All recruiter actions remain deployment-safe on Vercel</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
