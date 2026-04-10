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
    <aside className="sticky top-0 hidden h-screen w-72 shrink-0 border-r border-white/60 bg-[linear-gradient(180deg,#0f4c81_0%,#123861_48%,#0f2741_100%)] px-6 py-8 text-white shadow-2xl lg:block">
      <div className="flex h-full flex-col">
        <Link href="/" className="inline-flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/12 text-lg font-semibold">
            PP
          </div>
          <div>
            <p className="text-lg font-semibold">Perfect Pitch</p>
            <p className="text-sm text-blue-100/80">AI sales coaching demo</p>
          </div>
        </Link>

        <div className="mt-10 space-y-2">
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
                className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-white text-[var(--color-accent)] shadow-lg"
                    : "text-blue-50/88 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    active ? "bg-[var(--color-brand)]" : "bg-white/25"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="mt-auto rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-100/80">
            Demo Story
          </p>
          <p className="mt-3 text-sm leading-6 text-blue-50/90">
            Recruiters can trace the full workflow from pitch creation to AI-led
            analysis without any backend dependencies or missing product states.
          </p>
        </div>
      </div>
    </aside>
  );
}
