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
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-slate-200/80 bg-white/80 px-5 py-6 backdrop-blur-md supports-[backdrop-filter]:bg-white/70 lg:block">
      <div className="flex h-full flex-col">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 rounded-xl p-1 -m-1 transition hover:bg-slate-50/80"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent)] text-sm font-bold text-white shadow-sm ring-1 ring-black/5 transition group-hover:brightness-105">
            PP
          </div>
          <div>
            <p className="text-base font-bold tracking-tight text-slate-950">
              Perfect Pitch
            </p>
            <p className="text-xs font-medium text-slate-600">
              Sales pitch coach
            </p>
          </div>
        </Link>

        <nav className="mt-10 space-y-1" aria-label="Main">
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
                className={`relative flex items-center rounded-xl px-3.5 py-2.5 text-sm font-semibold transition ${
                  active
                    ? "bg-[var(--color-accent-soft)] text-[var(--color-accent)] shadow-[var(--shadow-xs)] before:absolute before:left-0 before:top-1/2 before:h-6 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-[var(--color-accent)] before:content-['']"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span className={active ? "pl-1.5" : ""}>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto rounded-xl border border-slate-200/90 bg-gradient-to-b from-slate-50/90 to-white p-4 shadow-[var(--shadow-xs)]">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-accent)]">
            Demo Mode
          </p>
          <p className="mt-3 text-xs font-medium leading-relaxed text-slate-600">
            Explore the full workflow with sample pitch data and coaching insights.
          </p>
        </div>
      </div>
    </aside>
  );
}
