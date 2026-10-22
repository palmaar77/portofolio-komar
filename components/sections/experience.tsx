"use client";

import * as React from "react";
import { learningJourneyData, educationAndTrainingData } from "@/data/experience";
import {
  Sparkles,
  GraduationCap,
  Compass,
  Calendar,
  CheckCircle2,
} from "lucide-react";

export function ExperienceSection() {
  const [activeTab, setActiveTab] = React.useState<"journey" | "education">("journey");

  const items = activeTab === "journey" ? learningJourneyData : educationAndTrainingData;

  return (
    <section id="experience" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Perjalanan & Edukasi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Learning Journey & Rekam Jejak
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Evolusi proses belajar, proyek eksplorasi, dan pengembangan kompetensi di bidang rekayasa
            perangkat lunak yang berkesinambungan.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setActiveTab("journey")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeTab === "journey"
                  ? "bg-sky-500 text-white shadow-md shadow-sky-500/25"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Learning Journey & Proyek</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("education")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeTab === "education"
                  ? "bg-sky-500 text-white shadow-md shadow-sky-500/25"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Pendidikan & Pelatihan</span>
            </button>
          </div>
        </div>

        {/* Timeline Flow */}
        <div className="mt-16 max-w-4xl mx-auto relative">
          {/* Vertical central bar */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-sky-500 via-indigo-500 to-slate-300 dark:to-slate-800 -translate-x-1/2" />

          <div className="space-y-12">
            {items.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Marker */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-5 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-4 border-sky-500 shadow-md shadow-sky-500/30 z-10 flex items-center justify-center">
                    {item.isCurrent && (
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    )}
                  </div>

                  {/* Spacer for desktop alignment */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Content */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md shadow-sm hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300">
                      {/* Period Badge */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                          <Calendar className="w-3 h-3" />
                          <span>{item.period}</span>
                        </span>
                        {item.isCurrent && (
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                            Aktif
                          </span>
                        )}
                      </div>

                      <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                        {item.institutionOrRole}
                      </p>

                      <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5">
                        {item.highlights.map((hl, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-[11px] text-slate-600 dark:text-slate-400"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
