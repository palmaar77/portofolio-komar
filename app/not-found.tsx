import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F7F6F2] dark:bg-[#141414] px-4 text-center editorial-grid">
      <div className="max-w-md w-full p-8 rounded-lg border border-[#DEDDD7] dark:border-[#30302D] bg-[#FFFFFF] dark:bg-[#1A1A19] space-y-5">
        <div className="font-mono text-xs text-[#285B4A] dark:text-[#4E9A7E] font-bold tracking-widest uppercase">
          ERROR 404 // ROUTE_NOT_FOUND
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#171717] dark:text-[#F2F0EA] tracking-tight">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-xs text-[#70706C] dark:text-[#A5A39D] leading-relaxed">
            Halaman yang Anda tuju mungkin telah dipindahkan, dinonaktifkan, atau alamat URL yang dimasukkan kurang tepat.
          </p>
        </div>

        <div className="pt-2 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-mono font-medium bg-[#171717] dark:bg-[#F2F0EA] text-[#F7F6F2] dark:text-[#141414] hover:bg-[#285B4A] dark:hover:bg-[#4E9A7E] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
