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
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  function persistUser(nextName: string, nextEmail: string, nextCompany: string) {
    if (typeof window === "undefined") return;

    const initials = nextName
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    const userData = {
      ...powerUserTemplate,
      name: nextName,
      email: nextEmail,
      company: nextCompany,
      initials: initials || powerUserTemplate.initials,
    };

    window.localStorage.setItem(storageKey, JSON.stringify(userData));
    
    // Set auth cookie
    document.cookie = `perfect-pitch-auth=true; path=/; max-age=604800`;
    
    window.dispatchEvent(new Event("perfect-pitch-user-change"));
  }

  function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function enterWorkspace() {
    setStatusMessage("Redirecting to dashboard...");
    startTransition(() => {
      router.push("/dashboard");
    });
  }

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }
    
    if (!password.trim()) {
      setError("Password is required");
      return;
    }

    setIsLoading(true);
    
    // Simulate auth delay
    setTimeout(() => {
      persistUser(powerUserTemplate.name, email, powerUserTemplate.company);
      enterWorkspace();
      setIsLoading(false);
    }, 500);
  }

  function handleRegistration(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    
    if (!name.trim()) {
      setError("Name is required");
      return;
    }
    
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }
    
    if (!company.trim()) {
      setError("Company is required");
      return;
    }
    
    if (!password.trim()) {
      setError("Password is required");
      return;
    }
    
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);
    
    // Simulate registration delay
    setTimeout(() => {
      persistUser(name, email, company);
      enterWorkspace();
      setIsLoading(false);
    }, 500);
  }

  return (
    <section className="flex flex-col justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-8">
      <div>
        <h2 className="text-3xl font-semibold text-slate-900">
          Perfect Pitch Demo
        </h2>
        <p className="mt-2 text-base text-slate-600">
          Sales pitch analysis and coaching platform
        </p>
        <p className="mt-3 text-sm text-slate-500">
          Sign in to access the demo dashboard and explore the full platform.
        </p>
      </div>

      <div className="flex gap-1 rounded-lg bg-slate-100 p-1">
        {(["login", "register"] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => {
              setMode(tab);
              setError("");
            }}
            disabled={isLoading}
            className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition ${
              mode === tab
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            } disabled:opacity-50`}
          >
            {tab === "login" ? "Sign In" : "Create Account"}
          </button>
        ))}
      </div>

      {mode === "login" ? (
        <form className="space-y-4" onSubmit={handleLogin}>
          <div className="rounded-lg border border-slate-200 bg-blue-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-900">
              Demo Account
            </p>
            <p className="mt-2 text-sm text-blue-800">
              <strong>{powerUserCredentials.email}</strong> / <strong>{powerUserCredentials.password}</strong>
            </p>
          </div>
          
          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-3">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="name@company.com"
              disabled={isLoading}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-200 disabled:bg-slate-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
              disabled={isLoading}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-200 disabled:bg-slate-50"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      ) : (
        <form className="space-y-4" onSubmit={handleRegistration}>
          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-3">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Jane Smith"
              disabled={isLoading}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-200 disabled:bg-slate-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="name@company.com"
              disabled={isLoading}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-200 disabled:bg-slate-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Company
            </label>
            <input
              type="text"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              placeholder="Your Company"
              disabled={isLoading}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-200 disabled:bg-slate-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
              disabled={isLoading}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-200 disabled:bg-slate-50"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? "Creating account..." : "Create Account"}
          </button>
        </form>
      )}

      {statusMessage && (
        <div className="rounded-lg border border-green-200 bg-green-50 p-3">
          <p className="text-sm text-green-800">{statusMessage}</p>
        </div>
      )}
    </section>
  );
}
