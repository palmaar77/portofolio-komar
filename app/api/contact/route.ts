import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message, _honeypot } = body;

    // 1. Anti-spam honeypot check
    if (_honeypot) {
      console.warn("Spam bot detected via honeypot field.");
      return NextResponse.json(
        { error: "Permintaan tidak valid (spam detected)." },
        { status: 400 }
      );
    }

    // 2. Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Nama minimal 2 karakter." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Format alamat email tidak valid." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      return NextResponse.json(
        { error: "Subjek minimal 3 karakter." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Pesan minimal 10 karakter." },
        { status: 400 }
      );
    }

    // Check if an email service provider API key is present in environment
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      // Integration with Resend Email API if key is provided
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: ["komarbee87@gmail.com"],
            subject: `[Portfolio Contact] ${subject} - ${name}`,
            text: `Nama: ${name}\nEmail: ${email}\nSubjek: ${subject}\n\nPesan:\n${message}`,
          }),
        });

        if (!resendRes.ok) {
          const errData = await resendRes.json();
          console.error("Resend API error:", errData);
          throw new Error("Gagal mengirim melalui Resend service.");
        }

        return NextResponse.json({
          success: true,
          deliveredVia: "email-service",
          message: "Pesan berhasil dikirim langsung ke email Komarudin!",
        });
      } catch (err) {
        console.error("Failed to deliver via Resend, falling back to recorded dispatch", err);
      }
    }

    // Safe simulated log dispatch when no RESEND_API_KEY is configured
    console.log("=== Pesan Kontak Baru Diterima ===");
    console.log(`Pengirim: ${name} <${email}>`);
    console.log(`Subjek  : ${subject}`);
    console.log(`Pesan   : ${message}`);
    console.log(`Waktu   : ${new Date().toISOString()}`);
    console.log("==================================");

    return NextResponse.json({
      success: true,
      deliveredVia: "simulated-dispatch",
      message:
        "Pesan Anda telah berhasil tervalidasi dan direkam. Anda juga dapat mengirim email langsung ke komarbee87@gmail.com.",
      mailtoLink: `mailto:komarbee87@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(`Halo Komarudin,\n\nNama saya: ${name}\nEmail: ${email}\n\n${message}`)}`,
    });
  } catch (error) {
    console.error("Contact API Server Error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan internal pada server. Silakan coba lagi." },
      { status: 500 }
    );
  }
}
