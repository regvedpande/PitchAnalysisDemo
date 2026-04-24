"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/sales-pitches", label: "Sales Pitches" },
  { href: "/sales-pitches/new", label: "New Pitch" },
  { href: "/settings", label: "Settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-slate-200/90 bg-white/95 px-5 py-6 lg:block">
      <div className="flex h-full flex-col">
        <Link href="/" className="inline-flex items-center gap-3 transition hover:opacity-90">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent)] text-sm font-bold text-white">
            PP
          </div>
          <div>
            <p className="text-base font-bold text-slate-950">Perfect Pitch</p>
            <p className="text-xs font-medium text-slate-600">
              Sales pitch coach
            </p>
          </div>
        </Link>

        <div className="mt-10 space-y-1.5">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href === "/sales-pitches" &&
                pathname.startsWith("/sales-pitches/") &&
                pathname !== "/sales-pitches/new");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center rounded-lg px-3.5 py-2.5 text-sm font-semibold transition ${
                  active
                    ? "border border-blue-100 bg-blue-50 text-[var(--color-accent)]"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="mt-auto rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-accent)]">
            Demo Mode
          </p>
          <p className="mt-3 text-xs leading-6 text-slate-700 font-medium">
            Explore the full workflow with sample pitch data and coaching insights.
          </p>
        </div>
      </div>
    </aside>
  );
}
