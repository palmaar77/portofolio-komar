# Portofolio Profesional — KOMARUDIN (Palmaar)
### Full-Stack Developer Personal Portfolio Website

Website portofolio pribadi modern, responsif, berkecepatan tinggi, dan teroptimasi SEO yang dirancang untuk merepresentasikan kompetensi rekayasa perangkat lunak dari sisi frontend hingga backend.

![Portofolio Preview](/images/projects/project-sekolah.svg)

---

## 🌟 Identitas & Personal Branding

- **Nama**: KOMARUDIN
- **Profesi**: Full-Stack Developer
- **Username GitHub**: [palmaar77](https://github.com/palmaar77)
- **Instagram**: [@komaaarrr._](https://www.instagram.com/komaaarrr._?cplk=MTFvNWhxOXBwMTEwOQ==)
- **Email Resmi**: [komarbee87@gmail.com](mailto:komarbee87@gmail.com)
- **Lokasi**: Indonesia
- **Live Proyek Unggulan**: [website-sekolah-sd.vercel.app](https://website-sekolah-sd.vercel.app)
- **Status Kerja**: *Open to Opportunities* (Tersedia untuk proyek & kolaborasi)

---

## 🛠️ Tech Stack & Arsitektur

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Server Components & Route Handlers)
- **Bahasa**: [TypeScript 5](https://www.typescriptlang.org/) (Type Safety & Interfaces)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) dengan Dark & Light Mode tokens
- **Tema & State**: [next-themes](https://github.com/pacocoursey/next-themes) (Persistensi preferensi tema lokal)
- **Ikon**: [Lucide React](https://lucide.dev/)
- **Efek Interaktif**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Database Ready**: Schema & integrasi siap pakai untuk PostgreSQL / Supabase
- **Platform Deployment**: [Vercel](https://vercel.com/)

---

## 📂 Struktur Proyek

```text
portofolio-komar/
├── app/
│   ├── api/
│   │   ├── contact/route.ts      # Server-side contact handler + anti-spam honeypot
│   │   └── github/route.ts       # GitHub API sync + caching & fallback
│   ├── globals.css               # Desain tokens, tema, & glassmorphism
│   ├── layout.tsx                # Metadata SEO, OpenGraph, JSON-LD Schema, Fonts
│   ├── not-found.tsx             # Halaman 404 khusus estetika modern
│   ├── page.tsx                  # Home layout yang merangkum seluruh section
│   ├── robots.ts                 # File SEO robots.txt dinamis
│   └── sitemap.ts                # File SEO sitemap.xml dinamis
├── components/
│   ├── layout/
│   │   ├── navbar.tsx            # Sticky navbar dengan glassmorphism & mobile drawer
│   │   └── footer.tsx            # Footer interaktif & tombol kembali ke atas
│   ├── sections/
│   │   ├── hero.tsx              # Hero banner + terminal kode interaktif
│   │   ├── about.tsx             # Ringkasan personal, pilar keahlian & quick stats
│   │   ├── skills.tsx            # Grid tech stack terorganisir per kategori
│   │   ├── projects.tsx          # Galeri proyek dengan filter kategori, search & modal
│   │   ├── experience.tsx        # Timeline Learning Journey & Pendidikan
│   │   ├── github-activity.tsx   # Profil GitHub, repository cards & stats
│   │   └── contact.tsx           # Formulir kontak tervalidasi + copy email
│   ├── theme-provider.tsx        # Provider tema client
│   └── theme-toggle.tsx          # Tombol switch dark/light mode
├── data/
│   ├── profile.ts                # Data identitas, bio, & status kerja
│   ├── skills.ts                 # Data kategori & daftar kemampuan teknis
│   ├── projects.ts               # Data proyek, live link, fitur & deskripsi solusi
│   └── experience.ts             # Data timeline proses belajar & pendidikan
├── lib/
│   └── utils.ts                  # Helper utility styling (clsx + tailwind-merge)
├── public/
│   ├── cv-komarudin.pdf          # Berkas CV asli siap unduh
│   └── images/
│       └── projects/             # Mockup visual proyek format vektor SVG
├── scripts/
│   └── generate-cv.js            # Generator otomatis berkas CV PDF
├── .env.example                  # Template variabel lingkungan
├── package.json
└── tsconfig.json
```

---

## 🚀 Panduan Menjalankan Secara Lokal

### 1. Prasyarat
Pastikan komputer Anda telah terinstal:
- **Node.js** versi 18 ke atas (disarankan Node.js 20 atau 24 LTS)
- **npm** (atau package manager pilihan Anda seperti pnpm / yarn)

### 2. Instalasi Dependensi
Jalankan perintah berikut di terminal:
```bash
npm install
```

### 3. Konfigurasi Environment Variables
Salin file `.env.example` menjadi `.env.local`:
```bash
cp .env.example .env.local
```
*Catatan: Portofolio sudah dirancang berfungsi 100% tanpa konfigurasi API eksternal apa pun.*

### 4. Menjalankan Server Development
```bash
npm run dev
```
Buka peramban di [http://localhost:3000](http://localhost:3000).

### 5. Membangun Bundle Produksi (Build Test)
```bash
npm run build
npm run start
```

---

## ✏️ Cara Memperbarui Konten Portofolio

Semua informasi tersimpan secara terstruktur dalam folder `data/` sehingga Anda tidak perlu mengubah kode tampilan:

1. **Informasi Pribadi & Kontak**: Edit file `data/profile.ts`.
2. **Koleksi Proyek**: Tambah atau ubah item pada file `data/projects.ts`.
3. **Keahlian & Tech Stack**: Edit file `data/skills.ts`.
4. **Timeline Belajar & Pendidikan**: Ubah file `data/experience.ts`.
5. **Berkas CV**: Ganti file `public/cv-komarudin.pdf` dengan berkas CV terbaru Anda.

---

## ☁️ Panduan Deployment ke Vercel

1. **Push ke GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete professional portfolio for Komarudin"
   git branch -M main
   git remote add origin https://github.com/palmaar77/portofolio-komar.git
   git push -u origin main
   ```

2. **Hubungkan ke Vercel**:
   - Buka [vercel.com](https://vercel.com) dan login dengan akun GitHub Anda.
   - Klik **"Add New..."** > **"Project"**.
   - Pilih repository `portofolio-komar`.
   - Pada pengaturan Framework Preset, pilih **Next.js** (otomatis terdeteksi).
   - Klik tombol **"Deploy"**.

3. **Domain Kustom (Opsional)**:
   - Setelah deployment berhasil, Anda dapat menghubungkan domain pribadi pada tab *Settings > Domains* di dashboard Vercel.

---

## 📄 Lisensi
Hak Cipta © 2024–2026 **KOMARUDIN**. Seluruh hak dilindungi.
Bebas digunakan dan dikembangkan untuk keperluan personal branding Anda.
