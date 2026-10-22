"use client";

import * as React from "react";
import { profileData, quickStats } from "@/data/profile";
import {
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: <Layers className="w-5 h-5 text-sky-500" />,
      title: "Frontend Engineering",
      description:
        "Membangun antarmuka pengguna interaktif dengan React dan Next.js yang responsif, terstruktur, serta mengutamakan kecepatan akses dan SEO.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-500" />,
      title: "Backend & API Reliability",
      description:
        "Merancang arsitektur API RESTful yang modular, middleware validasi skema request, dan penanganan autentikasi yang aman.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      title: "Clean Code & Quality",
      description:
        "Menerapkan penulisan kode terstandar TypeScript, pemisahan tanggung jawab komponen, dan struktur folder yang mudah di-maintain.",
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: "Problem Solver Mindset",
      description:
        "Berorientasi pada solusi praktis untuk menjawab kebutuhan pengguna dan efisiensi operasional organisasi secara terukur.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tentang Saya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Membangun Solusi Digital dengan Ketelitian & Dedikasi
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Perpaduan antara logika sistem backend yang kokoh dan keindahan antarmuka frontend yang intuitif.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md shadow-xs space-y-5">
              <p className="text-base text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                {profileData.aboutIntro}
              </p>

              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {profileData.aboutDetails.map((detail, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-sky-500 shrink-0 mt-1" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Quick Contact summary */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span>Domain: Web Application Development</span>
                <span>•</span>
                <span>Stack: Next.js + TypeScript + Node.js</span>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {quickStats.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 backdrop-blur-sm text-center"
                >
                  <div className="text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="mt-1 text-sm font-bold text-slate-900 dark:text-slate-100">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/60 dark:bg-slate-900/50 hover:border-sky-500/50 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 shadow-xs hover:shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
