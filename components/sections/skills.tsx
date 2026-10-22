"use client";

import * as React from "react";
import { skillsData, skillCategories } from "@/data/skills";
import {
  Code,
  Server,
  Database,
  Wrench,
  Sparkles,
  Layers,
  CheckCircle2,
} from "lucide-react";

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");

  const filteredSkills = React.useMemo(() => {
    if (selectedCategory === "all") return skillsData;
    return skillsData.filter((skill) => skill.category === selectedCategory);
  }, [selectedCategory]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "frontend":
        return <Code className="w-4 h-4 text-sky-500" />;
      case "backend":
        return <Server className="w-4 h-4 text-indigo-500" />;
      case "database":
        return <Database className="w-4 h-4 text-emerald-500" />;
      case "tools":
        return <Wrench className="w-4 h-4 text-amber-500" />;
      default:
        return <Layers className="w-4 h-4 text-sky-500" />;
    }
  };

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "border-sky-500/20 bg-sky-500/10 text-sky-600 dark:text-sky-400";
      case "backend":
        return "border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400";
      case "database":
        return "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400";
      case "tools":
        return "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400";
      default:
        return "border-slate-500/20 bg-slate-500/10 text-slate-600 dark:text-slate-400";
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tech Stack & Keahlian</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Teknologi & Toolsets yang Digunakan
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Daftar teknologi modern yang saya kuasai dan implementasikan dalam pembangunan aplikasi web
            berperforma tinggi dari hulu ke hilir.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-8 sm:mt-10 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-2 -mx-4 px-4 sm:mx-0 sm:flex-wrap">
          {skillCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 sm:py-2 rounded-xl text-xs font-semibold shrink-0 transition-all duration-200 active:scale-95 ${
                  isSelected
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md shadow-slate-900/20 dark:shadow-white/10 scale-105"
                    : "border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-sky-500/10 group-hover:text-sky-500 transition-colors">
                      {getCategoryIcon(skill.category)}
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>

                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-md border uppercase font-medium ${getCategoryBadgeColor(
                      skill.category
                    )}`}
                  >
                    {skill.category}
                  </span>
                </div>

                <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {skill.isFeatured && (
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-[11px] font-medium text-sky-600 dark:text-sky-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Keahlian Utama</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
