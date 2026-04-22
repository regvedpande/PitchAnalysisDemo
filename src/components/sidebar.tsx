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
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-slate-200 bg-slate-50 px-5 py-6 lg:block">
      <div className="flex h-full flex-col">
        <Link href="/" className="inline-flex items-center gap-3 hover:opacity-75 transition">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-sm font-semibold text-white">
            PP
          </div>
          <div>
            <p className="text-base font-semibold text-slate-900">Perfect Pitch</p>
            <p className="text-sm text-slate-600">
              Sales pitch coach
            </p>
          </div>
        </Link>

        <div className="mt-8 space-y-1">
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
                className={`flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  active
                    ? "bg-white text-blue-600 shadow-sm border border-slate-200"
                    : "text-slate-600 hover:bg-white hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="mt-auto rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Demo Mode
          </p>
          <p className="mt-2.5 text-sm leading-6 text-slate-600">
            Explore the full workflow with sample pitch data and coaching insights.
          </p>
        </div>
      </div>
    </aside>
  );
}
