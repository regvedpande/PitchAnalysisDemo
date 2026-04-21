"use client";

import { FormEvent, startTransition, useState } from "react";
import { useRouter } from "next/navigation";

import { powerUserCredentials, powerUserTemplate } from "@/lib/mock-data";

const storageKey = "perfect-pitch-demo-user";

type AuthMode = "login" | "register";

export function AuthPanel() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [email, setEmail] = useState(powerUserCredentials.email);
  const [password, setPassword] = useState(powerUserCredentials.password);
  const [name, setName] = useState(powerUserTemplate.name);
  const [company, setCompany] = useState("Perfect Pitch Team");
  const [statusMessage, setStatusMessage] = useState(
    "Use the prefilled power-user account to enter the full demo instantly.",
  );
  const router = useRouter();

  function persistUser(nextName: string, nextEmail: string, nextCompany: string) {
    if (typeof window === "undefined") return;

    const initials = nextName
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    window.localStorage.setItem(
      storageKey,
      JSON.stringify({
        ...powerUserTemplate,
        name: nextName,
        email: nextEmail,
        company: nextCompany,
        initials: initials || powerUserTemplate.initials,
      }),
    );
    window.dispatchEvent(new Event("perfect-pitch-user-change"));
  }

  function enterWorkspace(message: string) {
    setStatusMessage(message);
    startTransition(() => {
      router.push("/dashboard");
    });
  }

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    persistUser(powerUserTemplate.name, email, powerUserTemplate.company);
    enterWorkspace("Power user authenticated in demo mode. Redirecting to the dashboard.");
  }

  function handleRegistration(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    persistUser(name, email, company);
    enterWorkspace("Power user workspace created in demo mode. Opening the dashboard.");
  }

  return (
    <section className="surface-card flex flex-col justify-between gap-5 rounded-3xl p-6 sm:p-8">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
          Power User Access
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
          Enter the platform
        </h2>
        <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
          Log in to experience the Perfect Pitch dashboard. Your profile will be saved locally so you can explore the full coaching workflow.
        </p>
      </div>

      <div className="flex gap-2 rounded-full bg-slate-100 p-1">
        {(["login", "register"] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setMode(tab)}
            className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold capitalize transition ${
              mode === tab
                ? "bg-white text-[var(--color-accent)] shadow-sm"
                : "text-slate-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {mode === "login" ? (
        <form className="space-y-4" onSubmit={handleLogin}>
          <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-accent-soft)] p-4">
            <p className="text-sm font-semibold text-[var(--color-accent)]">
              Demo credentials
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Email: {powerUserCredentials.email}
              <br />
              Password: {powerUserCredentials.password}
            </p>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Work email
            </label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-surface-muted)] px-4 py-2.5 outline-none transition focus:border-[var(--color-accent)]"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-surface-muted)] px-4 py-2.5 outline-none transition focus:border-[var(--color-accent)]"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-brand)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-brand-strong)]"
          >
            Log In As Power User
          </button>
        </form>
      ) : (
        <form className="space-y-4" onSubmit={handleRegistration}>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Full name
            </label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-surface-muted)] px-4 py-2.5 outline-none transition focus:border-[var(--color-accent)]"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Work email
            </label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-surface-muted)] px-4 py-2.5 outline-none transition focus:border-[var(--color-accent)]"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Company
            </label>
            <input
              type="text"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              className="w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-surface-muted)] px-4 py-2.5 outline-none transition focus:border-[var(--color-accent)]"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-surface-muted)] px-4 py-2.5 outline-none transition focus:border-[var(--color-accent)]"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Register Power User
          </button>
        </form>
      )}

      <div className="rounded-2xl bg-[var(--color-brand-soft)] p-4">
        <p className="text-sm font-semibold text-[var(--color-brand-strong)]">
          Recruiter quick note
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700">{statusMessage}</p>
      </div>
    </section>
  );
}
