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
    <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
          {description}
        </p>
      </div>

      {action ? (
        <Link
          href={action.href}
          className={`inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
            action.variant === "secondary"
              ? "border border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {action.label}
        </Link>
      ) : null}
    </div>
  );
}
