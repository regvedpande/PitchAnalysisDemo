import Link from "next/link";

export function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  action?: {
    href: string;
    label: string;
    variant?: "primary" | "secondary";
  };
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          {title}
        </h1>
        <p className="mt-2.5 max-w-2xl text-sm leading-6 text-[var(--color-text-muted)]">
          {description}
        </p>
      </div>

      {action ? (
        <Link
          href={action.href}
          className={`inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition ${
            action.variant === "secondary"
              ? "border border-[var(--color-line)] bg-white text-slate-700 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              : "bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-strong)]"
          }`}
        >
          {action.label}
        </Link>
      ) : null}
    </div>
  );
}
