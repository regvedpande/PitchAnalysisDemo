"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";

import { DemoUser } from "@/types";

export function Topbar({ user }: { user: DemoUser }) {
  const pathname = usePathname();
  const mobileNav = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/sales-pitches", label: "Pitches" },
    { href: "/sales-pitches/new", label: "New" },
    { href: "/settings", label: "Settings" },
  ];
  const activeUser = useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener("storage", onStoreChange);
      window.addEventListener("perfect-pitch-user-change", onStoreChange);
      return () => {
        window.removeEventListener("storage", onStoreChange);
        window.removeEventListener("perfect-pitch-user-change", onStoreChange);
      };
    },
    () => {
      const storedUser = window.localStorage.getItem("perfect-pitch-demo-user");

      if (!storedUser) {
        return user;
      }

      try {
        return JSON.parse(storedUser) as DemoUser;
      } catch {
        return user;
      }
    },
    () => user,
  );

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--color-line)] bg-white/90 backdrop-blur">
      <div className="flex flex-col gap-3 px-4 py-3 sm:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <Link href="/dashboard" className="font-medium text-slate-700">
              Perfect Pitch
            </Link>
            <span className="text-slate-300">/</span>
            <span>Recruiter Demo</span>
          </div>
          <p className="mt-1.5 text-sm text-[var(--color-text-muted)]">
            AI-assisted sales pitch coaching for financial advisory teams.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start xl:self-auto">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-line)] bg-[var(--color-surface-muted)] text-slate-600 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            aria-label="Notifications"
          >
            <span className="text-base">◌</span>
          </button>
          <div className="flex items-center gap-3 rounded-xl border border-[var(--color-line)] bg-white px-3 py-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent)] text-sm font-semibold text-white">
              {activeUser.initials}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                {activeUser.name}
              </p>
              <p className="text-xs text-[var(--color-text-muted)]">
                {activeUser.role}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto px-4 pb-3 lg:hidden">
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
              className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
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
