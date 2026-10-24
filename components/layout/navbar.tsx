"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Overview", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#experience" },
  { label: "Code", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 160;

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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Handle ESC key to close mobile menu
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-[#F7F6F2]/90 dark:bg-[#141414]/90 backdrop-blur-md border-b border-[#DEDDD7] dark:border-[#30302D] py-3"
          : "bg-transparent py-4 sm:py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Developer Wordmark */}
          <Link
            href="#hero"
            onClick={(e) => scrollToSection(e, "#hero")}
            className="group flex items-baseline gap-2 text-[#171717] dark:text-[#F2F0EA]"
          >
            <span className="font-mono text-xs text-[#285B4A] dark:text-[#4E9A7E] font-bold">
              01
            </span>
            <span className="font-bold tracking-tight text-sm uppercase">
              Komarudin
            </span>
            <span className="hidden sm:inline font-mono text-[10px] text-[#70706C] dark:text-[#A5A39D] tracking-wider uppercase">
              / Full-Stack
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden md:flex items-center gap-1 border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF]/80 dark:bg-[#1A1A19]/80 backdrop-blur-sm rounded-lg px-2 py-1"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-3 py-1.5 text-xs font-mono transition-colors duration-150 rounded ${
                    isActive
                      ? "text-[#171717] dark:text-[#F2F0EA] font-semibold bg-[#EFEFEA] dark:bg-[#252524]"
                      : "text-[#70706C] dark:text-[#A5A39D] hover:text-[#171717] dark:hover:text-[#F2F0EA]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right actions: ThemeToggle + Minimal CTA button */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              id="navbar-cta-btn"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-md text-xs font-mono font-medium bg-[#171717] dark:bg-[#F2F0EA] text-[#F7F6F2] dark:text-[#141414] hover:bg-[#285B4A] dark:hover:bg-[#4E9A7E] dark:hover:text-[#141414] transition-colors"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              id="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-md border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19] text-[#171717] dark:text-[#F2F0EA] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#285B4A]"
              aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="md:hidden fixed inset-0 top-[57px] bg-black/40 backdrop-blur-xs z-40 transition-opacity"
            aria-hidden="true"
          />

          <div className="md:hidden relative z-50 border-b border-[#DEDDD7] dark:border-[#30302D] bg-[#F7F6F2] dark:bg-[#141414] px-5 py-4 transition-all shadow-lg">
            <div className="flex flex-col space-y-1">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded text-xs font-mono transition-colors ${
                      isActive
                        ? "bg-[#EFEFEA] dark:bg-[#1C1C1B] text-[#171717] dark:text-[#F2F0EA] font-semibold"
                        : "text-[#70706C] dark:text-[#A5A39D] hover:text-[#171717] dark:hover:text-[#F2F0EA]"
                    }`}
                  >
                    <span>0{idx + 1}. {item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-[#DEDDD7] dark:border-[#30302D] flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "#contact")}
                  className="w-full text-center py-2.5 rounded text-xs font-mono font-medium bg-[#171717] dark:bg-[#F2F0EA] text-[#F7F6F2] dark:text-[#141414]"
                >
                  Hubungi Sekarang →
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
