import { ProjectItem } from "@/types/portfolio";

export const projectCategories = [
  { id: "all", label: "Semua Proyek" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & API" },
  { id: "webapp", label: "Web App" },
] as const;

export const projectsData: ProjectItem[] = [
  {
    id: "website-sekolah-sd",
    title: "Website Profil & Informasi Sekolah Dasar",
    category: "fullstack",
    categoryLabel: "Full-Stack Web App",
    summary:
      "Platform informasi sekolah digital yang menyajikan profil institusi, kegiatan siswa, agenda akademik, galeri sekolah, dan portal pengumuman secara terintegrasi.",
    problemSolved:
      "Mengatasi keterbatasan penyebaran informasi sekolah ke wali murid dan masyarakat umum dengan portal digital yang responsif, cepat diakses dari ponsel, dan mudah di-update oleh pengelola sekolah.",
    features: [
      "Tampilan profil sekolah dan visi-misi interaktif",
      "Katalog kegiatan sekolah dan dokumentasi galeri foto",
      "Kalender akademik dan publikasi pengumuman real-time",
      "Formulir kontak & pendaftaran informasi siswa baru",
      "Optimasi SEO terstruktur dan mobile responsive",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://website-sekolah-sd.vercel.app",
    githubUrl: "https://github.com/palmaar77",
    image: "/images/projects/project-sekolah.svg",
    isFeatured: true,
    statusBadge: "Live Production",
  },
  {
    id: "sistem-pembayaran-spp",
    title: "Sistem Manajemen Pembayaran SPP Sekolah",
    category: "fullstack",
    categoryLabel: "Full-Stack System",
    summary:
      "Aplikasi web pengelolaan tagihan dan pencatatan pembayaran SPP sekolah dengan sistem rekapitulasi otomatis dan laporan keuangan yang transparan.",
    problemSolved:
      "Menggantikan pencatatan manual berbasis buku kas yang rentan salah hitung dan kehilangan data dengan sistem rekap data siswa, riwayat pembayaran, dan status tunggakan otomatis.",
    features: [
      "Manajemen data tagihan per tingkat kelas dan tahun ajaran",
      "Pencatatan transaksi kas masuk dengan cetak kuitansi digital",
      "Filter tunggakan siswa dan notifikasi status pembayaran",
      "Dashboard ringkasan pemasukan kas bulanan dan tahunan",
      "Autentikasi role petugas administrasi dan kepala sekolah",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Supabase"],
    liveUrl: "https://website-sekolah-sd.vercel.app",
    githubUrl: "https://github.com/palmaar77",
    image: "/images/projects/project-spp.svg",
    isFeatured: true,
    statusBadge: "Demo Project",
  },
  {
    id: "dashboard-admin-analytics",
    title: "Admin Dashboard & Metric Analytics",
    category: "webapp",
    categoryLabel: "Web App & Dashboard",
    summary:
      "Panel kontrol administrasi modern dengan visualisasi data interaktif, metrik performa real-time, manajemen pengguna, dan ringkasan aktivitas sistem.",
    problemSolved:
      "Menyediakan representasi data kompleks secara intuitif melalui grafik performa, statistik transaksi, dan tata kelola user yang terorganisir dalam satu antarmuka.",
    features: [
      "Visualisasi chart interaktif (penjualan, user aktif, metrik server)",
      "Tabel data dinamis dengan sortir, pencarian, dan pagination",
      "Dark mode dan light mode dengan palet warna terstandar",
      "Manajemen perizinan hak akses pengguna (RBAC)",
      "Export data laporan ke format CSV dan PDF",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Node.js"],
    liveUrl: "https://website-sekolah-sd.vercel.app",
    githubUrl: "https://github.com/palmaar77",
    image: "/images/projects/project-dashboard.svg",
    isFeatured: true,
    statusBadge: "Demo Project",
  },
  {
    id: "task-management-app",
    title: "Agile Task & Project Management App",
    category: "frontend",
    categoryLabel: "Productivity Web App",
    summary:
      "Aplikasi manajemen tugas berbasis papan Kanban dengan fitur drag-and-drop, label prioritas, tenggat waktu, dan pelacakan progress proyek tim.",
    problemSolved:
      "Membantu individu dan tim kecil mengorganisir alur kerja tugas harian agar terhindar dari bottleneck dan deadline terlewat tanpa perlu tool yang terlalu rumit.",
    features: [
      "Papan Kanban interaktif dengan drag-and-drop status",
      "Kustomisasi label kategori, tingkat prioritas, dan tanggal jatuh tempo",
      "Sistem checklist subtugas dengan progress bar dinamis",
      "Penyimpanan lokal cepat dengan sinkronisasi cloud",
      "Filter pencarian tugas instan berdasarkan status atau tag",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion"],
    liveUrl: "https://website-sekolah-sd.vercel.app",
    githubUrl: "https://github.com/palmaar77",
    image: "/images/projects/project-tasks.svg",
    isFeatured: false,
    statusBadge: "Demo Project",
  },
  {
    id: "rest-api-service",
    title: "RESTful API Service Architecture",
    category: "backend",
    categoryLabel: "Backend & API Service",
    summary:
      "Layanan backend RESTful API arsitektur berlapis (controller-service-repository) dengan autentikasi JWT, validasi skema request, dan rate limiting terintegrasi.",
    problemSolved:
      "Menyediakan fondasi backend yang aman, terstandarisasi, dan mudah di-scale untuk melayani aplikasi web dan mobile dengan dokumentasi endpoint yang jelas.",
    features: [
      "Autentikasi JWT dengan refresh token dan proteksi route",
      "Validasi data payload ketat menggunakan Zod & sanitasi input",
      "Middleware penanganan error terpusat dan logging aktivitas",
      "Rate limiter bawaan untuk perlindungan terhadap brute force & DDoS",
      "Dokumentasi spesifikasi API standar OpenAPI / Swagger",
    ],
    technologies: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "Docker"],
    liveUrl: "https://website-sekolah-sd.vercel.app",
    githubUrl: "https://github.com/palmaar77",
    image: "/images/projects/project-api.svg",
    isFeatured: false,
    statusBadge: "Case Study",
  },
];
