"use client";

import * as React from "react";
import { GitHubStats } from "@/types/portfolio";
import {
  Star,
  GitFork,
  BookMarked,
  ExternalLink,
  Sparkles,
  Code2,
  Users,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";

export function GitHubActivitySection() {
  const [stats, setStats] = React.useState<GitHubStats | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [isLiveSource, setIsLiveSource] = React.useState<boolean>(false);

  React.useEffect(() => {
    let isMounted = true;

    async function loadGitHub() {
      try {
        const res = await fetch("/api/github");
        if (res.ok) {
          const json = await res.json();
          if (isMounted && json.data) {
            setStats(json.data);
            setIsLiveSource(json.source === "live");
          }
        }
      } catch (err) {
        console.error("Failed to load github stats", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadGitHub();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="github" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open Source & Kode</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Aktivitas & Repositori GitHub
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Eksplorasi kontribusi kode terbuka, proyek eksperimental, dan modul web yang saya bagikan di
            platform GitHub.
          </p>
        </div>

        {/* GitHub Overview Box */}
        <div className="mt-12 max-w-5xl mx-auto">
          {loading ? (
            <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 animate-pulse space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-slate-300 dark:bg-slate-800" />
                <div className="space-y-2">
                  <div className="w-32 h-4 bg-slate-300 dark:bg-slate-800 rounded" />
                  <div className="w-48 h-3 bg-slate-200 dark:bg-slate-800/60 rounded" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="h-20 bg-slate-200 dark:bg-slate-800/40 rounded-2xl" />
                <div className="h-20 bg-slate-200 dark:bg-slate-800/40 rounded-2xl" />
                <div className="h-20 bg-slate-200 dark:bg-slate-800/40 rounded-2xl" />
              </div>
            </div>
          ) : stats ? (
            <div className="space-y-8">
              {/* Profile Card Banner */}
              <div className="p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4 text-center sm:text-left">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-950 p-1 shadow-md border border-slate-700/50 flex items-center justify-center text-white shrink-0">
                    <GithubIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        @{stats.username}
                      </h3>
                      {isLiveSource && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                          Live Sync
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md">
                      {stats.bio}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={stats.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-sm"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Buka Profil GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/60 dark:bg-slate-900/50 text-center">
                  <BookMarked className="w-4 h-4 text-sky-500 mx-auto mb-1" />
                  <div className="text-xl font-bold text-slate-900 dark:text-white">
                    {stats.publicRepos}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500">Public Repositories</div>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/60 dark:bg-slate-900/50 text-center">
                  <Users className="w-4 h-4 text-indigo-500 mx-auto mb-1" />
                  <div className="text-xl font-bold text-slate-900 dark:text-white">
                    {stats.followers}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500">Followers</div>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/60 dark:bg-slate-900/50 text-center">
                  <Code2 className="w-4 h-4 text-emerald-500 mx-auto mb-1" />
                  <div className="text-xl font-bold text-slate-900 dark:text-white">
                    TypeScript
                  </div>
                  <div className="text-[11px] font-mono text-slate-500">Bahasa Utama</div>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/60 dark:bg-slate-900/50 text-center">
                  <Star className="w-4 h-4 text-amber-500 mx-auto mb-1" />
                  <div className="text-xl font-bold text-slate-900 dark:text-white">
                    Active
                  </div>
                  <div className="text-[11px] font-mono text-slate-500">Status Kontribusi</div>
                </div>
              </div>

              {/* Repositories Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {stats.topRepos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/60 dark:bg-slate-900/50 hover:border-sky-500/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <BookMarked className="w-4 h-4 text-sky-500 shrink-0" />
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors truncate">
                            {repo.name}
                          </h4>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-500 shrink-0" />
                      </div>

                      <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                        {repo.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="flex items-center gap-1.5 font-medium">
                        <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
                        <span>{repo.language}</span>
                      </span>

                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-amber-500" />
                          <span>{repo.stars}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3 h-3 text-slate-400" />
                          <span>{repo.forks}</span>
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
