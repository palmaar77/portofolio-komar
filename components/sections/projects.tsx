"use client";

import * as React from "react";
import Image from "next/image";
import { projectsData, projectCategories } from "@/data/projects";
import { ProjectItem } from "@/types/portfolio";
import {
  ExternalLink,
  Search,
  X,
  Info,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [activeModalProject, setActiveModalProject] = React.useState<ProjectItem | null>(null);

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (activeModalProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeModalProject]);

  // Handle ESC key for modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModalProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredProjects = React.useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(q)) ||
        project.problemSolved.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Separate the premier flagship project when viewing "all" with no search
  const isDefaultView = selectedCategory === "all" && !searchQuery.trim();
  const flagshipProject = isDefaultView
    ? filteredProjects.find((p) => p.id === "website-sekolah-sd") || filteredProjects[0]
    : null;
  const remainingProjects = isDefaultView
    ? filteredProjects.filter((p) => p.id !== flagshipProject?.id)
    : filteredProjects;

  return (
    <section
      id="projects"
      aria-label="Portofolio Proyek"
      className="py-20 sm:py-28 border-b border-[#DEDDD7] dark:border-[#30302D]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#DEDDD7] dark:border-[#30302D] gap-4">
          <div>
            <span className="font-mono text-xs text-[#285B4A] dark:text-[#4E9A7E] uppercase font-bold tracking-wider">
              04 / VERIFIED WORK
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#171717] dark:text-[#F2F0EA] mt-1">
              Portofolio Proyek & Studi Kasus
            </h2>
          </div>
          <p className="text-xs font-mono text-[#70706C] dark:text-[#A5A39D] max-w-xs">
            Implementasi nyata yang membuktikan kapabilitas arsitektur software dari frontend hingga backend.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {projectCategories.map((cat) => {
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

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#70706C] dark:text-[#A5A39D]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari proyek / stack..."
              className="w-full pl-8 pr-7 py-1.5 rounded text-xs font-mono border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19] text-[#171717] dark:text-[#F2F0EA] placeholder-[#70706C] dark:placeholder-[#A5A39D] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#285B4A]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#70706C] hover:text-[#171717] dark:hover:text-[#F2F0EA]"
                aria-label="Bersihkan pencarian"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Flagship Featured Showcase (When default all view is active) */}
        {flagshipProject && (
          <div className="mt-8 p-6 sm:p-8 rounded-lg border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19]">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#DEDDD7] dark:border-[#30302D] text-xs font-mono">
              <span className="text-[#285B4A] dark:text-[#4E9A7E] font-bold tracking-wider">
                ● PROYEK UNGGULAN PRODUKSI (FLAGSHIP)
              </span>
              <span className="text-[#70706C] dark:text-[#A5A39D]">
                STATUS: {flagshipProject.statusBadge.toUpperCase()}
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <span className="font-mono text-[11px] text-[#70706C] dark:text-[#A5A39D] uppercase">
                    {flagshipProject.categoryLabel}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#171717] dark:text-[#F2F0EA] mt-1">
                    {flagshipProject.title}
                  </h3>
                </div>

                <p className="text-sm text-[#70706C] dark:text-[#A5A39D] leading-relaxed">
                  {flagshipProject.summary}
                </p>

                <div className="p-3.5 rounded border border-[#DEDDD7] dark:border-[#30302D] bg-[#F7F6F2] dark:bg-[#141414] text-xs">
                  <span className="font-mono font-bold text-[#171717] dark:text-[#F2F0EA] block mb-1">
                    TARGET & SOLUSI:
                  </span>
                  <p className="text-[#70706C] dark:text-[#A5A39D] leading-relaxed">
                    {flagshipProject.problemSolved}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {flagshipProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19] text-[#171717] dark:text-[#F2F0EA]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  {flagshipProject.liveUrl && (
                    <a
                      href={flagshipProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded text-xs font-mono font-medium bg-[#171717] dark:bg-[#F2F0EA] text-[#F7F6F2] dark:text-[#141414] hover:bg-[#285B4A] dark:hover:bg-[#4E9A7E] transition-colors"
                    >
                      <span>Buka Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {flagshipProject.githubUrl && (
                    <a
                      href={flagshipProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs font-mono font-medium border border-[#DEDDD7] dark:border-[#30302D] bg-transparent text-[#171717] dark:text-[#F2F0EA] hover:border-[#171717] dark:hover:border-[#F2F0EA] transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(flagshipProject)}
                    className="inline-flex items-center gap-1 px-3.5 py-2 rounded text-xs font-mono font-medium text-[#285B4A] dark:text-[#4E9A7E] hover:underline cursor-pointer"
                  >
                    <span>Detail Fitur & Studi Kasus →</span>
                  </button>
                </div>
              </div>

              {/* Right Visual Image */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[16/10] rounded border border-[#DEDDD7] dark:border-[#30302D] bg-[#141414] overflow-hidden group">
                  <Image
                    src={flagshipProject.image}
                    alt={`Preview ${flagshipProject.title}`}
                    width={600}
                    height={380}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/75 text-[10px] font-mono text-white">
                    LIVE PRODUCTION PREVIEW
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="mt-12 text-center py-16 border border-dashed border-[#DEDDD7] dark:border-[#30302D] rounded-lg">
            <Info className="w-8 h-8 text-[#70706C] dark:text-[#A5A39D] mx-auto mb-2" />
            <h3 className="text-sm font-bold text-[#171717] dark:text-[#F2F0EA]">
              Tidak ada proyek yang sesuai
            </h3>
            <p className="text-xs text-[#70706C] dark:text-[#A5A39D] mt-1 font-mono">
              Silakan atur ulang kata kunci pencarian atau pilih kategori lain.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 px-3 py-1.5 text-xs font-mono bg-[#171717] dark:bg-[#F2F0EA] text-[#F7F6F2] dark:text-[#141414] rounded cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {remainingProjects.map((project) => (
              <article
                key={project.id}
                className="p-6 rounded-lg border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19] flex flex-col justify-between hover:border-[#171717] dark:hover:border-[#F2F0EA] transition-colors"
              >
                <div className="space-y-4">
                  {/* Top Meta */}
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#DEDDD7]/60 dark:border-[#30302D]/60 text-xs font-mono">
                    <span className="text-[#70706C] dark:text-[#A5A39D] uppercase">
                      {project.categoryLabel}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded border border-[#DEDDD7] dark:border-[#30302D] bg-[#F7F6F2] dark:bg-[#141414] font-medium">
                      {project.statusBadge}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <div>
                    <h3 className="text-base font-bold text-[#171717] dark:text-[#F2F0EA]">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#70706C] dark:text-[#A5A39D] leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  {/* Image Preview thumbnail */}
                  <div className="relative aspect-[16/9] rounded border border-[#DEDDD7]/80 dark:border-[#30302D]/80 bg-[#141414] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`Preview ${project.title}`}
                      width={500}
                      height={280}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#EFEFEA] dark:bg-[#252524] text-[#171717] dark:text-[#F2F0EA]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-4 mt-4 border-t border-[#DEDDD7]/60 dark:border-[#30302D]/60 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#285B4A] dark:text-[#4E9A7E] hover:underline cursor-pointer"
                  >
                    <span>Detail Spesifikasi →</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded border border-[#DEDDD7] dark:border-[#30302D] hover:border-[#171717] dark:hover:border-[#F2F0EA] text-[#70706C] dark:text-[#A5A39D] transition-colors"
                        title="Repository GitHub"
                        aria-label="Repository GitHub"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded text-xs font-mono font-medium bg-[#171717] dark:bg-[#F2F0EA] text-[#F7F6F2] dark:text-[#141414] hover:bg-[#285B4A] dark:hover:bg-[#4E9A7E] transition-colors"
                        title="Kunjungi Demo"
                      >
                        <span>Demo</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Project Detail / Case Study Modal Dialog */}
        {activeModalProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          >
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg border border-[#DEDDD7] dark:border-[#30302D] bg-[#F7F6F2] dark:bg-[#141414] p-6 sm:p-8 shadow-2xl">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-1.5 rounded border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19] text-[#70706C] dark:text-[#A5A39D] hover:text-[#171717] dark:hover:text-[#F2F0EA] transition-colors cursor-pointer"
                aria-label="Tutup jendela studi kasus"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-1 pb-4 border-b border-[#DEDDD7] dark:border-[#30302D]">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-[#285B4A] dark:text-[#4E9A7E] font-bold">
                      {activeModalProject.categoryLabel}
                    </span>
                    <span>•</span>
                    <span className="text-[#70706C] dark:text-[#A5A39D]">
                      {activeModalProject.statusBadge}
                    </span>
                  </div>
                  <h3
                    id="modal-title"
                    className="text-xl sm:text-2xl font-extrabold text-[#171717] dark:text-[#F2F0EA] pt-1"
                  >
                    {activeModalProject.title}
                  </h3>
                </div>

                {/* Summary */}
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#70706C] dark:text-[#A5A39D] mb-1">
                    Ringkasan Proyek
                  </h4>
                  <p className="text-sm text-[#171717] dark:text-[#F2F0EA] leading-relaxed">
                    {activeModalProject.summary}
                  </p>
                </div>

                {/* Problem Solved */}
                <div className="p-4 rounded border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19]">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#171717] dark:text-[#F2F0EA] font-bold mb-1">
                    Tantangan & Solusi Rekayasa:
                  </h4>
                  <p className="text-xs text-[#70706C] dark:text-[#A5A39D] leading-relaxed">
                    {activeModalProject.problemSolved}
                  </p>
                </div>

                {/* Features list */}
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#70706C] dark:text-[#A5A39D] mb-2">
                    Fitur & Modul Utama
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#171717] dark:text-[#F2F0EA]">
                    {activeModalProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#285B4A] dark:text-[#4E9A7E] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#70706C] dark:text-[#A5A39D] mb-2">
                    Teknologi yang Digunakan
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-xs font-mono border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19] text-[#171717] dark:text-[#F2F0EA]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#DEDDD7] dark:border-[#30302D] flex flex-wrap items-center justify-end gap-3">
                  {activeModalProject.githubUrl && (
                    <a
                      href={activeModalProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs font-mono font-medium border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19] text-[#171717] dark:text-[#F2F0EA] hover:border-[#171717] dark:hover:border-[#F2F0EA] transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Lihat Kode di GitHub</span>
                    </a>
                  )}

                  {activeModalProject.liveUrl && (
                    <a
                      href={activeModalProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded text-xs font-mono font-medium bg-[#171717] dark:bg-[#F2F0EA] text-[#F7F6F2] dark:text-[#141414] hover:bg-[#285B4A] dark:hover:bg-[#4E9A7E] transition-colors"
                    >
                      <span>Kunjungi Demo Langsung</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
