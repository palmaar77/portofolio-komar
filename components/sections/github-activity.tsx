"use client";

import * as React from "react";
import { GitHubStats } from "@/types/portfolio";
import {
  Star,
  GitFork,
  ExternalLink,
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
    <section
      id="github"
      aria-label="Aktivitas GitHub"
      className="py-20 sm:py-28 border-b border-[#DEDDD7] dark:border-[#30302D]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#DEDDD7] dark:border-[#30302D] gap-4">
          <div>
            <span className="font-mono text-xs text-[#285B4A] dark:text-[#4E9A7E] uppercase font-bold tracking-wider">
              06 / OPEN SOURCE & REPOSITORIES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#171717] dark:text-[#F2F0EA] mt-1">
              Repositori & Aktivitas Kode
            </h2>
          </div>
          <p className="text-xs font-mono text-[#70706C] dark:text-[#A5A39D] max-w-xs">
            Koleksi repositori publik, arsitektur modul web, dan eksplorasi teknis di GitHub.
          </p>
        </div>

        {/* Content Box */}
        <div className="mt-8">
          {loading ? (
            <div className="p-8 rounded-lg border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19] animate-pulse space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-[#EFEFEA] dark:bg-[#252524]" />
                <div className="space-y-2">
                  <div className="w-32 h-3.5 bg-[#EFEFEA] dark:bg-[#252524] rounded" />
                  <div className="w-48 h-3 bg-[#EFEFEA] dark:bg-[#252524] rounded" />
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="h-16 bg-[#EFEFEA] dark:bg-[#252524] rounded" />
                <div className="h-16 bg-[#EFEFEA] dark:bg-[#252524] rounded" />
                <div className="h-16 bg-[#EFEFEA] dark:bg-[#252524] rounded" />
                <div className="h-16 bg-[#EFEFEA] dark:bg-[#252524] rounded" />
              </div>
            </div>
          ) : stats ? (
            <div className="space-y-6">
              {/* Profile Banner */}
              <div className="p-6 rounded-lg border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded border border-[#DEDDD7] dark:border-[#30302D] bg-[#F7F6F2] dark:bg-[#141414] flex items-center justify-center text-[#171717] dark:text-[#F2F0EA] shrink-0">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-sm text-[#171717] dark:text-[#F2F0EA]">
                        github.com/{stats.username}
                      </h3>
                      {isLiveSource && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#285B4A]/10 dark:bg-[#4E9A7E]/10 text-[#285B4A] dark:text-[#4E9A7E] font-medium">
                          Live Sync
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#70706C] dark:text-[#A5A39D] mt-0.5">
                      {stats.bio}
                    </p>
                  </div>
                </div>

                <a
                  href={stats.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs font-mono font-medium border border-[#DEDDD7] dark:border-[#30302D] bg-transparent text-[#171717] dark:text-[#F2F0EA] hover:border-[#171717] dark:hover:border-[#F2F0EA] transition-colors shrink-0"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Kunjungi Profil</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 rounded-lg border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19]">
                  <div className="text-xl font-bold font-mono text-[#171717] dark:text-[#F2F0EA]">
                    {stats.publicRepos}
                  </div>
                  <div className="text-[11px] font-mono text-[#70706C] dark:text-[#A5A39D] mt-0.5">
                    Public Repos
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19]">
                  <div className="text-xl font-bold font-mono text-[#171717] dark:text-[#F2F0EA]">
                    {stats.followers}
                  </div>
                  <div className="text-[11px] font-mono text-[#70706C] dark:text-[#A5A39D] mt-0.5">
                    Followers
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19]">
                  <div className="text-xl font-bold font-mono text-[#171717] dark:text-[#F2F0EA]">
                    TypeScript
                  </div>
                  <div className="text-[11px] font-mono text-[#70706C] dark:text-[#A5A39D] mt-0.5">
                    Bahasa Dominan
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19]">
                  <div className="text-xl font-bold font-mono text-[#285B4A] dark:text-[#4E9A7E]">
                    Aktif
                  </div>
                  <div className="text-[11px] font-mono text-[#70706C] dark:text-[#A5A39D] mt-0.5">
                    Status Aktivitas
                  </div>
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
                    className="p-5 rounded-lg border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19] hover:border-[#171717] dark:hover:border-[#F2F0EA] transition-colors flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 pb-2 border-b border-[#DEDDD7]/50 dark:border-[#30302D]/50">
                        <h4 className="font-mono text-xs font-bold text-[#171717] dark:text-[#F2F0EA] group-hover:text-[#285B4A] dark:group-hover:text-[#4E9A7E] transition-colors truncate">
                          {repo.name}
                        </h4>
                        <ExternalLink className="w-3 h-3 text-[#70706C] dark:text-[#A5A39D] group-hover:text-[#171717] dark:group-hover:text-[#F2F0EA] shrink-0" />
                      </div>

                      <p className="mt-2.5 text-xs text-[#70706C] dark:text-[#A5A39D] line-clamp-2 leading-relaxed">
                        {repo.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-[#DEDDD7]/40 dark:border-[#30302D]/40 flex items-center justify-between text-[11px] font-mono text-[#70706C] dark:text-[#A5A39D]">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#285B4A] dark:bg-[#4E9A7E]" />
                        <span>{repo.language}</span>
                      </span>

                      <div className="flex items-center gap-2.5">
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-[#70706C] dark:text-[#A5A39D]" />
                          <span>{repo.stars}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3 h-3 text-[#70706C] dark:text-[#A5A39D]" />
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
