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

const navLinks = [
  { href: "/", label: "Productos" },
  { href: "/quienes-somos", label: "Quiénes somos" },
];

export default function InicioPage() {

  return (
    <main className="relative text-slate-900">


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
        <header className="absolute inset-x-0 top-0 z-20 flex justify-end px-4 py-4 sm:px-8">
          <nav className="flex items-center gap-4">
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-green-900 bg-white/80 px-4 py-2 rounded-full shadow-lg border border-white/60 backdrop-blur mb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full bg-gradient-to-br bg-emerald-800 text-white px-4 py-1.5 text-[0.65rem] font-semibold tracking-widest shadow-[0_10px_20px_-18px_rgba(6,78,59,0.9)] transition hover:bg-emerald-700 "
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>

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
       
          </div>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
