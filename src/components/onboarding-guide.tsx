"use client";

import { useState } from "react";
import Link from "next/link";

export function OnboardingGuide() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return null;
  }

  const steps = [
    {
      title: "Dashboard",
      description: "View performance metrics and recent pitch activity at a glance",
      icon: "📊",
      link: "/dashboard",
    },
    {
      title: "Pitch Library",
      description: "Browse and filter completed analyses from your pitch library",
      icon: "📚",
      link: "/sales-pitches",
    },
    {
      title: "Detailed Analysis",
      description: "See AI coaching, admin feedback, and transcript-level insights",
      icon: "🔍",
      link: "/sales-pitches/pitch-101",
    },
    {
      title: "New Pitch",
      description: "Start recording a new pitch and submit for analysis",
      icon: "🎤",
      link: "/sales-pitches/new",
    },
  ];

  return (
    <div className="surface-card rounded-2xl border-2 border-[var(--color-accent)] p-6 bg-[var(--color-accent-soft)]/30">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-2xl">👋</span>
            <h3 className="text-lg font-semibold text-slate-950">
              Welcome to Perfect Pitch
            </h3>
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Explore how AI-powered coaching helps wealth advisors perfect their client pitches. Try the demo walkthrough below:
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {steps.map((step) => (
              <Link
                key={step.link}
                href={step.link}
                className="flex items-start gap-3 rounded-xl bg-white p-3 transition hover:shadow-md"
              >
                <span className="text-xl">{step.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900">
                    {step.title}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-600">
                    {step.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-600">
            💡 Tip: Start with the Dashboard to see overall performance, then explore a pitch analysis to understand how the coaching works.
          </p>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="flex-shrink-0 text-slate-400 transition hover:text-slate-600"
          aria-label="Close guide"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
