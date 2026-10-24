"use client";

import * as React from "react";
import { profileData, quickStats } from "@/data/profile";
import { Check, ArrowRight } from "lucide-react";

export function AboutSection() {
  const engineeringPrinciples = [
    {
      title: "Antarmuka Responsif & Aksesibel",
      desc: "Mengembangkan UI dengan struktur semantik HTML5, aksesibilitas keyboard (a11y), dan rendering cepat berbasis React Server Components.",
    },
    {
      title: "Arsitektur API & Validasi Ketat",
      desc: "Menyusun kontrak REST API yang konsisten, penanganan error terpusat, middleware otorisasi JWT, serta sanitasi input untuk mencegah celah keamanan.",
    },
    {
      title: "Integritas Basis Data Relasional",
      desc: "Merancang skema tabel terstruktur, relasi multi-tabel, index efisien, dan transaksi ACID menggunakan PostgreSQL dan Supabase.",
    },
    {
      title: "Pragmatisme Rekayasa Perangkat Lunak",
      desc: "Mengutamakan solusi yang menyelesaikan kendala riil pengguna dengan kode yang modular, mudah dibaca, dan mudah dipelihara dalam jangka panjang.",
    },
  ];

  return (
    <section
      id="about"
      aria-label="Tentang Developer"
      className="py-20 sm:py-28 border-b border-[#DEDDD7] dark:border-[#30302D]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#DEDDD7] dark:border-[#30302D] gap-4">
          <div>
            <span className="font-mono text-xs text-[#285B4A] dark:text-[#4E9A7E] uppercase font-bold tracking-wider">
              02 / PROFILE & APPROACH
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#171717] dark:text-[#F2F0EA] mt-1">
              Pendekatan Rekayasa & Karakter Profesional
            </h2>
          </div>
          <p className="text-xs font-mono text-[#70706C] dark:text-[#A5A39D] max-w-xs">
            Prinsip pengembangan perangkat lunak berbasis ketelitian, efisiensi, dan kualitas kode.
          </p>
        </div>

        {/* Content Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Narrative & Bio */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-[#171717] dark:text-[#F2F0EA] font-medium leading-relaxed">
                {profileData.aboutIntro}
              </p>

              <div className="space-y-3 pt-2 text-sm text-[#70706C] dark:text-[#A5A39D] leading-relaxed">
                {profileData.aboutDetails.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Principles Checklist */}
            <div className="pt-6 border-t border-[#DEDDD7] dark:border-[#30302D] space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#171717] dark:text-[#F2F0EA] font-bold">
                Prinsip Engineering:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {engineeringPrinciples.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19] space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#285B4A]/10 dark:bg-[#4E9A7E]/10 text-[#285B4A] dark:text-[#4E9A7E] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <h4 className="text-xs font-bold text-[#171717] dark:text-[#F2F0EA]">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#70706C] dark:text-[#A5A39D] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Technical Matrix & Quick Stats */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Stats Grid */}
            <div className="p-6 rounded-lg border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19] space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#171717] dark:text-[#F2F0EA] font-bold pb-3 border-b border-[#DEDDD7] dark:border-[#30302D]">
                Informasi Ringkas Kapabilitas
              </h3>

              <dl className="space-y-3.5 text-xs">
                {quickStats.map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-4">
                    <dt className="font-mono text-[#70706C] dark:text-[#A5A39D]">
                      {stat.label}
                    </dt>
                    <dd className="font-bold text-[#171717] dark:text-[#F2F0EA] text-right">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Engineering Environment Card */}
            <div className="p-6 rounded-lg border border-[#DEDDD7] dark:border-[#30302D] bg-[#EFEFEA] dark:bg-[#1C1C1B] space-y-3 text-xs">
              <span className="font-mono text-[10px] uppercase text-[#285B4A] dark:text-[#4E9A7E] font-bold tracking-wider">
                LINGKUNGAN & ALUR KERJA
              </span>
              <p className="text-[#171717] dark:text-[#F2F0EA] font-medium leading-relaxed">
                Menggunakan alur kerja modern berbasis Git version control, tinjauan komit terstruktur, automated linting ESLint, static typing TypeScript ketat, dan pipeline deployment Vercel.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#285B4A] dark:text-[#4E9A7E] hover:underline"
                >
                  <span>Mulai Diskusi Proyek</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
