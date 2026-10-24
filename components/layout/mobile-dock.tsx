"use client";

import * as React from "react";
import { Home, FolderGit2, Cpu, MessageSquare, ArrowUp } from "lucide-react";

const dockItems = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "Skills", href: "#skills", icon: Cpu },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Contact", href: "#contact", icon: MessageSquare },
];

export function MobileDock() {
  const [activeSection, setActiveSection] = React.useState("hero");
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 120);

      const sections = ["hero", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 200;

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
      const offset = target.getBoundingClientRect().top + window.scrollY - 64;
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
      className="md:hidden fixed bottom-4 inset-x-4 z-40 pointer-events-none transition-all duration-200 pb-safe"
    >
      <div className="max-w-xs mx-auto pointer-events-auto flex items-center justify-between gap-1 p-1 rounded-lg border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF]/95 dark:bg-[#1A1A19]/95 backdrop-blur-md shadow-md">
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.substring(1);
          return (
            <button
              key={item.href}
              type="button"
              onClick={() => scrollTo(item.href)}
              className={`flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded text-[10px] font-mono transition-colors active:scale-95 ${
                isActive
                  ? "bg-[#171717] dark:bg-[#F2F0EA] text-[#F7F6F2] dark:text-[#141414] font-medium"
                  : "text-[#70706C] dark:text-[#A5A39D] hover:text-[#171717] dark:hover:text-[#F2F0EA]"
              }`}
            >
              <Icon className="w-3.5 h-3.5 mb-0.5" />
              <span>{item.label}</span>
            </button>
          );
        })}

        <button
          type="button"
          onClick={scrollToTop}
          className="w-8 h-8 rounded flex items-center justify-center text-[#70706C] dark:text-[#A5A39D] hover:text-[#171717] dark:hover:text-[#F2F0EA] hover:bg-[#EFEFEA] dark:hover:bg-[#252524] transition-colors shrink-0"
          title="Ke atas"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
