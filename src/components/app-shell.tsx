"use client";

import { ReactNode } from "react";

import { demoUser } from "@/lib/mock-data";

import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        <Sidebar />
        <div className="flex min-h-screen min-w-0 flex-1 flex-col">
          <Topbar user={demoUser} />
          <main className="flex-1 px-4 pb-10 pt-5 sm:px-6 lg:px-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
