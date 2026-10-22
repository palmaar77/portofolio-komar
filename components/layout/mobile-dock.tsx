"use client";

import * as React from "react";
import { Home, FolderGit2, Cpu, MessageSquare, ArrowUp } from "lucide-react";

const dockItems = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "Skills", href: "#skills", icon: Cpu },
  { label: "Proyek", href: "#projects", icon: FolderGit2 },
  { label: "Kontak", href: "#contact", icon: MessageSquare },
];

export function MobileDock() {
  const [activeSection, setActiveSection] = React.useState("hero");
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Show dock after scrolling past initial 100px
      setIsVisible(window.scrollY > 100);

      const sections = ["hero", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Navigasi Cepat Mobile"
      className="md:hidden fixed bottom-4 inset-x-4 z-40 pointer-events-none transition-all duration-300 animate-fade-in pb-safe"
    >
      <div className="max-w-sm mx-auto pointer-events-auto flex items-center justify-between gap-1 p-1.5 rounded-2xl glass border border-slate-300/80 dark:border-slate-800/80 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.substring(1);
          return (
            <button
              key={item.href}
              type="button"
              onClick={() => scrollTo(item.href)}
              className={`flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl text-[10px] font-semibold transition-all duration-200 active:scale-95 ${
                isActive
                  ? "bg-sky-500 text-white shadow-md shadow-sky-500/30 scale-105"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Icon className="w-4 h-4 mb-0.5" />
              <span>{item.label}</span>
            </button>
          );
        })}

        {/* Small Scroll to Top Button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors shrink-0 active:scale-90"
          title="Ke atas"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
