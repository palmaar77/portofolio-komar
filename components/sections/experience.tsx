"use client";

import * as React from "react";
import { learningJourneyData, educationAndTrainingData } from "@/data/experience";
import { Check } from "lucide-react";

export function ExperienceSection() {
  const [activeTab, setActiveTab] = React.useState<"journey" | "education">("journey");

  const items = activeTab === "journey" ? learningJourneyData : educationAndTrainingData;

  return (
    <section
      id="experience"
      aria-label="Pengalaman dan Pembelajaran"
      className="py-20 sm:py-28 border-b border-[#DEDDD7] dark:border-[#30302D]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#DEDDD7] dark:border-[#30302D] gap-4">
          <div>
            <span className="font-mono text-xs text-[#285B4A] dark:text-[#4E9A7E] uppercase font-bold tracking-wider">
              05 / TIMELINE & EVOLUTION
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#171717] dark:text-[#F2F0EA] mt-1">
              Jejak Rekayasa & Pembelajaran
            </h2>
          </div>
          <p className="text-xs font-mono text-[#70706C] dark:text-[#A5A39D] max-w-xs">
            Kronologi perkembangan kemampuan teknis dan implementasi proyek secara bertahap.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="mt-8 flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setActiveTab("journey")}
            className={`px-3.5 py-1.5 rounded text-xs font-mono transition-colors cursor-pointer ${
              activeTab === "journey"
                ? "bg-[#171717] dark:bg-[#F2F0EA] text-[#F7F6F2] dark:text-[#141414] font-semibold"
                : "border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19] text-[#70706C] dark:text-[#A5A39D] hover:text-[#171717] dark:hover:text-[#F2F0EA]"
            }`}
          >
            Learning Journey & Proyek
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("education")}
            className={`px-3.5 py-1.5 rounded text-xs font-mono transition-colors cursor-pointer ${
              activeTab === "education"
                ? "bg-[#171717] dark:bg-[#F2F0EA] text-[#F7F6F2] dark:text-[#141414] font-semibold"
                : "border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19] text-[#70706C] dark:text-[#A5A39D] hover:text-[#171717] dark:hover:text-[#F2F0EA]"
            }`}
          >
            Edukasi & Pelatihan Mandiri
          </button>
        </div>

        {/* Timeline Ledger */}
        <div className="mt-10 divide-y divide-[#DEDDD7] dark:divide-[#30302D] border-y border-[#DEDDD7] dark:border-[#30302D]">
          {items.map((item) => (
            <div
              key={item.id}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
            >
              {/* Period Column */}
              <div className="md:col-span-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#171717] dark:text-[#F2F0EA]">
                    {item.period}
                  </span>
                  {item.isCurrent && (
                    <span className="text-[10px] font-mono font-bold text-[#285B4A] dark:text-[#4E9A7E] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#285B4A]/10 dark:bg-[#4E9A7E]/10">
                      Aktif
                    </span>
                  )}
                </div>
                <p className="font-mono text-xs text-[#70706C] dark:text-[#A5A39D]">
                  {item.institutionOrRole}
                </p>
              </div>

              {/* Description & Milestones Column */}
              <div className="md:col-span-8 space-y-4">
                <h3 className="text-base sm:text-lg font-bold text-[#171717] dark:text-[#F2F0EA]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#70706C] dark:text-[#A5A39D] leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="pt-2 space-y-2">
                  {item.highlights.map((hl, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-[#171717] dark:text-[#F2F0EA]"
                    >
                      <span className="w-3.5 h-3.5 rounded-full bg-[#285B4A]/10 dark:bg-[#4E9A7E]/10 text-[#285B4A] dark:text-[#4E9A7E] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span className="leading-relaxed">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
