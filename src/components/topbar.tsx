"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { DemoUser } from "@/types";

export function Topbar({ user }: { user: DemoUser }) {
  const pathname = usePathname();
  const mobileNav = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/sales-pitches", label: "Pitches" },
    { href: "/sales-pitches/new", label: "New" },
    { href: "/settings", label: "Settings" },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-white/70 bg-white/80 backdrop-blur">
      <div className="flex flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <Link href="/dashboard" className="font-medium text-slate-600">
              Perfect Pitch
            </Link>
            <span className="text-slate-300">/</span>
            <span>Recruiter Demo</span>
          </div>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            AI-assisted sales pitch coaching for financial advisory teams.
          </p>
        </div>

        <div className="flex items-center gap-4 self-start xl:self-auto">
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-line)] bg-white text-slate-600 shadow-sm transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            aria-label="Notifications"
          >
            <span className="text-lg">◌</span>
          </button>
          <div className="flex items-center gap-3 rounded-2xl border border-[var(--color-line)] bg-white px-3 py-2 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent)] text-sm font-semibold text-white">
              {user.initials}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">{user.name}</p>
              <p className="text-xs text-[var(--color-text-muted)]">
                {user.role}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 overflow-x-auto px-4 pb-4 lg:hidden">
        {mobileNav.map((item) => {
          const active =
            pathname === item.href ||
            (item.href === "/sales-pitches" &&
              pathname.startsWith("/sales-pitches/") &&
              pathname !== "/sales-pitches/new");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                active
                  ? "bg-[var(--color-accent)] text-white"
                  : "bg-white text-slate-600 ring-1 ring-[var(--color-line)]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
