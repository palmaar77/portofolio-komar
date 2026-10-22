"use client";

import * as React from "react";
import { profileData } from "@/data/profile";
import {
  ArrowDown,
  ArrowRight,
  Download,
  Globe,
  Sparkles,
  Terminal,
  Code2,
  Database,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";
import { GithubIcon, InstagramIcon } from "@/components/icons";

export function HeroSection() {
  const [activeCodeTab, setActiveCodeTab] = React.useState<"api" | "db" | "client">("api");
  const [copiedSnippet, setCopiedSnippet] = React.useState(false);

  const codeSnippets = {
    api: `// app/api/v1/projects/route.ts
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');
  
  const projects = await db.project.findMany({
    where: category ? { category } : undefined,
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json({
    status: 200,
    data: projects,
  });
}`,
    db: `-- supabase/migrations/schema.sql
CREATE TABLE public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  summary TEXT,
  live_url TEXT,
  github_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read" ON public.projects 
  FOR SELECT USING (true);`,
    client: `// components/ProjectCard.tsx
export function ProjectCard({ project }: ProjectProps) {
  return (
    <article className="glass rounded-2xl p-6 hover:-translate-y-1 transition">
      <Badge variant="glow">{project.category}</Badge>
      <h3 className="text-xl font-bold mt-3">{project.title}</h3>
      <p className="text-muted mt-2 text-sm">{project.summary}</p>
      <div className="flex gap-2 mt-4 flex-wrap">
        {project.technologies.map(tech => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>
    </article>
  );
}`,
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab]);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center bg-grid-pattern overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-20 left-1/4 -translate-x-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-1/4 translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status & Role Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>{profileData.status.label}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300">
                <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                <span>{profileData.role}</span>
              </div>
            </div>

            {/* Main Name & Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15] sm:leading-[1.1]">
                Halo, saya{" "}
                <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                  {profileData.name}
                </span>
              </h1>
              <p className="text-lg sm:text-2xl font-bold text-slate-700 dark:text-slate-300">
                {profileData.tagline}
              </p>
            </div>

            {/* Subheadline description */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {profileData.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5">
              <a
                href="#projects"
                id="hero-view-projects-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-2xl sm:rounded-xl text-sm font-semibold bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white shadow-lg shadow-sky-500/25 active:scale-95 transition-all duration-200"
              >
                <span>Lihat Proyek</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                id="hero-contact-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-2xl sm:rounded-xl text-sm font-semibold border border-slate-300 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 shadow-sm active:scale-95 transition-all duration-200"
              >
                <span>Hubungi Saya</span>
              </a>

              <a
                href={profileData.cvUrl}
                download="CV-Komarudin-FullStack.pdf"
                id="hero-download-cv-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-3 rounded-2xl sm:rounded-xl text-sm font-semibold border border-sky-500/30 dark:border-sky-500/20 bg-sky-50 dark:bg-sky-950/30 text-sky-700 dark:text-sky-300 hover:bg-sky-100 dark:hover:bg-sky-900/40 active:scale-95 transition-all duration-200"
                title="Download CV Komarudin (PDF)"
              >
                <Download className="w-4 h-4 text-sky-500" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links & Location Quick Info */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                📍 {profileData.location}
              </span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-sky-500 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub ({profileData.username})</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href={profileData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-pink-500 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href={profileData.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-sky-500 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>Live Project</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 opacity-20 blur-xl" />

              {/* Terminal Frame */}
              <div className="relative rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-900 text-slate-100 shadow-2xl overflow-hidden font-mono text-xs">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-950/70">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-[11px] text-slate-400 ml-2">stack-architecture.ts</span>
                  </div>

                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-sky-400 transition-colors px-2 py-1 rounded bg-slate-800/60"
                    title="Salin cuplikan kode"
                  >
                    {copiedSnippet ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Salin</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Architecture Tabs */}
                <div className="flex border-b border-slate-800 bg-slate-950/40 px-2 text-[11px] overflow-x-auto no-scrollbar">
                  <button
                    onClick={() => setActiveCodeTab("api")}
                    className={`flex items-center gap-1.5 px-3 py-2 border-b-2 font-medium shrink-0 transition-colors ${
                      activeCodeTab === "api"
                        ? "border-sky-400 text-sky-400 bg-slate-800/40"
                        : "border-transparent text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>REST API Route</span>
                  </button>
                  <button
                    onClick={() => setActiveCodeTab("db")}
                    className={`flex items-center gap-1.5 px-3 py-2 border-b-2 font-medium shrink-0 transition-colors ${
                      activeCodeTab === "db"
                        ? "border-sky-400 text-sky-400 bg-slate-800/40"
                        : "border-transparent text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Database className="w-3.5 h-3.5" />
                    <span>Database Schema</span>
                  </button>
                  <button
                    onClick={() => setActiveCodeTab("client")}
                    className={`flex items-center gap-1.5 px-3 py-2 border-b-2 font-medium shrink-0 transition-colors ${
                      activeCodeTab === "client"
                        ? "border-sky-400 text-sky-400 bg-slate-800/40"
                        : "border-transparent text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>UI Component</span>
                  </button>
                </div>

                {/* Code Body */}
                <div className="p-4 overflow-x-auto min-h-[260px] text-slate-300 leading-relaxed">
                  <pre>
                    <code>{codeSnippets[activeCodeTab]}</code>
                  </pre>
                </div>

                {/* Terminal Footer Status */}
                <div className="px-4 py-2 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Ready for Production Deployment</span>
                  </span>
                  <span>TypeScript 5 • Next.js 16</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="pt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-colors animate-bounce"
            aria-label="Scroll ke bagian About Me"
          >
            <span>Eksplorasi Profil</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
