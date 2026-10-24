"use client";

import * as React from "react";
import { skillsData, skillCategories } from "@/data/skills";

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");

  const filteredSkills = React.useMemo(() => {
    if (selectedCategory === "all") return skillsData;
    return skillsData.filter((skill) => skill.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      id="skills"
      aria-label="Keahlian dan Teknologi"
      className="py-20 sm:py-28 border-b border-[#DEDDD7] dark:border-[#30302D]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#DEDDD7] dark:border-[#30302D] gap-4">
          <div>
            <span className="font-mono text-xs text-[#285B4A] dark:text-[#4E9A7E] uppercase font-bold tracking-wider">
              03 / TECHNICAL TAXONOMY
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#171717] dark:text-[#F2F0EA] mt-1">
              Teknologi & Stack Rekayasa
            </h2>
          </div>
          <p className="text-xs font-mono text-[#70706C] dark:text-[#A5A39D] max-w-xs">
            Katalog toolset dan spesialisasi teknis yang benar-benar diterapkan dalam proyek riil.
          </p>
        </div>

        {/* Filter Row */}
        <div className="mt-8 flex items-center gap-1.5 overflow-x-auto no-scrollbar py-2">
          {skillCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded text-xs font-mono transition-colors shrink-0 cursor-pointer ${
                  isSelected
                    ? "bg-[#171717] dark:bg-[#F2F0EA] text-[#F7F6F2] dark:text-[#141414] font-semibold"
                    : "border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19] text-[#70706C] dark:text-[#A5A39D] hover:text-[#171717] dark:hover:text-[#F2F0EA]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Technical Taxonomy Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-lg border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19] flex flex-col justify-between hover:border-[#171717] dark:hover:border-[#F2F0EA] transition-colors"
            >
              <div>
                <div className="flex items-baseline justify-between gap-2 pb-2 border-b border-[#DEDDD7]/60 dark:border-[#30302D]/60">
                  <h3 className="font-bold text-sm text-[#171717] dark:text-[#F2F0EA]">
                    {skill.name}
                  </h3>
                  <span className="font-mono text-[10px] uppercase text-[#70706C] dark:text-[#A5A39D]">
                    {skill.category}
                  </span>
                </div>

                <p className="mt-3 text-xs text-[#70706C] dark:text-[#A5A39D] leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {skill.isFeatured && (
                <div className="mt-4 pt-2.5 border-t border-[#DEDDD7]/40 dark:border-[#30302D]/40 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#285B4A] dark:text-[#4E9A7E] font-semibold">
                    ● CORE COMPETENCY
                  </span>
                  <span className="text-[#70706C] dark:text-[#A5A39D]">VERIFIED</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
