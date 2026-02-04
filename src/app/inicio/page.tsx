"use client";

import Link from "next/link";
import HeroSection from "@/components/landing/hero-section";
import OregonWaySection from "@/components/landing/oregon-way-section";
import SiteFooter from "@/components/landing/site-footer";
import { StickyWhatsAppButton } from "@/components/ui/whatsapp-button";

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
    <main className="bg-white text-slate-900">
      <HeroSection />

      <section className="border-b border-emerald-100 bg-emerald-50">
        <div className="container mx-auto px-4 py-10 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-green-700">Tienda & ecommerce</p>
          <h2 className="mt-2 text-3xl font-extrabold text-green-900">Todo listo para tu carrito</h2>
          <p className="mx-auto mt-3 max-w-3xl text-base text-green-900/80">
            Navega por productos premium y agrégalos al carrito en la tienda. También puedes
            hablar con nosotros por WhatsApp si necesitas soporte inmediato.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="rounded-full bg-emerald-900 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-emerald-800"
            >
              Ir al catálogo
            </Link>
            <Link
              href="/quienes-somos"
              className="rounded-full border border-emerald-900 px-6 py-3 text-base font-semibold text-emerald-900 transition hover:bg-emerald-100"
            >
              Ver historia y equipo
            </Link>
          </div>
        </div>
      </section>

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

      <StickyWhatsAppButton />

      <SiteFooter />
    </main>
  );
}
