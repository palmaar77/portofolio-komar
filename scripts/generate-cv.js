const fs = require('fs');
const path = require('path');

// Generate a valid, clean PDF document
function createMinimalPdf() {
  const content = `
BT
/F1 22 Tf
50 750 Td
(KOMARUDIN - Full-Stack Developer) Tj
ET

BT
/F2 10 Tf
50 730 Td
(Email: komarbee87@gmail.com | GitHub: github.com/palmaar77 | Lokasi: Indonesia) Tj
ET

BT
/F2 10 Tf
50 715 Td
(Website: https://website-sekolah-sd.vercel.app | Instagram: @komaaarrr._) Tj
ET

BT
/F1 14 Tf
50 680 Td
(RINGKASAN PROFESIONAL) Tj
ET

BT
/F2 10 Tf
50 660 Td
(Full-Stack Developer yang fokus pada pembangunan aplikasi web modern, responsif, dan scalable.) Tj
ET

BT
/F2 10 Tf
50 645 Td
(Berpengalaman dalam ekosistem React, Next.js, TypeScript di frontend, serta Node.js, Express,) Tj
ET

BT
/F2 10 Tf
50 630 Td
(dan PostgreSQL/Supabase di sisi backend dan database.) Tj
ET

BT
/F1 14 Tf
50 595 Td
(KEAHLIAN TEKNIS) Tj
ET

BT
/F2 10 Tf
50 575 Td
(- Frontend: Next.js (App Router), React, TypeScript, Tailwind CSS, JavaScript ES6+, HTML5, CSS3) Tj
ET

BT
/F2 10 Tf
50 560 Td
(- Backend: Node.js, Express.js, REST API Architecture, JWT Authentication, RBAC) Tj
ET

BT
/F2 10 Tf
50 545 Td
(- Database: PostgreSQL, MySQL, Supabase, Data Modeling & Relational Queries) Tj
ET

BT
/F2 10 Tf
50 530 Td
(- Tools & DevOps: Git, GitHub, Vercel, Docker, VS Code, Postman) Tj
ET

BT
/F1 14 Tf
50 495 Td
(PROYEK UNGGULAN) Tj
ET

BT
/F1 11 Tf
50 475 Td
(1. Website Profil & Informasi Sekolah Dasar (Live Production)) Tj
ET

BT
/F2 10 Tf
50 460 Td
(   URL: https://website-sekolah-sd.vercel.app | Tech: Next.js, React, TypeScript, Tailwind CSS) Tj
ET

BT
/F2 10 Tf
50 445 Td
(   Portal profil institusi sekolah dasar dengan agenda kegiatan, kalender akademik, dan PPDB.) Tj
ET

BT
/F1 11 Tf
50 415 Td
(2. Sistem Manajemen Pembayaran SPP Sekolah) Tj
ET

BT
/F2 10 Tf
50 400 Td
(   Tech: Next.js, TypeScript, PostgreSQL, Supabase, Tailwind CSS) Tj
ET

BT
/F2 10 Tf
50 385 Td
(   Aplikasi rekapitulasi pembayaran SPP siswa dengan kuitansi digital dan laporan tunggakan.) Tj
ET

BT
/F1 11 Tf
50 355 Td
(3. Admin Dashboard & Metric Analytics) Tj
ET

BT
/F2 10 Tf
50 340 Td
(   Tech: React, TypeScript, Tailwind CSS, Chart.js) Tj
ET

BT
/F2 10 Tf
50 325 Td
(   Panel monitoring metrik bisnis dan performa sistem dengan visualisasi data interaktif.) Tj
ET

BT
/F1 14 Tf
50 290 Td
(LEARNING JOURNEY & PENDIDIKAN) Tj
ET

BT
/F2 10 Tf
50 270 Td
(- 2024 - Sekarang: Eksplorasi Ekosistem Full-Stack Modern & Next.js App Router) Tj
ET

BT
/F2 10 Tf
50 255 Td
(- 2023 - 2024: Arsitektur RESTful API, Autentikasi JWT & Database Relasional) Tj
ET

BT
/F2 10 Tf
50 240 Td
(- 2022 - 2023: Pemrograman Dasar Web, JavaScript Modern & React Fundamental) Tj
ET

BT
/F2 9 Tf
50 190 Td
(Dokumen ini dapat diperbarui sewaktu-waktu sesuai riwayat pencapaian terbaru.) Tj
ET
`.trim();

  const streamLength = Buffer.byteLength(content, 'utf-8');

  let pdf = `%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 595 842]
  /Contents 4 0 R
  /Resources <<
    /Font <<
      /F1 5 0 R
      /F2 6 0 R
    >>
  >>
>>
endobj
4 0 obj
<<
  /Length ${streamLength}
>>
stream
${content}
endstream
endobj
5 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Bold
>>
endobj
6 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica
>>
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000266 00000 n 
0000002166 00000 n 
0000002245 00000 n 
trailer
<<
  /Size 7
  /Root 1 0 R
>>
startxref
2319
%%EOF
`;

  const outputPath = path.join(__dirname, '..', 'public', 'cv-komarudin.pdf');
  fs.writeFileSync(outputPath, pdf);
  console.log('Generated CV PDF successfully at:', outputPath);
}

createMinimalPdf();
