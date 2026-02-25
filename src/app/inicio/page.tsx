"use client";

import Image from "next/image";
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
    <main className="relative min-h-screen text-slate-900 overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/hero-1.png"
          alt="Paisaje de Oxapampa"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/20 to-white/50" aria-hidden />
      </div>

      <div className="relative z-10 flex flex-col gap-16">
        <HeroSection />

        <OregonWaySection />

        <section className="bg-white/60 py-18">
          <div className="container mx-auto px-4 py-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-green-950 mb-3">
                Lo que dicen en Instagram
              </h2>
              <p className="text-black max-w-2xl mx-auto text-base md:text-lg">
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
          </div>
        </section>

        <section className="px-4 pb-4">
          <div className="container mx-auto">
            <div className="rounded-3xl border border-emerald-100 bg-white/50  p-8 md:p-10 shadow-[0_10px_15px_-10px_rgba(6,95,70,0.6)] text-center">
              <p className="text-emerald-900/80 text-sm md:text-base font-medium tracking-wide uppercase mb-3">
                Nueva oportunidad en Oxapampa
              </p>
              <h3 className="text-2xl md:text-3xl font-poppins font-bold text-emerald-950 mb-4">
                Te interesan propiedades?
              </h3>
              <p className="text-emerald-900/90 max-w-2xl mx-auto text-base md:text-lg mb-7">
                Descubre lotes y espacios listos para invertir o vivir rodeado de naturaleza.
              </p>
              <a
                href="https://propiedadeslandhaus.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-7 py-3 text-white font-semibold transition hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
              >
                Ve a Goxa Propiedades
              </a>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
