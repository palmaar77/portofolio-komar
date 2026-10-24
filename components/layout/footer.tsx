"use client";

import * as React from "react";
import { ArrowUp, Globe, Mail } from "lucide-react";
import { GithubIcon, InstagramIcon } from "@/components/icons";
import { profileData } from "@/data/profile";

export function Footer() {
  const currentYear = React.useSyncExternalStore(
    () => () => {},
    () => new Date().getFullYear(),
    () => 2026
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-[#DEDDD7] dark:border-[#30302D] bg-[#F7F6F2] dark:bg-[#141414] pt-14 pb-24 md:pb-14 pb-safe">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#DEDDD7] dark:border-[#30302D]">
          {/* Col 1: Identity & Statement */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#285B4A] dark:text-[#4E9A7E] font-bold">
                08
              </span>
              <span className="font-bold tracking-tight text-sm uppercase text-[#171717] dark:text-[#F2F0EA]">
                {profileData.name}
              </span>
              <span className="font-mono text-[10px] text-[#70706C] dark:text-[#A5A39D] uppercase">
                / {profileData.role}
              </span>
            </div>

            <p className="text-xs text-[#70706C] dark:text-[#A5A39D] max-w-md leading-relaxed">
              Studio rekayasa web personal. Berfokus pada perancangan arsitektur web modern, keandalan REST API, dan antarmuka reaktif yang responsif dan terstandar.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded border border-[#DEDDD7] dark:border-[#30302D] hover:border-[#171717] dark:hover:border-[#F2F0EA] text-[#70706C] dark:text-[#A5A39D] hover:text-[#171717] dark:hover:text-[#F2F0EA] transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={profileData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded border border-[#DEDDD7] dark:border-[#30302D] hover:border-[#171717] dark:hover:border-[#F2F0EA] text-[#70706C] dark:text-[#A5A39D] hover:text-[#171717] dark:hover:text-[#F2F0EA] transition-colors"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={profileData.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded border border-[#DEDDD7] dark:border-[#30302D] hover:border-[#171717] dark:hover:border-[#F2F0EA] text-[#70706C] dark:text-[#A5A39D] hover:text-[#171717] dark:hover:text-[#F2F0EA] transition-colors"
                aria-label="Live Demo Website Sekolah"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>

              <a
                href={`mailto:${profileData.email}`}
                className="p-1.5 rounded border border-[#DEDDD7] dark:border-[#30302D] hover:border-[#171717] dark:hover:border-[#F2F0EA] text-[#70706C] dark:text-[#A5A39D] hover:text-[#171717] dark:hover:text-[#F2F0EA] transition-colors"
                aria-label="Kirim Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-mono text-[10px] uppercase text-[#171717] dark:text-[#F2F0EA] font-bold tracking-wider">
              NAVIGASI
            </span>
            <ul className="space-y-1.5 text-xs font-mono text-[#70706C] dark:text-[#A5A39D]">
              <li>
                <a href="#hero" className="hover:text-[#171717] dark:hover:text-[#F2F0EA] transition-colors">
                  01. Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#171717] dark:hover:text-[#F2F0EA] transition-colors">
                  02. About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#171717] dark:hover:text-[#F2F0EA] transition-colors">
                  03. Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#171717] dark:hover:text-[#F2F0EA] transition-colors">
                  04. Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#171717] dark:hover:text-[#F2F0EA] transition-colors">
                  05. Journey
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#171717] dark:hover:text-[#F2F0EA] transition-colors">
                  07. Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct info & Scroll to Top */}
          <div className="md:col-span-3 space-y-3 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase text-[#171717] dark:text-[#F2F0EA] font-bold tracking-wider">
                LOKASI & STATUS
              </span>
              <p className="mt-1 text-xs font-mono text-[#70706C] dark:text-[#A5A39D]">
                {profileData.location} (WIB / UTC+7)
              </p>
              <p className="text-xs font-mono text-[#285B4A] dark:text-[#4E9A7E] mt-0.5">
                ● {profileData.status.label}
              </p>
            </div>

            <button
              type="button"
              id="back-to-top-btn"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19] text-[#70706C] dark:text-[#A5A39D] hover:text-[#171717] dark:hover:text-[#F2F0EA] hover:border-[#171717] dark:hover:border-[#F2F0EA] transition-colors self-start cursor-pointer"
              aria-label="Kembali ke atas halaman"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] font-mono text-[#70706C] dark:text-[#A5A39D]">
          <p>© {currentYear} {profileData.name} ({profileData.username}).</p>
          <p>BUILT WITH NEXT.JS 16 • TYPESCRIPT 5 • TAILWIND CSS</p>
        </div>
      </div>
    </footer>
  );
}
