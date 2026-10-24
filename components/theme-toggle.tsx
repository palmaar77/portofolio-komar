"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div
        className={`w-8 h-8 rounded-md border border-[#DEDDD7] dark:border-[#30302D] bg-transparent opacity-50 flex items-center justify-center ${className}`}
        aria-hidden="true"
      >
        <span className="w-3.5 h-3.5" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark" || theme === "dark";

  return (
    <button
      type="button"
      id="theme-toggle-btn"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative inline-flex items-center justify-center w-8 h-8 rounded-md border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19] hover:border-[#171717] dark:hover:border-[#F2F0EA] text-[#171717] dark:text-[#F2F0EA] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#285B4A] dark:focus-visible:ring-[#4E9A7E] cursor-pointer ${className}`}
      title={isDark ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
      aria-label="Toggle tema gelap atau terang"
    >
      {isDark ? (
        <Sun className="w-3.5 h-3.5 text-[#A5A39D] hover:text-[#F2F0EA] transition-colors" />
      ) : (
        <Moon className="w-3.5 h-3.5 text-[#70706C] hover:text-[#171717] transition-colors" />
      )}
    </button>
  );
}
