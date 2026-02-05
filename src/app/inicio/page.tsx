"use client";

import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/landing/hero-section";
import OregonWaySection from "@/components/landing/oregon-way-section";
import SiteFooter from "@/components/landing/site-footer";

const instagramComments = [
  { handle: "sofiacarreras1", text: "👏👏👏👏❤️💕 es excelente la miel que vendes!!! 😍😍" },
  { handle: "ruh.peru", text: "Son demasiado buenas, recomendación total!!" },
  { handle: "jackie_fuller_b", text: "Son espectaculares!!!" },
  { handle: "germanc00", text: "🔥🔥 buenazas recomendado" },
  { handle: "sandra.zarak", text: "Super ricas! Generosas, jugosas y de gran calidad" },
  { handle: "__robinsonc__", text: "Que tales burgers! 🔥 brutales" },
  { handle: "carlapenagos", text: "DELICIOSOOOO!! Super recomendado!" },
];

export default function InicioPage() {
  return (
    <main className="relative text-slate-900">
      <div className="absolute left-6 top-6">
        <div className="relative h-20 w-20 rounded-full border-2 border-white bg-white/80 p-2 shadow-lg">
          <Image src="/logo.png" alt="Logo GOXA" fill className="object-contain" />
        </div>
      </div>

      <div className="fixed inset-0 -z-10">
        <Image
          src="/hero-4.png"
          alt="Paisaje de Oxapampa"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90 backdrop-blur-[0.5px]"
          aria-hidden
        />
      </div>

      <div className="relative z-10">
        <HeroSection />
        <OregonWaySection />
        <section className="bg-gradient-to-b from-green-50 via-white to-green-50 py-18">
          <div className="container mx-auto px-4 py-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-green-950 mb-3">
                Lo que dicen en Instagram
              </h2>
              <p className="text-green-800/80 max-w-2xl mx-auto text-base md:text-lg">
                Comentarios reales de quienes prueban nuestros productos de Oxapampa.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {instagramComments.map((comment, index) => (
                <article
                  key={`${comment.handle}-${index}`}
                  className="bg-white border border-green-100 rounded-2xl p-6 shadow-[0_12px_30px_-20px_rgba(20,83,45,0.45)] transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-30px_rgba(20,83,45,0.45)]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs font-bold uppercase tracking-wide">
                      IG
                    </div>
                    <p className="text-green-950 font-semibold text-lg tracking-tight">
                      @{comment.handle}
                    </p>
                  </div>
                  <p className="text-green-900/90 text-sm leading-relaxed">{comment.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-10 py-3 text-base font-semibold text-green-950 shadow-lg border border-white/30 transition hover:bg-amber-300"
              >
                Comprar
              </Link>
            </div>
          </div>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
