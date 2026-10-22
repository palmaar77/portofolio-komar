import { NextResponse } from "next/server";
import { GitHubStats } from "@/types/portfolio";


const FALLBACK_DATA: GitHubStats = {
  username: "palmaar77",
  publicRepos: 8,
  followers: 5,
  following: 12,
  avatarUrl: "https://avatars.githubusercontent.com/u/palmaar77",
  profileUrl: "https://github.com/palmaar77",
  bio: "Full-Stack Developer passionate about Next.js, TypeScript, and modern web architectures.",
  topRepos: [
    {
      name: "website-sekolah-sd",
      description: "Website profil dan informasi sekolah dasar responsif dengan Next.js dan Tailwind CSS.",
      url: "https://github.com/palmaar77",
      stars: 12,
      forks: 3,
      language: "TypeScript",
    },
    {
      name: "spp-management-system",
      description: "Sistem pencatatan tagihan dan rekapitulasi pembayaran SPP siswa berbasis Next.js & Supabase.",
      url: "https://github.com/palmaar77",
      stars: 8,
      forks: 2,
      language: "TypeScript",
    },
    {
      name: "admin-analytics-dashboard",
      description: "Interactive analytics dashboard for system monitoring, user metrics and chart reporting.",
      url: "https://github.com/palmaar77",
      stars: 6,
      forks: 1,
      language: "JavaScript",
    },
    {
      name: "agile-task-kanban",
      description: "Lightweight drag-and-drop task management application with state persistence.",
      url: "https://github.com/palmaar77",
      stars: 5,
      forks: 1,
      language: "TypeScript",
    },
    {
      name: "rest-api-clean-architecture",
      description: "Production-ready Node.js REST API with JWT authentication, role guards and PostgreSQL integration.",
      url: "https://github.com/palmaar77",
      stars: 7,
      forks: 2,
      language: "TypeScript",
    },
    {
      name: "portfolio-komarudin",
      description: "Source code of personal full-stack developer portfolio built with Next.js 16 and Tailwind CSS 4.",
      url: "https://github.com/palmaar77",
      stars: 9,
      forks: 2,
      language: "TypeScript",
    },
  ],
};

export async function GET() {
  const username = "palmaar77";

  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Portfolio-App",
      },
      next: { revalidate: 3600 },
    });

    if (!userRes.ok) {
      console.warn(`GitHub API user response status: ${userRes.status}. Using fallback data.`);
      return NextResponse.json({ source: "fallback", data: FALLBACK_DATA });
    }

    const userData = await userRes.json();

    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "Portfolio-App",
        },
        next: { revalidate: 3600 },
      }
    );

    let topRepos = FALLBACK_DATA.topRepos;

    interface GitHubRepoItemApi {
      name?: string;
      description?: string;
      html_url?: string;
      stargazers_count?: number;
      forks_count?: number;
      language?: string;
    }

    if (reposRes.ok) {
      const reposData = await reposRes.json();
      if (Array.isArray(reposData) && reposData.length > 0) {
        topRepos = (reposData as GitHubRepoItemApi[]).map((repo) => ({
          name: repo.name || "repository",
          description: repo.description || "Open source project repository.",
          url: repo.html_url || `https://github.com/${username}`,
          stars: repo.stargazers_count || 0,
          forks: repo.forks_count || 0,
          language: repo.language || "TypeScript",
        }));
      }
    }

    const githubStats: GitHubStats = {
      username: userData.login || username,
      publicRepos: userData.public_repos ?? FALLBACK_DATA.publicRepos,
      followers: userData.followers ?? FALLBACK_DATA.followers,
      following: userData.following ?? FALLBACK_DATA.following,
      avatarUrl: userData.avatar_url || FALLBACK_DATA.avatarUrl,
      profileUrl: userData.html_url || `https://github.com/${username}`,
      bio: userData.bio || FALLBACK_DATA.bio,
      topRepos,
    };

    return NextResponse.json({ source: "live", data: githubStats });
  } catch (error) {
    console.error("Error fetching GitHub activity:", error);
    return NextResponse.json({ source: "fallback", data: FALLBACK_DATA });
  }
}
