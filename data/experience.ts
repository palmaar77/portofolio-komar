import { TimelineItem } from "@/types/portfolio";

export const learningJourneyData: TimelineItem[] = [
  {
    id: "journey-fullstack",
    period: "2024 — Sekarang",
    title: "Eksplorasi Ekosistem Full-Stack Modern",
    institutionOrRole: "Next.js, TypeScript & Arsitektur Serverless",
    category: "journey",
    description:
      "Mendalami pengembangan aplikasi web modern dengan Next.js App Router, integrasi backend API routes, optimasi SEO, dan manajemen database cloud seperti Supabase & PostgreSQL.",
    highlights: [
      "Membangun website profil dan informasi sekolah (website-sekolah-sd.vercel.app)",
      "Menerapkan prinsip clean architecture dan pemisahan concerns antarkomponen",
      "Mengeksplorasi optimasi performa web (Core Web Vitals) dan aksesibilitas",
    ],
    isCurrent: true,
  },
  {
    id: "journey-backend",
    period: "2023 — 2024",
    title: "Pengembangan REST API & Dasar Backend",
    institutionOrRole: "Node.js, Express & Database Relasional",
    category: "journey",
    description:
      "Mempelajari arsitektur backend, penanganan request HTTP, autentikasi berbasis JWT, serta perancangan skema database MySQL dan PostgreSQL yang terstruktur.",
    highlights: [
      "Perancangan API RESTful dengan dokumentasi endpoint terstandarisasi",
      "Penerapan middleware autentikasi dan otorisasi pengguna",
      "Pemahaman konsep ACID dan query relasional multi-tabel",
    ],
    isCurrent: false,
  },
  {
    id: "journey-frontend",
    period: "2022 — 2023",
    title: "Fondasi Frontend Web Development",
    institutionOrRole: "HTML5, CSS3, JavaScript Modern & React",
    category: "journey",
    description:
      "Membangun fondasi logika pemrograman web, manipulasi DOM, pemahaman asinkron (Promise, async/await), dan styling responsif menggunakan Tailwind CSS.",
    highlights: [
      "Pembuatan komponen UI reaktif berbasis React Hooks",
      "Implementasi tata letak responsif untuk berbagai ukuran layar",
      "Praktik version control menggunakan Git dan repository GitHub",
    ],
    isCurrent: false,
  },
];

export const educationAndTrainingData: TimelineItem[] = [
  {
    id: "edu-formal",
    period: "Pendidikan Formal",
    title: "Pendidikan Formal (Placeholder / Dapat Disesuaikan)",
    institutionOrRole: "Nama Institusi / Universitas / Sekolah",
    category: "education",
    description:
      "Placeholder riwayat pendidikan formal. Anda dapat mengedit nama sekolah/universitas, jurusan, dan tahun kelulusan pada file data/experience.ts.",
    highlights: [
      "Jurusan / Bidang Keahlian: Rekayasa Perangkat Lunak / Ilmu Komputer / Terkait",
      "Fokus studi: Logika pemrograman, struktur data, dan rekayasa web",
    ],
    isCurrent: false,
  },
  {
    id: "edu-certification",
    period: "Pelatihan & Kursus Online",
    title: "Pelatihan Mandiri & Kursus Pengembangan Web (Placeholder)",
    institutionOrRole: "Platform Belajar Mandiri & Dokumentasi Resmi",
    category: "education",
    description:
      "Pembelajaran intensif berbasis proyek (project-based learning) dengan mengacu pada dokumentasi resmi Next.js, React, TypeScript, dan MDN Web Docs.",
    highlights: [
      "Studi dokumentasi resmi Next.js App Router & React 19",
      "Best practices keamanan web dan manajemen state",
    ],
    isCurrent: false,
  },
];
