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
    <footer className="relative border-t border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/70 backdrop-blur-md pt-14 sm:pt-16 pb-24 md:pb-12 pb-safe overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-sky-500/5 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800/60">
          {/* Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-sm font-mono font-bold text-sm">
                K.
              </div>
              <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white">
                {profileData.name}
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Full-Stack Developer yang fokus pada pembangunan solusi web modern, performa tinggi,
              dan arsitektur yang scalable. Mengintegrasikan frontend interaktif dan backend andal.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/70 hover:border-sky-500 hover:text-sky-500 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/70 hover:border-pink-500 hover:text-pink-500 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all duration-200"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/70 hover:border-sky-500 hover:text-sky-500 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all duration-200"
                aria-label="Website Sekolah SD"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/70 hover:border-sky-500 hover:text-sky-500 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all duration-200"
                aria-label="Kirim Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-slate-200 font-semibold">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#hero" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                  Tentang Saya
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                  Tech Stack & Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                  Timeline Perjalanan
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                  Hubungi Saya
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact info & Top button */}
          <div className="space-y-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-slate-200 font-semibold">
                Kontak Langsung
              </h4>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 break-all">
                {profileData.email}
              </p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1">
                ● {profileData.status.label}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                Lokasi: {profileData.location}
              </p>
            </div>

            <button
              type="button"
              id="back-to-top-btn"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/70 hover:border-sky-500 text-slate-700 dark:text-slate-300 transition-all duration-200 self-start"
              aria-label="Kembali ke atas halaman"
            >
              <ArrowUp className="w-3.5 h-3.5 text-sky-500" />
              <span>Kembali ke Atas</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>© {currentYear} {profileData.name} ({profileData.username}). Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1">
            Built with Next.js App Router, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
