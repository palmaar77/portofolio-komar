"use client";

import * as React from "react";
import confetti from "canvas-confetti";
import { profileData } from "@/data/profile";
import {
  Send,
  Copy,
  Check,
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
      errors.name = "Nama lengkap wajib diisi minimal 2 karakter.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Format alamat email tidak valid.";
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errors.subject = "Subjek diskusi wajib diisi minimal 3 karakter.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = "Pesan diskusi wajib diisi minimal 10 karakter.";
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

      // Subtle celebration confetti
      confetti({
        particleCount: 50,
        spread: 45,
        origin: { y: 0.7 },
        colors: ["#285B4A", "#4E9A7E", "#171717"],
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
          : "Terjadi kesalahan saat memproses formulir. Silakan coba lagi.";
      setSubmitResult({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      aria-label="Kontak dan Diskusi"
      className="py-20 sm:py-28 border-b border-[#DEDDD7] dark:border-[#30302D]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#DEDDD7] dark:border-[#30302D] gap-4">
          <div>
            <span className="font-mono text-xs text-[#285B4A] dark:text-[#4E9A7E] uppercase font-bold tracking-wider">
              07 / INTAKE & CONTACT
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#171717] dark:text-[#F2F0EA] mt-1">
              Konsultasi & Diskusi Proyek
            </h2>
          </div>
          <p className="text-xs font-mono text-[#70706C] dark:text-[#A5A39D] max-w-xs">
            Saluran langsung untuk mendiskusikan implementasi proyek baru, kolaborasi, atau peluang kerja.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-lg border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19] space-y-5">
              <div>
                <span className="font-mono text-[10px] uppercase text-[#70706C] dark:text-[#A5A39D] tracking-wider">
                  KOMUNIKASI LANGSUNG
                </span>
                <h3 className="text-base font-bold text-[#171717] dark:text-[#F2F0EA] mt-0.5">
                  Surel Resmi & Ketersediaan
                </h3>
              </div>

              {/* Copy Email Box */}
              <div className="p-3.5 rounded border border-[#DEDDD7] dark:border-[#30302D] bg-[#F7F6F2] dark:bg-[#141414] space-y-1.5">
                <span className="font-mono text-[10px] text-[#70706C] dark:text-[#A5A39D] uppercase">
                  Alamat Email:
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-[#171717] dark:text-[#F2F0EA] break-all">
                    {profileData.email}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19] hover:border-[#171717] dark:hover:border-[#F2F0EA] text-[#171717] dark:text-[#F2F0EA] transition-colors shrink-0 cursor-pointer"
                    title="Salin email"
                    aria-label="Salin email ke clipboard"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-[#285B4A] dark:text-[#4E9A7E]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="text-[10px] font-mono text-[#285B4A] dark:text-[#4E9A7E]">
                    ✓ Disalin ke clipboard
                  </p>
                )}
              </div>

              {/* Availability Notice */}
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#285B4A] dark:bg-[#4E9A7E]" />
                <span className="text-[#285B4A] dark:text-[#4E9A7E] font-medium">
                  {profileData.status.label}
                </span>
                <span className="text-[#70706C] dark:text-[#A5A39D]">({profileData.location})</span>
              </div>

              {/* Social Channels List */}
              <div className="pt-4 border-t border-[#DEDDD7] dark:border-[#30302D] space-y-2">
                <span className="font-mono text-[10px] uppercase text-[#70706C] dark:text-[#A5A39D] block mb-1">
                  Kanal Digital Lainnya:
                </span>
                <div className="flex flex-col gap-2 text-xs font-mono">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded border border-[#DEDDD7] dark:border-[#30302D] hover:border-[#171717] dark:hover:border-[#F2F0EA] transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>github/{profileData.username}</span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-[#70706C]" />
                  </a>

                  <a
                    href={profileData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded border border-[#DEDDD7] dark:border-[#30302D] hover:border-[#171717] dark:hover:border-[#F2F0EA] transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <InstagramIcon className="w-3.5 h-3.5" />
                      <span>instagram/@komaaarrr._</span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-[#70706C]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-lg border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19]">
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Honeypot field for spam bots */}
                <input
                  type="text"
                  name="_honeypot"
                  value={formData._honeypot}
                  onChange={(e) => setFormData({ ...formData, _honeypot: e.target.value })}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono font-medium text-[#171717] dark:text-[#F2F0EA]"
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
                      placeholder="Nama Anda"
                      className={`w-full px-3 py-2 rounded text-xs border ${
                        formErrors.name
                          ? "border-red-500 focus-visible:ring-red-500"
                          : "border-[#DEDDD7] dark:border-[#30302D] focus-visible:ring-[#285B4A]"
                      } bg-[#F7F6F2] dark:bg-[#141414] text-[#171717] dark:text-[#F2F0EA] placeholder-[#70706C] dark:placeholder-[#A5A39D] focus-visible:outline-none focus-visible:ring-1 transition-colors`}
                    />
                    {formErrors.name && (
                      <p className="text-[10px] font-mono text-red-500 flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono font-medium text-[#171717] dark:text-[#F2F0EA]"
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
                      placeholder="email@domain.com"
                      className={`w-full px-3 py-2 rounded text-xs border ${
                        formErrors.email
                          ? "border-red-500 focus-visible:ring-red-500"
                          : "border-[#DEDDD7] dark:border-[#30302D] focus-visible:ring-[#285B4A]"
                      } bg-[#F7F6F2] dark:bg-[#141414] text-[#171717] dark:text-[#F2F0EA] placeholder-[#70706C] dark:placeholder-[#A5A39D] focus-visible:outline-none focus-visible:ring-1 transition-colors`}
                    />
                    {formErrors.email && (
                      <p className="text-[10px] font-mono text-red-500 flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono font-medium text-[#171717] dark:text-[#F2F0EA]"
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
                    placeholder="Contoh: Kebutuhan Website / Penawaran Kolaborasi"
                    className={`w-full px-3 py-2 rounded text-xs border ${
                      formErrors.subject
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "border-[#DEDDD7] dark:border-[#30302D] focus-visible:ring-[#285B4A]"
                    } bg-[#F7F6F2] dark:bg-[#141414] text-[#171717] dark:text-[#F2F0EA] placeholder-[#70706C] dark:placeholder-[#A5A39D] focus-visible:outline-none focus-visible:ring-1 transition-colors`}
                  />
                  {formErrors.subject && (
                    <p className="text-[10px] font-mono text-red-500 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3" />
                      <span>{formErrors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono font-medium text-[#171717] dark:text-[#F2F0EA]"
                  >
                    Pesan Detail <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (formErrors.message) setFormErrors({ ...formErrors, message: "" });
                    }}
                    placeholder="Jelaskan kebutuhan proyek, jadwal pengerjaan, atau pertanyaan Anda..."
                    className={`w-full px-3 py-2 rounded text-xs border ${
                      formErrors.message
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "border-[#DEDDD7] dark:border-[#30302D] focus-visible:ring-[#285B4A]"
                    } bg-[#F7F6F2] dark:bg-[#141414] text-[#171717] dark:text-[#F2F0EA] placeholder-[#70706C] dark:placeholder-[#A5A39D] focus-visible:outline-none focus-visible:ring-1 transition-colors resize-y`}
                  />
                  {formErrors.message && (
                    <p className="text-[10px] font-mono text-red-500 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3" />
                      <span>{formErrors.message}</span>
                    </p>
                  )}
                </div>

                {/* Notification Result Banner */}
                {submitResult && (
                  <div
                    className={`p-3.5 rounded text-xs font-mono space-y-1.5 ${
                      submitResult.type === "success"
                        ? "bg-[#285B4A]/10 text-[#285B4A] dark:text-[#4E9A7E] border border-[#285B4A]/20"
                        : "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {submitResult.type === "success" ? (
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      )}
                      <span>{submitResult.message}</span>
                    </div>

                    {submitResult.mailtoLink && (
                      <div className="pt-2 border-t border-[#285B4A]/20 flex items-center justify-between">
                        <span className="text-[11px]">Buka di aplikasi email lokal:</span>
                        <a
                          href={submitResult.mailtoLink}
                          className="font-bold underline inline-flex items-center gap-1"
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
                  className="w-full py-2.5 px-4 rounded text-xs font-mono font-medium bg-[#171717] dark:bg-[#F2F0EA] text-[#F7F6F2] dark:text-[#141414] hover:bg-[#285B4A] dark:hover:bg-[#4E9A7E] transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Memproses Pengiriman...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Kirim Pesan Diskusi</span>
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
