"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { DemoUser } from "@/types";

export function Topbar({ user }: { user: DemoUser }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeUser, setActiveUser] = useState<DemoUser>(user);

  const mobileNav = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/sales-pitches", label: "Pitches" },
    { href: "/sales-pitches/new", label: "New" },
    { href: "/settings", label: "Settings" },
  ];

  useEffect(() => {
    function updateUser() {
      const storedUser = window.localStorage.getItem("perfect-pitch-demo-user");

      if (!storedUser) {
        setActiveUser(user);
        return;
      }

      try {
        setActiveUser(JSON.parse(storedUser) as DemoUser);
      } catch {
        setActiveUser(user);
      }
    }

    updateUser();

    window.addEventListener("storage", updateUser);
    window.addEventListener("perfect-pitch-user-change", updateUser);

    return () => {
      window.removeEventListener("storage", updateUser);
      window.removeEventListener("perfect-pitch-user-change", updateUser);
    };
  }, [user]);

  function handleLogout() {
    localStorage.removeItem("perfect-pitch-demo-user");
    document.cookie = "perfect-pitch-auth=; path=/; max-age=0";
    window.dispatchEvent(new Event("perfect-pitch-user-change"));
    setIsProfileOpen(false);
    router.push("/");
  }

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/90 bg-white/85 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] backdrop-blur-md supports-[backdrop-filter]:bg-white/75">
      <div className="flex flex-col gap-3 px-4 py-4 sm:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600">
            <Link
              href="/dashboard"
              className="text-lg font-bold tracking-tight text-slate-950 transition hover:text-[var(--color-accent)]"
            >
              Perfect Pitch
            </Link>
            <span className="hidden text-slate-300 sm:inline" aria-hidden>
              /
            </span>
            <span className="hidden font-medium text-slate-600 sm:inline">
              Demo
            </span>
          </div>
          <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-text-light)]">
            Sales pitch analysis & coaching
          </p>
        </div>

        <div className="flex items-center gap-3 self-start xl:self-auto">
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-3 rounded-xl border border-slate-200/90 bg-white px-3 py-2 shadow-[var(--shadow-xs)] transition hover:border-slate-300 hover:shadow-sm"
              aria-expanded={isProfileOpen}
              aria-haspopup="true"
              aria-label="User menu"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-accent)] text-xs font-bold text-white shadow-sm ring-1 ring-black/5">
                {activeUser.initials}
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-slate-900">
                  {activeUser.name}
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  {activeUser.role}
                </p>
              </div>
            </button>

            {isProfileOpen && (
              <div
                className="absolute right-0 mt-2 w-52 overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-md ring-1 ring-black/5"
                role="menu"
              >
                <div className="border-b border-slate-100 bg-slate-50/50 px-4 py-3">
                  <p className="text-sm font-semibold text-slate-900">
                    {activeUser.name}
                  </p>
                  <p className="mt-0.5 truncate text-xs text-slate-500">
                    {activeUser.email}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full px-4 py-2.5 text-left text-sm font-medium text-red-600 transition hover:bg-red-50"
                  role="menuitem"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto px-4 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden">
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
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
                active
                  ? "bg-[var(--color-accent)] text-white shadow-sm ring-1 ring-[var(--color-accent)]/30"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
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
