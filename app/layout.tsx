import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { profileData } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://website-sekolah-sd.vercel.app";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KOMARUDIN | Full-Stack Developer — Portofolio Profesional",
    template: "%s | KOMARUDIN — Full-Stack Developer",
  },
  description:
    "Portofolio profesional KOMARUDIN (Palmaar) - Full-Stack Developer yang membangun aplikasi web modern, responsif, dan scalable dengan Next.js, TypeScript, React, Node.js, dan PostgreSQL.",
  keywords: [
    "KOMARUDIN",
    "Palmaar",
    "Full-Stack Developer",
    "Next.js Developer Indonesia",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "Web Developer Indonesia",
    "Portofolio Programmer",
  ],
  authors: [{ name: "KOMARUDIN", url: profileData.github }],
  creator: "KOMARUDIN",
  publisher: "KOMARUDIN",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KOMARUDIN | Full-Stack Developer — Portofolio Profesional",
    description: "Building Digital Experiences from Frontend to Backend. Jelajahi proyek nyata dan kapabilitas rekayasa web.",
    url: siteUrl,
    siteName: "Portofolio KOMARUDIN",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/projects/project-sekolah.svg",
        width: 1200,
        height: 630,
        alt: "KOMARUDIN Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KOMARUDIN | Full-Stack Developer",
    description: "Building Digital Experiences from Frontend to Backend.",
    images: ["/images/projects/project-sekolah.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    jobTitle: profileData.role,
    alternateName: profileData.username,
    url: siteUrl,
    sameAs: [profileData.github, profileData.instagram, profileData.website],
    email: profileData.email,
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
      "RESTful API",
      "Full-Stack Web Development",
    ],
  };

  return (
    <html lang="id" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 antialiased selection:bg-sky-500 selection:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
