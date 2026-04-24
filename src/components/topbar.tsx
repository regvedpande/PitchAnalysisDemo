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
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="flex flex-col gap-3 px-4 py-4 sm:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <Link href="/dashboard" className="text-lg font-bold text-slate-950 transition hover:text-[var(--color-accent)]">
              Perfect Pitch
            </Link>
            <span className="text-slate-300 font-light">/</span>
            <span className="font-medium">Demo</span>
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
              className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2.5 transition hover:border-slate-300"
              aria-label="User menu"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-accent)] text-xs font-bold text-white">
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
              <div className="absolute right-0 mt-2 w-48 rounded-lg border border-slate-200 bg-white shadow-sm">
                <div className="px-4 py-3 border-b border-slate-200">
                  <p className="text-sm font-semibold text-slate-900">{activeUser.name}</p>
                  <p className="text-xs text-slate-500">{activeUser.email}</p>
                </div>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition text-left"
                >
                  Sign out
                </button>
              </div>
            )}
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
              className={`rounded-lg px-3.5 py-1.5 text-sm font-semibold transition ${
                active
                  ? "border border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
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
