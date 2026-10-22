"use client";

import * as React from "react";
import confetti from "canvas-confetti";
import { profileData } from "@/data/profile";
import {
  Send,
  Copy,
  Check,
  Globe,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Loader2,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, InstagramIcon } from "@/components/icons";

export function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    _honeypot: "",
  });

  const [formErrors, setFormErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitResult, setSubmitResult] = React.useState<{
    type: "success" | "error";
    message: string;
    mailtoLink?: string;
  } | null>(null);

  const [copiedEmail, setCopiedEmail] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = "Nama wajib diisi minimal 2 karakter.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Alamat email tidak valid.";
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errors.subject = "Subjek wajib diisi minimal 3 karakter.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = "Pesan wajib diisi minimal 10 karakter.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitResult(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Gagal mengirim pesan.");
      }

      setSubmitResult({
        type: "success",
        message: data.message,
        mailtoLink: data.mailtoLink,
      });

      // Launch celebratory confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#38bdf8", "#818cf8", "#10b981"],
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        _honeypot: "",
      });
      setFormErrors({});
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.";
      setSubmitResult({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kontak & Kolaborasi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Punya Ide Menarik? Mari Kita Bangun Bersama.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Apakah Anda memiliki proyek baru, tawaran kerja, pertanyaan teknis, atau sekadar ingin
            berdiskusi seputar web development? Silakan kirimkan pesan Anda melalui formulir di bawah ini.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Informasi Kontak Langsung
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Saya selalu terbuka untuk mendiskusikan peluang proyek baru, kolaborasi rekayasa
                perangkat lunak, atau pertukaran wawasan teknologi.
              </p>

              {/* Copy Email Widget */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                  Email Resmi
                </span>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-slate-900 dark:text-white break-all">
                    {profileData.email}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors shadow-xs shrink-0"
                    title="Salin alamat email"
                    aria-label="Salin email ke clipboard"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                    ✓ Alamat email disalin ke clipboard!
                  </p>
                )}
              </div>

              {/* Status & Availability Card */}
              <div className="p-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{profileData.status.label}</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  Tersedia untuk proyek full-stack, konsultasi frontend/backend, dan freelance.
                </p>
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  Kanal Profesional Lainnya
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-sky-500 hover:bg-white dark:hover:bg-slate-800/80 transition-all text-xs text-slate-700 dark:text-slate-300"
                  >
                    <div className="flex items-center gap-2.5">
                      <GithubIcon className="w-4 h-4 text-slate-900 dark:text-white" />
                      <span className="font-semibold">GitHub Profile</span>
                    </div>
                    <span className="text-slate-400">@{profileData.username}</span>
                  </a>

                  <a
                    href={profileData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-pink-500 hover:bg-white dark:hover:bg-slate-800/80 transition-all text-xs text-slate-700 dark:text-slate-300"
                  >
                    <div className="flex items-center gap-2.5">
                      <InstagramIcon className="w-4 h-4 text-pink-500" />
                      <span className="font-semibold">Instagram</span>
                    </div>
                    <span className="text-slate-400">@komaaarrr._</span>
                  </a>

                  <a
                    href={profileData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-sky-500 hover:bg-white dark:hover:bg-slate-800/80 transition-all text-xs text-slate-700 dark:text-slate-300"
                  >
                    <div className="flex items-center gap-2.5">
                      <Globe className="w-4 h-4 text-sky-500" />
                      <span className="font-semibold">Website Proyek SD</span>
                    </div>
                    <span className="text-slate-400">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Honeypot field for anti-spam */}
                <input
                  type="text"
                  name="_honeypot"
                  value={formData._honeypot}
                  onChange={(e) => setFormData({ ...formData, _honeypot: e.target.value })}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (formErrors.name) setFormErrors({ ...formErrors, name: "" });
                      }}
                      placeholder="Masukkan nama Anda"
                      className={`w-full px-4 py-2.5 rounded-xl text-xs border ${
                        formErrors.name
                          ? "border-red-500 focus:ring-red-500"
                          : "border-slate-200 dark:border-slate-800 focus:ring-sky-500"
                      } bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all`}
                    />
                    {formErrors.name && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Alamat Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (formErrors.email) setFormErrors({ ...formErrors, email: "" });
                      }}
                      placeholder="email@contoh.com"
                      className={`w-full px-4 py-2.5 rounded-xl text-xs border ${
                        formErrors.email
                          ? "border-red-500 focus:ring-red-500"
                          : "border-slate-200 dark:border-slate-800 focus:ring-sky-500"
                      } bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all`}
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Subjek Diskusi <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (formErrors.subject) setFormErrors({ ...formErrors, subject: "" });
                    }}
                    placeholder="Contoh: Tawaran Proyek Website Sekolah / Kerja Sama"
                    className={`w-full px-4 py-2.5 rounded-xl text-xs border ${
                      formErrors.subject
                        ? "border-red-500 focus:ring-red-500"
                        : "border-slate-200 dark:border-slate-800 focus:ring-sky-500"
                    } bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all`}
                  />
                  {formErrors.subject && (
                    <p className="text-[11px] text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{formErrors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Isi Pesan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (formErrors.message) setFormErrors({ ...formErrors, message: "" });
                    }}
                    placeholder="Ceritakan detail proyek, spesifikasi fitur, atau pertanyaan Anda..."
                    className={`w-full px-4 py-2.5 rounded-xl text-xs border ${
                      formErrors.message
                        ? "border-red-500 focus:ring-red-500"
                        : "border-slate-200 dark:border-slate-800 focus:ring-sky-500"
                    } bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all resize-y`}
                  />
                  {formErrors.message && (
                    <p className="text-[11px] text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{formErrors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Feedback Notification */}
                {submitResult && (
                  <div
                    className={`p-4 rounded-2xl border text-xs space-y-2 animate-fade-in ${
                      submitResult.type === "success"
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-800 dark:text-emerald-300"
                        : "bg-red-500/10 border-red-500/30 text-red-800 dark:text-red-300"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {submitResult.type === "success" ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      )}
                      <span>{submitResult.message}</span>
                    </div>

                    {submitResult.mailtoLink && (
                      <div className="pt-2 border-t border-emerald-500/20 flex items-center justify-between">
                        <span className="text-[11px]">Buka di aplikasi email Anda:</span>
                        <a
                          href={submitResult.mailtoLink}
                          className="inline-flex items-center gap-1 font-bold underline hover:text-emerald-900 dark:hover:text-emerald-200"
                        >
                          <span>Kirim via Email Client</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl text-xs font-semibold bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 disabled:opacity-60 text-white shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Mengirim Pesan...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Kirim Pesan Sekarang</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
