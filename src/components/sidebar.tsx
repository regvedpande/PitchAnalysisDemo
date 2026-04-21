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
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-[var(--color-line)] bg-[#f8fafc] px-5 py-6 lg:block">
      <div className="flex h-full flex-col">
        <Link href="/" className="inline-flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent)] text-sm font-semibold text-white">
            PP
          </div>
          <div>
            <p className="text-base font-semibold text-slate-900">Perfect Pitch</p>
            <p className="text-sm text-[var(--color-text-muted)]">
              AI sales coaching demo
            </p>
          </div>
        </Link>

        <div className="mt-8 space-y-1.5">
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
                className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition ${
                  active
                    ? "bg-white text-slate-900 shadow-sm ring-1 ring-[var(--color-line)]"
                    : "text-slate-600 hover:bg-white hover:text-slate-900"
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    active ? "bg-[var(--color-brand)]" : "bg-slate-300"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="surface-card mt-auto rounded-2xl p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            About This Demo
          </p>
          <p className="mt-2.5 text-sm leading-6 text-slate-600">
            Experience the full workflow from pitch creation through AI analysis. This interactive demo showcases how Perfect Pitch turns client conversations into coaching insights.
          </p>
        </div>
      </div>
    </aside>
  );
}
