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
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        {eyebrow ? (
          <div className="inline-flex">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] bg-gradient-to-r from-[var(--color-accent)] to-blue-700 bg-clip-text text-transparent">
              {eyebrow}
            </p>
          </div>
        ) : null}
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          {description}
        </p>
      </div>

      {action ? (
        <Link
          href={action.href}
          className={`btn ${
            action.variant === "secondary" ? "btn-secondary" : "btn-primary"
          } flex-shrink-0`}
        >
          {action.label}
        </Link>
      ) : null}
    </div>
  );
}
