"use client";

import * as React from "react";
import { profileData } from "@/data/profile";
import {
  ArrowDownRight,
  Download,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { GithubIcon, InstagramIcon } from "@/components/icons";

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Pengenalan Profil"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-[#DEDDD7] dark:border-[#30302D] editorial-grid"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Status & Meta Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#DEDDD7] dark:border-[#30302D] text-xs font-mono">
          <div className="flex items-center gap-3 text-[#70706C] dark:text-[#A5A39D]">
            <span>INDEX: 001/KOMAR</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">LOC: {profileData.location.toUpperCase()}</span>
            <span>•</span>
            <span>SPEC: FULL-STACK</span>
          </div>

          <div className="inline-flex items-center gap-2 self-start sm:self-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#285B4A] dark:bg-[#4E9A7E] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#285B4A] dark:bg-[#4E9A7E]" />
            </span>
            <span className="text-[#285B4A] dark:text-[#4E9A7E] font-medium tracking-wide">
              {profileData.status.label.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Main Editorial Headline */}
        <div className="py-10 sm:py-16 space-y-6">
          <div className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-widest text-[#70706C] dark:text-[#A5A39D]">
              Full-Stack Developer & Software Engineer
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#171717] dark:text-[#F2F0EA] leading-[1.08]">
              {profileData.name}
            </h1>
          </div>

          <p className="text-lg sm:text-2xl text-[#171717] dark:text-[#F2F0EA] max-w-3xl font-medium leading-snug">
            {profileData.subheadline}
          </p>

          <p className="text-sm sm:text-base text-[#70706C] dark:text-[#A5A39D] max-w-2xl leading-relaxed">
            Berfokus pada rekayasa antarmuka web reaktif, perancangan REST API terstruktur, serta integrasi database relasional dan cloud yang aman dan andal.
          </p>

          {/* Action Row */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-mono font-medium bg-[#171717] dark:bg-[#F2F0EA] text-[#F7F6F2] dark:text-[#141414] hover:bg-[#285B4A] dark:hover:bg-[#4E9A7E] transition-colors cursor-pointer"
            >
              <span>Lihat Proyek Pilihan</span>
              <ArrowDownRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-xs font-mono font-medium border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19] text-[#171717] dark:text-[#F2F0EA] hover:border-[#171717] dark:hover:border-[#F2F0EA] transition-colors cursor-pointer"
            >
              <span>Hubungi Saya</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={profileData.cvUrl}
              download="CV-Komarudin-FullStack.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-xs font-mono font-medium border border-[#DEDDD7] dark:border-[#30302D] bg-transparent text-[#70706C] dark:text-[#A5A39D] hover:text-[#171717] dark:hover:text-[#F2F0EA] hover:border-[#171717] dark:hover:border-[#F2F0EA] transition-colors"
              title="Download CV Komarudin (PDF)"
            >
              <Download className="w-3.5 h-3.5 text-[#285B4A] dark:text-[#4E9A7E]" />
              <span>Unduh CV [PDF]</span>
            </a>
          </div>
        </div>

        {/* Technical Spec Matrix / Architecture Ledger */}
        <div className="pt-8 border-t border-[#DEDDD7] dark:border-[#30302D]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Spec 1: Frontend Architecture */}
            <div className="space-y-2 p-5 rounded-lg border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF]/60 dark:bg-[#1A1A19]/60">
              <span className="font-mono text-[10px] text-[#285B4A] dark:text-[#4E9A7E] uppercase font-bold tracking-wider">
                01 / FRONTEND ENGINEERING
              </span>
              <h3 className="text-sm font-bold text-[#171717] dark:text-[#F2F0EA]">
                React & Next.js Ecosystem
              </h3>
              <p className="text-xs text-[#70706C] dark:text-[#A5A39D] leading-relaxed">
                App Router, Server Components, SSR/SSG, Strict TypeScript, Tailwind CSS, dan optimasi performa Core Web Vitals.
              </p>
            </div>

            {/* Spec 2: Backend & Database */}
            <div className="space-y-2 p-5 rounded-lg border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF]/60 dark:bg-[#1A1A19]/60">
              <span className="font-mono text-[10px] text-[#285B4A] dark:text-[#4E9A7E] uppercase font-bold tracking-wider">
                02 / BACKEND & DATABASE
              </span>
              <h3 className="text-sm font-bold text-[#171717] dark:text-[#F2F0EA]">
                Node.js & Relational Data
              </h3>
              <p className="text-xs text-[#70706C] dark:text-[#A5A39D] leading-relaxed">
                RESTful API routing, middleware JWT auth, PostgreSQL, Supabase Cloud, dan pemodelan skema ACID transaksi.
              </p>
            </div>

            {/* Spec 3: Verified Deployment */}
            <div className="space-y-2 p-5 rounded-lg border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF]/60 dark:bg-[#1A1A19]/60">
              <span className="font-mono text-[10px] text-[#285B4A] dark:text-[#4E9A7E] uppercase font-bold tracking-wider">
                03 / VERIFIED DEPLOYMENT
              </span>
              <h3 className="text-sm font-bold text-[#171717] dark:text-[#F2F0EA] flex items-center justify-between">
                <span>website-sekolah-sd</span>
                <a
                  href={profileData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#285B4A] dark:text-[#4E9A7E] hover:underline inline-flex items-center gap-1"
                >
                  <span>Live</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </h3>
              <p className="text-xs text-[#70706C] dark:text-[#A5A39D] leading-relaxed">
                Aplikasi produksi yang aktif melayani publikasi portal informasi sekolah secara cepat, responsif, dan terstruktur.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Ledger Metadata */}
        <div className="mt-8 pt-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#70706C] dark:text-[#A5A39D]">
          <div className="flex items-center gap-4">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#171717] dark:hover:text-[#F2F0EA] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>github/{profileData.username}</span>
            </a>
            <span>/</span>
            <a
              href={profileData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#171717] dark:hover:text-[#F2F0EA] transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>instagram</span>
            </a>
          </div>

          <div className="text-[11px]">
            NEXT.JS 16 • REACT 19 • TYPESCRIPT 5
          </div>
        </div>
      </div>
    </section>
  );
}
